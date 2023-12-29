const db = require("../../../models");

const sendNotification = async (
  sender,
  recievers,
  type,
  message,
  { newsId, classId }
) => {
  try {
    let userIds = [];
    for (let i = 0; i < recievers.length; i++) {
      userIds.push(recievers[i]._id);
    }
    const newNotification = new db.notification({
      sender,
      recievers: userIds,
      type,
      message,
      newsId,
      classId,
    });
    const data = await newNotification.save();
    return { success: true, data };
  } catch (error) {
    return { error: true };
  }
};
const readNotification = async (notificationId, readerId) => {
  try {
    const notification = await db.notification.findById(notificationId);
    const isExist = notification.readBy.some(
      (item) => item.readerId == readerId
    );
    if (isExist) {
      return { error: true, message: "You have read this notification." };
    }
    const data = await db.notification.findByIdAndUpdate(notificationId, {
      $push: {
        readBy: { readerId },
      },
    });
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { error: true, message: error || "Internal Server Error" };
  }
};

const showNotificationWithStatus = (data, userId) => {
  let newData = [];
  data.forEach((item) => {
    if (item.readBy.some((i) => i.readerId == userId)) {
      newData.push({ ...item._doc, isRead: true });
    } else {
      newData.push({ ...item._doc, isRead: false });
    }
  });
  return newData;
};

module.exports = {
  sendNotification,
  readNotification,
  showNotificationWithStatus,
};
