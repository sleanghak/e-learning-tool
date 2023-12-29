const db = require("../models");
const Subject = db.subject;
const response = require("../utils/func/response");
const undefinedFunc = require("../utils/func/undefinedFunc");

exports.create = async (req, res) => {
  try {
    const subjectItem = new Subject({
      name: req.body.name,
      desc: req.body.desc,
      coverFileName: req.body.coverFileName,
    });
    await subjectItem.save();
    res.status(200).send({ statusCode: 200, message: "Create Successful. " });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};

exports.find = async (req, res) => {
  const { disable, id } = req.query;
  const query = { disable: undefinedFunc(disable) };
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  let pages;
  try {
    if (req.query.name) {
      const name = req.query.name;
      const data = await Subject.find({ name: { $regex: ".*" + name + ".*" } });
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
      }
    } else if (id) {
      const data = await Subject.findById(id).populate("courseIds");
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
      }
    } else if (page) {
      const skipIndex = (page - 1) * 20;
      const total = await Subject.countDocuments(query);
      // find amount of pages
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      const data = await Subject.find(query)
        .limit(Number(limit))
        .skip(skipIndex)
        .sort({ createdAt: -1 });
      response.pagination(res, page, pages, limit, data, total, "subjects");
    } else {
      Subject.find(query)
        .populate("courseIds")
        .then((data) => response.successResponse(res, 200, data))
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};

exports.findNotAdmin = (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    Subject.find({ name: { $regex: ".*" + name + ".*" }, disable: false }).then(
      (data) => {
        if (!data) {
          res.status(404).send({ message: `Not found` });
        } else {
          response.successResponse(res, 200, data);
        }
      }
    );
  } else if (req.query.id) {
    console.log(req.query.id);
    const id = req.query.id;
    Subject.findOne({ _id: id, disable: false })
      .populate("courseIds")
      .then((data) => {
        if (data.length == 0) {
          res.status(404).send({ message: `Not found` });
        } else {
          res.status(200).send(data);
        }
      });
  } else if (req.query.page) {
    const page = req.query.page;
    let limit;
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    } else {
      limit = 20;
    }

    const skipIndex = (page - 1) * 20;
    console.log(limit, skipIndex);
    Subject.find({ disable: false })
      .limit(Number(limit))
      .skip(skipIndex)
      .exec()
      .then((data) => {
        response.successResponse(res, 200, data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err });
      });
  } else {
    Subject.find({ disable: false })
      .populate("courseIds")
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty!" });
  }
  const id = req.params.id;
  Subject.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          statusCode: 404,
          message: `cannot update subject with ${id} is not match!`,
        });
      }
      res.status(200).send({ statusCode: 200, message: "Update Successful." });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ statusCode: 500, message: "Internal Server Error." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Subject.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ statusCode: 404, message: `Not Found id ${id}` });
      }
      res.status(200).send({ statusCode: 200, message: "Delete Successful." });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.disable = async (req, res) => {
  const id = req.params.id;
  const status = req.query.status;
  try {
    const data = await Subject.findByIdAndUpdate(
      id,
      { disable: undefinedFunc(status) },
      { useFindAndModify: false, new: true }
    );
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot disable subject with ${id} is not match!`,
      });
    }
    let message = undefinedFunc(status) ? "disable." : "restore.";
    res.status(200).send({
      statusCode: 200,
      message: `${data.name} is ${message}`,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
