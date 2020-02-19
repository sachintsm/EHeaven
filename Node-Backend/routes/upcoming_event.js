const express = require('express');
const router = express.Router();
const Event = require('../models/upcoming_event');
const config = require('../config/database');
const path = require('path');



// save to data on database
router.post("/addevent",(req,res)=>{

console.log('Ashan');
    const newEvent = new Event({
        userid:req.params.userid,
        head: req.body.head,
        eventdetail: req.body.eventdetail,
        day: req.body.day
    });

    newEvent.save()
        .then(result =>{
            //console.log(result)
            res.json({ state: true, msg : "Data inserted Successfully..."});

        })
        .catch(error =>{
            console.log(error)
            res.json({state: true , msg: "Data Inserting Unsuccessfull..."});
           
        });
});

// view data function
router.get("/viewevent",(req,res)=>{
    Event.find().sort({day: -1})
        .select('head eventdetail day')
        .exec()
        .then(docs =>{
            console.log("Data Transfer Success...");
            res.status(200).json(docs);
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({
                error:error
            });
        });
});

// event delete option

router.delete('/deleteevent/:_id', (req,res) => { 
    const id = req.params._id;
    Event.remove({_id: id})
    .exec()
    .then(result =>{
        res.status(200).json({state:true , msg: 'Deleted Successfully'
        });
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            error:error
        });
    });
     
});

router.get('/editevent/:id' , (req,res)=>{
    const eventid = req.params.id;
    Event.findById(eventid , (err, event)=>{
    if(err)throw err;
    if(!event){
        res.json({state:false,msg:'No event found'});
        return;
    }
    Event.findOne({_id :eventid})
        .select()
        .exec()
        .then(data =>{
            res.json({state: true , msg:'Event transfer success..',data:data});
        })
        .catch(error => {
            res.json({state: false, msg:'Event Inserting Unsuccessfull...'})
        });
    });
});


router.post('/updateEvent/:_id',(req,res)=>{
    const eventid = req.params._id;

    console.log(eventid);

    const input = {
        head:req.body.head,
        eventdetail:req.body.eventdetail,
        day:req.body.day,
    }

    // for (const [key, value] of Object.entries(input)) {
    //     console.log(key, value);
    // }
    
    Event.update({_id:eventid}, {$set:input})
        .exec()
        .then(data =>{
            console.log('Event Updated Successfuly..!')
            Response.json({ state:true , msg:'Event Update Successfuly..!'})
        })
        .catch(error =>{
            res.json({state:false , msg:'Event Updating Unsuccesful..!'})
        });
});


// get top 4 event for show in home
router.get('/topEvent' , (req,res)=>{
    Event.find()
    .sort({day:-1})
    .limit(4)
    .then(result =>{
        //console.log(result)
        res.json({state:true , msg: "Data Transfer Success..!",data: result})
    })
    .catch(error=>{
        console.log(error)
        res.json({state:false , msg: "Data Transfer Unuccessfull..!"})
    })
})
module.exports = router ;