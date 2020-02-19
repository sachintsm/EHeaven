const mongoose = require('mongoose');

//const schema = mongoose.Schema;


const paymentSchema = mongoose.Schema ({

    sName : {type : String , require:true},
    sId : {type : String , require : true},
    sClass : {type : String , require: true},
    pName : { type : String ,  require: true},
    payment : {type : String, require :true},
    pYear: {type : String , require: true}

});

const payment = module.exports = mongoose.model('payment' , paymentSchema)
