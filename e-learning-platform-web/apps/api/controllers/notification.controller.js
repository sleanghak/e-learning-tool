const db = require("../models");
const response = require("../utils/func/response");
const notification = require("../utils/func/action/notificationActions");
const getNotification = async (req, res) => {
  try {
    const userId = req.userId;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    let pages;
    const notifications = await db.notification
      .find({
        recievers: { $in: [userId] },
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("sender");
    const total = await db.notification.countDocuments({
      recievers: { $in: [userId] },
    });
    pages = Math.ceil(total / limit);
    const newNotifications = notification.showNotificationWithStatus(
      notifications,
      userId
    );
    const readNotifications = await db.notification.find({
      recievers: { $in: [userId] },
      readBy: { $elemMatch: { readerId: userId } },
    });

    response.pagination(
      res,
      page,
      pages,
      limit,
      newNotifications,
      total,
      "notification",
      { notifications: notifications.length - readNotifications.length }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: error.message || "Internal Server Error",
    });
  }
};

const readNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const userId = req.userId;
    const data = await notification.readNotification(notificationId, userId);
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: null });
    }
    if (data.success) {
      return res.status(200).send({ statusCode: 200, message: null });
    } else {
      res.status(500).send({
        statusCode: 500,
        message: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = { getNotification, readNotification };
