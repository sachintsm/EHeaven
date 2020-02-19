const mongoose = require('mongoose');
const Schema = mongoose.schema;

const classroomScehma=mongoose.Schema({
    classname:{type:String,require:true},
    grade:{type:Number,require:true},
    medium:{type:String,require:true},
    classhead:{type:String,require:true},
    numberofStudent:{type:Number,require:true}
});
const Addclassroom=module.exports=mongoose.model("classroom",classroomScehma);


module.exports.addclassroom=function(newclass,callback){
    console.log(newclass);
    newclass.save(callback);
};