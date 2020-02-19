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




/*******************************generate student status certificate pdf ******************************/

router.post("/studentstatus", async function(req, res) {
  // console.log("hello at server ");
  const x = `./local_storage/certificates_completed/student_status/${req.body.studentId}.pdf`; //file path of the pdf generated
  const newRequest = new requestStudentstatus({
    studentId: req.body.studentId,
    studentName: req.body.studentName,
    admissionNum: req.body.admissionNum,
    dateofAdmission: req.body.dateofAdmission,
    description: req.body.description,
    certState: req.body.certState
  });
  newRequest.filePath = x;
  //console.log(newRequest.filePath);
  const uint8Array = fs.readFileSync(__dirname + "/certificates/student.pdf");
  var doc = await pdfDoc.PDFDocument.load(uint8Array);
  const pages = doc.getPages();
  const page = pages[0];
  page.drawText(newRequest.studentName, {
    x: 200,
    y: 615,
    size: 12
  });
  page.drawText(newRequest.admissionNum, {
    x: 215,
    y: 447,
    size: 12
  });
  page.drawText(newRequest.dateofAdmission, {
    x: 240,
    y: 580,
    size: 12
  });
  page.drawText(newRequest.description, {
    x: 60,
    y: 510,
    size: 12
  });
  const pdfBytes = await doc.save();

  fs.writeFileSync(x, pdfBytes);

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
  // res.send("Hello users");
});

/*******************************generate character certificate pdf ***********************************/

