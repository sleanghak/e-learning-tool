const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverFileName: {
      type: String,
    },
    videoIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    comments: [
      {
        _id: { type: String, required: true },
        user: { type: mongoose.Types.ObjectId, ref: "user" },
        text: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],

    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Lesson = mongoose.model("lesson", schema);
module.exports = Lesson;
