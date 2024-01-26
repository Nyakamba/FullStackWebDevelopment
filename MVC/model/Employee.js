const mongoose = require("mongoose");

//schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  isMarried: { type: Boolean, required: true },
  salary: { type: Number, required: true },
});
