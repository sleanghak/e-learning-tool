const { authJwt } = require("../middlewares");
const controller = require("../controllers/student_work.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //User
  app.get("/api/v1/student_work", controller.findStudentWork);

  // admin
  app.post(
    "/api/v1/admin/student_work",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createStudentWork
  );
  app.delete(
    "/api/v1/admin/student_work/:studentWorkId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteStudentWork
  );
  app.put(
    "/api/v1/admin/student_work/disable/:studentWorkId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disableStudentWork
  );
  app.put(
    "/api/v1/admin/student_work/:studentWorkId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateStudentWork
  );
};
