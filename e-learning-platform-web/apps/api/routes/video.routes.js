const { authJwt } = require("../middlewares");
const controller = require("../controllers/video.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //guest
  app.get("/api/v1/video", controller.findNotAdmin);

  //general user ( all user types)
  app.put(
    "/api/v1/video/watch/:videoId",
    [authJwt.verifyToken],
    controller.watchVideo
  );
  app.put(
    "/api/v1/video/disregard/:videoId",
    [authJwt.verifyToken],
    controller.disregardVideo
  );
  app.get("/api/v1/user/video", [authJwt.verifyToken], controller.findNotAdmin);
  // admin
  app.get(
    "/api/v1/admin/video",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.find
  );
  app.post(
    "/api/v1/admin/video",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create
  );
  app.delete(
    "/api/v1/admin/video/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
  app.put(
    "/api/v1/admin/video/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.put(
    "/api/v1/admin/video/disable/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
};
