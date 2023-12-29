const mongoose = require("mongoose");

const schema = mongoose.Schema(
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

      required: true,
    },
    coverFileName: {
      type: String,
    },
    duration: {
      type: Number, // minutes
    },
    numOfViewed: {
      type: Number,
      default: 0,
    },
    numOfLiked: {
      type: Number,
      default: 0,
    },
    numOfShared: {
      type: Number,
      default: 0,
    },
    watchBy: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        duration: { type: Number, default: 0 }, // add duration of video watched
        isWatched: { type: Boolean, default: false }, // false , means user does not watch it yet.
        watchedAt: { type: Date, default: Date.now },
      },
    ],
    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Video = mongoose.model("video", schema);
module.exports = Video;
