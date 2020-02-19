const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bulkUserSchema = mongoose.Schema({
    name: { type: String, require: true },
    filepath: { type: String, require: true }
});

const bulkUser = mongoose.model("bulkUser", bulkUserSchema);
