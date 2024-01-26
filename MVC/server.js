require("./utils/dbConnect"); //database connection
const express = require("express");
const app = express();

//middlewares
app.use(express.json()); //pass incoming data

//routes
//POST/employess
app.post("/employees", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "Create Employee",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//GET/employess
app.get("/employees", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "Get Employees",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//PUT/employess/:id
app.put("/employees/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "Update Employee",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//Delete/employess/:id
app.delete("/employees/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "Delete Employee",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//GET/employess
app.get("/employees/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "fetch a single  Employee",
    });
  } catch (error) {
    res.json(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
