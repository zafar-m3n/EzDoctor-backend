const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userControllers");

// Router Object
const router = express.Router();

// Routes
// Login || Post
router.post("/login", loginController);

// Register || Post
router.post("/register", registerController);

module.exports = router;
