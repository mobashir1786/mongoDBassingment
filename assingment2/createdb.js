const mongodb=require('mongodb');
const data=require('./data')
const url="mongodb://127.0.0.1:27017/"
const client=new mongodb.MongoClient(url);

async function main(){
    await client.connect();
    const database=client.db("Human_resource_client");
    const collection=database.collection("employee");
    const res=await collection.insertMany(data);
    console.log(res);
}
main();

// PS A:\prepbytes\assingment\mongoDB\assingment2> node createdb.js 
// output
// [
//     {
//       _id: new ObjectId("638207df79f460249f57743c"),
//       firstName: 'John',
//       lastName: 'Doe',
//       salary: 25000,
//       department: 'HR',
//       lastCompany: 'X',
//       lastSalary: '10000',
//       overallExp: 2,
//       contactInfo: '1234567890',
//       yearGrad: 2016,
//       gradStream: 'CSE'
//     },
//     {
//       _id: new ObjectId("638207df79f460249f57743d"),
//       firstName: 'Rohan',
//       lastName: 'Jame',
//       salary: 30000,
//       department: 'Technical',
//       lastCompany: 'Y',
//       lastSalary: '15000',
//       overallExp: 1,
//       contactInfo: '1234567860',
//       yearGrad: 2015,
//       gradStream: 'CSE'
//     },
//     {
//       _id: new ObjectId("638207df79f460249f57743e"),
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
//       _id: new ObjectId("638207df79f460249f57743f"),
//       firstName: 'Sao',
//       lastName: 'Avika',
//       salary: 30000,
//       department: 'Sales',
//       lastCompany: 'Y',
//       lastSalary: '15000',
//       overallExp: 2,
//       contactInfo: '1234567860',
//       yearGrad: 2015,
//       gradStream: 'CSE'
//     },
//     {
//       _id: new ObjectId("638207df79f460249f577440"),
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
//       _id: new ObjectId("638207df79f460249f577441"),
//       firstName: 'Rohan',
//       lastName: 'Jame',
//       salary: 30000,
//       department: 'Technical',
//       lastCompany: 'Y',
//       lastSalary: '15000',
//       overallExp: 1,
//       contactInfo: '1234567860',
//       yearGrad: 2015,
//       gradStream: 'CSE'
//     },
//     {
//       _id: new ObjectId("638207df79f460249f577442"),
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
//       _id: new ObjectId("638207df79f460249f577443"),
//       firstName: 'Sao',
//       lastName: 'Avika',
//       salary: 30000,
//       department: 'Sales',
//       lastCompany: 'Y',
//       lastSalary: '15000',
//       overallExp: 2,
//       contactInfo: '1234567860',
//       yearGrad: 2015,
//       gradStream: 'CSE'
//     },
//     {
//       _id: new ObjectId("638207df79f460249f577444"),
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
//       _id: new ObjectId("638207df79f460249f577445"),
//       firstName: 'Rohan',
//       lastName: 'Jame',
//       salary: 30000,
//       department: 'Technical',
//       lastCompany: 'Y',
//       lastSalary: '15000',
//       overallExp: 1,
//       contactInfo: '1234567860',
//       yearGrad: 2015,
//       gradStream: 'CSE'
//     },
//     {
//       _id: new ObjectId("638207df79f460249f577446"),
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
//       _id: new ObjectId("638207df79f460249f577447"),
//       firstName: 'Sao',
//       lastName: 'Avika',
//       salary: 30000,
//       department: 'Sales',
//       lastCompany: 'Y',
//       lastSalary: '15000',
//       overallExp: 2,
//       contactInfo: '1234567860',
//       yearGrad: 2015,
//       gradStream: 'CSE'
//     },
//     {
//       _id: new ObjectId("638207df79f460249f577448"),
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
//   PS A:\prepbytes\assingment\mongoDB\assingment2> node createdb.js
//   {
//     acknowledged: true,
//     insertedCount: 13,
//     insertedIds: {
//       '0': new ObjectId("638209658c32ea6d0a4788c7"),
//       '1': new ObjectId("638209658c32ea6d0a4788c8"),
//       '2': new ObjectId("638209658c32ea6d0a4788c9"),
//       '3': new ObjectId("638209658c32ea6d0a4788ca"),
//       '4': new ObjectId("638209658c32ea6d0a4788cb"),
//       '5': new ObjectId("638209658c32ea6d0a4788cc"),
//       '6': new ObjectId("638209658c32ea6d0a4788cd"),
//       '7': new ObjectId("638209658c32ea6d0a4788ce"),
//       '8': new ObjectId("638209658c32ea6d0a4788cf"),
//       '9': new ObjectId("638209658c32ea6d0a4788d0"),
//       '10': new ObjectId("638209658c32ea6d0a4788d1"),
//       '11': new ObjectId("638209658c32ea6d0a4788d2"),
//       '12': new ObjectId("638209658c32ea6d0a4788d3")
//     }
//   }
  