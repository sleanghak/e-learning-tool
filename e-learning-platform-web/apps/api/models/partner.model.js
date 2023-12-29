const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    coverFileName: { type: String, required: true },
    description: {
      type: String,
    },
    disable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const PartnerModel = mongoose.model("partner", partnerSchema);

module.exports = PartnerModel;
