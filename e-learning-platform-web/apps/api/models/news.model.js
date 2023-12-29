const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    coverFileName: { type: String, required: true },
    partner: { type: mongoose.Schema.Types.ObjectId, ref: "partner" },
    type: {
      type: String,
      enum: ["scholarship", "job"],
    },
    submissions: [
      {
        _id: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        gender: { type: String, enum: ["male", "female"] },
        currentJob: { type: String, emum: ["student", "employee"] },
        yearth: { type: Number }, // when current job as student
        where: { type: String }, //where of the job
        major: { type: String },
        dateOfBirth: { type: Date },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String },
        whyDoYouWantToJoin: { type: String },
        firstEssay: { type: String },
        secondEssay: { type: String },
        coverFileName: { type: String },
        ifChecked: { type: Boolean, default: false },
        ifAccepted: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    disable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const NewsModel = mongoose.model("news", newsSchema);

module.exports = NewsModel;
