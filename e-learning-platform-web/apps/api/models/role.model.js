const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    actions: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
const RoleModel = mongoose.model("chat", roleSchema);
module.exports = RoleModel;

// TODO : Create a reference with user, to manage user role
