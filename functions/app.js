const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileParser = require("express-multipart-file-parser");



dotenv.config();
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(fileParser);
app.use(bodyParser.urlencoded({ extended: true }));



app.use((error, _req, res, _next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    res.status(statusCode).json({ message });
  });
  
  module.exports = app;