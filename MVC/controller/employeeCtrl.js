const Employee = require("../model/Employee");

//Create employee
const createEmployeeCtrl = async (req, res) => {
  const { name, city, salary, isMarried } = req.body;
  try {
    const employee = await Employee.create({
      name,
      city,
      salary,
      isMarried,
    });
    res.json({
      status: "Success",
      data: employee,
    });
  } catch (error) {
    res.json(error.message);
  }
};
//Fetch all employees
const getEmployeesCtrl = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json({
      status: "Success",
      data: employees,
    });
  } catch (error) {
    res.json(error.message);
  }
};
//Update employee/:id
const updateEmployeeCtrl = async (req, res) => {
  try {
    const updatedEmp = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        city: req.body.city,
        salary: req.body.salary,
        isMarried: req.body.isMarried,
      },
      { new: true, runValidators: true }
    );
    res.json({
      status: "Success",
      data: updatedEmp,
    });
  } catch (error) {
    res.json(error.message);
  }
};
//Delete employees/:id
const deleteEmployeeCtrl = async (req, res) => {
  try {
    const deletedEmp = await Employee.findByIdAndDelete(req.params.id);
    res.json({
      status: "Success",
      data: deletedEmp,
    });
  } catch (error) {
    res.json(error.message);
  }
};

//Get a single employee
const getEmployeeCtrl = async (req, res) => {
  try {
    const singleEmp = await Employee.findById(req.params.id);
    res.json({
      status: "Success",
      data: singleEmp,
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  createEmployeeCtrl,
  getEmployeesCtrl,
  updateEmployeeCtrl,
  deleteEmployeeCtrl,
  getEmployeeCtrl,
};
