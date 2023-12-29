const db = require("../models");
const Video = db.video;
const response = require("../utils/func/response");
const videoActions = require("../utils/func/action/videoActions");

exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ message: "Create Video cannot empty", statusCode: 400 });
      return;
    }
    const videoItem = new Video({
      fileName: req.body.fileName,
      coverFileName: req.body.coverFileName,
      duration: req.body.duration,
    });
    const data = await videoItem.save();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.find = (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    Video.find({ fileName: { $regex: ".*" + name + ".*" } }).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
      }
    });
  } else if (req.query.id) {
    const id = req.query.id;
    Video.findById(id).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
      }
    });
  } else if (req.query.page) {
    const page = req.query.page;
    let limit;
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    } else {
      limit = 20;
    }

    const skipIndex = (page - 1) * 20;
    console.log(limit, skipIndex);
    Video.find()
      .limit(Number(limit))
      .skip(skipIndex)
      .exec()
      .then((response) => {
        response.successResponse(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err });
      });
  } else {
    Video.find()
      .then((data) => response.successResponse(res, 200, data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};
exports.findNotAdmin = (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    Video.find({
      fileName: { $regex: ".*" + name + ".*" },
      disable: false,
    }).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        response.successResponse(res, 200, data);
      }
    });
  } else if (req.query.id) {
    const id = req.query.id;
    Video.find({ _id: id, disable: false }).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        res.status(200).send(data[0]);
      }
    });
  } else if (req.query.page) {
    const page = req.query.page;
    let limit;
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    } else {
      limit = 20;
    }
    const skipIndex = (page - 1) * 20;
    console.log(limit, skipIndex);
    Video.find({ disable: false })
      .limit(Number(limit))
      .skip(skipIndex)
      .exec()
      .then((response) => {
        response.successResponse(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err });
      });
  } else {
    Video.find({ disable: false })
      .then((data) => response.successResponse(res, 200, data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty!" });
  }
  const id = req.params.id;
  Video.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `cannot update video with ${id} is not match!`,
        });
      }
      return res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Video.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: `Not Found id ${id}` });
      }
      return res.status(200).send({ message: `Video was deleted!` });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.disable = (req, res) => {
  const id = req.params.id;
  Video.findByIdAndUpdate(
    id,
    { disable: true },
    { useFindAndModify: false, new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `cannot disable video with ${id} is not match!`,
        });
      }
      return res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.watchVideo = async (req, res) => {
  try {
    const userId = req.userId;
    const videoId = req.params.videoId;
    const { duration, isWatched } = req.body;
    const data = await videoActions.watchVideo(userId, {
      videoId,
      duration,
      isWatched,
    });
    if (data.success) {
      return res.status(200).send({ statusCode: 200, message: data.message });
    }
    return res.status(500).send({ statusCode: 500, message: data.message });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: error.message || "Internal Server Error",
    });
  }
};

exports.disregardVideo = async (req, res) => {
  try {
    const userId = req.userId;
    const videoId = req.params.videoId;
    const data = await videoActions.disregardVideo(userId, videoId);
    if (data.success) {
      return res.status(200).send({ statusCode: 200, message: data.message });
    }
    return res.status(500).send({ statusCode: 500, message: data.message });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: error.message || "Internal Server Error",
    });
  }
};
