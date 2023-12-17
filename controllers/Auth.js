const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    console.log("BODY " + req.body);
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(403).json({
        message: "All Fields are Required",
        success: false,
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password and Confirm Password not Match",
        success: "false",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "Email already exists. Please use another Email.",
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

    return res.status(200).json({
      data: user,
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
