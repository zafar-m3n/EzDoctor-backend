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

// Auth || Post
router.post("/getUserData", authMiddleware, authController);

module.exports = router;
