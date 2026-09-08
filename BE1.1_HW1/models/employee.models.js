const mongoose = require("mongoose");

const employeeSchema  = new mongoose.Schema({
    empName: String,
    empDepartment: String,
    empId: String,
    empDOB: String,
    empEmail: String,
    empTellNo: String,
    empAddress: String,
})


const Employee = mongoose.model("Employee",employeeSchema)

module.exports = Employee