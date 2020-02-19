import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';

interface newsClass {  // decalare interface class for load news attributes.
  _id: String;
  topic: String;
  newsSumery: String;
  news: String;
  date: String;
  filePath: String;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  editform = false; // this boolian condition use for when some button press
  viewform = true;  // this boolian condition use for when some button press
  addnew = false;  // this boolian condition use for when some button press

  images;
  date: string;
  attachment;
  filename;
  submitted = false;
  newsId:string;
  newspicname;
  dataform: Boolean = false;

  topic: string;
  newsSumery: string;

  news: newsClass[] = [];
  newsEdit: newsClass[] = [];
  NewsForm: FormGroup;
  // ngFlashMessage: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  // news form attributes

  ngOnInit() {
    this.NewsForm = this.fb.group({
      topic: ['', [Validators.required, Validators.maxLength(35)]],
      newsSumery: ['', [Validators.required, Validators.maxLength(400)]],
      news: ['', [Validators.required, Validators.maxLength(800)]],

    });

    const url = 'http://localhost:3000/news/view';
    this.http.get<any>(url).subscribe(res => {  // get data from database and store the data in news array
      this.news = res;
     // console.log(this.news);
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }


onAdd(event) {
  this.addnew = true;

}

// when press edit button call this function
  onEdit(event, news_id , filePath) {
    this.viewform = false;
    this.editform = true;
    window.scrollTo(0,0);
    // console.log(news_id);
    this.newsId = news_id ;
    this.newspicname = filePath;
    console.log( 'file path =', filePath);
    const url = 'http://localhost:3000/news/editnews';

    this.http.get<any>(url + '/' + news_id).subscribe(res => {
      if (res.state == false) {
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open('Error find in news..! ', true ? 'Retry' : undefined, config);
      } else {
        this.newsEdit = res.data;
        console.log(res.data);
        this.dataform = true;
        this.newspicname = filePath;
        console.log('picname =' + this.newspicname);
      }
    });


  }

  // when error found return this
  get f() {
    return this.NewsForm.controls;
  }


  onReset() {
    this.submitted = false;
    this.NewsForm.reset();
  }

  // load the image as the button event and asign to  the images variable
  selectImage(event) {
    if (event.target.files.length > 0) {  // check the file is select or not.
      const file = event.target.files[0];
      this.images = file;
      this.filename = file.name;
    }
  }


// update funtion
  updatenews() {
    this.submitted = true;
    console.log('updating news')
    if (this.NewsForm.invalid) {
      return;
    } else {

      this.date = Date();

      const formData = new FormData();

      formData.append('newsImage', this.images);
      formData.append('topic', this.NewsForm.value.topic);
      formData.append('date', this.date);
      formData.append('newsSumery', this.NewsForm.value.newsSumery);
      formData.append('news', this.NewsForm.value.news);

      const url = 'http://localhost:3000/news/updateNews/';
      console.log(this.newspicname);

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
        console.log('confirmed', confirmed);
        if (confirmed) {
          this.http.post<any>(url  + this.newsId, formData).subscribe(res => {

            console.log(res.msg);
            if (res.state) {
              const config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open('News Successfully Updated..! ', true ? 'Done' : undefined, config);

              window.location.reload();

            } else {
              const config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open('News is not updated..! ', true ? 'Retry' : undefined, config);
              this.router.navigate(['/news']);
            }
          });
        }
      });

    }

  }

  // new news add funtion when press uploard button
  addnews() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.NewsForm.invalid) {
      return;

    } else {
      this.date = Date();

      const formData = new FormData();

      formData.append('newsImage', this.images);
      formData.append('topic', this.NewsForm.value.topic);
      formData.append('date', this.date);
      formData.append('newsSumery', this.NewsForm.value.newsSumery);
      formData.append('news', this.NewsForm.value.news);


      const url = 'http://localhost:3000/news/add';

      if (this.images == null) {
        const config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open('Please Select a Image..! ', true ? 'Retry' : undefined, config);
      } else {
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
              console.log(res.msg);
              if (res.state) {
                const config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open('News Successfully Added..! ', true ? 'Done' : undefined, config);

                window.location.reload();

              } else {
                const config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open('News is not Added..! ', true ? 'Retry' : undefined, config);
                this.router.navigate(['/news']);
              }
            });
          }
        });
      }
    }
  }

  delete(event, newsid, filePath) {

    // console.log(news_id , filePath);
    const btnId = newsid;
    const btnFile = filePath;
    // console.log(btnFile);
    console.log(btnId);

    const url = 'http://localhost:3000/news/delete';
    const urlDelete = 'http://localhost:3000/news/newsAttachment'; // news attachment delete url

    // if there is a file in attachment call atachment file delteing request
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
        if (btnFile) {
          this.http.delete(urlDelete + '/' + btnFile).subscribe(res => {
            console.log(res);
            this.http.delete(url + '/' + btnId).subscribe( res => {  // send delete the news to the server
              const config = new MatSnackBarConfig();
              config.duration = true ? 2000 : 0;
              this.snackBar.open('News Successfully Deleted..! ', true ? 'Done' : undefined, config);
              window.location.reload();
            }, (err) => {
              console.log(err);
            });

          }, (err) => {
            console.log(err);
          });
        }
      }
    });
  }

}

