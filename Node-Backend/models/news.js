const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = mongoose.Schema({
    topic:{type:String, require:true},
    newsSumery:{type:String, require:true},
    news:{type:String, require:true},
    date:{type:String, require:true},
    filePath:{type: String, require:true}   
});

const News = module.exports = mongoose.model("News", newsSchema); 