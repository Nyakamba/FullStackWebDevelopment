const express = require("express");
const userRouter = require("./routes/usersRouter");
const postRouter = require("./routes/postsRouter");
const isAuthenticated = require("./middleware/isAuthenticated");
const app = express();

const PORT = 8082;

//Home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the main app" });
});
// *----USERS ROUTE----
app.use("/users", isAuthenticated, userRouter);
//*-----POSTS ROUTE----

app.use("/posts", postRouter);
//start server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
