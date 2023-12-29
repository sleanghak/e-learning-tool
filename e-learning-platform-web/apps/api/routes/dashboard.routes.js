const { authJwt } = require("../middlewares");
const controller = require("../controllers/dashboard.controller");

module.exports = (app) => {
  
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get('/api/v1/admin/dashboard',[authJwt.verifyToken,authJwt.isAdmin],controller.adminDashboard)
};
