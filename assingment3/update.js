const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Human_Resource_mongoose";
const empSchema = require('./schema');
const empModel = mongoose.model('employee', empSchema);
async function updateSalary() {
    try {
        await mongoose.connect(url);
        const output = await empModel.updateMany(
            { "salary": { $gt: 70000 } },
            { $set: { "salary": 65000 } }
        )
        console.log(output);
    } catch (err) {
        console.log(err);
    }

}
updateSalary();


// outputnode update.js
// {
//   acknowledged: true,
//   modifiedCount: 0,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 0
// }