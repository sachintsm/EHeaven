import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup
} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { MycookiesService } from "../../Admin/mycookies.service";

// import {Component} from '@angular/core';
// import {animate, state, style, transition, trigger} from '@angular/animations';

interface Certificate {
  _id: String;
  userid: String;
  certName: String;
  certType: String;
  examName: String;
  examYear: String;
  examIndex: String;
  reqDate: String;
  certState: String;
  filePath: String;
}

@Component({
  selector: "app-certification",
  templateUrl: "./certification.component.html",
  styleUrls: ["./certification.component.scss"]
})
export class CertificationComponent implements OnInit {
  value: String = "";
  flag = false;
  userid: String;
  filePath: String;
  cookie = JSON.parse(this.cookies.getCookie("userAuth"));

  pendingCert: Certificate[] = [];
  issuedCert: Certificate[] = [];
  stustatusCert: Certificate[] = [];
  characCert: Certificate[] = [];
  leavCert: Certificate[] = [];
  alCert: Certificate[] = [];
  olCert: Certificate[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private cookies: MycookiesService
  ) {}

  CertificationForm = this.fb.group({
    certName: ["", Validators.required],
    certType: ["", Validators.required],
    exam: this.fb.group({
      examName: ["", Validators.required],
      examYear: ["", Validators.required],
      examIndex: ["", Validators.required]
    })
  });

  // certificate types
  certificates = [
    "Student Status Verification Certificate",
    "Character Certificate",
    "Leaving Certificate",
    "Educational Certificate"
  ];

  // examinations
  exams = [
    "Grade 05 Scholarship Examination",
    "Ordinary Level ( G.C.E. O/L ) Examination",
    "Advanced Level ( G.C.E. A/L ) Examination"
  ];
  // examinations years
  yearofExam = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018"
  ];

  ngOnInit() {
    let date = Date();
    let myCookie = JSON.parse(this.cookies.getCookie("userAuth")); // get userdate cookies from cookies
    let id = myCookie.userid;

    // load pending and issued certificates tho the user
    let pendingUrl = "http://localhost:3000/certification/pendingCert";
    let issuedUrl = "http://localhost:3000/certification/issuedCert";

    //approved and completed certificates of a particular student

    // let stustatusUrl =
    //   "http://localhost:3000/certification_completed/viewstuStatus";
    // let characterUrl =
    //   "http://localhost:3000/certification_completed/viewcharacStatus";
    // let leavingUrl =
    //   "http://localhost:3000/certification_completed/viewleavStatus";
    // let alUrl = "http://localhost:3000/certification_completed/viewalStatus";
    // let olUrl = "http://localhost:3000/certification_completed/viewolStatus";

    this.http.get<any>(pendingUrl + "/" + id).subscribe(res => {
      console.log(res);
      this.pendingCert = res;
    });

    this.http.get<any>(issuedUrl + "/" + id).subscribe(res => {
      console.log(res);
      this.issuedCert = res;
    });

    // this.http.get<any>(stustatusUrl + "/" + id).subscribe(res => {
    //   console.log(res);
    //   this.stustatusCert = res;
    // });
    // this.http.get<any>(characterUrl + "/" + id).subscribe(res => {
    //   console.log(res);
    //   this.characCert = res;
    // });
    // this.http.get<any>(leavingUrl + "/" + id).subscribe(res => {
    //   console.log(res);
    //   this.leavCert = res;
    // });
    // this.http.get<any>(alUrl + "/" + id).subscribe(res => {
    //   console.log(res);
    //   this.alCert = res;
    // });
    // this.http.get<any>(olUrl + "/" + id).subscribe(res => {
    //   console.log(res);
    //   this.olCert = res;
    // });
  }

  submitToApproval() {
    let myCookie = JSON.parse(this.cookies.getCookie("userAuth")); // get userdate cookies from cookies
    this.userid = myCookie.userid; // get userid from cookies
    let date = Date(); // get todays date and time

    // console.log(this.CertificationForm.value , myCookie.usertype)
    if (this.userid) {
      if (
        this.CertificationForm.value.certName == "" ||
        this.CertificationForm.value.certType == ""
      ) {
        alert("Fill the form field please..!");
      } else {
        // create certificateApproval
        const certificateApproval = {
          userid: myCookie.userid,
          certName: this.CertificationForm.value.certName,
          certType: this.CertificationForm.value.certType,
          examName: this.CertificationForm.value.exam.examName,
          examYear: this.CertificationForm.value.exam.examYear,
          examIndex: this.CertificationForm.value.exam.examIndex,
          reqDate: date,
          certState: "Pending"
        };

        let url = "http://localhost:3000/certification/requestCert"; // server url

        this.http.post<any>(url, certificateApproval).subscribe(res => {
          // requesting ro the server and send data to save
          if (res.state) {
            console.log(res.msg);
            alert("Successfully Requested..!");
            this.CertificationForm.reset();
            this.router.navigate(["../", this.cookie.userid, "certification"]);
            window.location.reload();
          } else {
            console.log(res.msg);
            alert("Certificate Requesting Unsuccessfull..!");
            this.router.navigate(["../", this.cookie.userid, "certification"]);
          }
        });
        // console.log(certificateApproval);
      }
    } else {
      alert("Please Login First..!");
      this.router.navigate(["/login"]);
    }
    //  window.location.reload();     //reload the page
  }

  // used to show/hide form fields

  togglefunction(value) {
    if (value == "Educational Certificate") {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  viewCert(certId) {
    console.log(certId);

  }
}
