const express = require('express');
const router = express.Router();
const classroom = require('../models/class');
const config = require('../config/database');




router.post("/addLog",function(request,response){
    console.log("hello");
    
    const newClass=new classroom({
        classname:request.body.classname,
        grade:request.body.grade,
        medium:request.body.medium,
        classhead:request.body.classhead,
        numberofStudent:request.body.numberofStudent
    });
    console.log(newClass);
    classroom.addclassroom(newClass,function (err,req){
        if(err){
            response.json({state:false,msg:"Did not insert"});
            console.log("nooooooo");
        }
        if(req){
            console.log("yesssssss");
            response.json({state:true,msg:"Inserted"});
        }
    });

});

router.get("/getdata", function (req, res) {
    classroom.find({})
    .exec(function(err,data){
        if(err){
            console.log("Error");
        }else{
            res.json(data);
        }
    });
    
});


module.exports = router;