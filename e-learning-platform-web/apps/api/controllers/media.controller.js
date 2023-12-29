const undefinedFunc = require("../utils/func/undefinedFunc");
const db = require("../models");
const response = require("../utils/func/response");
const filterObjAttribute = require("../utils/func/filterObjAttribute");
const findPress = async (req, res) => {
  try {
    const { type, subType, disable } = req.query;
    const query = filterObjAttribute({
      type: undefinedFunc(type),
      subType: undefinedFunc(subType),
    });
    let limit = 10;
    let pages;
    const page = req.query.page || 1;
    if (Boolean(req.query.limit)) {
      limit = Number(req.query.limit);
    }
    const total = await db.media
      .find({ disable: undefinedFunc(disable), ...query })
      .countDocuments({});
    // find amount of pages
    if (total % limit == 0) {
      pages = total / limit;
    } else {
      pages = parseInt(total / limit) + 1;
    }
    const skipIndex = (page - 1) * limit;
    const press = await db.media
      .find({ disable: undefinedFunc(disable), ...query })
      .limit(limit)
      .skip(skipIndex);
    response.pagination(res, page, pages, limit, press, total, "media");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const createPress = async (req, res) => {
  try {
    const {
      name,
      description,
      date,
      link,
      type,
      subType,
      fileName,
      coverFileName,
    } = req.body;
    const userId = req.userId;
    const newPress = new db.media({
      user: userId,
      name,
      description,
      date,
      link,
      type,
      subType,
      fileName,
      coverFileName,
    });
    const press = await newPress.save();
    res.status(200).send({
      statusCode: 200,
      message: "Press created successfully",
      press,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};
const deletePress = async (req, res) => {
  try {
    const { pressId } = req.params;
    const press = await db.media.findByIdAndDelete(pressId);
    if (!press) {
      return res.status(404).send({
        message: "Press not found",
        statusCode: 404,
      });
    }
    res.status(200).send({
      statusCode: 200,
      message: "Press deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};
const updatePress = async (req, res) => {
  try {
    const { pressId } = req.params;

    const press = await db.media.findByIdAndUpdate(pressId, req.body, {
      new: true,
    });
    if (!press) {
      return res.status(404).send({
        message: "Press not found",
        statusCode: 404,
      });
    }
    res.status(200).send({
      statusCode: 200,
      message: "Press deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};
const disablePress = async (req, res) => {
  try {
    const { pressId } = req.params;
    const status = req.query.status;
    const press = await db.media.findByIdAndUpdate(pressId, {
      disable: undefinedFunc(status),
    });
    if (!press) {
      return res.status(404).send({
        message: "Press not found",
        statusCode: 404,
      });
    }
    let message = undefinedFunc(status) ? "disable." : "restore.";
    res.status(200).send({
      statusCode: 200,
      message: `${press.name} is ${message}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};

module.exports = {
  findPress,
  createPress,
  deletePress,
  updatePress,
  disablePress,
};
