const express = require('express');
const router = express.Router();
const requestExtracurr = require('../models/student_extra');
const multer = require('multer');
var path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'local_storage/extracurr_Attachment/')
    },
    filename: function (req, file, cb) {
        cb(null, "EC_FILE - " + file.originalname)
    }
});

const upload = multer({ storage: storage }).single('extracurrAttachment');

/*Student request extra curricular addition */
router.post("/requestExtracurr", function (req, res) {
    upload(req, res, (err) => { //uploading file to the notification_Attachment folder and 

        if (req.file) {
            var filePath = "EC_FILE - " + req.file.originalname;    //send data to the database
            //get file name 
        }
        const newRequest = new requestExtracurr({
            userid: req.body.userid,
            extracurrCat: req.body.extracurrCat,
            desp: req.body.desp,
            dateofMembership: req.body.dateofMembership,
            extracurrname: req.body.extracurrname,
            type: req.body.type,
            reqDate: req.body.reqDate,
            compName: req.body.compName,
            dateofAchv: req.body.dateofAchv,
            achv: req.body.achv,
            state: req.body.state,
            filepath: filePath,
        });

        requestExtracurr.addLog(newRequest, function (err, request) {
            if (err) {
                res.json({ state: false, msg: "New record insertion failed" });
            }
            if (request) {
                res.json({ state: true, msg: "New record inserted" });
            }
        }); 
    });

    //extra_curricular requests from student

    router.get("/pendingExtra/:id", function(req, res) {
        // console.log("Hello");
        const id = req.params.id;
        requestExtracurr
          .find({  userid: id })
          .sort({ _id: 1 })
          .select(
            "userid extracurrCat desp extracurrname achv dateofAchv "
          )
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

});
module.exports = router;
