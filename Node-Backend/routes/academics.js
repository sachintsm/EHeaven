const express = require('express');
const router = express.Router();
const academicStuff = require('../models/academics');
const config = require('../config/database');
const multer = require('multer');

var path = require('path');
var fs = require('fs');

var storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
    cb(null, 'local_storage/academic_Stuff/')   //acdemic stuff saving destinaltion
  },
  filename: function (req, file, cb) {
    let date_ob = new Date();
    let date = date_ob.getFullYear()+date_ob.getMonth()+date_ob.getHours() + date_ob.getMinutes()    
    cb(null, date +file.originalname)   //set the file neme
  }
});


var upload = multer({ storage: storage }).single('academic_stuff');   

//Add the academic lecture notes function
router.post('/addStuff', function (req, res) {
  upload(req, res, (err) => {
    let date_ob = new Date();
    let date = date_ob.getFullYear()+date_ob.getMonth()+date_ob.getHours() + date_ob.getMinutes()    
    var fullPath = date+req.file.originalname;    //set the full path to save data to database
    var document = {    //deatabase saving object
      userid: req.body.userid,
      teachername: req.body.teachername,
      subject: req.body.subject,
      attachmenttype: req.body.attachmenttype,
      class: req.body.class,
      showname: req.body.showname,
      path: fullPath,
    };
    // console.log(res)
    
    var photo = new academicStuff(document);  //create new object
    photo.save()
      .then(result => {
        res.json({ state: true, msg: "Data Inserted Successfully..!" });
      })
      .catch(error => {
        console.log(error)
        res.json({ state: false, msg: "Data Inserting Unsuccessfull..!" });
      })
  })
});


//show academic attachment for students
router.get("/acad&stu&attachment/:class/:subName", function(req, res) {
  const className = req.params.class
  const subjectName = req.params.subName
  academicStuff.find({class : className, subject: subjectName})   //find by classname and subject name in databse
        .select('userid teachername subject attachmenttype class showname path')
        .exec()
        .then(docs => {
            console.log("Data Transfer Success.!");
            res.status(200).json({state: true, msg: 'Data Transfer Success.!', data : docs});
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
})

//show academic attachment for others
router.get("/acad&other&attachment/:userid/:subName", function(req, res) {
  const userid = req.params.userid
  const subjectName = req.params.subName

  academicStuff.find({userid : userid, subject: subjectName})
        .select('userid teachername subject attachmenttype class showname path')
        .exec()
        .then(docs => {
            console.log("Data Transfer Success.!");
            res.status(200).json({state: true, msg: 'Data Transfer Success.!', data : docs});
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
})

//get attachment from the local storage
router.get("/academicAttachment/:filename", function(req, res) {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, '../local_storage/academic_Stuff/' + filename));
});

//delete academic attachment details
router.delete("/deleteAcademic/:_id", function(req,res) {
  const id = req.params._id;
  academicStuff.remove({ _id: id }) //delete by document _id
      .exec()
      .then(result => {
          res.status(200).json({ state: true,
              message: 'Deleted Successfully'
          });
      })
      .catch(error => {
          console.log(error);
          res.status(500).json({ state: false,
              error: error
          });
      });
})

//delete academic attachment from local_storage
router.delete("/deleteAcad&Attachment/:filename", function(req,res) { 
const filename = req.params.filename;
    console.log(filename)
    const path = 'local_storage/academic_Stuff/' + filename;
    try {
        fs.unlinkSync(path)
        res.status(200).json({
            message: 'Delete the file successfully..!'
        })
        //file removed
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: error
        });
    }
})
module.exports = router;