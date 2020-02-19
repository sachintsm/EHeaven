import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MycookiesService } from '../../Admin/mycookies.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';

interface subjectsArray {
  subId: String,
  subName: String,
}

@Component({
  selector: 'app-academic-subject',
  templateUrl: './academic-subject.component.html',
  styleUrls: ['./academic-subject.component.scss']
})
export class AcademicSubjectComponent implements OnInit {

  mySubject: subjectsArray[] = []
  images
  filename
  sbjName
  userType

  constructor(
    private router: Router,
    private cookies: MycookiesService,
    private fb: FormBuilder,
    private http: HttpClient,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  // grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  attachment = ['Tutorial', 'Lecture Slide', 'Resources', 'Other'];   //academic attachment type
  // subjects = ['Maths', 'Science', 'English']

  //this is used to serach subject
  subjectForm = this.fb.group({
    subject: ['', Validators.required]
  });

  //this is used to add attachment and details
  addSubjectForm = this.fb.group({
    attachmentType: ['', Validators.required],
    subjectName: ['', Validators.required],
    className: ['', Validators.required],
    showName: ['', Validators.required]
  })


  ngOnInit() {
    const url = "http://localhost:3000/class_management/getSubjects"
    this.http.get<any>(url).subscribe(res => {
      this.mySubject = res.data;    //get all the registred subjects
    });
    var userCookies = JSON.parse(this.cookies.getCookie("userAuth"))
    this.userType = userCookies.usertype  //get user type
  }
  // load the image as the button event and asign to  the images variable
  selectFile(event) {
    if (event.target.files.length > 0) {  // check the file is select or not.
      const file = event.target.files[0];
      this.images = file;
      this.filename = file.name;
      console.log(this.filename)
    }
  }

  //seach subject function
  searchSubject() {
    var userCookie = JSON.parse(this.cookies.getCookie("userAuth"));
    var id = userCookie.userid;

    this.sbjName = this.subjectForm.value.subject
    console.log(this.sbjName);

    this.router.navigate(['../' + id+'/academics/' + this.sbjName]);    //redirect to the academis with subject name
  }

  //subject attachemnt adding function
  addSubect() {
    var userCookie = JSON.parse(this.cookies.getCookie("userAuth"));
    var id = userCookie.userid;
    var uname = userCookie.name;

    const url = "http://localhost:3000/academics/addStuff"

    const formData = new FormData()

    formData.append('academic_stuff', this.images)
    formData.append('userid', id)
    formData.append('teachername', uname)
    formData.append('attachmenttype', this.addSubjectForm.value.attachmentType)
    formData.append('subject', this.addSubjectForm.value.subjectName)
    formData.append('class', this.addSubjectForm.value.className)
    formData.append('showname', this.addSubjectForm.value.showName)

    if (this.images == null) {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please select an attachment..! ", true ? "Ok" : undefined, config);
    }
    else {

      //coonfiremaration message box
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          message: 'Are you sure want to add?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.http.post<any>(url, formData).subscribe(res => {
            if (res.state) {
              console.log(res.msg);
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open(res.msg, true ? "Done" : undefined, config);
            }
            else {
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open(res.msg, true ? "Retry" : undefined, config);
            }
          })
        }
      })
    }
  }
}

