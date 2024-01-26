const express = require("express");

const router = express.Router();

//POST/employess
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
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
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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
router.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "fetch a single  Employee",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
