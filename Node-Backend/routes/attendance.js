const express = require('express');
const router = express.Router();
const attendance = require('../models/attendance');
const config = require('../config/database');
const users=require('../models/users');
const classroom = require('../models/class');


// adding new attendance sheet to database
router.post("/addLog",function(request,response){
    console.log("hello");
    var today=new Date();
    var yyyy=today.getFullYear();
    var mm=today.getMonth();
    var dd=today.getDate();
    var inputDate=new Date(yyyy,mm,dd);

    const stu=new attendance({
        date:inputDate,
        class:request.body.class,
        markedBy:request.body.marked,
        attendList:request.body.atendList
    });
    console.log(stu);
    attendance.addAttendance(stu,function (err,req){
        if(err){
            response.json({state:false,msg:"Did not insert new attendance"});
            return;
        }
        if(req){
            console.log(req);
            response.json({state:true,msg:"New Attendence inserted"});
            return;
        }
    });
});

// Return all students userid's and names given class
router.get("/received/:classname", function (req, res) {
    users.find({selectclass:req.params.classname},{userid:1,name:1,_id:0}).sort({userid:1})
    .exec(function(err,data){
        if(err){
            console.log("Error");
            res.json({state:false,msg:"Something going wrong"});
        }else{
            res.json(data);
        }
    });  
});
// Given date given class attendance sheet will return
router.get("/searchDate",function (req, res) {
    
    var inputdate = req.query.date;
    var temp=inputdate.split(";");
    var date=temp[0].split("/");

    console.log(inputdate);
    var yyyy=parseInt(date[2]);
    var mm=parseInt(date[0])-1;
    var dd=parseInt(date[1]);
    var findDate=new Date(yyyy,mm,dd);

   
    console.log(findDate,req.body.classname);
    attendance.find({$and:[{date:findDate},{class:temp[1]}]})
    .exec(function(err,data){
        if(err){
            console.log("Error");
            res.json({state:false,msg:"Can't Find this date at this moment"});
        }else{
            console.log(data);
            res.json(data);
        }
    });   
});
// given month given student attendance will return 
router.get("/searchStu/:stu/:month", function (req, res){
    console.log(req.params.stu,req.params.month);
    var Today=new Date();
    var yyyy=Today.getFullYear();
    var start=new Date(yyyy,parseInt(req.params.month)-1,1);
    var end =new Date(yyyy,parseInt(req.params.month)-1,31);

    attendance.find({
        $and:[
            {$or:[{"attendList.userid":req.params.stu},{"attendList.name":req.params.stu}]},
            {date: {$gte: start, $lt: end}}
        ]
    })
    
    .exec(function(err,data){
        if(err){
            console.log("Error");
            response.json({state:false,msg:"Can't Find this student at this moment"});
        }else{
            if(data.length==0){
                res.json([]);
                return;
            }
            console.log(data);
            var output={
                class:data[0].class,
                name:"",
                userid:"",
                attend:[]
            }
            data.forEach(element=>{
                for (let stu of element.attendList) {
                    if(stu.name == req.params.stu || stu.userid == req.params.stu ){
                        output.name=stu.name;
                        output.userid=stu.userid;

                        var temp={
                            attend:stu.attend,
                            date:(element.date).toDateString()

                        }
                        output.attend.push(temp);
                        break;
                    }
                }
            });
            console.log(output);
            res.json(output);
        }
    });
    return;
    
});

// getting list of class which is allready marked today
router.get("/getstatus",function(req,res){
    console.log("searchdate");
    var output=[];
    var today=new Date();
    var yyyy=today.getFullYear();
    var mm=today.getMonth();
    var dd=today.getDate();
    var searchDate=new Date(yyyy,mm,dd);
    attendance.find({date:searchDate}).exec(function(err,data){
        if(err){
            console.error(err);
            response.json({state:false,msg:"Can't Find this data at this moment"});
        }else{
            data.forEach(element=>{
                output.push(element.class);
            });
            console.log(output);
            res.json(output);

        }
    });

   
            
     
    
})


module.exports = router;

