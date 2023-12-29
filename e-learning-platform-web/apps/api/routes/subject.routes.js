const { authJwt } = require("../middlewares");
const controller = require("../controllers/subject.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //User
  app.get("/api/v1/department", controller.findNotAdmin);
  // admin
  app.get(
    "/api/v1/admin/department",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.find
  );
  app.post(
    "/api/v1/admin/department",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create
  );
  app.delete(
    "/api/v1/admin/department/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
  app.put(
    "/api/v1/admin/department/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.put(
    "/api/v1/admin/department/disable/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
};
