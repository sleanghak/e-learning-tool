const mongoose = require("mongoose");
const SequenceIdSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  currentValue: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "user",
    emum: ["user", "coach", "admin"],
  },
});
const SequenceIdModel = mongoose.model("sequenceId", SequenceIdSchema);
module.exports = SequenceIdModel;
