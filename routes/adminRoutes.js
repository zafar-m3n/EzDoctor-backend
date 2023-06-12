const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminControllers");

const router = express.Router();

// Get all users || GET
router.get("/getAllUsers", authMiddleware, getAllUsersController);

// Get doctors || GET
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// Doctor Account Status || POST
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
