const { authJwt } = require("../middlewares");
const controller = require("../controllers/class.work.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // student
  app.get(
    "/api/v1/student/classwork",
    [authJwt.verifyToken],
    controller.getHomework
  );
  app.get(
    "/api/v1/student/classwork/:classId",
    [authJwt.verifyToken],
    controller.getByStudent
  );
  app.post(
    "/api/v1/student/classwork/:classworkId",
    [authJwt.verifyToken],
    controller.submit
  );
  app.delete(
    "/api/v1/student/classwork/:classworkId/submission/:submissionId",
    [authJwt.verifyToken],
    controller.deleteSubmission
  );
  app.post(
    "/api/v1/student/classwork/comment/:classworkId",
    [authJwt.verifyToken],
    controller.comment
  );
  app.delete(
    "/api/v1/student/classwork/comment/:classworkId/:commentId",
    [authJwt.verifyToken],
    controller.deleteComment
  );
  // coach

  app.post(
    "/api/v1/coach/classwork/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.create
  );
  app.post(
    "/api/v1/coach/classwork/comment/:classworkId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.comment
  );
  app.get(
    "/api/v1/coach/classwork/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.getByClass
  );
  app.put(
    "/api/v1/coach/classwork/:classworkId/class/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.update
  );
  app.delete(
    "/api/v1/coach/classwork/:classworkId/class/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.deleteFunc
  );
  app.delete(
    "/api/v1/coach/classwork/comment/:classworkId/:commentId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.deleteComment
  );
  app.put(
    "/api/v1/coach/classwork/:classworkId/submission/:submissionId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.returnScore
  );
};
