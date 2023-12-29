const { authJwt } = require("../middlewares");
const controller = require("../controllers/contact.history.controller");
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // admin
  app.get(
    "/api/v1/admin/contact_history",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.find
  );
  app.post(
    "/api/v1/admin/contact_history",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create
  );
  app.put(
    "/api/v1/admin/contact_history/:contactId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.delete(
    "/api/v1/admin/contact_history/:contactId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteItem
  );
  app.put(
    "/api/v1/admin/contact_history/disable/:contactId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
  app.put(
    "/api/v1/admin/contact_history/status/:status/:contactId",
    controller.changeStatus
  );
};
