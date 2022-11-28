const mongodb = require('mongodb');
const data = require('./data')
const url = "mongodb://127.0.0.1:27017/"
const client = new mongodb.MongoClient(url);

async function main() {
    await client.connect();
    const database = client.db("Human_resource_client");
    const collection = database.collection("employee");
    const res = await collection.updateMany(
        {"salary":{$gt:70000}},
        {$set:{"salary":65000}}
    );
    console.log(res);
}
main();

// output
// PS A:\prepbytes\assingment\mongoDB\assingment2> node update.js 
// {
//     acknowledged: true,
//     modifiedCount: 0,
//     upsertedId: null,
//     upsertedCount: 0,
//     matchedCount: 0
//  }