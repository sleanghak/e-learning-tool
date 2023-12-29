const { authJwt } = require("../middlewares");
const controller = require("../controllers/lesson.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //User
  app.get(
    "/api/v1/student/lesson",
    [authJwt.verifyToken],
    controller.findNotAdmin
  );
  app.post(
    "/api/v1/student/lesson/:lessonId",
    [authJwt.verifyToken],
    controller.addComment
  );
  app.delete(
    "/api/v1/student/lesson/:lessonId/:commentId",
    [authJwt.verifyToken],
    controller.deleteComment
  );
  // coach
  app.post(
    "/api/v1/coach/lesson/:lessonId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.addComment
  );
  app.delete(
    "/api/v1/coach/lesson/:lessonId/:commentId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.deleteComment
  );
  // admin
  app.get(
    "/api/v1/admin/lesson",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.find
  );
  app.post(
    "/api/v1/admin/lesson",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create
  );
  app.delete(
    "/api/v1/admin/lesson/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteLesson
  );
  app.put(
    "/api/v1/admin/lesson/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.put(
    "/api/v1/admin/lesson/addvideo/:lessonId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addVideo
  );
  app.put(
    "/api/v1/admin/lesson/disible/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
};
