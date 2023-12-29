const db = require("../models");
const getChat = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    const user = await db.chat
      .findOne({ user: userId })
      .populate("chats.messageWith");
    let chatsToBeSent = [];
    if (!user) {
      return res.status(404).send({ message: "No Chats." });
    }
    if (user.chats.length > 0) {
      chatsToBeSent = await user.chats.map((chat) => ({
        messageWith: chat.messageWith._id,
        name: chat.messageWith.name,
        coverFileName: chat.messageWith.coverFileName,
        lastMessage: chat.messages[chat.messages.length - 1].msg,
        date: chat.messages[chat.messages.length - 1].date,
      }));
    }
    res.status(200).send(chatsToBeSent);
  } catch (error) {
    console.log(error);
    res
      .status(200)
      .send({ statusCode: 500, message: "Internal Server Error." });
  }
};

const deleteChat = async (req, res) => {
  try {
    const { userId } = req;
    const { messageWith } = req.params;

    await db.chat.findOneAndUpdate(
      { user: userId },
      { $pull: { chats: { messageWith } } }
    );

    return res.status(200).send({ statusCode: 200, message: "Chat deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ statusCode: 500, message: "Server Error" });
  }
};

module.exports = {
  getChat,
  deleteChat,
};
