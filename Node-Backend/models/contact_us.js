const mongoose = require('mongoose'); 
const Schema = mongoose.schema;

const contactusSchema = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    mobile: {type:String, require:true},
    subject:{type:String, require:true},
    message:{type: String, require:true},
    state:{type:String, require:true},
    date:{type: String, require:true},
        
});

const ContactUs = module.exports = mongoose.model("ContactUs", contactusSchema);  
