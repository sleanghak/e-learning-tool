const mongoose = require("mongoose");

const studentWorkSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    name: {
      type: String,
      required: true,
    },
    students: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    description: {
      type: String,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "course",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    link: {
      type: String,
      validate: {
        validator: function(v) {
          if (v.startsWith("https://")) {
            return true;
          }
          return false;
        },
        message: "Link must start with https://",
      },
    },
    fileName: {
      // video demo link
      type: String,
    },
    images: [{ type: String }],
    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const StudentWorkModel = mongoose.model("student_work", studentWorkSchema);

module.exports = StudentWorkModel;
