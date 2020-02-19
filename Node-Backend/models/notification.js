const mongoose = require('mongoose'); 
const Schema = mongoose.schema;

const noticeSchema = mongoose.Schema({
    userid:{type:String, require:true},
    subject:{type:String, require:true},
    message: {type:String, require:true},
    date:{type:String, require:true},
    state:{type:String, require:true},
    filepath:{type: String, require:true}    
});

const Notification = module.exports = mongoose.model("Notification", noticeSchema);  

// module.exports.saveNotice = function(newNotice, callback) {
//     newNotice.save(callback);  
// };