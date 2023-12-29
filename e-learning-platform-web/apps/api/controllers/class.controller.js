const db = require("../models");
const Class = db.class;
const response = require("../utils/func/response");
const comment = require("../utils/func/commentFunc");
const io = require("../server");
const { GenerateClassCode } = require("../utils/func/random");
const undefinedFunc = require("../utils/func/undefinedFunc");
const notificationAction = require("../utils/func/action/notificationActions");
exports.create = async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    res.status(400).send({ statusCode: 400, message: "No current user." });
    return;
  }

  if (Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ statusCode: 400, message: "Create Class cannot empty" });
    return;
  }
  try {
    const admins = await db.user.find({ role: "admin" });
    const classItem = new Class({
      name: req.body.name,
      desc: req.body.desc,
      code: GenerateClassCode(6),
      coverFileName: req.body.coverFileName,
      coachIds: [userId],
      startDate: req.body.startDate,
      courseIds: req.body.courseIds,
      endDate: req.body.endDate,
    });
    const data = await classItem.save();

    notificationAction.sendNotification(
      userId,
      admins,
      "create_class",
      `create a class ${req.body.name}`,
      { classId: data._id }
    );
    // for socket notification
    const user = await db.user.findById(userId);
    io.emit("notification", {
      data: { message: `Mr. ${user.name} create a class (${req.body.name})` },
    });
    res
      .status(200)
      .send({ statusCode: 200, data, message: "Successfully Create" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

exports.find = async (req, res) => {
  const { id, page, status, coachId, disable } = req.query;
  let limit = req.query.limit || 10;
  var data;
  let pages;
  console.log(undefinedFunc(status));
  const query = {
    isActive: undefinedFunc(status),
    disable: undefinedFunc(disable),
  };
  console.log(Boolean(undefinedFunc(coachId)));
  try {
    // by class ID
    if (id) {
      try {
        data = await Class.findById(id)
          .populate("studentIds")
          .populate("courseIds")
          .populate("invoices")
          .then((data) => {
            if (!data) {
              res.status(404).send({ message: `Not founded` });
            } else {
              response.successResponse(res, 200, data);
            }
          });
      } catch (error) {
        res.status(500).send({ statusCode: 500, error: error });
      }
    } else if (undefinedFunc(coachId)) {
      const classes = await Class.find({
        coachIds: { $in: [coachId] },
        disable: false,
        isActive: true,
      });
      return res.status(200).send({ statusCode: 200, data: classes });
    } else if (page) {
      try {
        // count all documents in collection users
        const total = await Class.countDocuments(query);
        // find amount of pages
        if (total % limit == 0) {
          pages = total / limit;
        } else {
          pages = parseInt(total / limit) + 1;
        }
        const classes = await Class.find(query)
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ createdAt: -1 });

        response.pagination(res, page, pages, limit, classes, total, "class");
      } catch (error) {
        res.status(500).send({ statusCode: 500, error: error });
      }
    } else {
      try {
        data = await Class.find({ disable: false });
        response.successResponse(res, 200, data);
      } catch (error) {
        res.status(500).send({ statusCode: 500, error: error });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, error: error.message });
  }
};

exports.findClassByCoach = (req, res) => {
  const userId = req.userId;
  const isActive = req.query.status || true; // true is active class
  console.log(isActive);
  if (!userId) response.errorResponse(res, 401, undefined, "Authorization");
  else if (req.query.id) {
    const id = req.query.id;
    if (req.query.stream) {
      Class.findOne({ _id: id, disable: false })
        .populate("homeworkIds")
        .populate("comments.user")
        .then((data) => {
          if (data.length == 0) {
            res.status(404).send({ message: `Not found` });
          } else {
            res.status(200).send(data);
          }
        });
    } else if (req.query.student) {
      Class.find({ _id: id, disable: false })
        .populate("studentIds")
        .populate("coachIds")
        .then((data) => {
          if (data.length == 0) {
            res.status(404).send({ message: `Not found` });
          } else {
            res.status(200).send(data[0]);
          }
        });
    } else {
      Class.findById(id)
        .populate("courseIds")
        .then((data) => {
          if (data.length == 0) {
            res.status(404).send({ message: `Not found` });
          } else {
            res.status(200).send(data);
          }
        });
    }
  } else if (req.query.page) {
    const page = req.query.page;
    let limit = 20;
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    }
    const skipIndex = (page - 1) * limit;

    Class.find({
      coachIds: { $in: [userId] },
      disable: false,
      isActive: undefinedFunc(isActive),
    })
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
    Class.find({
      coachIds: { $in: [userId] },
      disable: false,
      isActive: isActive,
    })
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};
exports.findClassByStudent = (req, res) => {
  const userId = req.userId;
  if (!userId) response.errorResponse(res, 401, undefined, "Authorization");
  else if (req.query.id) {
    const id = req.query.id;

    // stream section
    if (req.query.stream) {
      Class.find({ _id: id, disable: false, isActive: true })
        .populate("homeworkIds")
        .populate("comments.user")
        .then((data) => {
          if (data.length == 0) {
            res.status(404).send({ message: `Not found` });
          } else {
            res.status(200).send(data[0]);
          }
        });
    } else if (req.query.student) {
      Class.find({ _id: id, disable: false, isActive: true })
        .populate("studentIds")
        .populate("coachIds")
        .then((data) => {
          if (data.length == 0) {
            res.status(404).send({ message: `Not found` });
          } else {
            res.status(200).send(data[0]);
          }
        });
    } else {
      Class.find({ _id: id, disable: false, isActive: true })
        .populate("courseIds")
        .then((data) => {
          if (data.length == 0) {
            res.status(404).send({ message: `Not found` });
          } else {
            res.status(200).send(data[0]);
          }
        });
    }
  } else if (req.query.page) {
    const page = req.query.page;
    let limit = 20;
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    }
    const skipIndex = (page - 1) * 20;
    console.log(limit, skipIndex);
    Class.find({
      studentIds: { $in: [userId] },
      disable: false,
      isActive: true,
    })
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
    Class.find({
      studentIds: { $in: [userId] },
      disable: false,
      isActive: true,
    })
      .then((data) => {
        response.successResponse(res, 200, data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.update = async (req, res) => {
  let data;
  const id = req.params.id;
  const userId = req.userId;
  if (!req.body) {
    return res
      .status(400)
      .send({ statusCode: 400, message: "Data to update cannot be empty!" });
  }
  try {
    data = await Class.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
      new: true,
    });
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot update user with ${id} is not match!`,
      });
    }

    res
      .status(200)
      .send({ data, statusCode: 200, message: "Success Updated." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  let data;
  try {
    data = await Class.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).send({ message: `Not Found id ${id}` });
    }

    return res
      .status(200)
      .send({ statusCode: 200, message: `Class was deleted! ${id}` });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
exports.disable = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  const status = req.query.status;
  try {
    const data = await Class.findByIdAndUpdate(
      id,
      { disable: undefinedFunc(status) },
      { new: true }
    );
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot disable class with ${id} is not match!`,
      });
    }
    let message = undefinedFunc(status) ? "disable." : "restore.";
    res
      .status(200)
      .send({ statusCode: 200, message: `${data.name} is ${message}`, data });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

exports.endClass = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  const status = req.query.status;
  try {
    const data = await Class.findByIdAndUpdate(
      id,
      { isActive: !undefinedFunc(status) },
      { useFindAndModify: false, new: true }
    );
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot end class with ${id} is not match!`,
      });
    }

    res.status(200).send({
      statusCode: 200,
      message: undefinedFunc(status)
        ? `${data.name} move to Past Class`
        : `${data.name} move to Present Class`,
      data,
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

exports.join = async (req, res) => {
  let data;
  if (!req.body) {
    res
      .status(400)
      .send({ statusCode: 400, message: "Request data cannot empty" });
    return;
  }
  const classCode = req.body.classCode;
  const studentId = req.userId;
  if (!studentId)
    return res.status(402).send({ statusCode: 402, message: "Unauthorized!" });
  try {
    await db.user.findByIdAndUpdate(studentId, { status: true });
    data = await Class.findOne({
      studentIds: { $in: [studentId] },
      code: classCode,
    });

    if (data) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "you are exist" });
    }
    data = await Class.findOne({ code: classCode });
    if (!data)
      return res.status(404).send({
        statusCode: 404,
        message: `class not found with ${classCode}`,
      });

    // get by student
    const studentClasses = await Class.find({
      studentIds: { $in: [studentId] },
      disable: false,
    });

    io.emit("class-student", studentClasses);
    data = await Class.findOneAndUpdate(
      { code: classCode },
      { $push: { studentIds: studentId } },
      { new: true }
    );
    console.log("CoachIDs::", data.coachIds, data._id);
    await db.user.findByIdAndUpdate(studentId, {
      $push: { classes: data._id, coaches: data.coachIds },
    });
    res.status(200).send({ statusCode: 200, message: "Join successful", data });
  } catch (error) {
    res
      .status(500)
      .send({ statusCode: 500, message: error || "Internal Server Error" });
  }
};

exports.addCourse = async (req, res) => {
  let data;
  if (!req.body) {
    res.status(400).send({ message: "Request data cannot empty" });
    return;
  }
  const id = req.params.id;
  const courseId = req.body.courseId;
  try {
    // check existing or not when add course to a class
    data = await Class.findOne({ courseIds: { $in: [courseId] }, _id: id });

    if (data) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "this course is exist" });
    }
    data = await Class.findByIdAndUpdate(
      id,
      { $push: { courseIds: courseId } },
      { useFindAndModify: false, new: true }
    );

    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot add course to class with ${id} is not match!`,
      });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: "Add Course successful.", data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: error || "Internal Server Error." });
    return;
  }
};
exports.addCoach = async (req, res) => {
  let data;
  if (!req.body) {
    res
      .status(400)
      .send({ statusCode: 400, message: "Request data cannot empty" });
    return;
  }
  const classCode = req.body.classCode;
  const userId = req.userId;
  if (!userId)
    return res.status(402).send({ statusCode: 401, message: "Unauthorized!" });
  try {
    data = await Class.findOne({ coachIds: { $in: [userId] } });
    if (data) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "You are exist" });
    }
    data = await Class.findOne({ code: classCode });
    if (!data)
      return res.status(404).send({
        statusCode: 404,
        message: `class not found with ${classCode}`,
      });
    data = await Class.findOneAndUpdate(
      { code: classCode },
      { $push: { coachIds: userId } },
      { new: true }
    );
    // get by coach
    const coachClasses = await Class.find({
      coachIds: { $in: [userId] },
      disable: false,
    });
    io.emit("class-coach", coachClasses);
    res
      .status(200)
      .send({ statusCode: 200, data, message: "Add Coach successful." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};
exports.addComment = async (req, res) => {
  const classId = req.params.classId;
  const text = req.body.text;
  if (!classId) return res.status(400).send({ message: "Select a class." });
  if (text.length === 0)
    return res.status(400).send({ message: "comment cannot empty" });
  await comment.addComment(req, res, Class, classId, text);
  try {
    // socket
    const data = await Class.findOne({ _id: classId, disable: false })
      .populate("homeworkIds")
      .populate("comments.user");
    io.emit("class-detail", data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
exports.deleteComment = async (req, res) => {
  const { classId, commentId } = req.params;
  await comment.deleteComment(req, res, Class, classId, commentId);
  try {
    // socket
    const data = await Class.findOne({ _id: classId, disable: false })
      .populate("homeworkIds")
      .populate("comments.user");
    io.emit("class-detail", data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

exports.reportGrad = async (req, res) => {
  const { classId } = req.params;
  let homeworks = [];
  let students = [];
  let averages = [];
  try {
    const classData = await db.class.findById(classId).populate("studentIds");
    homeworks = await db.classwork.find({ class: classId });
    students = JSON.parse(JSON.stringify(classData.studentIds));

    for (let i = 0; i < students.length; i++) {
      let works = [];
      for (let j = 0; j < homeworks.length; j++) {
        works.push(
          homeworks[j].submissions.find(
            (item) => item.user.toString() === students[i]._id.toString()
          )
        );
        // works[j].homework_name = homeworks[j].name || "";
      }
      students[i].submits = works;

      // console.log(students[i].submits);
    }
    for (let j = 0; j < homeworks.length; j++) {
      averages[j] =
        homeworks[j].submissions.reduce((a, b) => a + b.point, 0) /
        homeworks[j].submissions.length;
    }
    res.status(200).send({ students, homeworks, averages });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.resetCode = async (req, res) => {
  const { classId } = req.params;
  console.log(classId);
  try {
    const data = await Class.findByIdAndUpdate(
      classId,
      { code: GenerateClassCode(6) },
      { new: true }
    );
    console.log(data);
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "class not found" });
    }
    res
      .status(200)
      .send({ statusCode: 200, data, message: "code is updated." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

exports.addPerson = async (req, res) => {
  try {
    let data;
    const { classId } = req.params;
    const { email } = req.body;
    if (!email) {
      return res.status(400).send({
        statusCode: 400,
        message: "email cannot empty",
      });
    } else {
      const person = await db.user.findOne({ email: email });
      if (!person) {
        return res
          .status(404)
          .send({ statusCode: 404, message: "No user founded" });
      }
      console.log(person);
      if (person.role == "user") {
        data = await Class.findOne({
          _id: classId,
          coachIds: { $in: [person._id] },
        });
        if (data) {
          return res
            .status(400)
            .send({ statusCode: 400, message: "Student are exist" });
        }
        data = await Class.findByIdAndUpdate(
          classId,
          { $push: { studentIds: person._id } },
          { new: true }
        );
      } else {
        data = await Class.findOne({
          _id: classId,
          coachIds: { $in: [person._id] },
        });
        if (data) {
          return res
            .status(400)
            .send({ statusCode: 400, message: "Coach are exist" });
        }
        data = await Class.findByIdAndUpdate(
          classId,
          { $push: { coachIds: person._id } },
          { new: true }
        );
      }
      if (!data) {
        return res
          .status(404)
          .send({ statusCode: 404, message: "class not found" });
      }
      res.status(200).send({
        statusCode: 200,
        data,
        message: ` ${person.role == "user" ? "student" : "coach"} is added.`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};
