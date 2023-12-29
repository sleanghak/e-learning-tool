const db = require("../models");
const Lesson = db.lesson;
const { v4: uuidv4 } = require("uuid");
const response = require("../utils/func/response");
const commentFunc = require("../utils/func/commentFunc");
const postmanCollection = require("./../postman");
const { Request } = require("./../postman/request");

/**
 *
 * @param {*} req
 * @param {*} res
 */

postmanCollection.items.add({
  name: "lesson",
  item: [
    Request("create lesson", "POST", "/lesson", {
      name: "lesson name",
      description: "Description of lesson",
      coverFileName: "pathOfFile",
    }),
    Request(
      "get lesson",
      "GET",
      "/lesson?id=lessonID&name=lessonName&limit=10&page=2"
    ),
  ],
});
const create = async (req, res) => {
  try {
    const { name, description, coverFileName } = req.body;
    const lessonItem = new Lesson({
      name,
      description,
      coverFileName,
    });
    const lesson = await lessonItem.save();
    res.status(200).send({
      statusCode: 200,
      message: `Create ${name} Lesson Successful.`,
      _id: lesson._id,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

const find = async (req, res) => {
  const { id, name } = req.query;
  const page = req.query.page || 1;
  let limit = req.query.limit || 20;
  let pages;
  if (name) {
    const name = req.query.name;
    const data = await Lesson.find({ name: { $regex: ".*" + name + ".*" } });
    if (!data) {
      res.status(404).send({ message: `Not found` });
    }
    return res.status(200).send(data);
  } else if (id) {
    const data = await Lesson.findById(id)
      .populate("videoIds")
      .populate("comments.user");
    if (!data) {
      res.status(404).send({ message: `Not found` });
    }
    return res.status(200).send(data);
  } else if (req.query.page) {
    const skipIndex = (page - 1) * 20;

    const total = await Lesson.countDocuments();
    // find amount of pages
    if (total % limit == 0) {
      pages = total / limit;
    } else {
      pages = parseInt(total / limit) + 1;
    }
    const data = await Lesson.find().limit(Number(limit)).skip(skipIndex);

    response.pagination(res, page, pages, limit, data, total, "lesson");
  } else {
    Lesson.find()
      .then((lessons) => {
        return res.status(200).json(lessons);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
        return;
      });
  }
};

const findNotAdmin = (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    Lesson.find({ name: { $regex: ".*" + name + ".*" }, disable: false }).then(
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
    Lesson.find({ _id: id, disable: false }).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
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
    Lesson.find({ disable: false })
      .limit(Number(limit))
      .skip(skipIndex)
      .exec()
      .then((data) => {
        response.successResponse(res, 200, data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err });
        return;
      });
  } else {
    Lesson.find({ disable: false })
      .then((data) => {
        response.successResponse(res, 200, data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
        return;
      });
  }
};

const update = (req, res) => {
  const id = req.params.id;
  Lesson.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          statusCode: 404,
          message: `cannot update lesson with ${id} is not match!`,
        });
      }
      return res.send({
        statusCode: 200,
        message: "Update lesson successful.",
      });
    })
    .catch((err) => {
      consol.elog(err);
      res
        .status(500)
        .send({ statusCode: 500, message: "Internal Server Error." });
    });
};

const deleteLesson = (req, res) => {
  const id = req.params.id;
  Lesson.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ statusCode: 404, message: `Not Found id ${id}` });
      }
      return res
        .status(200)
        .send({ statusCode: 200, message: `${data.name} was deleted!` });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message, statusCode: 500 });
    });
};

const disable = (req, res) => {
  const id = req.params.id;
  Lesson.findByIdAndUpdate(
    id,
    { disable: true },
    { useFindAndModify: false, new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          statusCode: 404,
          message: `cannot disable lesson with ${id} is not match!`,
        });
      }
      return res
        .status(200)
        .send({ statusCode: 200, message: `Lesson was disabled!` });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ statusCode: 500, message: "Internal Server Error." });
      return;
    });
};

const addVideo = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { name, coverFileName, fileName, duration, description } = req.body;
    const newVideo = new db.video({
      name,
      coverFileName,
      fileName,
      duration,
      description,
    });
    const video = await newVideo.save();
    const lesson = await Lesson.findByIdAndUpdate(
      lessonId,
      { $push: { videoIds: video._id } },
      { new: true }
    );
    if (!lesson) {
      return res.status(404).send({
        message: `cannot add video to lesson with ${id} is not match!`,
      });
    }
    return res.send({
      statusCode: 200,
      message: `Add video successful`,
      data: lesson,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, statusCode: 500 });
  }
};

const addComment = async (req, res) => {
  const { lessonId } = req.params;
  const { text } = req.body;
  const userId = req.userId;
  try {
    if (Object.keys(req.body).length === 0)
      response.errorResponse(res, 400, undefined, "body is empty");
    if (text.length < 1)
      response.errorResponse(
        res,
        400,
        undefined,
        "Comment should be atleast 1 character"
      );

    const lessons = await Lesson.findById(lessonId);
    if (!lessons)
      res
        .status(400)
        .send({ statusCode: 400, message: "Lesson is not found." });
    const newComment = {
      _id: uuidv4(),
      text: text,
      user: userId,
    };

    await lessons.comments.unshift(newComment);
    await lessons.save();
    res.status(200).send({ statusCode: 200, message: "Comment successful." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

const deleteComment = async (req, res) => {
  const { lessonId, commentId } = req.params;
  const userId = req.userId;
  if (!userId) {
    response.errorResponse(res, 401, undefined, "Cannot Delete User");
  }
  if (!lessonId || !commentId)
    response.errorResponse(
      res,
      400,
      undefined,
      "lessonId or commentId cannot empty"
    );
  try {
    const lessons = await Lesson.findById(lessonId);
    if (!lessons)
      return res
        .status(404)
        .send({ statusCode: 400, message: "Lesson is not found." });

    const comment = lessons.comments.find(
      (comment) => comment._id == commentId
    );
    if (!comment)
      return res
        .status(404)
        .send({ statusCode: 400, message: "Comment is not found." });

    if (comment.user.toString() != userId)
      return res
        .status(401)
        .send({ statusCode: 401, message: "You cannot delete this comment." });
    commentFunc.deleteComment(res, lessons, commentId);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

module.exports = {
  create,
  find,
  findNotAdmin,
  update,
  deleteLesson,
  disable,
  addVideo,
  addComment,
  deleteComment,
};
