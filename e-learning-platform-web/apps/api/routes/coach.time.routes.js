const { authJwt } = require("../middlewares");
const controller = require("../controllers/coach.time.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Teacher
  app.post(
    "/api/v1/coach/coach_time",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.create
  );
  app.get(
    "/api/v1/coach/coach_time",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.findByCoach
  );
  app.delete(
    "/api/v1/coach/coach_time/:id",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.delete
  );
  app.put(
    "/api/v1/coach/coach_time/:id",
    [authJwt.verifyToken, authJwt.isCoach],
    controller.update
  );

  // admin
  app.get(
    "/api/v1/admin/coach_time",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findByAdmin
  );
  app.delete(
    "/api/v1/admin/coach_time/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
  app.put(
    "/api/v1/admin/coach_time/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
};
