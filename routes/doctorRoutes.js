const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorControllers");

const router = express.Router();

// Get a doctor || POST
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// Update Profile || POST
router.post("/updateProfile", authMiddleware, updateProfileController);

// Get doctor info || POST
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

module.exports = router;
