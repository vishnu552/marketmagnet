const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("mongodb connection successfull");
    })
    .catch((error) => {
      console.log("mongodb not connected");
      console.error(error);
      process.exit(1);
    });
};
