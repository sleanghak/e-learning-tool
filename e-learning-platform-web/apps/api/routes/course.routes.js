const { authJwt } = require("../middlewares");
const controller = require("../controllers/course.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Guest
  app.get("/api/v1/course", controller.findNotAdmin);
  // user
  app.get(
    "/api/v1/student/course",
    [authJwt.verifyToken],
    controller.findNotAdmin
  );
  app.get(
    "/api/v1/student/course/favorite",
    [authJwt.verifyToken],
    controller.findFavorite
  );
  app.post(
    "/api/v1/course/addFavorite/:courseId",
    [authJwt.verifyToken],
    controller.addFavorite
  );
  app.post(
    "/api/v1/student/course/comments/:courseId",
    [authJwt.verifyToken],
    controller.addComment
  );
  app.delete(
    "/api/v1/course/removeFavorite/:courseId",
    [authJwt.verifyToken],
    controller.removeFavorite
  );
  app.delete(
    "/api/v1/student/course/comments/:courseId/:commentId",
    [authJwt.verifyToken],
    controller.deleteComment
  );

  // coach
  app.get(
    "/api/v1/coach/course",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.findNotAdmin
  );
  // admin
  app.get(
    "/api/v1/admin/course",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.find
  );
  app.post(
    "/api/v1/admin/course",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create
  );
  app.delete(
    "/api/v1/admin/course/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
  app.put(
    "/api/v1/admin/course/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.put(
    "/api/v1/admin/course/addlesson/:courseId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addLesson
  );
  app.put(
    "/api/v1/admin/course/disable/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
  app.post(
    "/api/v1/admin/course/resource/:courseId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addResource
  );
  app.delete(
    "/api/v1/admin/course/resource/:courseId/:resourceId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.removeResource
  );
};
