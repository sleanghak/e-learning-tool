const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },
    phone: {
      type: String,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subject",
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("contact_us", messageSchema);

module.exports = MessageModel;
