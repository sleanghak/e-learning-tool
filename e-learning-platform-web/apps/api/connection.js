const mongoose = require("mongoose");
const db = require("./models");
const bcrypt = require("bcryptjs");
const { dataDaseUrl } = require("./utils/constant/baseUrl");
function initial() {
  db.user.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new db.user({
        name: "SabaiCode Admin",
        email: "sabaicode.dev@gmail.com",
        password: bcrypt.hashSync(process.env.DEFAULT_PWD, 8),
        role: "admin",
      }).save((err) => {
        if (err) {
          console.error("Error", err);
        }
        console.log("Added Admin Success.");
      });
    }
  });
  db.sequenceId.estimatedDocumentCount(async (err, count) => {
    if (!err && count == 0) {
      const student = new db.sequenceId({
        _id: "user",
        type: "user",
      });

      await student.save();
      const coach = new db.sequenceId({
        _id: "coach",
        type: "coach",
      });
      await coach.save();
      const admin = new db.sequenceId({
        _id: "admin",
        type: "admin",
      });
      await admin.save();
      console.log("Add Sequence ID successfully");
    }
  });
}
const connectDB = async () => {
  // mongodb connection string
  db.mongoose
    .connect(dataDaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((res) => {
      console.log("Successfully connect to MongoDB");
      initial();
    })
    .catch((err) => {
      console.error("Connection error", err);
      // process.exit()
    });
};
module.exports = connectDB;
