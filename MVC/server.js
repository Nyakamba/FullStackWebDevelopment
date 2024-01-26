require("./utils/dbConnect"); //database connection
const express = require("express");
const router = require("./routes/router");
const app = express();

//middlewares
app.use(express.json()); //pass incoming data

//routes
app.use("/employees", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
