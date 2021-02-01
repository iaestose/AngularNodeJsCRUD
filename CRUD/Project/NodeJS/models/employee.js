const mongoose = require('mongoose');
//THE MODEL OF EMPLOYEE
var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Employee };