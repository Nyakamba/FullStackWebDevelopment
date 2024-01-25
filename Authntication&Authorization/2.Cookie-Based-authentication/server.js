const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
//connect to mongoose
mongoose
  .connect(
    "mongodb+srv://omwegaenock:XqpFEe3sJXtadKMe@cluster0.ogu2spg.mongodb.net/low-level-auth?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  password: String,
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg",
  },
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

//get login form
app.get("/login", (req, res) => {
  res.render("login");
});

//get protected
app.get("/protected", (req, res) => {
  res.render("protected");
});

//login logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //1.check if username exists
  const userFound = await User.findOne({ username });
  if (!userFound) {
    return res.json({ msg: "Invalid login credentials" });
  }
  //2.check if passowrd is valid
  const isPassowrdValid = await bcrypt.compare(password, userFound.password);
  if (!isPassowrdValid) {
    return res.json({ msg: "Invalid login credentials" });
  }
  res.redirect(`/profile/${userFound._id}`);
});

//get Register
app.get("/register", (req, res) => {
  res.render("register");
});

//Register user
app.post("/register", async (req, res) => {
  const { fullName, username, password } = req.body;
  //1.create a salt
  const salt = await bcrypt.genSalt(10);
  //2.hash user password
  const hashedPassword = await bcrypt.hash(password, salt);
  //register user
  await User.create({
    fullName,
    username,
    password: hashedPassword,
  });
});

//profile
app.get("/profile/:id", async (req, res) => {
  //find user by ID
  const user = await User.findById(req.params.id);
  res.render("profile", { user });
});
//listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
