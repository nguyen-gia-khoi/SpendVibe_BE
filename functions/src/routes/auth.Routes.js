const express = require("express");
const {saveUser, testFirestore} = require("../controller/User.controller");

// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/save-user", saveUser);

router.get("/", testFirestore);

module.exports = router;
