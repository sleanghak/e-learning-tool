const db = require("../models");
const response = require("../utils/func/response");
const isEmail = require("validator/lib/isEmail");
const { v4: uuidv4 } = require("uuid");
const undefinedFunc = require("../utils/func/undefinedFunc");
const filterObjAttribute = require("../utils/func/filterObjAttribute");
const createInvoice = async (req, res) => {
  try {
    const {
      coverFileName,
      classId,
      studentIds,
      partner,
      email,
      amount,
      discount,
      dueDate,
      description,
      invoiceId,
    } = req.body;
    if (!isEmail(email)) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Email is invalid format." });
    }

    const newInvoice = new db.invoice({
      coverFileName,
      classId,
      studentIds,
      partner,
      email,
      amount,
      discount,
      dueDate,
      description,
      invoiceId,
    });

    await newInvoice.save();

    //add invoice Id to class
    await db.class.findByIdAndUpdate(classId, {
      $push: { invoices: newInvoice._id },
    });

    res.status(200).send({
      statusCode: 200,
      data: newInvoice,
      message: "Create Invoice Successful.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const getInvoice = async (req, res) => {
  let { status, invoiceId, startDate, endDate } = req.query;
  let pages; // total page of invoice
  let limit = req.query.limit || 10;
  let page = req.query.page || 1;
  const query = filterObjAttribute({
    status: undefinedFunc(status),
  });
  const dateQuery = filterObjAttribute({
    startDate: undefinedFunc(startDate) ? new Date(startDate) : undefined,
    endDate: undefinedFunc(endDate) ? new Date(endDate) : undefined,
  });
  try {
    if (!page) {
      return res.status(400).send({ statusCode: 400, message: "No Page" });
    }
    if (invoiceId) {
      const invoice = await db.invoice.findById(invoiceId);
      if (!invoice) {
        return res.status(404).send({
          statusCode: 404,
          message: "Invoice not found.",
        });
      }
      return res.status(200).send(invoice);
    }
    const skipIndex = (page - 1) * limit;
    if (dateQuery.startDate && dateQuery.endDate) {
      console.log(
        dateQuery.startDate.toISOString(),
        dateQuery.endDate.toISOString()
      );
      const total = await db.invoice.countDocuments({
        disable: false,
        createdAt: {
          $gte: dateQuery.startDate.toISOString(),
          $lte: dateQuery.endDate.toISOString(),
        },
      });
      // find amount of pages
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      const invoices = await db.invoice
        .find({
          disable: false,
          createdAt: {
            $gte: dateQuery.startDate.toISOString(),
            $lte: dateQuery.endDate.toISOString(),
          },
        })
        .populate("studentIds")
        .populate("classId")
        .skip(skipIndex)
        .limit(limit)
        .sort({ createdAt: -1 });
      response.pagination(res, page, pages, limit, invoices, total, "invoices");
      return;
    }
    // console.log(limit, status);
    const total = await db.invoice.countDocuments({
      disable: false,
      ...query,
    });
    // find amount of pages
    if (total % limit == 0) {
      pages = total / limit;
    } else {
      pages = parseInt(total / limit) + 1;
    }

    const invoices = await db.invoice
      .find({ disable: false, ...query })
      .populate("studentIds")
      .populate("classId")
      .skip(skipIndex)
      .limit(limit)
      .sort({ createdAt: -1 });
    // console.log(invoices);
    response.pagination(res, page, pages, limit, invoices, total, "invoices");
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const updateInvoice = async (req, res) => {
  const { invoiceId } = req.params;

  try {
    const data = await db.invoice.findByIdAndUpdate(invoiceId, req.body, {
      new: true,
    });

    if (!data) {
      return res
        .status(400)
        .send({ statusCode: 404, message: "Invoice not founded." });
    }
    res.status(200).send({ statusCode: 200, message: `Invoice is updated.` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const disableInvoice = async (req, res) => {
  const { invoiceId } = req.params;
  try {
    const data = await db.invoice.findByIdAndUpdate(invoiceId, {
      disable: true,
    });
    if (!data) {
      return res
        .status(400)
        .send({ statusCode: 404, message: "Invoice not founded." });
    }
    res.status(200).send({ statusCode: 200, message: `invoice is updated.` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const addPayment = async (req, res) => {
  const { invoiceId } = req.params;
  const { amount, description } = req.body;
  try {
    const newPaid = {
      _id: uuidv4(),
      amount,
      description,
    };
    const data = await db.invoice.findByIdAndUpdate(invoiceId, {
      $push: { paids: newPaid },
    });
    if (!data) {
      return res
        .status(400)
        .send({ statusCode: 404, message: "Invoice not founded." });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: `invoice is updated.`, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const removePayment = async (req, res) => {
  const { invoiceId, paymentId } = req.params;
  console.log({ invoiceId, paymentId });
  try {
    const data = await db.invoice.findByIdAndUpdate(
      invoiceId,
      {
        $pull: { paids: { _id: paymentId } },
      },
      { new: true }
    );
    if (!data) {
      return res
        .status(400)
        .send({ statusCode: 404, message: "Invoice not founded." });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: `invoice is updated.`, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};
module.exports = {
  createInvoice,
  getInvoice,
  disableInvoice,
  updateInvoice,
  addPayment,
  removePayment,
};
