const response = require("../utils/func/response");
const commentFunc = require("../utils/func/commentFunc");
const io = require("../server");
const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const create = async (req, res) => {
  const { name, instruction, deadline, fileName } = req.body;
  const { classId } = req.params;
  const userId = req.userId;
  try {
    if (!classId || !userId)
      response.errorResponse(res, 401, undefined, "Cannot Assign Homework!");
    if (Object.keys(req.body).length === 0) {
      response.errorResponse(res, 400, undefined, "Body is empty.");
    }
    if (!name) response.errorResponse(res, 400, undefined, "name is required.");

    const homework = new db.classwork({
      name: name,
      instruction: instruction,
      deadline: deadline,
      user: userId,
      class: classId,
      fileName: fileName,
    });
    const data = await homework.save();
    await db.class.findByIdAndUpdate(classId, {
      $push: { homeworkIds: data._id },
    });

    // socket
    // List Homework by class
    const homeworks = await db.classwork.find({ class: classId });
    io.emit("list-homeworks", homeworks);

    res
      .status(200)
      .send({ data, statusCode: 200, message: "Create homework Successful" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
// TODO : get by student & by coach
const getByClass = async (req, res) => {
  const { classId } = req.params;
  try {
    const data = await db.classwork.find({ class: classId });

    if (!data) response.errorResponse(res, 400, undefined, "no data in record");
    response.successResponse(res, 200, data);
  } catch (error) {
    response.errorResponse(res, 500, error);
  }
};

const getHomework = async (req, res) => {
  // detail homework
  const { homeworkId, isCoach } = req.query;
  const userId = req.userId;
  if (homeworkId) {
    try {
      let submission;
      const data = await db.classwork
        .findById(homeworkId)
        .populate("submissions.user")
        .populate("comments.user");
      console.log(data, userId);
      if (data.submissions.length > 0) {
        submission = data.submissions.find(
          (item) => item.user._id.toString() === userId
        );
        if (!submission) {
          submission = {}; // no submission this user
        }
      }
      if (isCoach) {
        return res.status(200).send(data);
      }
      if (!data) return res.status(400).send({ message: "no data in record" });
      const newData = await { ...data };
      return res.status(200).send({
        ...newData._doc,
        submissions: submission,
      });
    } catch (error) {
      response.errorResponse(res, 500, error);
    }
  }
};
const getByStudent = async (req, res) => {
  // list homework
  const { classId } = req.params;
  const userId = req.userId;
  const { id } = req.query;
  // find by homework id
  if (id) {
    try {
      let submission;
      const data = await db.classwork.findById(id).populate("user");
      if (data.submissions.length > 0) {
        submission = data.submissions.find(
          (item) => item.user.toString() === userId
        );
        if (!submission) {
          submission = {}; // no submission this user
        }
      }
      if (!data) return res.status(400).send({ message: "no data in record" });
      const newData = { ...data };
      response.successResponse(res, 200, {
        ...newData._doc,
        submissions: submission,
      });
    } catch (error) {
      response.errorResponse(res, 500, error);
    }
  } else {
    // find by
    try {
      const data = await db.classwork.find({ class: classId });
      // TODO :: hidden submission for student
      if (!data)
        response.errorResponse(res, 400, undefined, "no data in record");
      response.successResponse(res, 200, data);
    } catch (error) {
      response.errorResponse(res, 500, error);
    }
  }
};

const update = async (req, res) => {
  const { classworkId, classId } = req.params;
  const body = req.body;
  try {
    const data = await db.classwork.findByIdAndUpdate(classworkId, body);
    if (!data)
      response.errorResponse(res, 200, undefined, `Not Found ${classworkId}`);

    // socket
    // List Homework by class
    const homeworks = await db.classwork.find({ class: classId });
    io.emit("list-homeworks", homeworks);

    res
      .status(200)
      .send({ data, statusCode: 200, message: "Homework update successful." });
  } catch (error) {
    response.errorResponse(res, 500, error);
  }
};
const deleteFunc = async (req, res) => {
  const { classworkId, classId } = req.params;
  try {
    const data = await db.classwork.findByIdAndDelete(classworkId);
    if (!data)
      response.errorResponse(res, 200, undefined, `Not Found ${classworkId}`);

    // socket
    // List Homework by class
    const homeworks = await db.classwork.find({ class: classId });
    io.emit("list-homeworks", homeworks);

    res
      .status(200)
      .send({ data, message: "Delete successful.", statusCode: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const submit = async (req, res) => {
  const { classworkId } = req.params;
  const { text, fileName } = req.body;
  const userId = req.userId;
  try {
    if (Object.keys(req.body).length === 0)
      response.errorResponse(res, 400, undefined, "body is empty");
    const classwork = await db.classwork.findById(classworkId);
    if (!classwork)
      response.errorResponse(res, 400, undefined, "Homework is not found.");
    const exist = classwork.submissions.find(
      (item) => item.user.toString() == userId
    );
    console.log(exist);
    if (exist) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "You are already submit" });
    }
    const newSubmission = {
      _id: uuidv4(),
      text: text,
      fileName: fileName,
      user: userId,
    };

    await classwork.submissions.unshift(newSubmission);
    await classwork.save();

    res.status(200).send({
      // data: classwork,
      statusCode: 200,
      message: "Successful Submit.",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

const deleteSubmission = async (req, res) => {
  const { classworkId, submissionId } = req.params;
  const userId = req.userId;
  if (!userId) {
    response.errorResponse(res, 401, undefined, "Cannot delete by this user.");
  }

  if (!classworkId || !submissionId)
    response.errorResponse(
      res,
      400,
      undefined,
      "classworkId or submissionId cannot empty"
    );
  try {
    const classworks = await db.classwork.findById(classworkId);
    if (!classworks)
      response.errorResponse(res, 400, undefined, "homework is not found.");
    const submissions = classworks.submissions.find(
      (submission) => submission._id == submissionId
    );

    if (!submissions)
      response.errorResponse(res, 400, undefined, "Submission is not found.");

    if (submissions.user.toString() != userId)
      response.errorResponse(
        res,
        401,
        undefined,
        "You cannot delete this Submission."
      );
    const indexOf = classworks.submissions
      .map((submission) => submission._id)
      .indexOf(submissionId);
    console.log(indexOf);
    await classworks.submissions.splice(indexOf, 1);
    const data = await classworks.save();
    res
      .status(200)
      .send({ data, statusCode: 200, message: "Success Delete Submit." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
const comment = async (req, res) => {
  const { classworkId } = req.params;
  const { text } = req.body;
  const userId = req.userId;

  try {
    if (!userId) response.errorResponse(res, 400, undefined, "No current User");
    if (Object.keys(req.body).length === 0)
      response.errorResponse(res, 400, undefined, "body is empty");
    if (text.length < 1)
      response.errorResponse(
        res,
        400,
        undefined,
        "Comment should be atleast 1 character"
      );
    const classwork = await db.classwork.findById(classworkId);
    if (!classwork)
      response.errorResponse(res, 400, undefined, "Homework is not found.");
    /**
     * TODO : get user by req.userId (token)
     */
    const newComment = {
      _id: uuidv4(),
      text: text,
      user: userId,
    };
    await classwork.comments.unshift(newComment);
    await classwork.save();

    // shocket on comment
    const allcomments = await db.classwork
      .findById(classworkId)
      // .populate("user")
      .populate("comments.user");
    io.emit("comment-on-homework", allcomments.comments);
    return res
      .status(200)
      .send({ statusCode: 200, message: "you comment on homework" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
const deleteComment = async (req, res) => {
  /**
   * TODO :: Delete this code instead by util function
   */
  const { classworkId, commentId } = req.params;
  const userId = req.userId;
  if (!userId) {
    response.errorResponse(res, 401, undefined, "Cannot delete by this user.");
  }
  if (!classworkId || !commentId)
    response.errorResponse(
      res,
      400,
      undefined,
      "classworkId or commentId cannot empty"
    );
  try {
    const classworks = await db.classwork.findById(classworkId);
    if (!classworks)
      response.errorResponse(res, 400, undefined, "homework is not found.");

    const comment = classworks.comments.find(
      (comment) => comment._id == commentId
    );

    if (!comment)
      response.errorResponse(res, 400, undefined, "Comment is not found.");

    if (comment.user.toString() != userId)
      response.errorResponse(
        res,
        401,
        undefined,
        "You cannot delete this comment."
      );
    commentFunc.deleteComment(res, classworks, commentId);
  } catch (error) {
    response.errorResponse(res, 500, error, undefined);
  }
};

const returnScore = async (req, res) => {
  const { classworkId, submissionId } = req.params;
  const { point } = req.body;
  try {
    if (!point)
      return res
        .status(400)
        .send({ statusCode: 400, message: "Please return student score." });
    if (Object.keys(req.body).length === 0)
      response.errorResponse(res, 400, undefined, "body is empty");
    //find homework
    const classwork = await db.classwork.findById(classworkId);
    if (!classwork)
      response.errorResponse(res, 400, undefined, "Homework is not found.");

    const submission = classwork.submissions.find(
      (submission) => submission._id == submissionId
    );
    if (!submission)
      return res
        .status(400)
        .send({ statusCode: 400, message: "Submission is not founded." });
    const indexOf = classwork.submissions
      .map((submission) => submission._id)
      .indexOf(submissionId); // find index of homework
    const newData = { ...submission };
    // console.log(newData._doc);
    classwork.submissions[indexOf] = { ...newData._doc, point: point };
    const resp = await classwork.save();
    res.status(200).send({ statusCode: 200, message: "Return Score success." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

module.exports = {
  create,
  getByClass,
  getByStudent,
  update,
  deleteFunc,
  submit,
  deleteSubmission,
  comment,
  deleteComment,
  returnScore,
  getHomework,
};
