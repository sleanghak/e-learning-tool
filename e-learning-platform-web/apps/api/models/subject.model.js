const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    coverFileName: {
      type: String,
      unique: true,
    },
    courseIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
      },
    ],
    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Subject = mongoose.model("subject", schema);
module.exports = Subject;
