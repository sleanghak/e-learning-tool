const { authJwt } = require("../middlewares");
const controller = require("../controllers/chat.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/v1/chats", [authJwt.verifyToken], controller.getChat);
  app.delete(
    "/api/v1/chats/:messageWith",
    [authJwt.verifyToken],
    controller.deleteChat
  );
};
