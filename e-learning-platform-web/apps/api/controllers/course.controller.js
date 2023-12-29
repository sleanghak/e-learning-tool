const db = require("../models");
const Course = db.course;
const response = require("../utils/func/response");
const comment = require("../utils/func/commentFunc");
const io = require("../server");
const { v4: uuidv4 } = require("uuid");
const { Item } = require("postman-collection");
const filterObjAttribute = require("../utils/func/filterObjAttribute");
const undefinedFunc = require("../utils/func/undefinedFunc");
const { baseUrl } = require("../utils/constant/baseUrl");
exports.create = async (req, res) => {
  const { name, subjectId, desc, price, coverFileName, fileName } = req.body;
  const userId = req.userId;
  try {
    if (!subjectId)
      return res
        .status(200)
        .send({ statusCode: 200, message: "Please select a class" });
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Create course cannot empty" });
    }

    const course = new Course({
      user: userId,
      name: name,
      subjectId: subjectId,
      desc: desc,
      price: price,
      coverFileName: coverFileName,
      fileName: fileName,
    });

    const data = await course.save();
    const subject = await db.subject.findByIdAndUpdate(subjectId, {
      $push: { courseIds: data._id },
    });
    //socket
    const courses = await db.course.find({ disable: false });
    io.emit("course", courses);

    res.status(200).send({
      statusCode: 200,
      message: "Create a course successful.",
      data: { data, subject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

exports.find = async (req, res) => {
  // const postmanRequest = new Item({
  //   name: "Get Course",
  //   request: {
  //     header: req.header,
  //     url: baseUrl,
  //     method: "GET",
  //     body: {
  //       mode: "raw",
  //       raw: JSON.stringify(req.body),
  //     },
  //   },
  // });
  const { page, id, disable } = req.query;
  let pages;
  let limit = req.query.limit || 10;
  let query = { disable: undefinedFunc(disable) };
  console.log(query);
  if (id) {
    Course.findById(id)
      .populate("lessonIds")
      .populate({
        path: "lessonIds",
        populate: {
          path: "videoIds",
        },
      })
      .populate("subjectId")
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Not found` });
        } else {
          response.successResponse(res, 200, data);
        }
      });
  } else if (page) {
    try {
      const total = await Course.countDocuments(query);

      // find amount of pages
      pages = Math.ceil(total / limit);
      const skipIndex = (page - 1) * limit;
      Course.find(query)
        .skip(skipIndex)
        .limit(Number(limit))
        .exec()
        .then((data) => {
          response.pagination(res, page, pages, limit, data, total, "course");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ message: err });
        });
    } catch (error) {
      response.errorResponse(res, 500, error);
    }
  } else {
    Course.find(query)
      .then((data) => response.successResponse(res, 200, data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.findNotAdmin = async (req, res) => {
  const { name, id, page } = req.query;
  let pages;
  if (name) {
    Course.find({ name: { $regex: ".*" + name + ".*" }, disable: false }).then(
      (data) => {
        if (!data) {
          res.status(404).send({ message: `Not found` });
        } else {
          response.successResponse(res, 200, data);
        }
      }
    );
  } else if (id) {
    Course.findById(id)
      .populate("lessonIds")
      .populate({
        path: "lessonIds",
        populate: {
          path: "videoIds",
        },
      })
      .populate("subjectId")
      .populate("comments.user")
      .then((data) => {
        if (!data) {
          return res.status(404).send({ message: `Not found` });
        } else {
          return res.status(200).send(data);
        }
      });
  } else if (Boolean(page)) {
    try {
      const total = await Course.find({ disable: false }).count();
      let limit = 10;
      if (Boolean(req.query.limit)) {
        limit = req.query.limit;
      }
      // find amount of pages
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      const skipIndex = (page - 1) * limit;
      const courses = await Course.find({ disable: false })
        .skip(skipIndex)
        .limit(Number(limit))
        .exec();
      response.pagination(res, page, pages, limit, courses, total, "course");
    } catch (error) {
      response.errorResponse(res, 500, error);
    }
  } else {
    Course.find({ disable: false })
      .then((data) => response.successResponse(res, 200, data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty!" });
  }
  const id = req.params.id;
  try {
    const data = await Course.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
      new: true,
    });
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot update course with ${id} is not match!`,
      });
    }

    res
      .status(200)
      .send({ statusCode: 200, message: `updated ${data.name} successful.` });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Course.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: `Not Found id ${id}` });
    }
    return res
      .status(200)
      .send({ statusCode: 200, message: `Course was deleted!` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.disable = async (req, res) => {
  const id = req.params.id;
  const status = req.query.status;

  try {
    const data = await Course.findByIdAndUpdate(
      id,
      { disable: undefinedFunc(status) },
      { new: true }
    );
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot disable course with ${id} is not match!`,
      });
    }

    let message = undefinedFunc(status) ? "disable." : "restore.";
    res.status(200).send({
      statusCode: 200,
      message: `${data.name} is ${message}`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.addLesson = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name, description, coverFileName } = req.body;

    const newLesson = new db.lesson({
      name,
      description,
      coverFileName,
    });
    const lesson = await newLesson.save();
    const course = await Course.findByIdAndUpdate(
      courseId,
      { $push: { lessonIds: lesson._id } },
      { useFindAndModify: false, new: true }
    );
    if (!course) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot add lesson to course with ${id} is not match!`,
      });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: `add ${name} lesson successful.` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};

exports.addComment = async (req, res) => {
  const courseId = req.params.courseId;
  const { text, rate } = req.body;
  if (!courseId) return res.status(400).send({ message: "Select a course." });
  if (text.length === 0)
    return res.status(400).send({ message: "comment cannot empty" });

  comment.createReview(req, res, Course, courseId, { text, rate });
};
exports.deleteComment = async (req, res) => {
  const { courseId, commentId } = req.params;
  await comment.deleteComment(req, res, Course, courseId, commentId);
};
exports.addFavorite = async (req, res) => {
  const userId = req.userId;
  const courseId = req.params.courseId;
  let user;
  try {
    // check if user have favorite course
    user = await db.user.findById(userId);
    if (!user) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot add course to user with ${userId} is not match!`,
      });
    }
    const isExist = user.courses.find(
      (course) => course.toString() === courseId
    );
    if (isExist) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "you are exist" });
    }
    user = await db.user.findByIdAndUpdate(
      userId,
      {
        $push: { courses: courseId },
      },
      {
        new: true,
      }
    );

    res
      .status(200)
      .send({ statusCode: 200, message: "add course successful." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.removeFavorite = async (req, res) => {
  const userId = req.userId;
  const courseId = req.params.courseId;
  let user;
  try {
    // check if user have favorite course
    user = await db.user.findById(userId);
    if (!user) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot remove course to user with ${userId} is not match!`,
      });
    }
    const isExist = user.courses.find(
      (course) => course.toString() === courseId
    );
    if (!isExist) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Course is not exist." });
    }
    user = await db.user.findByIdAndUpdate(
      userId,
      {
        $pull: { courses: courseId },
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .send({ statusCode: 200, message: "Remove course successful." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.findFavorite = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await db.user.findById(userId).populate("courses");
    if (!user) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot find user with ${userId} is not match!`,
      });
    }

    res.status(200).send(user.courses);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.addResource = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name, fileName, type } = req.body;
    const newResource = {
      _id: uuidv4(),
      name,
      fileName,
      type,
    };
    const course = await db.course.findByIdAndUpdate(
      courseId,
      {
        $push: { resources: newResource },
      },
      { new: true }
    );
    if (!course) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "course not found" });
    }
    res.status(200).send({
      statusCode: 200,
      message: "add resource successful.",
      data: course,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.removeResource = async (req, res) => {
  try {
    const { courseId, resourceId } = req.params;
    const course = await db.course.findByIdAndUpdate(
      courseId,
      {
        $pull: { resources: { _id: resourceId } },
      },
      { new: true }
    );
    if (!course) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "course not found" });
    }
    res.status(200).send(course.resources);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
