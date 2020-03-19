import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { MycookiesService } from '../../Admin/mycookies.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

interface subjectsArray {
  subject: String
}
interface yearArrray {
  year: String
}
interface StudentsAverage {
  position: String
  userid: String
  username: String
  year: String
  term: String
  average: String
  classname: String
}

class subjectsFilter {
  classname: String
  year: String
  term: String
  subject: String
  mark: String
  subId: String
}
interface allStudentMarks {
  userid: String
  mark: String
  name: String
}

/*teacher page*/
interface allStudnetAverages {
  userid: String
  username: String
  average: String
}
interface eachStudentData {
  userid: String
  username: String
  term: String
  year: String
  classname: String
  position: String
  average: String
  dataArray: {
    subject: String
    subId: String
    marks: String
  }
}
@Component({
  selector: 'app-student-progress',
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.scss']
})
export class StudentProgressComponent implements OnInit {


  constructor(
    private http: HttpClient,
    private cookies: MycookiesService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  usertype
  cookie
  studentAverageDiv: boolean = false;
  eachStuDataDiv: boolean = false;
  submitted = false;
  subjectGraph = false;
  marksTable = false;
  userid
  term
  year
  subject
  className

  myYear: yearArrray[] = []; //load the last 5 years in to the mat select*
  mySubject: subjectsArray[] = [];    //load the all subject names
  myTerm = ['1st Term', '2nd Term', '3rd Term',]  //load terms to the combo-box
  stuClzAve: StudentsAverage[] = [];  //load sudent data with position and averages
  stuSubMarks: subjectsFilter[] = []; //load all the marks of one subject
  allStuMarks: allStudentMarks[] = [];  //load the all subject details of the student
  allStudnetAverages: allStudnetAverages[] = [] //get all the student averages
  eachStudentData: eachStudentData[] = []

  /*bar chart options*/
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['1st Term', '2nd Term', '3rd Term'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'My Subject' },
  ];
  chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(0, 140, 255,0.5)',
      borderColor: 'rgba(2, 113, 204,0.5)',
      pointBackgroundColor: 'rgba(0, 65, 100,0.5)',
      pointBorderColor: 'rgba(2, 50, 50)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
  ];
  /************************************************************* */
  DataForm1 = this.fb.group({
    year: ['', Validators.required],
    term: ['', Validators.required],
    className: [''],
  });

  SubjectForm = this.fb.group({   //click one subject and perfornm this form
    stMark_year: ['', Validators.required],
    stMark_subId: ['', Validators.required],
    stMark_term: ['', Validators.required],
  })


  /************************************************************ */

  ngOnInit() {

    // console.log(this.barChartData[0].data[0]);

    this.cookie = JSON.parse(this.cookies.getCookie("userAuth"));
    this.usertype = this.cookie.usertype; // load user type to the userType array
    this.userid = this.cookie.userid;

    var year = new Date().getFullYear();
    var years = [];

    /*load the last 5 years in to the mat select*/
    for (var i = 0; i < 5; i++) {
      years.push(year - i);
      this.myYear[i] = years[i]
    }

    /*find all students marks data with final marks(for teacher)*/
    const url2 = "http://localhost:3000/student_marks/classAverages"

    //spesific subjects with marks to list the subject marks in student portal
    const url3 = "http://localhost:3000/student_marks/subjectMarks"
    this.http.get<any>(url3 + "/" + this.userid).subscribe(res => {
      this.stuSubMarks = res
      // console.log(res);
    })

    /*get all the subject names for the subject searching combo box*/
    const url4 = "http://localhost:3000/class_management/getSubjects"
    this.http.get<any>(url4).subscribe(res => {
      this.mySubject = res.data;
    });
  }

  get f() {
    return this.DataForm1.controls;
  }

  onReset() {
    this.submitted = false;
    this.DataForm1.reset();
  }

  /*get all subject data specific subject clickin subject*/
  subjectData(val) {
    /*Set all zeros to barChartData array in graph */
    for (var i = 0; i < 3; i++) {
      this.barChartData[0].data[i] = 0
    }

    this.subjectGraph = false;    //set bar graph to false

    const objectData = {    //sen data to the backend
      userid: this.userid,
      year: val.year,
      subId: val.subId,
    }

    const url = "http://localhost:3000/student_marks/subjectData"
    const url2 = "http://localhost:3000/student_marks/subjectAllStuData"

    this.http.post<any>(url, objectData).subscribe(res => {
      for (var i = 0; i < 3; i++) {   //sorting the terms and add to marks to the barGraphArray
        for (var j = 0; j < 3; j++) {
          if (res[j] != null) {
            if (res[j].term == i + 1) {
              this.barChartData[0].data[i] = res[j].marks
            }
          }
        }
      }
      this.barChartData[0].label = val.subject
      this.subjectGraph = true;     //set graph display


      const objectData2 = {    //sent data to the backend
        term: val.term,
        year: val.year,
        subId: val.subId,
        classname: val.classname
      }

      this.http.post<any>(url2, objectData2).subscribe(res => {
        this.allStuMarks = res;
        
      })
      this.marksTable = true
    })
  }


  /*one student average and position div*/
  StudentData() {
    this.studentAverageDiv = false
    if (this.DataForm1.value.term == '1st Term') { this.term = 1 }
    else if (this.DataForm1.value.term == '2nd Term') { this.term = 2 }
    else if (this.DataForm1.value.term == '3rd Term') { this.term = 3 }

    const Studata = {
      term: this.term,
      classname: this.DataForm1.value.className,
      year: this.DataForm1.value.year,
      userid: this.userid
    };

    const url = 'http://localhost:3000/student_marks/studentAverage'

    this.http.post<any>(url, Studata).subscribe(res => {
      this.studentAverageDiv = true
      this.stuClzAve = res;
    })
  }

  /*load all the student data into the page within that class*/
  classStudentData() {

    if (this.DataForm1.value.term == '1st Term') { this.term = 1 }
    else if (this.DataForm1.value.term == '2nd Term') { this.term = 2 }
    else if (this.DataForm1.value.term == '3rd Term') { this.term = 3 }

    const classData = {
      term: this.term,
      classname: this.DataForm1.value.className,
      year: this.DataForm1.value.year,
    };

    const url = 'http://localhost:3000/student_marks/classAverages'

    this.http.post<any>(url, classData).subscribe(res => {
      // this.studentAverageDiv = true
      this.allStudnetAverages = res;
      this.marksTable = true
    })
  }

  // get one student data clicking tabele
  studentDetails(stdata) {
    const studentObject = {
      term: stdata.term,
      year: stdata.year,
      classname: stdata.classname,
      userid: stdata.userid,
      average: stdata.average,
      username: stdata.username,
      position: stdata.position
    }
    const url = "http://localhost:3000/student_marks/oneStudentData"
    this.http.post<any>(url, studentObject).subscribe(res => {
      this.eachStudentData = res
      this.eachStuDataDiv = true    //set data dive visual
    })
  }
}
