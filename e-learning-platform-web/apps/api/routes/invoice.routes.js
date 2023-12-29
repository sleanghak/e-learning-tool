const controller = require("../controllers/invoice.controller");
const db = require("../models");
const authJwt = require("../middlewares/authJwt");
const undefinedFunc = require("../utils/func/undefinedFunc");
const filterObjAttribute = require("../utils/func/filterObjAttribute");
const io = require("../server");
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // admin
  app.get(
    "/api/v1/admin/invoices",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getInvoice
  );
  app.post(
    "/api/v1/admin/invoice",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createInvoice
  );

  app.put(
    "/api/v1/admin/invoice/:invoiceId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateInvoice
  );

  app.put(
    "/api/v1/admin/invoice/disable/:invoiceId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.disableInvoice
  );
  app.post(
    "/api/v1/admin/invoice/addPayment/:invoiceId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addPayment
  );
  app.delete(
    "/api/v1/admin/invoice/removePayment/:invoiceId/:paymentId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.removePayment
  );
};
