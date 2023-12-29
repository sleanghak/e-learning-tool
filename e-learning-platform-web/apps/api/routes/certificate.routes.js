const { authJwt } = require("../middlewares");
const controller = require("../controllers/certificate.controller");

module.exports = (app) => {
  
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  
  // user
  app.get("/api/v1/student/certificate",[authJwt.verifyToken],controller.findByStudent);
  // coach
  app.get("/api/v1/admin/certificate/class/:classId/:studentId",[authJwt.verifyToken,authJwt.isCoach], controller.findByClassAndUser);
  // admin
  app.get("/api/v1/admin/certificate/active",[authJwt.verifyToken,authJwt.isAdmin], controller.findByActive);
  app.get("/api/v1/admin/certificate/disable",[authJwt.verifyToken,authJwt.isAdmin], controller.findByDisable);
  app.post("/api/v1/admin/certificate",[authJwt.verifyToken,authJwt.isAdmin],controller.create);
  app.delete("/api/v1/admin/certificate/:id",[authJwt.verifyToken,authJwt.isAdmin], controller.delete);
  app.put("/api/v1/admin/certificate/:id",[authJwt.verifyToken,authJwt.isAdmin], controller.update);
  app.put("/api/v1/admin/certificate/disable/:id", [authJwt.verifyToken,authJwt.isAdmin], controller.disable);
};
