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
    code: {
      type: String,
      required: true,
      unique: true,
    },
    coverFileName: {
      type: String,
    },
    coachIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    studentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    courseIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
      },
    ],
    homeworkIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "homework",
      },
    ],
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    }, // true is active
    // time: {
    //   type: String,
    // },
    comments: [
      {
        _id: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        text: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    //status approve by admin
    status: {
      type: Boolean,
      default: false,
    },

    disable: {
      type: Boolean,
      default: false,
    },
    invoices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "invoice",
      },
    ],
  },
  { timestamps: true }
);

const Class = mongoose.model("class", schema);

module.exports = Class;
