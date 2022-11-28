const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Human_Resource_mongoose";
const empSchema = require('./schema');
const empModel = mongoose.model('employee', empSchema);
async function findGreaterthan30000() {
    try {
        await mongoose.connect(url);
        const output = await empModel.find({
            "salary":{$gt:30000}
        })
        console.log(output);
    } catch (err) {
        console.log(err);
    }

}
findGreaterthan30000();

//output
// node find30000.js
// [
//   {
//     _id: new ObjectId("638483fd79d841bb1e60f8a1"),
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
//     __v: 0
//   },
//   {
//     _id: new ObjectId("638483fd79d841bb1e60f8a3"),
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
//     __v: 0
//   },
//   {
//     _id: new ObjectId("638483fd79d841bb1e60f8a5"),
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
//     __v: 0
//   },
//   {
//     _id: new ObjectId("638483fd79d841bb1e60f8a7"),
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
//     __v: 0
//   },
//   {
//     _id: new ObjectId("638483fd79d841bb1e60f8a9"),
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
//     __v: 0
//   },
//   {
//     _id: new ObjectId("638483fd79d841bb1e60f8ab"),
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
//     __v: 0
//   }
// ]
