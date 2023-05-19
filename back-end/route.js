//Handle request

const express = require("express");
const router = express.Router();
const { postTask } = require("./controller");

router.post("/", postTask)

module.exports = router;
