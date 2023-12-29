const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    coverFileName: {
      type: String,
      default: "user_profile/default_profile.png", // path by aws s3
    },
    name: { type: String, required: true },
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },

    price_per_hour: {
      type: Number,
      default: 3,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "coach", "admin"],
    },
    major: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subject",
    },
    default_salary: {
      type: Number,
    },
    dateOfBirth: {
      type: Date,
    },
    bank: {
      type: String,
    },
    tels: [
      {
        type: String,
      },
    ],

    bio: {
      type: String,
    },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "class",
      },
    ],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
      },
    ],
    gender: {
      type: String,
      enum: ["female", "male", "other"],
    },
    coaches: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    invoices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "invoice",
      },
    ],
    fileName: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false, // first signup is false, it means user is not active , but it will be active after he/she join a class
    },
    disable: {
      type: Boolean,
      default: false,
    },
    resetToken: { type: String },
    expireToken: { type: Date },
    newMessagePopup: { type: Boolean, default: true },
    unreadMessage: { type: Boolean, default: false },
    unreadNotification: { type: Boolean, default: false },
  },

  { timestamps: true }
);

const User = mongoose.model("user", schema);
module.exports = User;
