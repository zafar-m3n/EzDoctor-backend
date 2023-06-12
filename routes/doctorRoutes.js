const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController } = require("../controllers/doctorControllers");

const router = express.Router();

// Get a doctor || POST
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

module.exports = router;
