const { authJwt } = require("../middlewares");
const controller = require("../controllers/inventory.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //Coach
  app.get("/api/v1/coach/inventory", controller.findNotAdmin);
  // admin
  app.get("/api/v1/admin/inventory", controller.find);
  app.post("/api/v1/admin/inventory", controller.create);
  app.delete("/api/v1/admin/inventory/:id", controller.delete);
  app.put("/api/v1/admin/inventory/:id", controller.update);
  app.put("/api/v1/admin/inventory/disable/:id", controller.disable);
};
