const express = require("express");
const otpController = require("../controllers/otpController");
const router = express.Router();

const { signup, login } = require("../controllers/Auth.js");
router.post("/signup", signup);
router.post("/login", login);
router.post("/sendotp", otpController.sendOTP);

module.exports = router;
