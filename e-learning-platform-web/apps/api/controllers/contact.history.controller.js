const response = require("../utils/func/response");
const io = require("../server");
const db = require("../models");
const undefinedFunc = require("../utils/func/undefinedFunc");
const create = async (req, res) => {
  try {
    const { name, tel, email, knownBy, courseId, description } = req.body;
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({ message: "Create course cannot empty" });
    }
    const newContactHistory = new db.contact_history({
      name,
      tel,
      email,
      knownBy,
      courseId,
      description,
    });
    const data = await newContactHistory.save();
    // socket
    const contacts = await db.contact_history.find({ disable: false });
    console.log(contacts);
    io.emit("contact_histroy", contacts);
    res
      .status(200)
      .send({ statusCode: 200, message: "Create contact successful." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
const find = async (req, res) => {
  const { disable, page } = req.query;
  const status = req.query.status || false;
  let limit = req.query.limit || 10;
  var data;
  let pages;

  if (Boolean(req.query.limit)) {
    limit = Number(req.query.limit);
  }
  try {
    if (req.query.contactId) {
      const id = req.query.contactId;
      data = await db.contact_history.findById(id);
      if (!data) {
        response.errorResponse(res, 404, undefined, "Not Founded");
      } else {
        response.successResponse(res, 200, data);
      }
    }
    if (req.query.name) {
      const name = req.query.name;
      const data = await db.contact_history.find({
        name: { $regex: ".*" + name + ".*" },
        disable: undefinedFunc(disable),
      });
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
      }
    } else {
      // count all documents in collection users
      const total = await db.contact_history.countDocuments({
        disable: undefinedFunc(disable),
        status: undefinedFunc(status),
      });
      pages = Math.ceil(total / limit);

      if (status === "undefined") {
        // count all documents in collection users
        const total = await db.contact_history.countDocuments({
          disable: undefinedFunc(disable),
        });
        pages = Math.ceil(total / limit);

        const contacts = await db.contact_history
          .find({ disable: undefinedFunc(disable) })
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ createdAt: -1 })
          .populate("courseId");
        return response.pagination(
          res,
          page,
          pages,
          limit,
          contacts,
          total,
          "contact_history"
        );
      }
      const contacts = await db.contact_history
        .find({
          disable: undefinedFunc(disable),
          status: undefinedFunc(status),
        })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 })
        .populate("courseId");
      return response.pagination(
        res,
        page,
        pages,
        limit,
        contacts,
        total,
        "contact_history"
      );
    }
  } catch (error) {
    response.errorResponse(res, 500, error);
  }
};
const update = async (req, res) => {
  const id = req.params.contactId;
  let data;
  if (!req.body) {
    return res
      .status(400)
      .send({ statusCode: 400, message: "Data to update cannot be empty!" });
  }
  try {
    data = await db.contact_history.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });

    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot update user with ${id} is not match!`,
      });
    }
    // socket
    const contacts = await db.contact_history.find({ disable: false });
    io.emit("contact_histroy", contacts);
    return res
      .status(200)
      .send({ statusCode: 200, message: "Update Contact successful.", data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};
const deleteItem = async (req, res) => {
  const id = req.params.contactId;
  let data;

  try {
    data = await db.contact_history.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: `Not Found id ${id}` });
    }
    // socket
    const contacts = await db.contact_history.find({ disable: false });
    io.emit("contact_histroy", contacts);
    return res
      .status(200)
      .send({ statusCode: 200, message: `Attendance was deleted!` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};
const disable = async (req, res) => {
  const id = req.params.contactId;
  const status = req.query.status;
  let data;
  if (!req.body) {
    return res
      .status(400)
      .send({ statusCode: 400, message: "Data to update cannot be empty!" });
  }
  try {
    data = await db.contact_history.findByIdAndUpdate(
      id,
      { disable: undefinedFunc(status) },
      { new: true }
    );
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot update user with ${id} is not match!`,
      });
    }
    let message = undefinedFunc(status) ? "disable." : "restore.";
    return res
      .status(200)
      .send({ data, statusCode: 200, message: `${data.name} is ${message}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const changeStatus = async (req, res) => {
  try {
    const { status, contactId } = req.params; // value must be boolean (false/true)
    const contact = await db.contact_history.findByIdAndUpdate(contactId, {
      status: status,
    });
    if (!contact) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Contact not Found." });
    }
    res.status(200).send({ statusCode: 200, message: "Status was updated." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};
module.exports = {
  create,
  find,
  update,
  deleteItem,
  disable,
  changeStatus,
};
