const express = require("express");
const {newTransaction} = require("../controller/transaction.controller");
// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/", newTransaction);

module.exports = router;
