const express = require('express');
const router = express.Router();
const config = require('../config/database');
const ContactUs =require('../models/contact_us');
const { requestCertification } = require('../models/certification');


//get unreaded mail count to the admin dashboard
router.get("/mailCount", function (req, res) {
    ContactUs.find({ state: "pending" })
        .count()
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

});

//get count of certification requests accepted by the principal to the admin dashboard
router.get("/preparecertCount", function (req, res) {
    requestCertification.find({ certState: "principalApproved" })
        .count()
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

});


module.exports = router;