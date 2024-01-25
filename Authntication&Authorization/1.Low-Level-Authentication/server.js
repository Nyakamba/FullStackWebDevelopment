const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
//connect to mongoose
mongoose
  .connect(
    "mongodb+srv://inovotek:Y8MtpWcYhID3JlwS@mongodb-demo.lqjq2rn.mongodb.net/school?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch(err => console.log(err.message));

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  password: Array,
});
//model

const User = mongoose.model("User", userSchema);
//view engine setup ejs
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));

//pass json data
app.use(express.json());

//pass form data
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//login
app.get("/login", (req, res) => {
  res.render("login");
});

//Register
app.get("/register", (req, res) => {
  res.render("register");
});

//profile
app.get("/profile", (req, res) => {
  res.render("profile");
});
//listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
