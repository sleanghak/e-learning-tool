const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }, // who create this course
    name: {
      type: String,
      required: true,
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subject",
      required: true,
    },
    lessonIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lesson",
      },
    ],
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    coverFileName: {
      type: String,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    resources: [
      {
        _id: { type: String, required: true },
        name: {
          type: String,
          required: true,
        },
        fileName: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          emum: ["book", "slide"],
          default: "slide",
        },
      },
    ],
    curriculum: {
      type: String,
    },
    fileName: {
      type: String,
    },
    comments: [
      {
        _id: { type: String, required: true },
        user: { type: mongoose.Types.ObjectId, ref: "user" },
        text: { type: String, required: true },
        rate: { type: Number },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("course", schema);

module.exports = Course;
