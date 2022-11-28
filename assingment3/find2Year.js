const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Human_Resource_mongoose";
const empSchema = require('./schema');
const empModel = mongoose.model('employee', empSchema);
async function findExpMorethan2Year() {
    try {
        await mongoose.connect(url);
        const output = await empModel.find({
            "overallExp":{$gt:2}
        })
        console.log(output);
    } catch (err) {
        console.log(err);
    }

}
findExpMorethan2Year();


// output
// node find2Year.js
// []