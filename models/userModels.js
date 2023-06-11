const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  nic: {
    type: String,
    required: [true, "NIC is required"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
