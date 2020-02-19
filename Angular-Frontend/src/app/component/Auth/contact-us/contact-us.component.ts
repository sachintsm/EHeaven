import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private http: HttpClient
  ) { }

  submitted = false;    //initialize submitted as false

  ContactusForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(70)]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1200)]),
  })

  ngOnInit() {
  }


  //validation function 
  get f() {
    return this.ContactusForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.ContactusForm.reset();
  }

  sendMessage(form) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ContactusForm.invalid) {
      return;
    }
    else {

      var url = "http://localhost:3000/contact_us/sendMessage" //request url

      //confiremaration message box
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          message: 'Are you sure want to send message?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          console.log("in");
          // send request to  the server
          this.http.post<any>(url, form).subscribe(res => {
            console.log("out");

            if (res.state) {
              console.log(res.msg);
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open("Message Successfully Sent..! ", true ? "Done" : undefined, config);

              this.router.navigate(['../contact_us']);
            }
            else {
              console.log(res.msg);
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open("Message is not send..! ", true ? "Done" : undefined, config);
              this.router.navigate(['../contact_us']);
            }
          });
        }
      })
    }
  }
}
