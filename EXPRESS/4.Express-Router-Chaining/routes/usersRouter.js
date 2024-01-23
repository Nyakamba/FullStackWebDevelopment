const express = require("express");

//create instance of express router
const userRouter = express.Router();

//*using the route()
//Getting all users
userRouter.route("/").get((req, res) => {
  res.json({ message: "All users fetched" });
});

//Handle a user specific id
userRouter
  .route("/:id")
  .get((req, res) => {
    res.json({ message: "A user is fetched" });
  })
  .put((req, res) => {
    res.json({ message: "User updated" });
  })
  .delete((req, res) => {
    res.json({ message: "User deleted" });
  });

module.exports = userRouter;
