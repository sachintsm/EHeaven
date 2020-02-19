const mongoose = require('mongoose');
const Schema = mongoose.schema;

var academicStuffSchema = mongoose.Schema({
    userid: { type: String },
    teachername: { type: String },
    subject: { type: String },
    attachmenttype: { type: String },
    class: { type: String },
    showname: {type: String},
    path: { type: String },
});

// module.exports = mongoose.model('Photos', photoSchema)
const academicStuff = module.exports = mongoose.model("academicStuff", academicStuffSchema);  
