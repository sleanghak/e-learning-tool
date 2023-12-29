const db = require("../models");
const Post = db.post;
const returnData = require("../utils/func/returnData");
const response = require("../utils/func/response");
const io = require("../server");
const { GenerateClassCode } = require("../utils/func/random");
const undefinedFunc = require("../utils/func/undefinedFunc");
const { v4: uuidv4 } = require("uuid");
exports.create = async (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    description: req.body.description,
    fileName: req.body.fileName,
    course: req.body.course,
    startDate: req.body.startDate,
    time: req.body.time,
  });

  try {
    await newPost.save();
    const posts = await Post.find({ disable: false });
    // socket
    io.emit("post", posts);
    res.status(200).send({ statusCode: 200, message: "Create successful." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: error.message || "Internal Server Error",
    });
  }
};

exports.findPost = async (req, res) => {
  try {
    const { id, page, disable } = req.query;
    let limit = 8;
    let pages;
    if (req.query.name) {
      const name = req.query.name;
      const data = await Post.find({
        name: { $regex: ".*" + name + ".*" },
        disable: undefinedFunc(disable),
      });

      if (!data) {
        return res.status(404).send({ message: `Not found` });
      }
      res
        .status(200)
        .send({ statusCode: 200, data, message: "Find successful." });
    } else if (id) {
      const data = await Post.findById(id).populate("course");
      if (!data) {
        return res.status(404).send({ statusCode: 404, message: `Not found` });
      }
      res.status(200).send(data);
    } else {
      if (Boolean(req.query.limit)) {
        limit = req.query.limit;
      }
      const total = await Post.find({
        disable: undefinedFunc(disable),
      }).countDocuments();
      // find amount of pages
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      const skipIndex = (page - 1) * 20;
      const data = await Post.find({ disable: undefinedFunc(disable) })
        .limit(Number(limit))
        .skip(skipIndex)
        .populate("course");
      response.pagination(res, page, pages, limit, data, total, "post");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  let data;
  if (!req.body) {
    return res
      .status(400)
      .send({ statusCode: 400, message: "Data to update cannot be empty!" });
  }
  const id = req.params.id;
  try {
    data = await Post.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
      new: true,
    });
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot update Post with ${id} is not match!`,
      });
    }
    // socket
    const posts = await returnData.returnDataActive(Post);
    io.emit("post", posts);
    res.status(200).send({ statusCode: 200, message: "Create Successful." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: '"Internal Server Error"' });
  }
};

exports.delete = async (req, res) => {
  let data;
  const id = req.params.id;
  try {
    data = await Post.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: `Not Found id ${id}` });
    }

    return res
      .status(200)
      .send({ statusCode: 200, message: `Post was deleted!` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.disable = async (req, res) => {
  let data;
  const id = req.params.id;
  const status = req.query.status;
  try {
    data = await Post.findByIdAndUpdate(
      id,
      { disable: undefinedFunc(status) },
      { useFindAndModify: false, new: true }
    );
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `cannot disable Post with ${id} is not match!`,
      });
    }
    let message = undefinedFunc(status) ? "disable." : "restore.";

    return res
      .status(200)
      .send({ statusCode: 200, message: `${data.name} is ${message}` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.addStudent = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;
  let data;
  if (!postId) {
    return res.status(400).send({ statusCode: 400, message: "No Post Id" });
  }
  if (!userId)
    return res.status(400).send({ statusCode: 400, message: "No User" });

  try {
    data = await Post.findById(postId);
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `Cannot add user to post with ${postId} is not match!`,
      });
    }
    const isExist = data.studentIds.find((item) => item.toString() == userId);
    if (isExist)
      return res
        .status(400)
        .send({ statusCode: 400, message: "You are already registered." });
    data = await Post.findByIdAndUpdate(
      postId,
      { $push: { studentIds: userId } },
      { useFindAndModify: false, new: true }
    );
    if (!data) {
      return res.status(404).send({
        statusCode: 404,
        message: `Cannot add user to post with ${postId} is not match!`,
      });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: "You are success register!", data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.postToClass = async (req, res) => {
  const { postId } = req.params;
  const { coachId } = req.body;

  try {
    if (!coachId) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Please select a coach." });
    }
    const coach = await db.user.findById(coachId);
    if (!coach) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "The user isn't exist." });
    }
    const post = await db.post.findById(postId);
    if (!post) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Not Found Post." });
    }

    const newClass = new db.class({
      name: post.name,
      desc: post.description,
      studentIds: post.studentIds,
      code: GenerateClassCode(6),
      coverFileName: post.fileName,
      coachIds: [coachId],
      startDate: post.startDate,
      courseIds: [post.course],
    });
    await newClass.save();
    // disable post
    await db.post.findByIdAndUpdate(postId, { disable: true });
    res.status(200).send({
      statusCode: 200,
      message: `Success Create Class by Post ${post.name}`,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.addContact = async (req, res) => {
  const { phone } = req.body;
  const { postId } = req.params;
  let data;
  try {
    // duplicate phone number
    data = await db.post.findOne({
      _id: postId,
      "tels.phone": { $in: [phone] },
    });
    if (data) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Phone Number is exist" });
    }
    const contact = {
      _id: uuidv4(),
      phone: phone,
    };
    data = await db.post.findByIdAndUpdate(
      postId,
      {
        $push: { tels: contact },
      },
      { new: true }
    );
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Post is not found." });
    }
    res
      .status(200)
      .send({ statusCode: 200, message: "SabaiCode will contact you soon." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
exports.removeContact = async (req, res) => {
  const { postId, contactId } = req.params;
  try {
    const data = await db.post.findByIdAndUpdate(postId, {
      $pull: { tels: { _id: contactId } },
    });
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Post is not found." });
    }
    res.status(200).send({ statusCode: 200, message: `Contact is removed.` });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

exports.updateStatusContact = async (req, res) => {
  const { postId, contactId } = req.params;
  const status = req.query.status || false;
  let data;
  try {
    //TODO, Update contact Id
    data = await db.post.findOneAndUpdate(
      { _id: postId, "tels._id": contactId },
      { $set: { "tels.$.status": undefinedFunc(status) } },
      {
        new: true,
      }
    );
    if (!data) {
      return res
        .status(404)
        .send({ statusCode: 404, message: "Contact is not found." });
    }
    res.status(200).send({ statusCode: 200, message: "Contact is updated." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};
