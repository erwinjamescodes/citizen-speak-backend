const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    mobileNumber: {
      type: String,
      require: true,
    },
    emailAddress: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    resolution: {
      type: String,
      require: true,
    },
    resolutionDate: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);
