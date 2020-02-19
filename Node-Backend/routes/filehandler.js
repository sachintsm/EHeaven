// const IncomingForm = require('formidable').IncomingForm;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const attendance = require('../models/filehandler');
const config = require('../config/database');
const bulkUser = require('../models/filehandler');
var path = require('path');
const fs = require('fs');


var bulkStorage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'local_storage/bulk_Registration/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
});

const uploadBulk = multer({ storage : bulkStorage}).single('bulk_req_file');


router.post("/bulkRegistration", function( req, res, next){
    uploadBulk(req, res, (err) => { //uploading file to the notification_Attachment folder and 

        if (req.file) {
            var filePath = "NOT_FILE - " + req.file.originalname;    //send data to the database
            //get file name 
        }

        const newNotice = new bulkUser({
            name: req.body.name,
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
})

module.exports = router;