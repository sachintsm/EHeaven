const express = require('express');
const router = express.Router();
const teacherTimeTable = require('../models/teacher_management');
const config = require('../config/database');

router.post("/timeTableRegistration", function (req, res) {
    const newData = req.body
    // console.log(newTimeTabl)
    const newTimeTable = new teacherTimeTable(newData)
    console.log(newTimeTable)
    newTimeTable.save()
        .then(result => {
            console.log(result)
            res.json({ state: true, msg: "Data Inserted Successfully..!" });
        })
        .catch(error => {
            console.log(error)
            res.json({ state: false, msg: "Data Inserting Unsuccessfull..!" });
        })
});

//get teacher time table details
router.get('/getTimetable/:id', function (req, res) {
    const id = req.params.id
    teacherTimeTable.findOne({ teacherId: id })
        .exec()
        .then(docs => {
            console.log("Data Transer Success..!")
            res.json(docs);
        })
        .catch(error => {
            console.log(error)
            res.json({ state: false, msg: "Data Transfer Unsuccessfull..!" });
        })
})
module.exports = router; 
