import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-add-teacher-timetable',
  templateUrl: './add-teacher-timetable.component.html',
  styleUrls: ['./add-teacher-timetable.component.scss']
})
export class AddTeacherTimetableComponent implements OnInit {

  // declare variables
  teacherName: String;
  teacherId: String;
  M1: String; M2: String; M3: String; M4: String; M5: String; M6: String; M7: String; M8: String;
  T1: String; T2: String; T3: String; T4: String; T5: String; T6: String; T7: String; T8: String;
  W1: String; W2: String; W3: String; W4: String; W5: String; W6: String; W7: String; W8: String;
  TH1: String; TH2: String; TH3: String; TH4: String; TH5: String; TH6: String; TH7: String; TH8: String;
  F1: String; F2: String; F3: String; F4: String; F5: String; F6: String; F7: String; F8: String;


  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  addTimeTable() {
    // create timeTable object and asign values
    const timeTable = {
      teacherName: this.teacherName,
      teacherId: this.teacherId,
      monday: [{
        one: this.M1,
        two: this.M2,
        three: this.M3,
        four: this.M4,
        five: this.M5,
        six: this.M6,
        seven: this.M7,
        eight: this.M8
      }],
      tuesday: [{
        one: this.T1,
        two: this.T2,
        three: this.T3,
        four: this.T4,
        five: this.T5,
        six: this.T6,
        seven: this.T7,
        eight: this.T8
      }],
      wednesday: [{
        one: this.W1,
        two: this.W2,
        three: this.W3,
        four: this.W4,
        five: this.W5,
        six: this.W6,
        seven: this.W7,
        eight: this.W8
      }],
      thursday: [{
        one: this.TH1,
        two: this.TH2,
        three: this.TH3,
        four: this.TH4,
        five: this.TH5,
        six: this.TH6,
        seven: this.TH7,
        eight: this.TH8
      }],
      friday: [{
        one: this.F1,
        two: this.F2,
        three: this.F3,
        four: this.F4,
        five: this.F5,
        six: this.F6,
        seven: this.F7,
        eight: this.F8
      }],
    }

    var url = "http://localhost:3000/teacher_management/timeTableRegistration";

    // popping the mesage box
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to Add?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.http.post<any>(url, timeTable).subscribe(res => {  //requesting to the backend and send data
          if (res.state) {
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Time table Successfully Added..! ", true ? "Done" : undefined, config);
            window.location.reload();
          }
          else {
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Time table Adding Unsuccessfull..! ", true ? "Retry" : undefined, config);
            // window.location.reload();
          }
        })
      }
    })
  }
}