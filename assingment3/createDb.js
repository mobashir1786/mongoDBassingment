const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Human_Resource_mongoose";
const empSchema = require('./schema');
const empModel = mongoose.model('employee', empSchema);
const empData = require('./empData');
async function createDatabase() {
    try {
        await mongoose.connect(url);
        const output = await empModel.insertMany(empData);
        console.log(output);
    } catch (err) {
        console.log(err);
    }

}
createDatabase();


//output
// node createDB.js
// [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     salary: 25000,
//     department: 'HR',
//     lastCompany: 'X',
//     lastSalary: '10000',
//     overallExp: 2,
//     contactInfo: '1234567890',
//     yearGrad: 2016,
//     gradStream: 'CSE',
//     _id: new ObjectId("638483fd79d841bb1e60f89f"),
//     __v: 0
//   },
//   {
//     firstName: 'Rohan',
//     lastName: 'Jame',
//     salary: 30000,
//     department: 'Technical',
//     lastCompany: 'Y',
//     lastSalary: '15000',
//     overallExp: 1,
//     contactInfo: '1234567860',
//     yearGrad: 2015,
//     gradStream: 'CSE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a0"),
//     __v: 0
//   },
//   {
//     firstName: 'Jame',
//     lastName: 'Doe',
//     salary: 35000,
//     department: 'Accounts',
//     lastCompany: 'Z',
//     lastSalary: '20000',
//     overallExp: 1,
//     contactInfo: '123567890',
//     yearGrad: 2019,
//     gradStream: 'ECE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a1"),
//     __v: 0
//   },
//   {
//     firstName: 'Sao',
//     lastName: 'Avika',
//     salary: 30000,
//     department: 'Sales',
//     lastCompany: 'Y',
//     lastSalary: '15000',
//     overallExp: 2,
//     contactInfo: '1234567860',
//     yearGrad: 2015,
//     gradStream: 'CSE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a2"),
//     __v: 0
//   },
//   {
//     firstName: 'Jame',
//     lastName: 'roh',
//     salary: 35000,
//     department: 'Accounts',
//     lastCompany: 'Z',
//     lastSalary: '15000',
//     overallExp: 2,
//     contactInfo: '123567890',
//     yearGrad: 2019,
//     gradStream: 'EEE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a3"),
//     __v: 0
//   },
//   {
//     firstName: 'Rohan',
//     lastName: 'Jame',
//     salary: 30000,
//     department: 'Technical',
//     lastCompany: 'Y',
//     lastSalary: '15000',
//     overallExp: 1,
//     contactInfo: '1234567860',
//     yearGrad: 2015,
//     gradStream: 'CSE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a4"),
//     __v: 0
//   },
//   {
//     firstName: 'Jame',
//     lastName: 'Doe',
//     salary: 35000,
//     department: 'Accounts',
//     lastCompany: 'Z',
//     lastSalary: '20000',
//     overallExp: 1,
//     contactInfo: '123567890',
//     yearGrad: 2019,
//     gradStream: 'ECE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a5"),
//     __v: 0
//   },
//   {
//     firstName: 'Sao',
//     lastName: 'Avika',
//     salary: 30000,
//     department: 'Sales',
//     lastCompany: 'Y',
//     lastSalary: '15000',
//     overallExp: 2,
//     contactInfo: '1234567860',
//     yearGrad: 2015,
//     gradStream: 'CSE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a6"),
//     __v: 0
//   },
//   {
//     firstName: 'Jame',
//     lastName: 'Doe',
//     salary: 35000,
//     department: 'Accounts',
//     lastCompany: 'Z',
//     lastSalary: '15000',
//     overallExp: 2,
//     contactInfo: '123567890',
//     yearGrad: 2019,
//     gradStream: 'EEE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a7"),
//     __v: 0
//   },
//   {
//     firstName: 'Rohan',
//     lastName: 'Jame',
//     salary: 30000,
//     department: 'Technical',
//     lastCompany: 'Y',
//     lastSalary: '15000',
//     overallExp: 1,
//     contactInfo: '1234567860',
//     yearGrad: 2015,
//     gradStream: 'CSE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a8"),
//     __v: 0
//   },
//   {
//     firstName: 'Jame',
//     lastName: 'Doe',
//     salary: 35000,
//     department: 'Accounts',
//     lastCompany: 'Z',
//     lastSalary: '20000',
//     overallExp: 1,
//     contactInfo: '123567890',
//     yearGrad: 2019,
//     gradStream: 'ECE',
//     _id: new ObjectId("638483fd79d841bb1e60f8a9"),
//     __v: 0
//   },
//   {
//     firstName: 'Sao',
//     lastName: 'Avika',
//     salary: 30000,
//     department: 'Sales',
//     lastCompany: 'Y',
//     lastSalary: '15000',
//     overallExp: 2,
//     contactInfo: '1234567860',
//     yearGrad: 2015,
//     gradStream: 'CSE',
//     overallExp: 2,
//     contactInfo: '123567890',
//     yearGrad: 2019,
//     gradStream: 'EEE',
//     _id: new ObjectId("638483fd79d841bb1e60f8ab"),
//     __v: 0
//   }
// ]