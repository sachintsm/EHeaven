const mongoose = require('mongoose');
const Schema = mongoose.schema;

const attendanceSchema=mongoose.Schema({
    class:{type:String,require:true},
    date:{type:Date,require:true},
    markedBy:{type:String,require:true},
    attendList:[{
        name:{type:String,require:true},
        userid :{type:String,require:true},
        attend:{type:Boolean,require:true},
    }]
});
attendanceSchema.index({class: 1, date: 1}, {unique: true});
const attendance=module.exports=mongoose.model("attendance",attendanceSchema);


module.exports.addAttendance=function(newattend,callback){
    console.log(newattend);
    newattend.save(callback);
};
// module.exports.updateAttendance=function(datalog,callback){
//     //con
// }
// module.exports.retriveUsers(callback){
//     users.find(callback);
// }