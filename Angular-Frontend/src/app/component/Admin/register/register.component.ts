import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';
import { MycookiesService } from '../../Admin/mycookies.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myCookie;
  submitted = false;
  images;
  filename;
  RegistrationForm: FormGroup;    //create a form called RegistrationForm

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private cookies: MycookiesService
  ) { }

  // registratin form attributes

  ngOnInit() {
    if(this.cookies.getCookie("userAuth") != ""){
      this.myCookie=JSON.parse(this.cookies.getCookie("userAuth"));
      this.RegistrationForm = this.fb.group({
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
    }
  }
  // load the image as the button event and asign to  the images variable
  selectImage(event) {
    if (event.target.files.length > 0) {  // check the file is select or not.
      const file = event.target.files[0];
      this.images = file;
      this.filename = file.name;
    }
  }

  /**************************************************** */
  //validation functions
  get f() {
    return this.RegistrationForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.RegistrationForm.reset();
  }

  /**************************************************** */
  registerUser() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.RegistrationForm.invalid) {
      return;
    }
    else {
      const formData = new FormData();
      //append the data to the form
      formData.append('profileImage', this.images)  
      formData.append('usertype', this.RegistrationForm.value.usertype)
      formData.append('userid', this.RegistrationForm.value.userid)
      formData.append('selectclass', this.RegistrationForm.value.selectclass)
      formData.append('name', this.RegistrationForm.value.name)
      formData.append('email', this.RegistrationForm.value.email)
      formData.append('password', this.RegistrationForm.value.password)
      formData.append('birthday', this.RegistrationForm.value.birthday)
      formData.append('mobilenumber', this.RegistrationForm.value.mobilenumber)
      formData.append('homenumber', this.RegistrationForm.value.homenumber)
      formData.append('gender', this.RegistrationForm.value.gender)
      formData.append('nationality', this.RegistrationForm.value.nationality)
      formData.append('nicnumber', this.RegistrationForm.value.nicnumber)
      formData.append('father', this.RegistrationForm.value.father)
      formData.append('mother', this.RegistrationForm.value.mother)
      formData.append('address', this.RegistrationForm.value.address)

      /****************************************************** */
      const url = 'http://localhost:3000/users/register';

      if (this.images == null) {  //check profile image select or not
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Please select a profile picture..! ", true ? "Ok" : undefined, config);
      }
      else {
        //popping dialog box to confirmaration
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          data: {
            message: 'Are you sure want to Register?',
            buttonText: {
              ok: 'Yes',
              cancel: 'No'
            }
          }
        });
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {    //if confirm message box'yes' then execute folowing 
            this.http.post<any>(url, formData).subscribe(res => {   //send form data to the database
              if (res.state) {
                let config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open("Registration Successfull..! ", true ? "Done" : undefined, config);
                window.location.reload();
              }
              else {
                let config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open("Registration Unsuccessfull..! ", true ? "Retry" : undefined, config);                
              }
            });
          }
        });
      }
    }
  }
}
