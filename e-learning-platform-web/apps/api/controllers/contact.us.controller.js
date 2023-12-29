const db = require("../models");
const undefinedFunc = require("../utils/func/undefinedFunc");
const response = require("../utils/func/response");
exports.create = async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const newContact = new db.contact_us(body);
    await newContact.save();
    res
      .status(200)
      .send({ statusCode: 200, message: "Message is sent successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.find = async (req, res) => {
  const { contactId } = req.params;
  const status = req.query.status || false;
  const disable = req.query.disable;
  let limit = Number(req.query.limit) || 10;
  let page = Number(req.query.page) || 1;
  let pages;
  try {
    if (contactId) {
      const data = await db.contact_us.findById(contactId).populate("subject");
      if (!data) {
        return res
          .status(404)
          .send({ statusCode: 404, message: `Not Found id ${contactId}` });
      }
      res.status(200).send({ statusCode: 200, data });
    } else {
      const total = await db.contact_us.countDocuments({
        status: undefinedFunc(status),
        disable: undefinedFunc(disable),
      });
      // find amount of pages
      pages = Math.ceil(total / limit);
      if (status === "undefined") {
        const contacts = await db.contact_us
          .find({ disable: undefinedFunc(disable) })
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ createdAt: -1 })
          .populate("subject");
        return response.pagination(
          res,
          page,
          pages,
          limit,
          contacts,
          total,
          "contact_us"
        );
      }
      const contacts = await db.contact_us
        .find({
          status: undefinedFunc(status),
          disable: undefinedFunc(disable),
        })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 })
        .populate("subject");
      if (!contacts) {
        return res.status(404).send({ statusCode: 404, message: `Not Found` });
      }
      return response.pagination(
        res,
        page,
        pages,
        limit,
        contacts,
        total,
        "contact_us"
      );
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.contact_us.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: `Not Found id ${id}` });
    }
    res.status(200).send({ statusCode: 200, message: `Update Successful` });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.disable = async (req, res) => {
  try {
    const { id } = req.params;
    const status = req.query.status;
    const data = await db.contact_us.findByIdAndUpdate(
      id,
      { disable: undefinedFunc(status) },
      { new: true }
    );
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: `Not Found id ${id}` });
    }
    let message = undefinedFunc(status) ? "disable." : "restore.";
    res
      .status(200)
      .send({ statusCode: 200, message: `${data.name} is ${message}` });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.contact_us.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: `Not Found id ${id}` });
    }
    res.status(200).send({ statusCode: 200, message: `Delete Successful` });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
