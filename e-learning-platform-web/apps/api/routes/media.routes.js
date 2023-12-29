const { authJwt } = require("../middlewares");
const controller = require("../controllers/media.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //User
  app.get("/api/v1/media", controller.findPress);
  // admin

  app.post(
    "/api/v1/admin/media",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createPress
  );
  app.delete(
    "/api/v1/admin/media/:pressId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deletePress
  );
  app.put(
    "/api/v1/admin/media/disable/:pressId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disablePress
  );
  app.put(
    "/api/v1/admin/media/:pressId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updatePress
  );
};
