const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/authJwt");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/v1/users/:userId", [authJwt.verifyToken], controller.findUser);
  app.get(
    "/api/v1/admin/students",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.listStudents
  );
  app.get(
    "/api/v1/admin/coaches",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.listCoaches
  );
  app.get(
    "/api/v1/admin/admins",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.listAdmin
  );
  app.get(
    "/api/v1/user/current_user",
    [authJwt.verifyToken],
    controller.getCurrentUser
  );
  app.get("/api/v1/search/:searchText", [verifyToken], controller.search);
  app.delete(
    "/api/v1/user/:userId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteUser
  );
  app.put(
    "/api/v1/update_current_user",
    [authJwt.verifyToken],
    controller.updateCurrentUser
  );
};
