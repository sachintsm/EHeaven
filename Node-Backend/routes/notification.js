const express = require('express');
const router = express.Router();
const Notification = require('../models/notification');
const config = require('../config/database');
const multer = require('multer');
var path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'local_storage/notification_attachment/')    //notification attachment saving destination folder
    },
    filename: function (req, file, cb) {
        cb(null, "NOT_FILE - " + file.originalname)   //set the file neme
    }
});

const upload = multer({ storage: storage }).single('notificationAttachment');

//add notification function 
router.post("/add", function (req, res) {
    upload(req, res, (err) => { //uploading file to the notification_Attachment folder and 

        if (req.file) {
            var filePath = "NOT_FILE - " + req.file.originalname;    //send data to the database
            //get file name 
        }

        const newNotice = new Notification({
            userid: req.body.userid,
            subject: req.body.subject,
            message: req.body.message,
            date: req.body.date,
            state: req.body.state,
            filepath: filePath
        });

        newNotice.save()
            .then(result => {
                console.log(result)
                res.json({ state: true, msg: "Data Inserted Successfully..!" });
            })
            .catch(error => {
                console.log(error)
                res.json({ state: false, msg: "Data Inserting Unsuccessfull..!" });
            })
    });
});

//GET all notices
router.get("/view", (req, res, next) => {
    Notification.find().sort({ date: -1 })
        .select('userid subject message date state usertype filepath')  //get notification thease details
        .exec()
        .then(docs => {
            console.log("Data Transfer Success.!");
            res.status(200).json(docs);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
});

//Get notification attchment 
router.get("/notAttachment/:filename", function (req, res) {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, '../local_storage/notification_Attachment/' + filename));
});


//Approve botton status update 
router.get('/approve/:_id', (req, res, next) => {
    // console.log("Hello world");
    const id = req.params._id;
    // console.log(id);
    Notification.update({ _id: id }, {
        $set: {
            state: "Approved"
        }
    })
        .exec()
        .then(result => {
            // console.log(    );
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
});

//Delete From database Notification
router.delete('/delete/:_id', (req, res, next) => {
    const id = req.params._id;
    Notification.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Deleted Successfully'
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
});
// delete attachment from local storage
router.delete("/notAttachment/:filename", function (req, res) {
    const filename = req.params.filename;
    console.log(filename);
    const path = 'local_storage/notification_attachment/' + filename;
    try {
        fs.unlinkSync(path);
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
});

module.exports = router;  