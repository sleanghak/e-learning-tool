const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    name: {
      type: String,
      required: true,
      message: "Name is required",
    },
    description: {
      type: String,
      required: true,
      message: "Description is required",
    },
    date: {
      type: Date,
    },
    link: {
      //link of newspaper or link video from youtube...
      type: String,
      validate: {
        validator: function(v) {
          if (v.startsWith("http://") || v.startsWith("https://")) {
            return true;
          }
          return false;
        },
        message: "Link must start with http:// or https://",
      },
    },
    type: {
      type: String,
      enum: ["press", "gallery", "video"],
      required: true,
    },
    subType: {
      type: String,
      enum: ["student_activity", "school_activity", "firechat"],
    },
    fileName: {
      type: String, // store video path
    },
    coverFileName: {
      type: String, // store image path
      required: true,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Press = mongoose.model("media", schema);
module.exports = Press;
