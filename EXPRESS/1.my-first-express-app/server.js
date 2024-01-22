const express = require("express");

//!instance
const app = express();
const PORT = 8082;
//define route handler
app.get("/", (req, res) => {
  res.send("Hello world");
});

//start the server

app.listen(PORT, console.log(`Server running on port ${PORT}`));
