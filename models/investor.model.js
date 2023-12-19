const mongoose = require("mongoose");

const investorSchema = mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: true,
      trim: true,
    },
    investorFirstName: {
        type: String,
        required: true,
        trim: true,
    },
    investorLastName: {
        type: String,
        required: true,
        trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("investor", investorSchema);
