const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("team", teamSchema);
