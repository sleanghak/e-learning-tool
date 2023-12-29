const response = require("./response");
const { v4: uuidv4 } = require("uuid");
const io = require("../../server");
/**
 *
 * @param {*} res : res in callback
 * @param {*} collectionName : result from a collection
 */

const deleteComment = async (req, res, collection, documentId, commentId) => {
  const userId = req.userId;
  let data;
  if (!userId) {
    return res.status(401).send({ message: "Unauthorize" });
  }
  if (!documentId || !commentId)
    return res
      .status(401)
      .send({ message: "documentId or commentId cannot empty" });

  try {
    data = await collection.findById(documentId);
    if (!data) return res.status(404).send({ message: "Not founded" });
    const comment = data.comments.find((comment) => comment._id == commentId);
    if (!comment)
      return res
        .status(404)
        .send({ statusCode: 404, message: "Comment is not found." });
    if (comment.user.toString() != userId)
      return res
        .status(401)
        .send({ statusCode: 401, message: "you cannot delete this comment" });

    const indexOf = data.comments
      .map((comment) => comment._id)
      .indexOf(commentId);
    await data.comments.splice(indexOf, 1);
    const resp = await data.save();
    res.status(200).send({ statusCode: 200, message: "Delete successfu." });
  } catch (error) {
    response.errorResponse(res, 500, error, undefined);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} collection
 * @param {*} id : id of collection
 * @param {*} comment
 */
const createReview = async (req, res, collection, id, comment) => {
  const userId = req.userId;
  try {
    if (Object.keys(req.body).length === 0)
      response.errorResponse(res, 400, undefined, "body is empty");
    if (comment.text.length < 1)
      response.errorResponse(
        res,
        400,
        undefined,
        "Comment should be atleast 1 character"
      );
    const lessons = await collection.findById(id);
    if (!lessons)
      response.errorResponse(res, 400, undefined, "Lesson is not found.");
    const newComment = {
      _id: uuidv4(),
      text: comment.text,
      rate: comment.rate,
      user: userId,
    };

    await lessons.comments.unshift(newComment);
    await lessons.save();

    res.status(200).send({ statusCode: 200, message: "succesful reviews" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

const addComment = async (req, res, collection, id, text) => {
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

    const lessons = await collection.findById(id);
    if (!lessons)
      response.errorResponse(res, 400, undefined, "Lesson is not found.");
    /**
     * TODO : get user by req.userId (token)
     */
    const newComment = {
      _id: uuidv4(),
      text: text,
      user: userId,
    };

    await lessons.comments.unshift(newComment);
    await lessons.save();
    res.status(200).send(lessons);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  deleteComment,
  createReview,
  addComment,
};
