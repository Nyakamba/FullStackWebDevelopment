const express = require("express");
const {
  createEmployeeCtrl,
  getEmployeesCtrl,
  updateEmployeeCtrl,
  deleteEmployeeCtrl,
  getEmployeeCtrl,
} = require("../controller/employeeCtrl");
const router = express.Router();

//POST/employee
router.post("/", createEmployeeCtrl);

//GET/employees
router.get("/", getEmployeesCtrl);

//PUT/employee/:id
router.put("/:id", updateEmployeeCtrl);

//Delete/employees/:id
router.delete("/:id", deleteEmployeeCtrl);

//GET/employee
router.get("/:id", getEmployeeCtrl);

module.exports = router;
