import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MycookiesService } from '../../Admin/mycookies.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';

interface notification {  //decalare interface class for load notification attributes.
  _id: String;
  userid: String;
  subject: String;
  message: String;
  date: String;
  state: String;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notices: notification[] = [];
  // usertype: userType[] = [];
  usertype
  notice_id: String;
  file_path: String;
  cookie;
  // userType: String;

  public approve_show: boolean = false;
  public disapprove_show: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookies: MycookiesService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {

    var myCookie = JSON.parse(this.cookies.getCookie("userAuth"));    // get cookie data from cookies
    this.cookie=JSON.parse(this.cookies.getCookie("userAuth"));
    this.usertype = myCookie.usertype;   // load user type to the userType array

    if (myCookie) {
      var url = 'http://localhost:3000/notification/view';
      this.http.get<any>(url).subscribe(res => {
        this.notices = res;
      }, (err) => {
        console.log(err);
      });
    }
    else {
      alert("Please Login First..!");
      this.router.navigate(['/login']);
    }
  }

  disapprove(event, notice_id, file_path) {  //disapprove button action
    var mybtnId = notice_id;
    var mybtnFile = file_path;

    var url = "http://localhost:3000/notification/delete";    //notification content delete url
    var urlDelete = "http://localhost:3000/notification/notAttachment"; //notification attachment delete url

    //if there is a file in attachment call atachment file delteing request
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to Disapprove?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (mybtnFile) {
          this.http.delete(urlDelete + '/' + mybtnFile).subscribe(res => {
            console.log(res);
          }, (err) => {
            console.log(err)
          });
        }
        //call content delete request
        this.http.delete(url + '/' + mybtnId).subscribe(res => {  //send delete the notification request to the server
          let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          this.snackBar.open("Successfully Disapproved..! ", true ? "Done" : undefined, config);
        }, (err) => {
          console.log(err);
        });

        window.location.reload();     // reload the page
      }
    })
  }

  approve(event, notice_id) {     //approve button action
    var mybtnId = notice_id;
    console.log(mybtnId);

    var url = "http://localhost:3000/notification/approve";
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to Approve?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.http.get(url + '/' + mybtnId).subscribe(res => {  //send add a notification request to the server
          console.log(res);
          let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          this.snackBar.open("Successfully Approved..! ", true ? "Done" : undefined, config);
          window.location.reload();   //realod window
        }, (err) => {
          console.log(err);
        });
      }
    })
  }
}


