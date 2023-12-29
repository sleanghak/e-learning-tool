const db = require("../models");
const io = require("../server");
const find = async (req, res) => {
  try {
    const reviews = await db.review.find().populate("user");
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
};

const create = async (req, res) => {
  const { text, rate } = req.body;
  console.log({ text, rate });
  const userId = req.userId;
  try {
    if (text.length < 0) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Review cannot empty." });
    }
    if (rate >= 0 && rate <= 5) {
      const newReview = db.review({
        user: userId,
        text: text,
        rate: rate,
      });
      const data = await newReview.save();
      const reviews = await db.review.find().populate("user");
      io.emit("all-reviews", reviews);
      return res
        .status(200)
        .send({ statusCode: 200, message: "review successful.", data });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ statusCode: 500, message: "Internal Server Error" });
  }
};
const update = async (req, res) => {};
const deleteReview = async (req, res) => {};

module.exports = {
  find,
  create,
  update,
  deleteReview,
};
