const mongoose = require("mongoose");
const contactHistorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    knownBy: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false, // don't contact yet
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const contactHistoryModel = mongoose.model(
  "contact_history",
  contactHistorySchema
);

module.exports = contactHistoryModel;
