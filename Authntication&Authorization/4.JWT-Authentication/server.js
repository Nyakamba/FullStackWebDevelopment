const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const getTokenFromHeaders = require("./utils/getTokenFromHeaders");
const verifyToken = require("./utils/verifyToken");
const isLogin = require("./middlewares/isLogin");

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
app.use(express.static(__dirname, +"/public"));

//pass json data
app.use(express.json());

//pass form data
app.use(express.urlencoded({ extended: true }));

//-----
//JWT
//------

//1.Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, "anykey", { expiresIn: "1h" });
};

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//loout
app.get("/logout", (req, res) => {
  res.redirect("/login");
});

//get login form
app.get("/login", (req, res) => {
  res.render("login");
});

// Protected
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

  res.json({
    status: "Success",
    username: userFound.username,
    fullName: userFound.fullName,
    token: generateToken(userFound._id),
  });
  //res.redirect(`/profile/${userFound._id}`);
});

//get Register
app.get("/register", (req, res) => {
  res.render("register");
});

//Register user
app.post("/register", async (req, res) => {
  const { fullName, username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    fullName,
    username,
    password: hashedPassword,
  });

  res.redirect("/login");
});

//profile
app.get("/profile/", isLogin, async (req, res) => {
  //1.get token from headers
  const token = getTokenFromHeaders(req);
  //2.verify token
  const decodedUser = verifyToken(token);

  //3.make request to fetch the decoded user
  const userDetails = await User.findById(decodedUser.id);

  res.json({
    mgs: "Welcome to your profile",
    status: "Success",
    user: userDetails,
  });
});
//listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
