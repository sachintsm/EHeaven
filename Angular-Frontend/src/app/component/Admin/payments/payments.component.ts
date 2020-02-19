import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MycookiesService } from '../../Admin/mycookies.service';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';


interface YearArray {
  year: string;
}

interface paymentdetaile {
  _id: String;
  sId: string;
  sName: string;
  sClass: string;
  pName: string;
  pYear: string;
  payemnt: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  addnew = false;

  tableshow = false;
  submitted = false;
  dataform: boolean = false;
  pYear;
  sClass;
  pName;


  paymentdata: paymentdetaile[] = [];
  myYears: YearArray[] = [];
  paymenttypes = ['School Devolopment founds', 'Facilities fees', 'Welfare fees',]

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,

  ) { }


  PaymentForm = new FormGroup({
    sName: new FormControl('', Validators.required ),
    sId: new FormControl('', Validators.required),
    sClass: new FormControl('', Validators.required),
    pName: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
    pYear: new FormControl('', Validators.required),


  });

  ngOnInit() {

    let year = new Date().getFullYear();
    let years = [];

    /*load the last 5 years in to the mat select*/
    for (let i = 0; i < 5; i++) {
      years.push(year - i);
      this.myYears[i] = years[i];
    }
  }
  get f() {
    return this.PaymentForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.PaymentForm.reset();
  }

  addPayment(form) {
    this.submitted = true;

    if (this.PaymentForm.invalid) {
      console.log('Invalid');
      return;

    } else {
      console.log("valid")

      const url = 'http://localhost:3000/payment/add';

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
          this.http.post<any>(url, form).subscribe(res => {
            if (res.state) {
              console.log(res.msg);
              const config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open('Payment Data Successfully Added..! ', true ? 'Done' : undefined, config);
              window.location.reload();
            } else {
              console.log(res.msg);
              const config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open('Payment Data does not Added..! ', true ? 'Done' : undefined, config);
              //this.router.navigate('/payments');
            }
          });
        }
      });
    }
  }


  onAdd(event) {
    this.addnew = true;

  }


searchPayment() {

  this.tableshow = true;


  this.pYear = this.PaymentForm.value.pYear;
  this.sClass = this.PaymentForm.value.sClass;
  this.pName = this.PaymentForm.value.pName;

  const url = 'http://localhost:3000/payment/searchPayment';

  this.http.get<any>(url + '/' + this.pYear + '/' + this.sClass + '/' + this.pName).subscribe(res => {
    if (res.state === false) {
      console.log('bcakbckazb');
      const config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open('Error find in payments..! ', true ? 'Retry' : undefined, config);
    } else {
      this.paymentdata = res;
      this.dataform = true;
      console.log(this.paymentdata);
      //console.log(this.pName);
    }
  });



}



}
