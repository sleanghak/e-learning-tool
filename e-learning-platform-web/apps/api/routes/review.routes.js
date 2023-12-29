const { authJwt } = require("../middlewares");
const controller = require("../controllers/review.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/v1/user/reviews", controller.find);
  app.post("/api/v1/user/review", [authJwt.verifyToken], controller.create);
  app.put(
    "/api/v1/user/review/:reviewId",
    [authJwt.verifyToken],
    controller.update
  );
  app.delete(
    "/api/v1/user/review/:reviewId",
    [authJwt.verifyToken],
    controller.deleteReview
  );
};
