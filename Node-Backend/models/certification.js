const mongoose = require('mongoose');
const Schema = mongoose.schema;

/********************Student certification requests **************************************/
const requestCertificationSchema = mongoose.Schema({
    userid: { type: String, require: true },
    certName: { type: String, require: true },
    certType: { type: String, require: true },
    examName: { type: String, require: true },
    examYear: { type: String, require: true },
    examIndex: { type: String,  require: true },
    reqDate: {type: String, require: true},
    filePath:{type: String, require:true},  
    certState: { type: String, require: true}
});

/********************Admin Prepare certificates******************************************/
//Student Status verification certificate
const requestStudentstatusSchema = mongoose.Schema({
    studentId: { type: String, require: true },
    studentName: { type: String, require: true },
    admissionNum: { type: String, require: true },
    dateofAdmission: { type: String, require: true },
    currentStatus: { type: String, require: true },
    description: { type: String, require: true },
    filePath:{type: String, require:true},
    certState: {type :String, require: true}
});

//character certificate
const requestCharacterCertSchema = mongoose.Schema({
    studentId: { type: String, require: true },
    studentName: { type: String, require: true },
    admissionNum: { type: String, require: true },
    dateofAdmission: { type: String, require: true },
    dateofLeaving: { type: String, require: true },
    lastClass: { type: String, require: true },
    lastExam: {type :String, require: true},
    examYear: {type :String, require: true},
    academicStatus: {type :String, require: true},
    moral: {type :String, require: true},
    leadership: {type :String, require: true},
    societies: {type :String, require: true},
    sports: {type :String, require: true},
    filePath:{type: String, require:true},
    certState: {type :String, require: true}
});

//leaving certificate
const requestLeavingCertSchema = mongoose.Schema({
    studentId: { type: String, require: true },
    studentName: { type: String, require: true },
    admissionNum: { type: String, require: true },
    dateofAdmission: { type: String, require: true },
    dateofLeaving: { type: String, require: true },
    dateofBirth: { type: String, require: true },
    fathersName: {type :String, require: true},
    fathersOccupation: {type :String, require: true},
    fathersAddress: {type :String, require: true},
    religion: {type :String, require: true},
    schoolName: {type :String, require: true},
    schoolType: {type :String, require: true},
    cause: {type :String, require: true},
    lastClass: {type :String, require: true},
    subjects: {type :String, require: true},
    filePath:{type: String, require:true},
    certState: {type :String, require: true}
});

//A/L certificate
const requestAlCertSchema = mongoose.Schema({
    studentId: { type: String, require: true },
    studentName: { type: String, require: true },
    examYear: { type: String, require: true },
    centerNo: { type: String, require: true },
    indexNo: { type: String, require: true },
    medium: { type: String, require: true },
    zscore: {type :String, require: true},
    districtrank: {type :String, require: true},
    islandrank: {type :String, require: true},
    subjects: {type :Array, require: true},
    filePath:{type: String, require:true},
    certState: {type :String, require: true}
    
});

//O/L certificate
const requestOlCertSchema = mongoose.Schema({
    studentId: { type: String, require: true },
    studentName: { type: String, require: true },
    examYear: { type: String, require: true },
    centerNo: { type: String, require: true },
    indexNo: { type: String, require: true },
    subjectsOl: {type :Array, require: true},
    filePath:{type: String, require:true},
    certState: {type :String, require: true}
});

const requestCertification = mongoose.model("requestCertification", requestCertificationSchema);
const requestStudentstatus=  mongoose.model("requestStudentstatus", requestStudentstatusSchema);
const requestCharacterCert=  mongoose.model("requestCharacterCert", requestCharacterCertSchema);
const requestLeavingCert=  mongoose.model("requestLeavingrCert", requestLeavingCertSchema);
const requestAlCert=  mongoose.model("requestAlrCert", requestAlCertSchema);
const requestOlCert=  mongoose.model("requestOlrCert", requestOlCertSchema);

module.exports = {
    requestCertification: requestCertification,
    requestStudentstatus: requestStudentstatus,
    requestCharacterCert: requestCharacterCert,
    requestLeavingCert: requestLeavingCert,
    requestAlCert: requestAlCert,
    requestOlCert: requestOlCert,
}