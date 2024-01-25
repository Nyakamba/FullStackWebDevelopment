const express = require("express");
const bcrypt = require("bcryptjs");
const cookieparser = require("cookie-parser");
const session = require("express-session");
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

//configure session
app.use(
  session({
    secret: "fewjih721wsady03474bviner",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

//static files
app.use(express.static("public"));

//pass json data
app.use(express.json());

//pass form data
app.use(express.urlencoded({ extended: true }));

//pass cookies
app.use(cookieparser());

//-----
//Cookies
//------
//send cookise to the client
app.get("/send-cookies", (req, res) => {
  //send cookie
  res.cookie("name", "John", {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
  });
  res.send("Cookie sent");
});

//auth middleware
const protected = (req, res, next) => {
  if (!req.session.loginUser) {
    return res.render("notAllowed");
  }
  next();
};
//routes
app.get("/", (req, res) => {
  //add login user

  console.log(req.session);
  res.render("index");
});

//loout
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

//get login form
app.get("/login", (req, res) => {
  res.render("login");
});

// Protected
app.get("/protected", protected, (req, res) => {
  //get cookies
  const user = req.cookies.username;
  res.render("protected", { user });
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
  //save the login user into session
  req.session.loginUser = userFound;
  res.redirect(`/profile/${userFound._id}`);
});

//logout
// app.get("/logout", (req, res) => {
//   //delete cookies
//   res.clearCookie("fullname");
//   res.clearCookie("username");
//   res.redirect("/login");
// });

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
  //store username and password inside the cookie
  res.cookie("username", user.username);
  res.cookie("fullname", user.fullName);
  res.redirect("/login");
});

//profile
app.get("/profile/:id", protected, async (req, res) => {
  //find user by ID
  const user = await User.findById(req.params.id);
  res.render("profile", { user });
});
//listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
