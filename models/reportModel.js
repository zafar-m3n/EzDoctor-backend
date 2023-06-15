const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  doctorId: {
    type: String,
    required: true,
  },
  refNumber: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  dateOfReport: {
    type: Date,
    required: true,
  },
  hemoglobin: {
    type: Number,
  },
  wbc: {
    type: Number,
  },
  plateletCount: {
    type: Number,
  },
  glucose: {
    type: Number,
  },
  totalCholesterol: {
    type: Number,
  },
  triglycerides: {
    type: Number,
  },
  alt: {
    type: Number,
  },
  ast: {
    type: Number,
  },
  bun: {
    type: Number,
  },
  creatinine: {
    type: Number,
  },
  serumIron: {
    type: Number,
  },
  tibc: {
    type: Number,
  },
  ferritin: {
    type: Number,
  },
});

const reportModel = mongoose.model("reports", reportSchema);

module.exports = reportModel;
