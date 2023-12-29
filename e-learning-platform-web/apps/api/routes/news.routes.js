const { authJwt } = require("../middlewares");
const controller = require("../controllers/news.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/v1/news", controller.findNews);
  app.post("/api/v1/news/:newsId/submission", controller.addSubmission);
  app.delete(
    "/api/v1/admin/news/:newsId/submission/:submissionId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.removeSubmission
  );
  app.get(
    "/api/v1/admin/news/:newsId/submission",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findSubmissions
  );

  app.put(
    "/api/v1/admin/news/:newsId/submission/:submissionId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateSubmission
  );

  app.post(
    "/api/v1/admin/news",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createNews
  );
  app.put(
    "/api/v1/admin/news/:newsId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateNews
  );
  app.put(
    "/api/v1/admin/news/disable/:newsId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disableNews
  );
  app.delete(
    "/api/v1/admin/news/:newsId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteNews
  );
};
