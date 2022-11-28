const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Human_Resource_mongoose";
const empSchema = require('./schema');
const empModel = mongoose.model('employee', empSchema);
async function deleteLastcompanyY() {
    try {
        await mongoose.connect(url);
        const output = await empModel.deleteMany({
            "lastCompany": "Y"
        })
        console.log(output);
    } catch (err) {
        console.log(err);
    }

}
deleteLastcompanyY();


// output
// node delete.js
// { acknowledged: true, deletedCount: 6 }