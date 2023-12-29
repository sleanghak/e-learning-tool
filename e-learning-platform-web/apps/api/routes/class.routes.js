const { authJwt } = require("../middlewares");
const controller = require("../controllers/class.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // User
  app.get(
    "/api/v1/user/class",
    [authJwt.verifyToken],
    controller.findClassByStudent
  );
  app.post("/api/v1/user/class/join", [authJwt.verifyToken], controller.join);
  app.post(
    "/api/v1/user/class/comment/:classId",
    [authJwt.verifyToken],
    controller.addComment
  );
  app.delete(
    "/api/v1/user/class/comment/:classId/:commentId",
    [authJwt.verifyToken],
    controller.deleteComment
  );
  // Coach
  app.get(
    "/api/v1/coach/class/grade/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.reportGrad
  );
  app.get(
    "/api/v1/coach/class",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.findClassByCoach
  );
  app.post(
    "/api/v1/coach/class",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.create
  );
  app.put(
    "/api/v1/coach/class/:id",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.update
  );
  app.put(
    "/api/v1/coach/class/addcourse/:id",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.addCourse
  );
  app.put(
    "/api/v1/coach/class/end/:id",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.endClass
  );
  app.put(
    "/api/v1/coach/class/disable/:id",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.disable
  );
  app.put(
    "/api/v1/class/reset/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.resetCode
  );
  app.post(
    "/api/v1/coach/class/join",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.addCoach
  );
  // add student or coach into a class
  app.post(
    "/api/v1/coach/class/addPerson/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.addPerson
  );
  app.post(
    "/api/v1/coach/class/comment/:classId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.addComment
  );
  app.delete(
    "/api/v1/coach/class/comment/:classId/:commentId",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.deleteComment
  );
  // admin
  app.get(
    "/api/v1/admin/class",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.find
  );
  app.delete(
    "/api/v1/admin/class/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
  app.put(
    "/api/v1/admin/class/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.put(
    "/api/v1/admin/class/disable/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
};
