const express = require("express");
const {saveUser, getUser} = require("../controller/User.controller");

// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/save-user", saveUser);
router.get("/:uid", getUser);

module.exports = router;
