const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Human_Resource_mongoose";
const empSchema = require('./schema');
const empModel = mongoose.model('employee', empSchema);
async function findGraduationyearAndExp() {
    try {
        await mongoose.connect(url);
        const output = await empModel.find({
            "yearGrad": { $gt: 2015 },
            "overallExp": { $gt: 1 }
        })
        console.log(output);
    } catch (err) {
        console.log(err);
    }

}
findGraduationyearAndExp();


//output
// node find2015
// [
//   {
//     _id: new ObjectId("638483fd79d841bb1e60f89f"),
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