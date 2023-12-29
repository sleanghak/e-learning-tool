const jwt = require("jsonwebtoken");
const { TokenExpiredError } = jwt;

const db = require("../models");

const User = db.user;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .send({ message: "Unauthorized! Access Token was expired!" });
  }
  return res.status(401).send({ message: "Unauthorized!" });
};

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  // console.log(`======${token}======`);
  if (!token) {
    return res.status(401).send({ message: "No token provided!" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    // console.log(decoded);
    req.userId = decoded.userId;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (!user) {
    return res.send({ message: "No User", statusCode: 401 });
  }
  if (user.role == "admin") {
    return next();
  }
  return res.status(401).send({ message: "Require Admin Role!" });
};

const isCoach = async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (user.role == "coach") {
    return next();
  }
  return res.status(401).send({ message: "Require Coach Role!" });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isCoach,
  catchError,
};

module.exports = authJwt;
