const mongoose = require("mongoose");

//connect to mongoose
mongoose
  .connect(
    "mongodb+srv://omwegaenock:XqpFEe3sJXtadKMe@cluster0.ogu2spg.mongodb.net/school?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch((error) => console.log(error.message));

//schema
const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
  courses: Array,
  isMarried: Boolean,
  age: Number,
});
//model

const Student = mongoose.model("Student", studentSchema);

//create a student
// Student.create({
//   name: "Emma",
//   city: "Kisumu",
//   courses: ["CS", "English"],
//   isMarried: false,
//   age: 25,
// })
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((err) => console.log(err));

//find all students

// Student.find()
//   .then((students) => console.log(students))
//   .then((err) => console.log(err));

//find all students whose age is 20 years

// Student.find({ age: 25 })
//   .then((students) => console.log(students))
//   .then((err) => console.log(err));

//find a single record

// Student.findById("65b0db5adb55186f6e81dce0")
//   .then((student) => console.log(student))
//   .then((err) => console.log(err));

// Student.findOne({ name: "Esther" })
//   .then((student) => console.log(student))
//   .then((err) => console.log(err));

//update a record

// Student.findOneAndUpdate({ name: "Emma" }, { age: 35 }, { new: true })
//   .then((student) => console.log(student))
//   .then((err) => console.log(err));

Student.findByIdAndUpdate(
  "65b0db5adb55186f6e81dce0",
  { age: 353 },
  { new: true }
)
  .then((student) => console.log(student))
  .then((err) => console.log(err));
