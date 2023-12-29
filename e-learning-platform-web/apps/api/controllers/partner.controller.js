const db = require("../models");
const undefinedFunc = require("../utils/func/undefinedFunc");
const response = require("../utils/func/response");
const createPartner = async (req, res) => {
  const { name, coverFileName, description } = req.body;
  try {
    const newPartner = new db.partner({
      name,
      coverFileName,
      description,
    });
    const data = await newPartner.save();
    res
      .status(200)
      .send({ statusCode: 200, message: `Create ${name} successful.` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};

const findPartner = async (req, res) => {
  const { partnerId } = req.query;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const disable = req.query.disable || false;
  let pages;
  try {
    if (partnerId) {
      const data = await db.partner.findById(partnerId);
      if (!data) {
        return res.status(404).send({ statusCode: 404, message: `Not found` });
      }
      return res.status(200).send(data);
    } else {
      const total = await db.partner.countDocuments({
        disable: undefinedFunc(disable),
      });
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      const skipIndex = (page - 1) * limit;
      const data = await db.partner
        .find({ disable: undefinedFunc(disable) })
        .limit(Number(limit))
        .skip(skipIndex)
        .sort({ createdAt: -1 });
      response.pagination(res, page, pages, limit, data, total, "partner");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};

const updatePartner = async (req, res) => {
  const { partnerId } = req.params;
  const { name, coverFileName, description } = req.body;
  try {
    const data = await db.partner.findByIdAndUpdate(
      partnerId,
      {
        name,
        coverFileName,
        description,
      },
      { new: true }
    );
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: `Update ${name} successful.` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};

const disablePartner = async (req, res) => {
  const { partnerId } = req.params;
  const status = req.query.status;
  try {
    const data = await db.partner.findByIdAndUpdate(
      partnerId,
      {
        disable: undefinedFunc(status),
      },
      { new: true }
    );
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }

    let message = undefinedFunc(status) ? "disable." : "restore.";
    res
      .status(200)
      .send({ statusCode: 200, message: `${data.name} is ${message}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};
const deletePartner = async (req, res) => {
  const { partnerId } = req.params;
  try {
    const data = await db.partner.findByIdAndDelete(partnerId);
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: `Delete ${data.name} successful.` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};
module.exports = {
  createPartner,
  findPartner,
  updatePartner,
  disablePartner,
  deletePartner,
};
