import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';
import { MycookiesService } from '../../Admin/mycookies.service';
import { Subjects } from './Subject';


interface subjects {
  _id: String,
  subId: String,
  subName: String
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subs :  subjects [] = [];
  usertype;


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private cookies: MycookiesService

  ) { }

  SubjectRegForm = new FormGroup({
    sbid:new FormControl(''),
    sbname: new FormControl('')
  });

  ngOnInit() {
    var myCookie = JSON.parse(this.cookies.getCookie("userAuth"))
    this.usertype = myCookie.usertype;

    const url = "http://localhost:3000/class_management/getSubjects";

    this.http.get<any>(url).subscribe( res =>{
      this.subs=res.data;
      console.log(this.subs);
    });
    
  }

  //one by one subject registration function
  regSubject() {

    const subjectData = {
      subId: this.SubjectRegForm.value.sbid,
      subName: this.SubjectRegForm.value.sbname
    }
    console.log(subjectData);

    const url = "http://localhost:3000/class_management/registerSubject"

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to add this subject ?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.http.post<any>(url, subjectData).subscribe(res => {
          if (res.state) {
            console.log(res.msg);
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open(res.msg, true ? "Done" : undefined, config);

            window.location.reload();
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

  //delete a subject 
  delSubject(event, subid) {
    const subId = subid;

    const url = "http://localhost:3000/class_management/deleteSubject/";

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to delete this subject ?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.http.delete<any>(url + subId).subscribe(res => {
          if (res.state) {
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open(res.msg, true ? "Done" : undefined, config);

            window.location.reload();
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
