const mongodb = require('mongodb');
const data = require('./data')
const url = "mongodb://127.0.0.1:27017/"
const client = new mongodb.MongoClient(url);

async function main() {
    await client.connect();
    const database = client.db("Human_resource_client");
    const collection = database.collection("employee");
    const res = await collection.find({
        "salary":{$gt:30000}
    }).toArray();
    console.log(res);
}
main();

//output
// PS A:\prepbytes\assingment\mongoDB\assingment2> node find30000.js 
// [
//     {
//       _id: new ObjectId("638209658c32ea6d0a4788c9"),
//       firstName: 'Jame',
//       lastName: 'Doe',
//       salary: 35000,
//       department: 'Accounts',
//       lastCompany: 'Z',
//       lastSalary: '20000',
//       overallExp: 1,
//       contactInfo: '123567890',
//       yearGrad: 2019,
//       gradStream: 'ECE'
//     },
//     {
//       _id: new ObjectId("638209658c32ea6d0a4788cb"),
//       firstName: 'Jame',
//       lastName: 'roh',
//       salary: 35000,
//       department: 'Accounts',
//       lastCompany: 'Z',
//       lastSalary: '15000',
//       overallExp: 2,
//       contactInfo: '123567890',
//       yearGrad: 2019,
//       gradStream: 'EEE'
//     },
//     {
//       _id: new ObjectId("638209658c32ea6d0a4788cd"),
//       firstName: 'Jame',
//       lastName: 'Doe',
//       salary: 35000,
//       department: 'Accounts',
//       lastCompany: 'Z',
//       lastSalary: '20000',
//       overallExp: 1,
//       contactInfo: '123567890',
//       yearGrad: 2019,
//       gradStream: 'ECE'
//     },
//     {
//       _id: new ObjectId("638209658c32ea6d0a4788cf"),
//       firstName: 'Jame',
//       lastName: 'Doe',
//       salary: 35000,
//       department: 'Accounts',
//       lastCompany: 'Z',
//       lastSalary: '15000',
//       overallExp: 2,
//       contactInfo: '123567890',
//       yearGrad: 2019,
//       gradStream: 'EEE'
//     },
//     {
//       _id: new ObjectId("638209658c32ea6d0a4788d1"),
//       firstName: 'Jame',
//       lastName: 'Doe',
//       salary: 35000,
//       department: 'Accounts',
//       lastCompany: 'Z',
//       lastSalary: '20000',
//       overallExp: 1,
//       contactInfo: '123567890',
//       yearGrad: 2019,
//       gradStream: 'ECE'
//     },
//     {
//       _id: new ObjectId("638209658c32ea6d0a4788d3"),
//       firstName: 'Jame',
//       lastName: 'Doe',
//       salary: 35000,
//       department: 'Accounts',
//       lastCompany: 'Z',
//       lastSalary: '15000',
//       overallExp: 2,
//       contactInfo: '123567890',
//       yearGrad: 2019,
//       gradStream: 'EEE'
//     }
//   ]  