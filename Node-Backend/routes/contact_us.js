const express = require('express');
const router = express.Router();
const ContactUs = require('../models/contact_us');
const config = require('../config/database');


//add new message
router.post("/sendMessage", function (req, res) {

    console.log(req.body);

    const newData = new ContactUs({ //craete new object to add new mail data
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        subject: req.body.subject,
        message: req.body.message,
        date: Date(),
        state: "pending"
    })
    // console.log(newData);

    const newMesage = new ContactUs(newData)
    // console.log(newMesage)    
    newMesage.save()
        .then(result => {
            console.log(result)
            res.json({ state: true, msg: "Data Inserted Successfully..!" });
        })
        .catch(error => {
            console.log(error)
            res.json({ state: false, msg: "Data Inserting Unsuccessfull..!" });
        })
})

//get all messages
router.get("/allMessages", function (req, res) {
    ContactUs.find().sort({ date: -1 })
        .select('name subject message date state mobile email')
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
})

//get one message
router.get("/viewMessage/:id", function (req, res) {
    const id = req.params.id;
    ContactUs.findOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
})

//read state update
router.get("/readMessage/:id", function (req, res) {
    const id = req.params.id;
    ContactUs.update({ _id: id },
        {
            $set: {
                state: "read"
            }
        })
        .exec()
        .then(data => {
            console.log("Data Update Success..!")
            res.json({ state: true, msg: "Data Update Success..!" });

        })
        .catch(error => {
            console.log("Data Updating Unsuccessfull..!")
            res.json({ state: false, msg: "Data Updating Unsuccessfull..!" });
        })
})

//delete message
router.delete("/deleteMessage/:id", function (req, res) {
    const id = req.params.id;
    ContactUs.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Successfully deleted !"
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            })
        })
})

module.exports = router;