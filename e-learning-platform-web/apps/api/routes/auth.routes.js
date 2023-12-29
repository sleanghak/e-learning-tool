const { verifySignUp } = require("../middlewares");
const controllers = require("../controllers/auth.controller");
const authJwt = require("../middlewares/authJwt");
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/v1/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controllers.signup
  );
  app.post("/api/v1/auth/signin", controllers.signin);
  app.post("/api/v1/auth/refreshtoken", controllers.refreshToken);
  app.post("/api/v1/auth/reset", controllers.reset);
  app.post("/api/v1/auth/reset/token", controllers.resetPassword);
  app.put(
    "/api/v1/auth/change_password",
    [authJwt.verifyToken],
    controllers.changePassword
  );
};
