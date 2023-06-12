const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
} = require("../controllers/doctorControllers");

const router = express.Router();

// Get a doctor || POST
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// Update Profile || POST
router.post("/updateProfile", authMiddleware, updateProfileController);

module.exports = router;
