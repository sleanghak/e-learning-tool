const { authJwt } = require("../middlewares");
const controller = require("../controllers/contact.us.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //guest
  app.post("/api/v1/contact_us", controller.create);

  //admin
  app.get(
    "/api/v1/admin/contact_us",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.find
  );
  app.put(
    "/api/v1/admin/contact_us/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.put(
    "/api/v1/admin/contact_us/disable/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
  app.delete(
    "/api/v1/admin/contact_us/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
};
