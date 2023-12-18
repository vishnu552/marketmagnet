const mongoose = require("mongoose");

const opportunitiesSchema = mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: true,
      trim: true,
    },
    CompanyLogo: {
      type: String,
      required: true,
      trim: true,
    },
    CompanyTag: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    Objective: {
      type: String,
      required: true,
    },
    ProblemStateMent: {
        type: String,
        required: true,
      
    },
    Solution: {
        type: String,
        required: true,
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("opportunities", opportunitiesSchema);
