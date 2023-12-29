const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    invoiceId: {
      type: String,
      unique: true,
    },
    coverFileName: {
      type: String,
      required: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
      required: true,
    },
    studentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    ],
    partner: {
      type: String,
    },
    email: {
      type: String,
    },

    amount: {
      // amount of money
      type: Number, // $
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
    paids: [
      {
        _id: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
        description: {
          type: String,
        },
      },
    ],

    status: {
      type: String,
      enum: ["sent", "paid", "cancelled"],
      default: "sent",
    },

    disable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Invoice = mongoose.model("invoice", schema);
module.exports = Invoice;
