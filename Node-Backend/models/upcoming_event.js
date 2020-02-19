const mongoose = require('mongoose');
const Schema = mongoose.schema;


const eventschema = mongoose.Schema({
    head:{type:String , require:true},
    eventdetail:{type:String , require:true},
    day:{type:Date , require:true}

});

const Event = module.exports = mongoose.model("Event" , eventschema);