const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const { createServer } = require('http');

const config = require('./config/database');
const users = require('./routes/users');
const notification = require('./routes/notification');
const certification = require('./routes/certification');
const generate_certification = require('./routes/generate_certification');
// const view_certificates = require('./routes/view_certificates');
const attendance = require('./routes/attendance');
const clasroom = require('./routes/class');
const class_management = require('./routes/class_management');
const teacher_management = require('./routes/teacher_management');
const academics = require('./routes/academics');
const news = require('./routes/news');
const filehandler= require('./routes/filehandler');
const mark= require('./routes/student_marks');
const payment = require('./routes/payment');
const student_extra=require('./routes/student_extra');
const contact_us = require('./routes/contact_us');
const admin = require('./routes/admin'); 
const upcoming_event = require('./routes/upcoming_event');

app.use(cors());
const connection = mongoose.connect("mongodb+srv://sachin:sachin21@@ehven-fm9lu.gcp.mongodb.net/Eheaven?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
})
.then(() => console.log("Database Connected"))
.catch(err => console.log(err)
);

// if(connection){
//     console.log("Database Connected");
// }
// else{
//     console.log("Database not Connected");
// }

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(express.static(path.join(__dirname,"public")));

app.use('/users', users);
app.use('/notification', notification);
app.use('/certification', certification);
app.use('/generate_certification', generate_certification);
// app.use('/view_certificates', view_certificates); 
app.use('/attendance',attendance);
app.use('/classroom',clasroom);
app.use('/class_management',class_management);
app.use('/teacher_management',teacher_management);
app.use('/academics', academics);
app.use('/news',news);
app.use('/filehandler',filehandler);
app.use('/student_marks',mark);
app.use('/payment', payment);
app.use('/student_extra',student_extra);
app.use('/contact_us', contact_us);
app.use('/admin', admin);
app.use('/upcoming_event',upcoming_event)

app.get("/", function(req,res) {
    // res.send("Hello world");
});

app.listen(3000, function() {
    console.log("listening to port 3000");
});

global.CronJob = require('./cron.js');      //backup cron job 

module.exports = app;  