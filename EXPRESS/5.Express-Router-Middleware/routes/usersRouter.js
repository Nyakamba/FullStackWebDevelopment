const express = require("express");

//create instance of express router
const userRouter = express.Router();

//!.Getting all users
userRouter.get("/", (req, res) => {
  res.json({ message: "All users fetched" });
});

//!.Getting a user
userRouter.get("/:id", (req, res) => {
  res.json({ message: "A user is fetched" });
});

//!.Update a user
userRouter.put("/:id", (req, res) => {
  res.json({ message: "User updated" });
});

//!. delete a user
userRouter.delete("/:id", (req, res) => {
  res.json({ message: "User deleted" });
});

module.exports = userRouter;
