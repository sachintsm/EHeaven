import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MycookiesService } from '../mycookies.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarConfig, MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {

  attachment;
  date;
  state;
  filename;
  submitted = false;
  Mycookie=JSON.parse(this.cookies.getCookie("userAuth"));

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookies: MycookiesService, //import Mycookies Service files
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  NotificationForm = this.fb.group({
    subject: ['',[ Validators.required, Validators.maxLength(100)]],
    message: ['', [Validators.required, Validators.maxLength(1200)]],
  });

  ngOnInit() { }

  get f() {
    return this.NotificationForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.NotificationForm.reset();
  }
  selectImage(event) {
    if (event.target.files.length > 0) {  // check the file is select or not.
      const file = event.target.files[0];
      this.attachment = file;
      this.filename = file.name;
    }
  }

  addNotice() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.NotificationForm.invalid) {
      return;
    }
    else {
      var myCookie = JSON.parse(this.cookies.getCookie("userAuth"));
      var userid = myCookie.userid;

      this.date = Date();
      this.state = "Pending"
      const formData = new FormData();

      formData.append('notificationAttachment', this.attachment)
      formData.append('userid', userid)
      formData.append('date', this.date)
      formData.append('subject', this.NotificationForm.value.subject)
      formData.append('message', this.NotificationForm.value.message)
      formData.append('state', this.state)
          console.log(this.NotificationForm.value.subject);

      var url = "http://localhost:3000/notification/add";

      //send request to  the server
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
          this.http.post<any>(url, formData).subscribe(res => {
            if (res.state) {
              console.log(res.msg);
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open("Notification Successfully Added..! ", true ? "Done" : undefined, config);
              this.router.navigate(['../',this.Mycookie.userid,'notifications']);
            }
            else {
              console.log(res.msg);
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open("Notification is not Added..! ", true ? "Done" : undefined, config);
              this.router.navigate(['../',this.Mycookie.userid,'/add_notification']);
            }
          });
        }
      })
    }
  }
}
