const mongoose = require("mongoose");
const certificateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const CertificateModel = mongoose.model("certificate", certificateSchema);
module.exports = CertificateModel;
