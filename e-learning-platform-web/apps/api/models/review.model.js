const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    text: { type: String, required: true },
    rate: { type: Number },
    date: { type: Date, default: Date.now },
    disable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ReviewModel = mongoose.model("review", reviewSchema);

module.exports = ReviewModel;
