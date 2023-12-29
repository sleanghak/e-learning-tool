const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    coverFileName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    requests: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        appoved: {
          type: Boolean,
          default: false,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        returnDate: {
          type: Date,
        },
        description: {
          type: String,
        },
      },
    ],
    // add more

    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Inventory = mongoose.model("inventory", schema);
module.exports = Inventory;
