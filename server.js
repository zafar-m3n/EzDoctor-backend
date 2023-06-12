const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Dotenv config
dotenv.config();

// MongoDB connection
connectDB();

// REST Object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// Port
const port = process.env.PORT || 8080;

// Listen port
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
