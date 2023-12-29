const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class", // 2
    },
    hour: {
      type: Number,
      min: 0,
    },
    rate: {
      type: Number,
      default: 3.5,
    },
    date: {
      type: Date,
      default: new Date().toISOString(),
    },
  },
  { timestamps: true }
);

const CoachTime = mongoose.model("coach_time", schema);

module.exports = CoachTime;
