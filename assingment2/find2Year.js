const mongodb = require('mongodb');
const data = require('./data')
const url = "mongodb://127.0.0.1:27017/"
const client = new mongodb.MongoClient(url);

async function main() {
    await client.connect();
    const database = client.db("Human_resource_client");
    const collection = database.collection("employee");
    const res = await collection.find({
        "overallExp":{$gt:2}
    }).toArray();
    console.log(res);
}
main();

// output
// PS A:\prepbytes\assingment\mongoDB\assingment2> node find2Year.js 
// []