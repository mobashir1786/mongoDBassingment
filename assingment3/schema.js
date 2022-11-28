const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please enter firstName']
    },
    lastName: {
        type: String,
        required: [true, 'please enter lastName']
    },
    salary: {
        type: Number,
        required: [true, 'please enter salary']
    },
    department: {
        type: String,
        required: [true, 'please enter department']
    },
    lastCompany: {
        type: String,
        required: [true, 'please enter lastCompany']
    },
    lastSalary: {
        type: String,
        required: [true, 'please enter lastSalary']
    },
    overallExp: {
        type: Number,
        required: [true, 'please enter overallExp']
    },
    contactInfo: {
        type: String,
        required: [true, 'please enter contactInfo']
    },
    yearGrad: {
        type: Number,
        required: [true, 'please enter yearGrad']
    },
    gradStream: {
        type: String,
        required: [true, 'please enter gradStream']
    }
})

module.exports = employeeSchema;