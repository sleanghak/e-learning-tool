const db = require("../models");

const adminDashboard = async (req, res) => {
  try {
    const videos = await db.video.find().countDocuments();
    const lessons = await db.lesson.find().countDocuments();
    const courses = await db.course.find().countDocuments();
    const subjects = await db.subject.find().countDocuments();
    const users = await db.user
      .find({ role: "user", disable: false })
      .countDocuments();
    const coaches = await db.user.find({ role: "coach" }).countDocuments();
    const past_students = await db.user
      .find({ role: "user", disable: true })
      .countDocuments();
    const posts = await db.post.find({ disable: false }).countDocuments();
    const presentClasses = await db.class
      .find({ isActive: true })
      .countDocuments();
    const pastClasses = await db.class
      .find({ isActive: false })
      .countDocuments();

    return res.status(200).send({
      posts,
      videos,
      lessons,
      courses,
      subjects,
      users,
      coaches,
      past_students,
      presentClasses,
      pastClasses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
};

module.exports = {
  adminDashboard,
};
