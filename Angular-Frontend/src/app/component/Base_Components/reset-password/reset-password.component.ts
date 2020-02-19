import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';
import { MycookiesService } from '../../Admin/mycookies.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private cookies: MycookiesService,
  ) { }

  ResetPasswordForm: FormGroup;
  submitted = false;
  userid
  cookie

  ngOnInit() {
    // dataform with validaion
    this.ResetPasswordForm = this.fb.group({
      oldpw: ['', [Validators.required, Validators.minLength(8)]],
      newpw: ['', [Validators.required, Validators.minLength(8)]],
      renewpw: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  /**************************************************** */
  //validation functions
  get f() {
    return this.ResetPasswordForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.ResetPasswordForm.reset();
  }
  /**************************************************** */
  //reset passorw function
  resetPassword() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ResetPasswordForm.invalid) { //check password form valid or not
      return;
    } else {
      this.cookie = JSON.parse(this.cookies.getCookie("userAuth"));
      this.userid = this.cookie.userid;
      if (this.ResetPasswordForm.value.newpw == this.ResetPasswordForm.value.renewpw) { //check new two passwords
        const resetData = {   //send old password and new passwor to server
          oldPassword: this.ResetPasswordForm.value.oldpw,
          newPassword: this.ResetPasswordForm.value.newpw,
          userid: this.userid
        }
        const url = 'http://localhost:3000/users/resetPassword';
        /****************************************************** */

        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          data: {
            message: 'Are you sure want to update?',
            buttonText: {
              ok: 'Yes',
              cancel: 'No'
            }
          }
        });
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
            this.http.post<any>(url, resetData).subscribe(res => {
              if (res.state) {
                let config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open("Successfully Updated..! ", true ? "Done" : undefined, config);
              }
              else {
                let config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open("Error in Update Password..! ", true ? "Retry" : undefined, config);
              }
            });
            // window.location.reload();
          }
        })
      }   
      else {
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Password does not matched..! ", true ? "Retry" : undefined, config);
      }
    }
  }
}
