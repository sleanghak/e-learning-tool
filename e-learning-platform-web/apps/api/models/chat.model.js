const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  chats: [
    {
      messageWith: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      messages: [
        {
          _id: { type: String, require: true },
          msg: { type: String, required: true },
          sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
          receiver: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
          date: { type: Date },
        },
      ],
    },
  ],
});
const ChatModel = mongoose.model("chat", chatSchema);
module.exports = ChatModel;
