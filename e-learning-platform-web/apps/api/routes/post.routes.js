const { authJwt } = require("../middlewares");
const controller = require("../controllers/post.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Guest
  app.get("/api/v1/post", controller.findPost);
  app.post("/api/v1/post/addContact/:postId", controller.addContact);

  // user
  app.get("/api/v1/student/post", [authJwt.verifyToken], controller.findPost);

  app.post(
    "/api/v1/post/:postId",
    [authJwt.verifyToken],
    controller.addStudent
  );

  // admin
  app.get(
    "/api/v1/admin/post",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findPost
  );
  app.post(
    "/api/v1/admin/post",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create
  );
  app.post(
    "/api/admin/post/:postId/toclass",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.postToClass
  );
  app.delete(
    "/api/v1/admin/post/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
  app.delete(
    "/api/v1/admin/post/contact/:contactId/:postId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.removeContact
  );
  app.put(
    "/api/v1/admin/post/contact/:contactId/:postId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateStatusContact
  );
  app.put(
    "/api/v1/admin/post/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );
  app.put(
    "/api/v1/admin/post/disable/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disable
  );
};
