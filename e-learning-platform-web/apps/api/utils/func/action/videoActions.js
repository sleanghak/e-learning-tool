const db = require("../../../models");
//add userId to watchBy list
const watchVideo = async (userId, video) => {
  try {
    let data;
    data = await db.video.findOne({
      watchBy: {
        $elemMatch: { userId: userId },
      },
    });
    console.log(data);
    if (data) {
      data = await db.video.findByIdAndUpdate(video.videoId, {
        $set: {
          watchBy: {
            userId,
            duration: video.duration,
            isWatched: video.isWatched,
          },
        },
      });
      return {
        success: true,
        message: `You have updated watch video ${data.name}`,
      };
    } else {
      data = await db.video.findByIdAndUpdate(video.videoId, {
        $push: {
          watchBy: {
            userId,
            duration: video.duration,
            isWatched: video.isWatched,
          },
        },
      });
      return {
        success: true,
        message: `You have watched video ${data.name}`,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || "video action error",
    };
  }
};

//remove userId from watchBy list
const disregardVideo = async (userId, videoId) => {
  try {
    const data = await db.video.findByIdAndUpdate(videoId, {
      $pull: { watchBy: { userId: userId } },
    });
    if (!data) {
      return {
        success: false,
        message: "video not founded",
      };
    }
    return {
      success: true,
      message: `You have disregard video ${data.name}`,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || "video action error",
    };
  }
};

module.exports = {
  watchVideo,
  disregardVideo,
};
