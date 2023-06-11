const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
} = require("../controllers/adminControllers");

const router = express.Router();

// Get all users || GET
router.get("/getAllUsers", authMiddleware, getAllUsersController);

// Get doctors || GET
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;
