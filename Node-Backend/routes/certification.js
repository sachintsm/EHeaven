const express = require("express");
const router = express.Router();
const { requestCertification } = require("../models/certification");
const { requestStudentstatus } = require("../models/certification");
const { requestCharacterCert } = require("../models/certification");
const { requestLeavingCert } = require("../models/certification");
const { requestAlCert } = require("../models/certification");
const { requestOlCert } = require("../models/certification");
const { academicSubject } = require("../models/class_management");
const config = require("../config/database");
const pdfDoc = require("pdf-lib");
const fs = require("fs");

/*Student request certificates */
router.post("/requestCert", function(req, res) {
  const newRequest = new requestCertification({
    userid: req.body.userid,
    certName: req.body.certName,
    certType: req.body.certType,
    examName: req.body.examName,
    examYear: req.body.examYear,
    examIndex: req.body.examIndex,
    reqDate: req.body.reqDate,
    certState: req.body.certState
  });
  console.log(newRequest);
  newRequest
    .save()
    .then(result => {
      console.log(result);
      res.json({ state: true, msg: "Data inserted Successfully..!" });
    })
    .catch(error => {
      console.log(error);
      res.json({ state: false, msg: "Data inserting Unsuccessfull..!" });
    });
});

/************************get certification requests from students*****************************/
//pending certification requests of students
router.get("/pendingCert/:id", function(req, res) {
  // console.log("Hello");
  const id = req.params.id;
  requestCertification
    .find({ $or: [ { certState: "Pending" }, { certState: "principalApproved" } ], userid: id })
    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState"
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

//get issued all certificates issued to a particular user
router.get("/issuedCert/:id", function(req, res) { 
  // console.log("Hello");
  const id = req.params.id;
  requestCertification
    .find({ certState: "Completed", userid: id })
    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState "
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
/************************get certification requests from users(Principal)******************************/
router.get("/pendingCertList1", function(req, res) {
  // console.log("Hello");
  requestCertification
    .find({ certState: "Pending" })

    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState "
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

/************************get certification requests from users(Admin comp)******************************/
router.get("/pendingCertList", function(req, res) {
  // console.log("Hello");
  requestCertification
    .find({ certState: "principalApproved" })

    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState "
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

/************************get completed certification requests from users(Admin comp)******************************/

//student status certificates
router.get("/completedCertList1", function(req, res) {
  // console.log("Hello");
  requestCertification
    .find({
      certState: "Completed",
      certType: "Student Status Verification Certificate"
    })

    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState "
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

//character certificates
router.get("/completedCertList2", function(req, res) {
  // console.log("Hello");
  requestCertification
    .find({ certState: "Completed", certType: "Character Certificate" })

    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState "
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

//leaving certificates
router.get("/completedCertList3", function(req, res) {
  // console.log("Hello");
  requestCertification
    .find({ certState: "Completed", certType: "Leaving Certificate" })

    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState "
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

//educational certificates
router.get("/completedCertList4", function(req, res) {
  // console.log("Hello");
  requestCertification
    .find({ certState: "Completed", certType: "Educational Certificate" })

    .sort({ _id: 1 })
    .select(
      "userid certName certType examName examYear examIndex reqDate certState "
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


/*******************************reject certification requests****************************************/

router.delete("/deleteCert/:_id", function(req, res) {
  const id = req.params._id;
  requestCertification
    .remove({ _id: id })

    .exec()
    .then(result => {
      res.status(200).json({ state: true, message: "Deleted Successfully" });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ state: false, error: error });
    });
});

/*******************************accept certification requests****************************************/
router.post("/acceptCert/:_id", function(req, res) {
  console.log(req.params._id);
  const id = req.params._id;

  requestCertification
    .update(
      { _id: id },
      {
        certState: "principalApproved"
      }
    )
    .exec();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/completeCert_studentStatus/:_id", function(req, res) {
  console.log(req.params._id);
  const id = req.params._id;

  requestCertification
    .update(
        { $and: [ { userid: id }, { certType: "Student Status Verification Certificate" } ] },
      {
        certState: "Completed"
      }
      
    )
    .exec()
    .then(docs => {
      console.log("Data Transfer Success.!");
      res.status(200).json({ msg: "Updated..!" });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: error });
    });
});

router.get("/completeCert_character/:_id", function(req, res) {
    console.log(req.params._id);
    const id = req.params._id;
  
    requestCertification
      .update(
          { $and: [ { userid: id }, { certType: "Character Certificate" } ] },
        {
          certState: "Completed"
        }
        
      )
      .exec()
      .then(docs => {
        console.log("Data Transfer Success.!");
        res.status(200).json({ msg: "Updated..!" });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error });
      });
  });

  router.get("/completeCert_leaving/:_id", function(req, res) {
    console.log(req.params._id);
    const id = req.params._id;
  
    requestCertification
      .update(
          { $and: [ { userid: id }, { certType: "Leaving Certificate" } ] },
        {
          certState: "Completed"
        }
        
      )
      .exec()
      .then(docs => {
        console.log("Data Transfer Success.!");
        res.status(200).json({ msg: "Updated..!" });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error });
      });
  });

  router.get("/completeCert_education_al/:_id", function(req, res) {
    console.log(req.params._id);
    const id = req.params._id;
  
    requestCertification
      .update(
          { $and: [ { userid: id }, { certType: "Educational Certificate" }, { examName: "Advanced Level ( G.C.E. A/L ) Examination" } ] },
        {
          certState: "Completed"
        }
        
      )
      .exec()
      .then(docs => {
        console.log("Data Transfer Success.!");
        res.status(200).json({ msg: "Updated..!" });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error });
      });
  });

  router.get("/completeCert_education_ol/:_id", function(req, res) {
    console.log(req.params._id);
    const id = req.params._id;
  
    requestCertification
      .update(
          { $and: [ { userid: id }, { certType: "Educational Certificate" }, { examName: "Ordinary Level ( G.C.E. O/L ) Examination" } ] },
        {
          certState: "Completed"
        }
        
      )
      .exec()
      .then(docs => {
        console.log("Data Transfer Success.!");
        res.status(200).json({ msg: "Updated..!" });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error });
      });
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//get a-level subjects list
router.get("/getAL", function(req, res) {
  academicSubject
    .find()
    .sort({ subId: 1 })
    .select("subId subName")
    .exec()
    .then(docs => {
      console.log("Data Transfer Success.!");
      res.status(200).json({ data: docs });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: error });
    });
});

//get o-level subjects list
router.get("/getOL", function(req, res) {
  academicSubject
    .find()
    .sort({ subId: 1 })
    .select("subId subName")
    .exec()
    .then(docs => {
      console.log("Data Transfer Success.!");
      res.status(200).json({ data: docs });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: error });
    });
});

module.exports = router;