router.post("/charactercert", async function(req, res) {
  // console.log("hello at server ");
  const x = `./local_storage/certificates_completed/character/${req.body.studentId}.pdf`; //file path of the pdf generated
  const newRequest = new requestCharacterCert({
    studentId: req.body.studentId,
    studentName: req.body.studentName,
    admissionNum: req.body.admissionNum,
    dateofAdmission: req.body.dateofAdmission,
    dateofLeaving: req.body.dateofLeaving,
    lastClass: req.body.lastClass,
    lastExam: req.body.lastExam,
    examYear: req.body.examYear,
    academicStatus: req.body.academicStatus,
    moral: req.body.moral,
    leadership: req.body.leadership,
    societies: req.body.societies,
    sports: req.body.sports,
    certState: req.body.certState
  });
  newRequest.filePath = x;
  console.log(newRequest);
  const uint8Array = fs.readFileSync(__dirname + "/certificates/Character.pdf");

  var doc = await pdfDoc.PDFDocument.load(uint8Array);
  const pages = doc.getPages();
  const page = pages[0];
  page.drawText(newRequest.studentName, {
    x: 175,
    y: 635,
    size: 12
  });
  page.drawText(newRequest.admissionNum, {
    x: 250,
    y: 148,
    size: 10
  });
  page.drawText(newRequest.dateofAdmission, {
    x: 250,
    y: 612,
    size: 10
  });
  page.drawText(newRequest.dateofLeaving, {
    x: 400,
    y: 612,
    size: 10
  });
  page.drawText(newRequest.lastClass, {
    x: 200,
    y: 589,
    size: 10
  });
  page.drawText(newRequest.examYear, {
    x: 350,
    y: 566,
    size: 10
  });
  page.drawText(newRequest.leadership, {
    x: 100,
    y: 488,
    size: 10,
    lineHeight: 10
  });
  page.drawText(newRequest.societies, {
    x: 100,
    y: 415,
    size: 10,
    lineHeight: 10
  });
  page.drawText(newRequest.sports, {
    x: 100,
    y: 320,
    size: 10,
    lineHeight: 10
  });
  page.drawText(newRequest.academicStatus, {
    x: 410,
    y: 207,
    size: 10
  });
  page.drawText(newRequest.moral, {
    x: 130,
    y: 191,
    size: 10
  });
  const pdfBytes = await doc.save();

  fs.writeFileSync(x,pdfBytes);

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

/*******************************generate leaving certificate pdf *************************************/

router.post("/leavingcert", async function(req, res) {

  // console.log("hello at server ");
  const x = `./local_storage/certificates_completed/leaving/${req.body.studentId}.pdf`; //file path of the pdf generated
  const newRequest = new requestLeavingCert({
    studentId: req.body.studentId,
    studentName: req.body.studentName,
    admissionNum: req.body.admissionNum,
    dateofAdmission: req.body.dateofAdmission,
    dateofLeaving: req.body.dateofLeaving,
    dateofBirth: req.body.dateofBirth,
    fathersName: req.body.fathersName,
    fathersOccupation: req.body.fathersOccupation,
    fathersAddress: req.body.fathersAddress,
    religion: req.body.religion,
    schoolName: req.body.schoolName,
    schoolType: req.body.schoolType,
    cause: req.body.cause,
    lastClass: req.body.lastClass,
    subjects: req.body.subjects,
    certState: req.body.certState
  });
  newRequest.filePath = x;
  console.log(newRequest);
  const uint8Array = fs.readFileSync(__dirname + "/certificates/Leaving.pdf");
  var doc = await pdfDoc.PDFDocument.load(uint8Array);
  const pages = doc.getPages();
  const page = pages[0];
  page.drawText(newRequest.studentName, {
    x: 145,
    y: 730,
    size: 9,
    lineHeight: 23
  });
  page.drawText(newRequest.dateofBirth, {
    x: 115,
    y: 685,
    size: 9
  });
  page.drawText(newRequest.religion, {
    x: 400,
    y: 685,
    size: 9
  });
  page.drawText(newRequest.fathersName, {
    x: 210,
    y: 663,
    size: 9,
    lineHeight: 12
  });
  page.drawText(newRequest.fathersOccupation, {
    x: 210,
    y: 637,
    size: 9
  });
  page.drawText(newRequest.fathersAddress, {
    x: 250,
    y: 615,
    size: 9,
    lineHeight: 13
  });
  page.drawText(newRequest.schoolName, {
    x: 60,
    y: 560,
    size: 9
  });
  page.drawText(newRequest.schoolType, {
    x: 415,
    y: 545,
    size: 9
  });
  page.drawText(newRequest.dateofAdmission, {
    x: 145,
    y: 518,
    size: 9
  });
  page.drawText(newRequest.dateofLeaving, {
    x: 415,
    y: 518,
    size: 9
  });
  page.drawText(newRequest.admissionNum, {
    x: 145,
    y: 494,
    size: 9
  });
  page.drawText(newRequest.cause, {
    x: 385,
    y: 494,
    size: 9
  });
  page.drawText(newRequest.lastClass, {
    x: 445,
    y: 458,
    size: 9
  });
  page.drawText(newRequest.subjects, {
    x: 210,
    y: 430,
    size: 9
  });
  const pdfBytes = await doc.save();

  fs.writeFileSync(x,pdfBytes);

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

/*******************************generate A/L certificate pdf ****************************************/

router.post("/alcert", async function(req, res) {
  // console.log("hello at server ");
  const x = `./local_storage/certificates_completed/alevel/${req.body.studentId}.pdf`; //file path of the pdf generated
  const newRequest = new requestAlCert({
    studentId: req.body.studentId,
    studentName: req.body.studentName,
    examYear: req.body.examYear,
    centerNo: req.body.centerNo,
    indexNo: req.body.indexNo,
    medium: req.body.medium,
    subjects: req.body.subjects,
    zscore: req.body.zscore,
    districtrank: req.body.districtrank,
    islandrank: req.body.islandrank,
    certState: req.body.certState
  });
  newRequest.filePath = x;

  console.log(newRequest);
  const uint8Array = fs.readFileSync(__dirname + "/certificates/A-Level.pdf");
  var doc = await pdfDoc.PDFDocument.load(uint8Array);
  const pages = doc.getPages();
  const page = pages[0];
  page.drawText(newRequest.studentName, {
    x: 150,
    y: 648,
    size: 10,
    lineHeight: 23
  });
  page.drawText(newRequest.examYear, {
    x: 305,
    y: 543,
    size: 10
  });
  page.drawText(newRequest.centerNo, {
    x: 113,
    y: 499,
    size: 10
  });
  page.drawText(newRequest.indexNo, {
    x: 270,
    y: 499,
    size: 10
  });
  page.drawText(newRequest.medium, {
    x: 450,
    y: 499,
    size: 10
  });
  var a = 0;
  for (i = 0; i < newRequest.subjects.length; i++) {
    page.drawText(newRequest.subjects[i].subjectName, {
      x: 80,
      y: 406 + a,
      size: 10
    });
    a = a - 20;
  }
  var b = 0;
  for (i = 0; i < newRequest.subjects.length; i++) {
    page.drawText(newRequest.subjects[i].grade, {
      x: 330,
      y: 406 + b,
      size: 10
    });
    b = b - 20;
  }
  page.drawText(newRequest.zscore, {
    x: 430,
    y: 186,
    size: 9
  });
  page.drawText(newRequest.districtrank, {
    x: 430,
    y: 174,
    size: 9
  });
  page.drawText(newRequest.islandrank, {
    x: 430,
    y: 161,
    size: 9
  });

  const pdfBytes = await doc.save();

  fs.writeFileSync(x,pdfBytes);

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

/*******************************generate O/L certificate pdf ****************************************/

router.post("/olcert", async function(req, res) {
  // console.log("hello at server ");
  const x = `./local_storage/certificates_completed/olevel/${req.body.studentId}.pdf`; //file path of the pdf generated
  const newRequest = new requestOlCert({
    studentId: req.body.studentId,
    studentName: req.body.studentName,
    examYear: req.body.examYear,
    centerNo: req.body.centerNo,
    indexNo: req.body.indexNo,
    subjectsOl: req.body.subjectsOl,
    certState: req.body.certState
  });
  newRequest.filePath = x;
  console.log(newRequest);
  const uint8Array = fs.readFileSync(__dirname + "/certificates/O-Level.pdf");
  var doc = await pdfDoc.PDFDocument.load(uint8Array);
  const pages = doc.getPages();
  const page = pages[0];
  page.drawText(newRequest.studentName, {
    x: 150,
    y: 648,
    size: 10,
    lineHeight: 23
  });
  page.drawText(newRequest.examYear, {
    x: 305,
    y: 543,
    size: 10
  });
  page.drawText(newRequest.centerNo, {
    x: 113,
    y: 520,
    size: 10
  });
  page.drawText(newRequest.indexNo, {
    x: 440,
    y: 520,
    size: 10
  });
  var a = 0;
  for (i = 0; i < newRequest.subjectsOl.length; i++) {
    page.drawText(newRequest.subjectsOl[i].subjectName, {
      x: 80,
      y: 440 + a,
      size: 10
    });
    a = a - 19;
  }
  var b = 0;
  for (i = 0; i < newRequest.subjectsOl.length; i++) {
    page.drawText(newRequest.subjectsOl[i].medium, {
      x: 278,
      y: 440 + b,
      size: 10
    });
    b = b - 19;
  }
  var c = 0;
  for (i = 0; i < newRequest.subjectsOl.length; i++) {
    page.drawText(newRequest.subjectsOl[i].grade, {
      x: 345,
      y: 440 + c,
      size: 10
    });
    c = c - 19;
  }
  const pdfBytes = await doc.save();
  fs.writeFileSync(x,pdfBytes);

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


/**************************************State change - of completed certificates ***************************************/

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

  router.get("/view/:id", function (req, res) {
    const certId = req.params.id;
    console.log(certId);
    // res.sendFile(path.join(__dirname, '../local_storage/notification_Attachment/' + filename));
});

module.exports = router;
