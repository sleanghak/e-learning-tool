const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    recievers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    type: {
      type: String,
      enum: ["submission", "create_class"],
      content: {
        type: String,
      },
    },
    newsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "news",
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    },
    message: {
      type: String,
      required: true,
    },
    readBy: [
      {
        readerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        read_at: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("notification", NotificationSchema);
