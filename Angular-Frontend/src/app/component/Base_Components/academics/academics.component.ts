import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFlashMessageService } from 'ng-flash-messages';
import { MycookiesService } from '../../Admin/mycookies.service';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBarConfig, MatSnackBar, MatDialog } from '@angular/material';

interface lecSlide {    //one attachement detils class
  _id: String,
  userid: String,
  teachername: String,
  subject: String,
  attachmenttype: String,
  class: String,
  path: String
}

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})


export class AcademicsComponent implements OnInit {

  faFile = faFile;
  lecSlide: lecSlide[] = []
  userType

  constructor(
    private http: HttpClient,
    private cookies: MycookiesService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    var subject = this.route.snapshot.paramMap.get("sbjName") //get the subject name from the url
    var userCookies = JSON.parse(this.cookies.getCookie("userAuth"))    //get cookies
    this.userType = userCookies.usertype
    var userId = userCookies.userid
    var className = userCookies.selectclass   //get class name

    const url1 = "http://localhost:3000/academics/acad&other&attachment/"
    const url2 = "http://localhost:3000/academics/acad&stu&attachment/"

    //if the usertype Admin or teache call  request url1
    if (this.userType == 'Administrator' || this.userType == 'Teacher') {
      this.http.get<any>(url1 + userId + '/' + subject).subscribe(res => {
        this.lecSlide = res.data
        console.log(this.lecSlide);

      })
    }

    //if usertype is studetnt or parent request url2
    if (this.userType == 'Student' || this.userType == 'Parent') {
      this.http.get<any>(url2 + className + '/' + subject).subscribe(res => {
        this.lecSlide = res.data
        console.log(this.lecSlide);

      })
    }
  }

  //delete the academic attachment
  deleteStuff(event, acad_id, file_path){
    var mybtnId = acad_id;
    var mybtnFile = file_path;

    var url = "http://localhost:3000/academics/deleteAcademic";    //academics content delete url
    var urlDelete = "http://localhost:3000/academics/deleteAcad&Attachment"; //academics attachment delete url

    //if there is a file in attachment call atachment file delteing request
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to Delete?', 
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
          this.snackBar.open("Successfully Deleted..! ", true ? "Done" : undefined, config);
        }, (err) => {
          console.log(err);
        });

        window.location.reload();     // reload the page
      }
    })
  }
}


