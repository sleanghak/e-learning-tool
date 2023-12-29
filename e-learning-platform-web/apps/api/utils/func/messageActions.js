const db = require("../../models");
const { v4: uuidv4 } = require("uuid");
const loadMessages = async (userId, messageWith) => {
  try {
    const user = await db.chat
      .findOne({ user: userId })
      .populate("chats.messageWith");
    const chat = user.chats.find(
      (chat) => chat.messageWith._id.toString() === messageWith
    );
    if (!chat) {
      return { error: "No chat found." };
    }
    return { chat };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const sendMsg = async (userId, msgSendToUserId, msg) => {
  console.log("data send:", userId, msgSendToUserId, msg);
  try {
    // SENDER
    const user = await db.chat.findOne({ user: userId });
    // RECIEVER
    const msgSendToUser = await db.chat.findOne({ user: msgSendToUserId });
    // if (!msgSendToUser) throw "Cannot found receiver.";
    const newMsg = {
      _id: uuidv4(),
      sender: userId,
      reciever: msgSendToUserId,
      msg,
      date: Date.now(),
    };
    // Sender
    // console.log("USER===", user);
    const previousChat = user.chats.find(
      (chat) => chat.messageWith.toString() === msgSendToUserId
    );
    if (previousChat) {
      previousChat.messages.push(newMsg);
      await user.save();
    } else {
      const newChat = {
        messageWith: msgSendToUserId,
        messages: [newMsg],
      };
      user.chats.unshift(newChat);
      await user.save();
    }
    console.log("USER Receiver===", msgSendToUser);
    //receiver
    const previousChatReciever = msgSendToUser.chats.find(
      (chat) => chat.messageWith.toString() === userId
    );
    if (previousChatReciever) {
      previousChatReciever.messages.push(newMsg);
      await msgSendToUser.save();
    } else {
      const newChat = {
        messageWith: userId,
        messages: [newMsg],
      };
      msgSendToUser.chats.unshift(newChat);
      await msgSendToUser.save();
    }

    return { newMsg };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const setMsgToUnread = async (userId) => {
  try {
    const user = await db.user.findById(userId);
    if (!user.unreadMessage) {
      user.unreadMessage = true;
      await user.save();
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

const deleteMsg = async (userId, messageWith, messageId) => {
  try {
    const user = await db.chat.findOne({ user: userId });
    const chat = user.chats.find(
      (chat) => chat.messageWith.toString() == messageWith
    );

    console.log("chat:", messageWith, user, chat);
    if (!chat) return { success: false };
    const messageToDelete = chat.messages.find(
      (message) => message._id.toString() == messageId
    );

    console.log("messageDelete:", messageToDelete);

    if (!messageToDelete) return { success: false };

    if (messageToDelete.sender.toString() !== userId) {
      return { success: false };
    }
    const indexOf = chat.messages
      .map((message) => message._id.toString())
      .indexOf(messageToDelete._id.toString());
    console.log("IndexOF", indexOf);
    await chat.messages.splice(indexOf, 1);
    await user.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
module.exports = { loadMessages, sendMsg, setMsgToUnread, deleteMsg };
