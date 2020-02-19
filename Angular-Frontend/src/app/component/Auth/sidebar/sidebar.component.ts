import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MycookiesService } from '../../Admin/mycookies.service';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { UserDetail } from '../../Userdetail';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userid: String;
  user: any;
  myCookie: string;
  userDetail: UserDetail = { usertype: "", id: "", name: "", email: "", selectclass: "", userid: "" };
  constructor(
    private router: Router,
    private cookies: MycookiesService,
    public snackBar: MatSnackBar,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.myCookie = this.cookies.getCookie("userAuth")
    if (this.myCookie == "") {
      this.router.navigate(['/login']); //if cookie null, then redirected to the login page
    } else {
      this.userDetail = JSON.parse(this.myCookie);  //get the user details from the cookies
    }
  }

  //calling Academics button function
  userAcademics() {

    if (this.myCookie) {
      this.router.navigate(['../', this.userDetail.userid, 'academic_subject']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }

  //calling NOtification button function
  userNotification() {

    if (this.myCookie) {
      this.router.navigate(['../', this.userDetail.userid, 'notifications']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }

  //calling Certification  button function
  userCertification() {
    if (this.myCookie) {

      this.router.navigate(['../', this.userDetail.userid, 'certification']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }
  //calling Prepare certification button function

  userPrepCertification() {
    if (this.myCookie) {

      this.router.navigate(['../', this.userDetail.userid, 'prepare_certification']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }
  //calling Attendence button function

  userAttendence() {
    if (this.myCookie) {

      this.router.navigate(['../', this.userDetail.userid, 'attendance']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }
  //calling Extra Curricular button function

  userExtraCur() {
    if (this.myCookie) {

      this.router.navigate(['../', this.userDetail.userid, 'extra_curricular']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }

  //callingmanage Marks  button function
  userStudentMarks() {
    if (this.myCookie) {

      this.router.navigate(['../', this.userDetail.userid, 'manage_marks']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }

  //calling Student progress button function

  userStudentProg() {
    if (this.myCookie) {

      this.router.navigate(['../', this.userDetail.userid, 'student_progress']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }
  //calling Admin dashboard button function

  adminDashboard() {
    if (this.myCookie) {

      this.router.navigate(['../', this.userDetail.userid, 'admin_dashboard']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Please Login First..! ", true ? "Retry" : undefined, config);
      this.router.navigate(['/login']);
    }
  }
}
