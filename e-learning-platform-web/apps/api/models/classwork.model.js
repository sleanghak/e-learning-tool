const mongoose = require("mongoose");

const studentWorkSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    instruction: {
      type: String,
      trim: true,
    },
    comments: [
      {
        _id: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        text: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    submissions: [
      {
        _id: { type: String, required: true },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        text: { type: String },
        fileName: { type: String },
        point: {
          type: Number,
          min: 0,
          max: 100,
        },
        date: { type: Date, default: Date.now },
      },
    ],
    deadline: {
      type: Date,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    fileName: {
      type: String,
    },

    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    },
  },
  { timestamps: true }
);

const StudentWork = mongoose.model("homework", studentWorkSchema);

module.exports = StudentWork;
