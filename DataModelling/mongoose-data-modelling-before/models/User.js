const mongoose = require("mongoose");

//user schema - one-one
const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
