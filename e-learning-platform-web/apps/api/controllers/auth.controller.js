const db = require("../models");
const isEmail = require("validator/lib/isEmail");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const response = require("../utils/func/response");
const crypto = require("crypto");
const {
  baseUrl_client,
  baseUrl_coach,
  baseUrl_admin,
} = require("../utils/constant/baseUrl");
const io = require("../server");
const getNextSequenceId = require("../utils/func/generateId");
const options = {
  auth: {
    api_key: process.env.SENDGRID_API_KEY,
  },
};
const mailer = nodemailer.createTransport(sendGridTransport(options));

// sign up function
exports.signup = async (req, res) => {
  if (!req.body) {
    res
      .status(401)
      .send({ message: "Post data cannot empty!", statusCode: 401 });
    return;
  }
  if (!isEmail(req.body.email))
    return res.status(401).send({ message: "Email is unvalid!" });
  if (req.body.password.length < 6)
    return res.status(401).send({ message: "password is atleast 6 digits" });

  const newUser = new User({
    coverFileName: req.body.coverFileName,
    name: req.body.username,
    userId: await getNextSequenceId(req.body.role),
    email: req.body.email.toLowerCase(),
    gender: req.body.gender,
    role: req.body.role,
    major: req.body.major,
    dateOfBirth: req.body.dateOfBirth,
    bank: req.body.bank,
    default_salary: req.body.default_salary,
    password: bcrypt.hashSync(req.body.password, 8),
    tels: req.body.tels,
    price_per_hour: req.body.price_per_hour,
  });

  try {
    const data = await db.user.findOne({ email: req.email });
    if (data) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Email is already exists" });
    }

    const user = await newUser.save();
    // Send message when user(3 roles) signup
    const href = "https://coach.sabaicode.com/";
    const mailOptions = {
      to: req.body.email,
      from: "sabaicode.dev@gmail.com",
      subject: "Hi there! here is your temporary password",
      text: "SabaiCode ",
      html: `Hey ${req.body.name}, your password : <h5 >${req.body.password}</h5>. <a href=${href}>go to login</a>
      <p>Do not share with others!</p>`,
    };

    mailer.sendMail(mailOptions, (err, info) => {
      if (err) return console.log(err);
      console.log({ statusCode: 200, message: info });
    });
    const chatModel = await db.chat.findOne({ user: user._id });
    if (!chatModel) {
      await db.chat({ user: user._id, chats: [] }).save();
    }

    // const coaches = await db.user.find({ role: "coach" });
    // io.emit("list-coaches", coaches);

    // const students = await db.user.find({ role: "user" });
    // io.emit("list-students", students);

    return res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    return response.errorResponse(res, 500, error);
  }
};

// sign in function
exports.signin = async (req, res) => {
  let user;
  if (!isEmail(req.body.email))
    return res.status(401).send({ message: "Email is unvalid!" });
  if (!req.body) {
    return response.errorResponse(
      res,
      400,
      undefined,
      "bad request: body is empty!"
    );
  }
  try {
    user = await User.findOne({
      email: req.body.email.toLowerCase(),
    }).select("+password");
    if (!user) return res.status(404).send({ message: "User is not founded." });

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        statusCode: 401,
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: Number(process.env.JWT_REFRESHEXPIRATION),
    });

    return response.successResponse(res, 200, {
      id: user._id,
      username: user.name,
      email: user.email,
      role: "ROLE_" + user.role.toUpperCase(),
      accessToken: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
// TODO : It should be change user password
exports.refreshToken = async (req, res) => {
  try {
    const { password, token } = req.body;

    if (!token) {
      return res.status(401).send("Unauthorized");
    }

    if (password.length < 6)
      return res.status(401).send("Password must be atleast 6 characters");

    const user = await User.findOne({ resetToken: token });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (Date.now() > user.expireToken) {
      return res.status(401).send("Token expired. Generate new one");
    }
    user.password = await bcrypt.hash(password, 10);

    user.resetToken = "";
    user.expireToken = undefined;

    await user.save();

    return res.status(200).send("Password updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
};
// check user exist and send email for reset password
exports.reset = async (req, res) => {
  try {
    const { email } = req.body;

    if (!isEmail(email)) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Invalid Email" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "User not found" });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.expireToken = Date.now() + 3600000;

    await user.save();
    let href;
    if (user.role == "user") {
      href = `${baseUrl_client}/reset/${token}`;
    } else if (user.role == "coach") {
      href = `${baseUrl_coach}/reset/${token}`;
    } else {
      href = `${baseUrl_admin}/reset/${token}`;
    }

    const mailOptions = {
      to: user.email,
      from: "sabaicode.dev@gmail.com",
      subject: "Hi there! Password reset request",
      text: "SabaiCode",
      html: `Hey ${user.name}, there was a request for password reset. <a href=${href}>reset password</a>
      <p>This token is valid for 1 hour.</p>`,
    };

    mailer.sendMail(mailOptions, (err, info) => {
      if (err) return res.status(500).send(err);
      return res
        .status(200)
        .send({ statusCode: 200, message: "Check your email." });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ statusCode: 500, message: "Server Error" });
  }
};

// Change Password
exports.resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token) {
      return res.status(401).send({ statusCode: 401, message: "Unauthorized" });
    }

    if (password.length < 6) {
      return res
        .status(401)
        .send({ statusCode: 401, message: "At least 6 digits" });
    }
    const user = await db.user.findOne({ resetToken: token });
    if (!user) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "User not found." });
    }
    if (Date.now() > user.expireToken) {
      return res
        .status(401)
        .send({ message: "Token expired. Generate new one." });
    }
    user.password = await bcrypt.hash(password, 8);
    user.resetToken = "";
    user.expireToken = undefined;
    await user.save();
    return res
      .status(200)
      .send({ statusCode: 200, message: "Password Update" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ statusCode: 500, message: "Server Error" });
  }
};

// Change Password by old password
exports.changePassword = async (req, res) => {
  const { password, newPassword, verifyPassword } = req.body;
  console.log("body:", req.body);
  try {
    const userId = req.userId;
    if (newPassword.length < 6) {
      return res
        .status(400)
        .send({ message: "Password is at least 6 characters." });
    }
    // verify old password
    const user = await db.user.findById(userId).select("+password");
    if (!user) {
      return res.status(404).send({ message: "No User Found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        statusCode: 401,
        message: "Invalid Password!",
      });
    }
    if (newPassword !== verifyPassword) {
      return res.status(401).send({
        statusCode: 401,
        message: "Verify is wrong!",
      });
    }
    user.password = await bcrypt.hash(newPassword, 8);
    await user.save();
    return res
      .status(200)
      .send({ message: "Password is update.", statusCode: 200 });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
