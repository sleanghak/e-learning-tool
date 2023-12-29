const db = require("../models");
const CoachTime = db.coach_time;
const response = require("../utils/func/response");
const io = require("../server");
const totalAllHours = require("../utils/func/totalAllHours");
exports.create = async (req, res) => {
  const userId = req.userId;
  if (!userId) response.errorResponse(res, 400, undefined, "No current user");
  if (!req.body) {
    res
      .status(400)
      .send({ statusCode: 400, message: "Create Class cannot empty" });
    return;
  }
  try {
    const coach_time = new CoachTime({
      user: userId,
      class: req.body.class,
      hour: req.body.hour,
      date: req.body.date,
    });
    console.log({
      user: userId,
      class: req.body.class,
      hour: req.body.hour,
      date: req.body.date,
    });
    const data = await coach_time.save();
    // socket by coach
    const d = new Date();
    year = d.getFullYear();
    month = d.getMonth();
    const start_date = new Date(`${year}-${month + 1}-1`);
    const end_date = new Date(`${year}-${Number(month) + 2}-1`);
    const coach_attendances = await CoachTime.find({
      user: userId,
      date: {
        $gt: start_date.toISOString(),
        $lte: end_date.toISOString(),
      },
    })
      // .populate("user")
      .populate("class")
      .populate("class.courseIds")
      .exec();
    io.emit("attendance-coach", {
      data: coach_attendances,
      total: totalAllHours(coach_attendances),
    });
    return res.status(200).send({
      statusCode: 200,
      data,
      message: "Create attendance successful.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: error.message || "some error occured while create Class",
    });
  }
};

exports.findByAdmin = async (req, res) => {
  let data;
  //todo : total hour and list by coach
  const { coachId, month, year } = req.query;

  try {
    const start_date = new Date(`${year}-${month}-1`);
    const end_date = new Date(`${year}-${Number(month) + 1}-1`);

    if (coachId && month && year) {
      data = await CoachTime.find({
        user: coachId,
        date: {
          $gt: start_date.toISOString(),
          $lte: end_date.toISOString(),
        },
      })
        .populate("class")
        .populate("class.courseIds")
        .exec();
      const coach = await db.user.findById(coachId);
      if (!data) {
        return response.errorResponse(res, 404, undefined, "No data in data");
      }
      return res
        .status(200)
        .send({ statusCode: 200, data, total: totalAllHours(data), coach });
    }
    data = await CoachTime.find()
      .populate("user")
      .populate("class")
      .exec();
    if (!data) {
      return response.errorResponse(res, 404, undefined, "No data in data");
    }
    return response.successResponse(res, 200, data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
exports.findByCoach = async (req, res) => {
  const { month, year } = req.query;
  const coachId = req.userId;

  // TODO : handle date for monthly

  const start_date = new Date(`${year}-${month}-1`);
  const end_date = new Date(`${year}-${Number(month) + 1}-1`);
  console.log(start_date.toISOString(), end_date.toISOString());
  if (!Boolean(coachId))
    return response.errorResponse(
      res,
      400,
      undefined,
      "No current user(coach)"
    );
  if (month && year) {
    const data = await CoachTime.find({
      user: coachId,
      date: {
        $gt: start_date.toISOString(),
        $lte: end_date.toISOString(),
      },
    })
      .populate("class")
      .populate("class.courseIds")
      .exec();
    if (!data) {
      return response.errorResponse(res, 404, undefined, "No data in data");
    }
    return res
      .status(200)
      .send({ statusCode: 200, data, total: totalAllHours(data) });
  } else {
    const data = await CoachTime.find({
      user: coachId,
    })
      .populate("class")
      .populate("class.courseIds")
      .exec();
    if (!data) {
      return response.errorResponse(res, 404, undefined, "No data in data");
    }

    return res
      .status(200)
      .send({ statusCode: 200, data, total: totalAllHours(data) });
  }
};

exports.update = async (req, res) => {
  try {
    const userId = req.userId;
    if (!req.body) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Data to update cannot be empty!" });
    }
    const id = req.params.id;
    const data = await CoachTime.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });

    if (!data) {
      return res.status(404).send({
        statusCode: 401,
        message: `cannot update user with ${id} is not match!`,
      });
    }
    // socket by coach
    const d = new Date();
    year = d.getFullYear();
    month = d.getMonth();
    const start_date = new Date(`${year}-${month + 1}-1`);
    const end_date = new Date(`${year}-${Number(month) + 2}-1`);
    const coach_attendances = await CoachTime.find({
      user: userId,
      date: {
        $gt: start_date.toISOString(),
        $lte: end_date.toISOString(),
      },
    })
      // .populate("user")
      .populate("class")
      .populate("class.courseIds")
      .exec();
    io.emit("attendance-coach", {
      data: coach_attendances,
      total: totalAllHours(coach_attendances),
    });
    return res.status(200).send({
      statusCode: 200,
      message: `Success update attendance`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: "Internal Server Error" });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  try {
    const data = await CoachTime.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).send({ message: `Not Found id ${id}` });
    }
    // socket by coach
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    const start_date = new Date(`${year}-${month + 1}-1`);
    const end_date = new Date(`${year}-${Number(month) + 2}-1`);
    const coach_attendances = await CoachTime.find({
      user: userId,
      date: {
        $gt: start_date.toISOString(),
        $lte: end_date.toISOString(),
      },
    })
      // .populate("user")
      .populate("class")
      .populate("class.courseIds")
      .exec();
    io.emit("attendance-coach", {
      data: coach_attendances,
      total: totalAllHours(coach_attendances),
      year,
      month,
    });
    return res
      .status(200)
      .send({ statusCode: 200, message: `Attendance was deleted!` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error || "Internal Server Error" });
  }
};
