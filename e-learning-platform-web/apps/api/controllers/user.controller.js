const db = require("../models");
const response = require("../utils/func/response");
const io = require("../server");
const { default: isEmail } = require("validator/lib/isEmail");
const filterObjAttribute = require("../utils/func/filterObjAttribute");
const undefinedFunc = require("../utils/func/undefinedFunc");
const totalAllHours = require("../utils/func/totalAllHours");
const getCurrentUser = async (req, res) => {
  const userId = req.userId;
  if (!userId) response.errorResponse(res, 401, undefined, "Unauthorized");
  try {
    const user = await db.user.findById(userId).populate("courses");
    if (!user) response.errorResponse(res, 401, undefined, "No current user.");
    response.successResponse(res, 200, user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error || "Internal Server Error" });
  }
};

const listStudents = async (req, res) => {
  /**
   * TODO : Get only user
   */
  let pages;
  let total;
  let limit = 10;
  let data = [];
  try {
    const { name, coachId, classId, page } = req.query;
    console.log({ name, coachId, classId, page });

    // console.log(limit, status);
    total = await db.user.countDocuments({ role: "user" });
    // find amount of pages
    if (total % limit == 0) {
      pages = total / limit;
    } else {
      pages = parseInt(total / limit) + 1;
    }
    const skipIndex = (page - 1) * limit;
    if (page) {
      if (undefinedFunc(name)) {
        data = await db.user.find({
          role: "user",
          name: { $regex: name || "", $options: "i" },
        });
      } else if (undefinedFunc(coachId) && undefinedFunc(classId)) {
        data = await db.user
          .find({
            coaches: { $in: coachId },
            classes: { $in: classId },
            role: "user",
          })
          .skip(skipIndex)
          .limit(limit);
      } else if (undefinedFunc(coachId)) {
        data = await db.user
          .find({
            coaches: { $in: coachId },
            role: "user",
          })
          .skip(skipIndex)
          .limit(limit);
      } else {
        data = await db.user
          .find({
            role: "user",
          })
          .skip(skipIndex)
          .limit(limit);
      }
      response.pagination(res, page, pages, limit, data, total, "student");
    } else {
      data = await db.user.find({
        role: "user",
        // status: true,
      });
      return res.status(200).send(data);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: `Server error` });
  }
};

const listCoaches = async (req, res) => {
  let coaches = [];
  try {
    const data = await db.user
      .find({ role: "coach" })
      .populate("major")
      .sort({ createdAt: -1 });
    const d = new Date();
    year = d.getFullYear();
    month = d.getMonth();
    const start_date = new Date(`${year}-${month + 1}-1`);
    const end_date = new Date(`${year}-${Number(month) + 2}-1`);
    for (let coach of data) {
      const coach_attendances = await db.coach_time.find({
        user: coach._id,
        date: {
          $gt: start_date.toISOString(),
          $lte: end_date.toISOString(),
        },
      });
      const total_hours = totalAllHours(coach_attendances);

      coaches.push({ ...coach.toJSON(), total_hours });
    }
    res.status(200).send(coaches);
  } catch (error) {
    response.errorResponse(res, 500, error);
  }
};

const listAdmin = async (req, res) => {
  /**
   * TODO : Get only admin
   */

  try {
    const data = await db.user.find({ role: "admin" });
    res.status(200).send(data);
  } catch (error) {
    response.errorResponse(res, 500, error);
  }
};
const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) return res.status(401).send({ message: "Unauthorize" });
  const user = await db.user.findByIdAndDelete(userId);
  if (!user) return res.status(404).send({ message: "Not Founded" });

  const students = await db.user.find({ role: "user" });
  io.emit("list-students", students);

  const coaches = await db.user.find({ role: "coach" });
  io.emit("list-coaches", coaches);
  const admins = await db.user.find({ role: "admin" });
  io.emit("list-admin", admins);
  res.status(200).send({ message: "Success delete", data: user });
};

const updateCurrentUser = async (req, res) => {
  const userId = req.userId;
  let user;
  const {
    coverFileName,
    name,
    email,
    price_per_hour,
    major,
    default_salary,
    dateOfBirth,
    bank,
    tels,
    bio,
    fileName,
  } = req.body;
  const newUser = filterObjAttribute({
    coverFileName,
    name,
    email,
    price_per_hour,
    major,
    default_salary,
    dateOfBirth,
    bank,
    tels,
    bio,
    fileName,
  });
  try {
    if (email) {
      if (!isEmail(email)) {
        return res
          .status(400)
          .send({ statusCode: 400, message: "Email is invalid" });
      }
      user = await db.user.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .send({ statusCode: 400, message: "Email is already used" });
      }
    }
    user = await db.user.findByIdAndUpdate(userId, newUser, { new: true });
    if (!user) return res.status(404).send({ message: "No current user." });
    res
      .status(200)
      .send({ statusCode: 200, message: "User updated", user: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error || "Internal Server Error" });
  }
};

const findUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await db.user.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No user found." });
    }
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error.");
  }
};

const search = async (req, res) => {
  try {
    const { searchText } = req.params;
    const { userId } = req;
    if (searchText.length === 0) return;

    const results = await db.user.find({
      name: { $regex: searchText, $options: "i" },
      $nor: [{ _id: userId }],
    });

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
};

module.exports = {
  listStudents,
  listCoaches,
  listAdmin,
  getCurrentUser,
  deleteUser,
  updateCurrentUser,
  findUser,
  search,
};
