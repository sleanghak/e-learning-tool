const db = require("../models");
const ROLES = db.ROLES;

const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  let user;
  try {
  } catch (error) {
    return res.status(500).send({ message: error });
  }
  // User name
  user = await User.findOne({
    name: req.body.userName,
  });
  if (user) {
    return res.status(400).send({
      message: "Failed! Username is already in use!",
    });
  }
  //  Email
  user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    return res.status(400).send({
      message: "Failed! Email is aready in use!",
    });
  }
  next();
};

const checkRolesExisted = (req, res, next) => {
  const role = req.body.role;
  if (role) {
    if (role == "user" || role == "coach" || role == "admin") {
      next();
    } else {
      return res.status(400).send({
        message: `Failed! Role ${role} does not exist!`,
      });
    }
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
