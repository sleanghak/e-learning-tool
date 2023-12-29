const { authJwt } = require("../middlewares");
const controller = require("../controllers/partner.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/v1/partner", controller.findPartner);
  app.post(
    "/api/v1/admin/partner",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createPartner
  );
  app.put(
    "/api/v1/admin/partner/:partnerId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updatePartner
  );
  app.put(
    "/api/v1/admin/partner/disable/:partnerId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disablePartner
  );
  app.delete(
    "/api/v1/admin/partner/:partnerId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deletePartner
  );
};
