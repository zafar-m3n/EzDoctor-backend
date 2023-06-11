const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
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

// Notification-Get || Post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

// Notification-Delete || Post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

module.exports = router;
