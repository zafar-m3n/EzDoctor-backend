const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Dotenv config
dotenv.config();

// REST Object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server Running",
  });
});

// Port
const port = process.env.PORT || 8080;

// Listen port
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
