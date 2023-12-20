const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const OTP = require("../models/otp.model.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, otp } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        message: "All Fields are Required",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists. Please use another Email.",
        success: "false",
      });
    }
    const otpResponse = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    if (otpResponse.length === 0 || otp !== otpResponse[0].otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password and Confirm Password not Match",
        success: "false",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // jwt.sign({ id: user._id, email }, process.env.JWT_SECRET),
    //   {
    //     expiresIn: "24h",
    //   };
    // user.token = token;
    // user.password = undefined;

    return res.status(201).json({
      user,
      message: "user registered successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({
        message: "All Fields are Required",
        success: false,
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (user && isPasswordMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
        message: "user Login successfull",
      });
    } else {
      return res.status(400).json({
        message: "Password incorrect",
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User log In Failed. Please try again.",
    });
  }
};
