const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileParser = require("express-multipart-file-parser");

const customerRoutes =require("./src/routes/auth.Routes");
dotenv.config();
const app = express();

app.use(express.json({limit: "10mb"}));
app.use(cors());
app.use(fileParser);
app.use(bodyParser.urlencoded({extended: true}));

app.use("/v1/customer", customerRoutes);

app.use((error, _req, res, _next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({message});
});

app.get("/test", (req, res) => {
  res.json({message: "Hello World! Backend is connected successfully."});
});


module.exports = app;
