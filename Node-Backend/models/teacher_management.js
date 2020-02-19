const mongoose = require('mongoose');
const Schema = mongoose.schema;

const teacherTimeTableSchema = mongoose.Schema({
    teacherName: { type : String, require: true},
    teacherId: { type : String, require: true},
    monday: [{ 
        one: {type: String, require: true},
        two: {type: String, require: true},
        three: {type: String, require: true},
        four: {type: String, require: true},
        five: {type: String, require: true},
        six: {type: String, require: true},
        seven: {type: String, require: true},
        eight: {type: String, require: true},
     }],
    tuesday: [{ 
        one: {type: String, require: true},
        two: {type: String, require: true},
        three: {type: String, require: true},
        four: {type: String, require: true},
        five: {type: String, require: true},
        six: {type: String, require: true},
        seven: {type: String, require: true},
        eight: {type: String, require: true},
    }],
    
    wednesday: [{ 
        one: {type: String, require: true},
        two: {type: String, require: true},
        three: {type: String, require: true},
        four: {type: String, require: true},
        five: {type: String, require: true},
        six: {type: String, require: true},
        seven: {type: String, require: true},
        eight: {type: String, require: true},
     }],
    
    thursday:[ { 
        one: {type: String, require: true},
        two: {type: String, require: true},
        three: {type: String, require: true},
        four: {type: String, require: true},
        five: {type: String, require: true},
        six: {type: String, require: true},
        seven: {type: String, require: true},
        eight: {type: String, require: true},
     }],
    
    friday: [{ 
        one: {type: String, require: true},
        two: {type: String, require: true},
        three: {type: String, require: true},
        four: {type: String, require: true},
        five: {type: String, require: true},
        six: {type: String, require: true},
        seven: {type: String, require: true},
        eight: {type: String, require: true},
     }]
});

const teacherTimeTable = module.exports = mongoose.model("teacherTimeTable", teacherTimeTableSchema);  
