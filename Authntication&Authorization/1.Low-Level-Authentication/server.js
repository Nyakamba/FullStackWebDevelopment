const express = require("express");
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
  // get username and password
  let username = req.body.username;
  let userPassword = req.body.password;
  //find user inside mongodb
  const userFound = await User.findOne({ username });
  const password = await User.findOne({ password: userPassword });
  if (!userFound || !password) {
    return res.json({ msg: "Invalid  login credentials" });
  }
  console.log("login success");
  //API
  //res.json({ msg: "Login successful", userFound });
  res.redirect(`/profile/${userFound._id}`);
});

//get Register
app.get("/register", (req, res) => {
  res.render("register");
});

//Register user
app.post("/register", (req, res) => {
  //register user
  User.create({
    fullName: req.body.fullName,
    username: req.body.username,
    password: req.body.password,
  })
    .then((user) => {
      res.redirect("/login");
    })
    .catch((err) => console.log(err));
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
