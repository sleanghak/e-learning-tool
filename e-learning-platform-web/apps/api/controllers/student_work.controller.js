const undefinedFunc = require("../utils/func/undefinedFunc");
const db = require("../models");
const response = require("../utils/func/response");
const filterObjectAtt = require("../utils/func/filterObjAttribute");
const findStudentWork = async (req, res) => {
  try {
    const { status, courseId, studentWorkId } = req.query;
    const query = filterObjectAtt({ course: undefinedFunc(courseId) });
    let limit = 10;
    let pages;
    const page = req.query.page || 1;
    if (Boolean(req.query.limit)) {
      limit = Number(req.query.limit);
    }
    if (req.query.studentWorkId) {
      const studentWork = await db.student_work
        .findById(studentWorkId)
        .populate("course")
        .populate("students");
      if (!studentWork) {
        return res.status(404).send({
          message: "Press not found",
          statusCode: 404,
        });
      }
      return res.status(200).send({
        statusCode: 200,
        message: "Press found successfully",
        data: studentWork,
      });
    } else if (req.query.page) {
      const total = await db.student_work
        .find({ disable: undefinedFunc(status), ...query })
        .countDocuments({});
      // find amount of pages
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      const skipIndex = (page - 1) * limit;
      const press = await db.student_work
        .find({ disable: undefinedFunc(status), ...query })
        .limit(limit)
        .skip(skipIndex)
        .populate("course");
      response.pagination(
        res,
        page,
        pages,
        limit,
        press,
        total,
        "student_work"
      );
    } else {
      const press = await db.student_work

        .find({
          disable: undefinedFunc(status),
        })
        .populate("course")
        .populate("students");

      res
        .status(200)
        .send({ statusCode: 200, message: "success", data: press });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const createStudentWork = async (req, res) => {
  try {
    const {
      name,
      description,
      date,
      link,
      course,
      images,
      students,
      fileName,
    } = req.body;
    const userId = req.userId;
    const newStudentWork = new db.student_work({
      user: userId,
      name,
      description,
      date,
      link,
      course,
      images,
      students,
      fileName,
    });
    const press = await newStudentWork.save();
    res.status(200).send({
      statusCode: 200,
      message: "Student Project created successfully",
      press,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};
const deleteStudentWork = async (req, res) => {
  try {
    const { studentWorkId } = req.params;
    const press = await db.student_work.findByIdAndDelete(studentWorkId);
    if (!press) {
      return res.status(404).send({
        message: "Student Project not found",
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
const updateStudentWork = async (req, res) => {
  try {
    const { studentWorkId } = req.params;
    const press = await db.student_work.findByIdAndUpdate(
      studentWorkId,
      req.body,
      {
        new: true,
      }
    );
    if (!press) {
      return res.status(404).send({
        message: "Press not found",
        statusCode: 404,
      });
    }
    res.status(200).send({
      statusCode: 200,
      message: "Student Project update successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};
const disableStudentWork = async (req, res) => {
  try {
    const { studentWorkId } = req.params;
    const status = req.query.status;
    const press = await db.student_work.findByIdAndUpdate(
      studentWorkId,
      {
        disable: undefinedFunc(status),
      },
      { new: true }
    );
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
  findStudentWork,
  createStudentWork,
  deleteStudentWork,
  updateStudentWork,
  disableStudentWork,
};
