const { authJwt } = require("../middlewares");
const controller = require("../controllers/notification.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/v1/notification",
    authJwt.verifyToken,
    controller.getNotification
  );

  app.put(
    "/api/v1/notification/read/:notificationId",
    authJwt.verifyToken,
    controller.readNotification
  );
};
