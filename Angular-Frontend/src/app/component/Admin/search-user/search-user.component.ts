import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';

//user object 
interface user {
  _id: String;
  usertype: String;
  userid: String;
  selectclass: String;
  name: String;
  email: String;
  password: String;
  birthday: String;
  mobilenumber: String;
  homenumber: String;
  gender: String;
  nationality: String;
  nicnumber: String;
  father: String;
  mother: String;
  address: String;
  filepath: String;
}

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  // declaring variables?
  userdata: user[] = [];  //create user object array
  UserForm: FormGroup;
  UserDataForm: FormGroup;
  submitted = false;
  resetPasswordDiv = false
  images;
  filename;
  userid;
  dataform: Boolean = false;  //sata division default didn't show
  propicName; //profile picture name variable
  ResetPasswordForm: FormGroup;

  ngOnInit() {
    //this form use to search box
    this.UserForm = this.fb.group({
      userid: ['', Validators.required]
    });

    //this form use to fill tha user data , which is used by admin and validation
    this.UserDataForm = this.fb.group({
      usertype: ['', Validators.required],
      userid: ['', Validators.required],
      selectclass: [''],
      name: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      birthday: ['', Validators.required],
      mobilenumber: [''],
      homenumber: [''],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      nicnumber: [''],
      father: [''],
      mother: [''],
      address: ['', Validators.required],
    });

    //this form use to reset password form
    this.ResetPasswordForm = this.fb.group({
      newpw: ['', [Validators.required, Validators.minLength(8)]],
      renewpw: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

    /**************************************************** */
  //validation function
  get f() {
    return this.UserDataForm.controls;
  }

  onReset() {
    this.submitted = false; 
    this.UserDataForm.reset();
  }

  //serch user function 
  searchUser() {
    this.userid = this.UserForm.value.userid; //get user id

    const url = "http://localhost:3000/users/searchUsers"   //backend url

    this.http.get<any>(url + "/" + this.userid).subscribe(res => {
      if (res.state == false) {
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Error find in user..! ", true ? "Retry" : undefined, config);
      } else {
        this.dataform = true; //data form div show
        this.userdata = res.data;   //add response data in to datadata array
        this.propicName = res.data.filepath;    //get profile pick name
      }
    });
  }


  // load the image as the button event and asign to  the images variable
  selectImage(event) {
    if (event.target.files.length > 0) {  // check the file is select or not.
      const file = event.target.files[0];
      this.images = file;   //get file and assigned to the iamge variable
      this.filename = file.name;  //get the image name
    }
  }

  /**************************************************** */
  updateUser() {
    this.submitted = true;  //true the validation err tag
    // stop here if form is invalid
    if (this.UserDataForm.invalid) {
      return; 
    }
    else {
      //create object called formData to get all the values in UserDataForm
      const formData = {
        usertype: this.UserDataForm.value.usertype,
        userid: this.UserDataForm.value.userid,
        selectclass: this.UserDataForm.value.selectclass,
        name: this.UserDataForm.value.name,
        email: this.UserDataForm.value.email,
        password: this.UserDataForm.value.password,
        birthday: this.UserDataForm.value.birthday,
        mobilenumber: this.UserDataForm.value.mobilenumber,
        homenumber: this.UserDataForm.value.homenumber,
        gender: this.UserDataForm.value.gender,
        nationality: this.UserDataForm.value.nationality,
        nicnumber: this.UserDataForm.value.nicnumber,
        father: this.UserDataForm.value.father,
        mother: this.UserDataForm.value.mother,
        address: this.UserDataForm.value.address,
      }

      /****************************************************** */
      const url = 'http://localhost:3000/users/updateUser/';    //backend url

      //popping dialog box for confirmaration
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

          this.http.post<any>(url + this.userid, formData).subscribe(res => {
            if (res.state) {
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open("Successfully Updated..! ", true ? "Done" : undefined, config);
            }
            else {
              let config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open("Error in Update User..! ", true ? "Retry" : undefined, config);
            }
          });
          window.location.reload();
        }
      })
    }
  }

  //update profile picture function
  updatePhoto() {
    const formData = new FormData();

    formData.append('profileImage', this.images)

    /****************************************************** */
    const url = 'http://localhost:3000/users/updateUserImage/';

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
        this.http.post<any>(url + this.userid, formData).subscribe(res => { //subscribe url with userid and formData
          if (res.state) {
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Successfully Updated..! ", true ? "Done" : undefined, config);
          }
          else {
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Error in Update User..! ", true ? "Retry" : undefined, config);
          }
        });
        window.location.reload();
      }
    })
  }

  //user delete function 
  deleteUser() {
    const url1 = "http://localhost:3000/users/profImage/" //this is used to delete profile image
    const url2 = "http://localhost:3000/users/deleteUser/"  //this is used to delete data from tha data base

    //confirmaration box
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (this.propicName) {
          this.http.delete<any>(url1 + this.propicName).subscribe(res => {
            console.log(res);   
          })
        }
        this.http.delete<any>(url2 + this.userid).subscribe(res => {
          if (res.state == true) {
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Successfully Deleted..! ", true ? "Done" : undefined, config);
          }
          else {
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Delete Unsuccessfull..! ", true ? "Retry" : undefined, config);
          }
        })
        window.location.reload();
      }
    });
  }

  /*this function used to active reset password div*/

  resetPassword() {
    this.resetPasswordDiv = true;
  }

  //reset password function
  resetPasswordbtn() {
    if (this.ResetPasswordForm.value.newpw == this.ResetPasswordForm.value.renewpw) { //comparing new password and confiremaation password

      const resetData = { //create object to get vlues in passwords
        newPassword: this.ResetPasswordForm.value.newpw,
        userid: this.userid
      }

      const url = 'http://localhost:3000/users/adminResetPassword';
      /****************************************************** */

      //confirmaration box
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