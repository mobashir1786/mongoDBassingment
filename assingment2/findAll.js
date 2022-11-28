const mongodb = require('mongodb');
const data = require('./data')
const url = "mongodb://127.0.0.1:27017/"
const client = new mongodb.MongoClient(url);

async function main() {
    await client.connect();
    const database = client.db("Human_resource_client");
    const collection = database.collection("employee");
    const res = await collection.find({}).toArray();
    console.log(res);
}
main();

// output
// PS A:\prepbytes\assingment\mongoDB\assingment2> node findAll.js 
// [
//     {
//         _id: new ObjectId("638207df79f460249f57743c"),
//         firstName: 'John',
//         lastName: 'Doe',
//         salary: 25000,
//         department: 'HR',
//         lastCompany: 'X',
//         lastSalary: '10000',
//         overallExp: 2,
//         contactInfo: '1234567890',
//         yearGrad: 2016,
//         gradStream: 'CSE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f57743d"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: 30000,
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: 1,
//         contactInfo: '1234567860',
//         yearGrad: 2015,
//         gradStream: 'CSE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f57743e"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: 35000,
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: 1,
//         contactInfo: '123567890',
//         yearGrad: 2019,
//         gradStream: 'ECE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f57743f"),
//         firstName: 'Sao',
//         lastName: 'Avika',
//         salary: 30000,
//         department: 'Sales',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: 2,
//         contactInfo: '1234567860',
//         yearGrad: 2015,
//         gradStream: 'CSE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577440"),
//         firstName: 'Jame',
//         lastName: 'roh',
//         salary: 35000,
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: 2,
//         contactInfo: '123567890',
//         yearGrad: 2019,
//         gradStream: 'EEE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577441"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: 30000,
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: 1,
//         contactInfo: '1234567860',
//         yearGrad: 2015,
//         gradStream: 'CSE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577442"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: 35000,
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: 1,
//         contactInfo: '123567890',
//         yearGrad: 2019,
//         gradStream: 'ECE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577443"),
//         firstName: 'Sao',
//         lastName: 'Avika',
//         salary: 30000,
//         department: 'Sales',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: 2,
//         contactInfo: '1234567860',
//         yearGrad: 2015,
//         gradStream: 'CSE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577444"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: 35000,
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: 2,
//         contactInfo: '123567890',
//         yearGrad: 2019,
//         gradStream: 'EEE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577445"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: 30000,
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: 1,
//         contactInfo: '1234567860',
//         yearGrad: 2015,
//         gradStream: 'CSE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577446"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: 35000,
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: 1,
//         contactInfo: '123567890',
//         yearGrad: 2019,
//         gradStream: 'ECE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577447"),
//         firstName: 'Sao',
//         lastName: 'Avika',
//         salary: 30000,
//         department: 'Sales',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: 2,
//         contactInfo: '1234567860',
//         yearGrad: 2015,
//         gradStream: 'CSE'
//     },
//     {
//         _id: new ObjectId("638207df79f460249f577448"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: 35000,
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: 2,
//         contactInfo: '123567890',
//         yearGrad: 2019,
//         gradStream: 'EEE'
//     }
// ]
