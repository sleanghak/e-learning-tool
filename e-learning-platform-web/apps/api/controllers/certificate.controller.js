const db = require("../models");
const CertificateModel = db.certificate;
const response = require("../utils/func/response");
exports.create = async (req, res) => {
  const { userId, classId, fileName, courseId } = req.body;
  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .send({ statusCode: 400, message: "Create Post cannot empty" });
  }
  const newCertificate = new CertificateModel({
    user: userId,
    class: classId,
    course: courseId,
    fileName: fileName,
  });
  try {
    await newCertificate.save();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.findByDisable = async (req, res) => {
  const id = req.query.id;
  const page = req.query.page;
  let limit = 8;
  let pages;
  if (req.query.name) {
    const name = req.query.name;
    CertificateModel.find({
      name: { $regex: ".*" + name + ".*" },
      disable: true,
    }).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
      }
    });
  } else if (id) {
    CertificateModel.find({ _id: id, disable: true })
      .populate("course")
      .then((data) => {
        if (data.length == 0) {
          res.status(404).send({ message: `Not found` });
        } else {
          response.successResponse(res, 200, data);
        }
      });
  } else if (page) {
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    }
    const total = await CertificateModel.find({ disable: true }).count();
    // find amount of pages
    if (total % limit == 0) {
      pages = total / limit;
    } else {
      pages = parseInt(total / limit) + 1;
    }
    const skipIndex = (page - 1) * 20;
    CertificateModel.find({ disable: true })
      .limit(Number(limit))
      .skip(skipIndex)
      .exec()
      .then((data) => {
        response.pagination(res, page, pages, limit, data, total);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err });
      });
  } else {
    CertificateModel.find({ disable: true })
      .then((data) => response.successResponse(res, 200, data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.findByActive = async (req, res) => {
  const id = req.query.id;
  const page = req.query.page;
  let limit = 8;
  let pages;
  if (id) {
    CertificateModel.find({ _id: id, disable: false })
      .populate("course")
      .then((data) => {
        if (data.length == 0) {
          res.status(404).send({ message: `Not found` });
        } else {
          response.successResponse(res, 200, data);
        }
      });
  } else if (page) {
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    }
    const total = await CertificateModel.find({ disable: false }).count();
    // find amount of pages
    if (total % limit == 0) {
      pages = total / limit;
    } else {
      pages = parseInt(total / limit) + 1;
    }
    const skipIndex = (page - 1) * 20;
    CertificateModel.find({ disable: false })
      .limit(Number(limit))
      .skip(skipIndex)
      .exec()
      .then((data) => {
        response.pagination(res, page, pages, limit, data, total);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err });
      });
  } else {
    CertificateModel.find({ disable: false })
      .then((data) => response.successResponse(res, 200, data))
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
  CertificateModel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          statusCode: 404,
          message: `cannot update Post with ${id} is not match!`,
        });
      }
      res.status(200).send({
        data,
        statusCode: 200,
        message: "create certificate success.",
      });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ statusCode: 500, message: "Internal Server Error" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  CertificateModel.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ statusCode: 404, message: `Not Found id ${id}` });
      }
      return res
        .status(200)
        .send({ statusCode: 200, message: `Post was deleted!` });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ statusCode: 500, message: "Internal Server Error" });
    });
};
exports.disable = (req, res) => {
  const id = req.params.id;
  CertificateModel.findByIdAndUpdate(
    id,
    { disable: true },
    { useFindAndModify: false, new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          statusCode: 404,
          message: `cannot disable Post with ${id} is not match!`,
        });
      }
      response.successResponse(res, 200, data);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
      return;
    });
};
exports.findByClassAndUser = async () => {
  const { classId, studentId } = req.params;
  try {
    const data = await CertificateModel.find({
      user: studentId,
      class: classId,
    });
    if (!data) {
      return res.status(404).send({ message: `Not found` });
    }
    response.successResponse(res, 200, data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};
exports.findByStudent = async (req, res) => {
  const studentId = req.userId;

  try {
    const data = await CertificateModel.find({
      user: studentId,
    });
    if (!data) {
      return res.status(404).send({ message: `Not found` });
    }
    response.successResponse(res, 200, data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};
