const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    fileName: {
      type: String,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    studentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    tels: [
      {
        _id: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        status: {
          //contact status false:uncontacted , true:contacted
          type: Boolean,
          default: false,
        },
      },
    ],
    time: {
      type: String,
      // required:true
    },
    endDate: {
      type: Date,
    },
    startDate: {
      type: Date,
      required: true,
    },

    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;
