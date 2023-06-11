const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

// Router Object
const router = express.Router();

// Routes
// Login || Post
router.post("/login", loginController);

// Register || Post
router.post("/register", registerController);

// Auth || Post
router.post("/getUserData", authMiddleware, authController);

// Apply Doctor || Post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;
