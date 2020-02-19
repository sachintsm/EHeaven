import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Mark} from './mark';
import { Marksheet} from './mark';



interface classTeacher {
  _id: String,
  ctName: String
}

interface students {
  _id: String,
  userid: String,
  name: String
}

interface yearArrray {
  year: String
}

interface subjectsArray {
  subId: String,
  subName: String,
}


@Component({
  selector: 'app-manage-marks',
  templateUrl: './manage-marks.component.html',
  styleUrls: ['./manage-marks.component.scss']
})
export class ManageMarksComponent implements OnInit {
// variable declaration I'm going to use
  className: String;
  ctName: classTeacher[] = [];
  csNames: students[] = [];
  ClassSearchForm: FormGroup;
  dataform: Boolean = false;  //sata division default didn't show
  submitted = false;
  myYear: yearArrray[] = [];
  mySubject: subjectsArray[] = [];
  FinalMark=new Marksheet();
  students:Array<Mark>=[];  

  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  myTerm = [1,2,3];

  StudentMarksForm = this.fb.group({
    subject: ['', Validators.required],
    year: ['', Validators.required],
    term: ['', Validators.required],
    studentId: ['', Validators.required],
    studentName: ['', Validators.required],
    subjectMark: ['', Validators.required],  
  });

  ngOnInit() {

    this.ClassSearchForm = this.fb.group({
      className: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]]
    });

    var year = new Date().getFullYear();
    var years = [];

    /*load the last 5 years in to the mat select*/
    for (var i = 0; i < 5; i++) {
      years.push(year - i);
      this.myYear[i] = years[i]
    }

    /*get all th subject names*/
    const url = "http://localhost:3000/class_management/getSubjects"
    this.http.get<any>(url).subscribe(res => {
      this.mySubject = res.data;

    });


  }

  get f() {
    return this.ClassSearchForm.controls;
  }
  get f2() {
    return this.StudentMarksForm.controls;
  }
  // setting mark for ith student in the students array this function bind for blur event
  setMark(i,mark){
    if(mark!=""){
      this.students[i].mark=mark;
    }
    

  }
  // this function for reset forms
  onReset() {
    this.submitted = false;
    this.ClassSearchForm.reset();
    this.StudentMarksForm.reset();
  }
  // this function run when user click find class without valid class it will nothing do
  searchStudents(className) {
    this.submitted = true;
    this.students=[];

    // stop here if form is invalid
    if (this.ClassSearchForm.invalid) {
      return;
    }
    else {

      const cName = className;
      this.FinalMark.classname=cName;
      

      var url1 = "http://localhost:3000/class_management/getClassTeacherName";
      var url2 = "http://localhost:3000/users/getStudentsNames/";

      // sent get http request to express server
      this.http.get<any>(url1 + '/' + cName).subscribe(res => {
        // if get false response it will show to the user 
        if (!res.state) {
          let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          config.verticalPosition='top';
          this.snackBar.open("Error find in data..! ", true ? "Retry" : undefined, config);
          this.dataform=false;
        }
        else {
          // If entered class is exist , then send another get http request to express server  get all list of student who belongs to enterd class

          this.ctName = res.data
          this.http.get<any>(url2 + cName).subscribe(res => {
            // if status is true
            if(res.state){
              // initialize to csNames variable data in respose 
              // response data contain given class students names and userid's
              this.csNames = res.data


              for(var i=0;i<this.csNames.length;i++){
                // for every student creatin mark object and stored names and userid's that variable and then push to our main array which is students
                  var temp=new Mark();
                  temp.name=this.csNames[i].name.toString();
                  temp.userid=this.csNames[i].userid.toString();
                  temp.mark=-1;
                  
                  this.students.push(temp);
                  this.dataform = true;
                }
                
            }else{
              // this will show error ocured in backend
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              config.verticalPosition='top';
              this.snackBar.open(res.msg, true ? "Retry" : undefined, config);
              this.dataform=false;
            }
            
          })
          
        }
      });

    }
  }
// Storing in database  mark sheet  
  submitMarks() {
    // validation checker
    // for all student should be assign a mark
    if (this.students.filter(e => e.mark === -1).length == 0 ) {
    //  check year is inserted or no
      if(this.StudentMarksForm.value.subject==null){
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        config.verticalPosition='top';
        this.snackBar.open("Please select Subject", true ? "Ok" : undefined, config);
        return;
      }
      //  check year is inserted or no
      if(this.StudentMarksForm.value.year==null){
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        config.verticalPosition='top';
        this.snackBar.open("Please select year", true ? "Ok" : undefined, config);
        return;
      }
      //  check year is inserted or no
      if(this.StudentMarksForm.value.term==null){
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        config.verticalPosition='top';
        this.snackBar.open("Please select term", true ? "Ok" : undefined, config);
        return;
      }
       // Add inserted data to database 
      const formData = new FormData();
      this.FinalMark.subject=this.StudentMarksForm.value.subject;
      this.FinalMark.term=this.StudentMarksForm.value.term;
      this.FinalMark.year=this.StudentMarksForm.value.year;
      this.FinalMark.marks=this.students;
      
      // calling http post request  to the with marksheet
      this.http.post<any>('http://localhost:3000/student_marks/addLog',this.FinalMark)
      .subscribe(
        data => {
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              config.verticalPosition='top';
              this.snackBar.open("Successfully data inserted", true ? "Ok" : undefined, config);
              this.dataform=false;
              window.location.reload();
        },
        error =>{ 
          let config = new MatSnackBarConfig();
          config.duration = true ? 10000 : 0;
          config.verticalPosition='top';
          this.snackBar.open("Data did't inserte. Somthing going wrong, please try again", true ? "Retry" : undefined, config);
          
        }
      );
    }else{
      let config = new MatSnackBarConfig();
      config.duration = true ? 10000 : 0;
      config.verticalPosition='top';
      this.snackBar.open("You must enterd every field ", true ? "Ok" : undefined, config);

    }
    
    

  }
}
