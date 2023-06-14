const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorControllers");

const router = express.Router();

// Get a doctor || POST
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// Update Profile || POST
router.post("/updateProfile", authMiddleware, updateProfileController);

// Get doctor info || POST
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// Appointments List || GET
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

// Update Status || POST
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;
