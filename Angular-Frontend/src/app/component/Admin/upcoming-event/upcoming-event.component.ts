import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../Auth/confirmation-dialog/confirmation-dialog.component';


interface eventClass{
  _id: String;
  head: String;
  eventdetail:String;
  day: String;
}

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss']
})
export class UpcomingEventComponent implements OnInit {

  head;
  eventdetail;
  day;

  addnew = false;
  editform = false;
  submitted = false;
  eventid: String;
  dataform: Boolean = false;
  events: eventClass[] = [];
  eventEdit: eventClass[] = [];



  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    // private cookies: MycookiesService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  EventForm = new FormGroup({
    head: new FormControl('' , Validators.maxLength(30) && Validators.required),
    eventdetail: new FormControl ('' , Validators.maxLength(150) && Validators.required),
    day: new FormControl('' , Validators.required),

  });

  ngOnInit() {
    const url = 'http://localhost:3000/upcoming_event/viewevent';
    this.http.get<any>(url).subscribe(res => {
      this.events = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  onEdit(event, event_id){

    this.editform = true;
    window.scrollTo(0,0);
    this.eventid = event_id ;
    console.log(this.eventid);
    const url = 'http://localhost:3000/upcoming_event/editevent';

    this.http.get<any>(url + '/' + this.eventid).subscribe(res=> {

      if (res.state == false) {
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open('Error find in news..! ', true ? 'Retry' : undefined, config);
      } else {
        this.eventEdit = res.data;
        this.dataform = true;
      }

    });
  }

  UpdateEvent(form) {
    this.submitted = true;
    window.scrollTo(0,0);
    console.log(form);
    console.log(this.eventid);
    if (this.EventForm.invalid) {
      return;

    } else {
      const url = 'http://localhost:3000/upcoming_event/updateEvent';


      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          message: 'Are you sure want to Update?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          console.log(form);
          this.http.post<any>(url  + '/' + this.eventid ,  form).subscribe(res => {
            console.log(res.msg);

            if (res.state) {
                const config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open('Event is not Added...!', true ? 'Done' : undefined , config);
                this.router.navigate(['/upcoming-event']);
              } else {
                const config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open('Event Successfully Added..!' , true ? 'Retry' : undefined , config);
                window.location.reload();
              }
          });
        }
      });
  }
 }



  get f() {
    return this.EventForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.EventForm.reset();
  }

  addevent(form) {
    this.submitted = true;

    console.log('AShan');
    if (this.EventForm.invalid) {
      return;

    } else {

      const url = 'http://localhost:3000/upcoming_event/addevent';

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
          // console.log(form);
          this.http.post<any>(url, form).subscribe(res => {
            console.log(res.msg);

            if (res.state) {
                const config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open('News Successfully Added..!', true ? 'Done' : undefined , config);
                window.location.reload();
              } else {
                const config = new MatSnackBarConfig();
                config.duration = true ? 2000 : 0;
                this.snackBar.open('Event is not Added...!' , true ? 'Retry' : undefined , config);
                this.router.navigate(['/upcoming-event']);
              }
          });
        }
      });
  }
}

onAdd(event) {
  this.addnew = true;

}

delete(event, event_id) {

  const Id = event_id;

  const url = 'http://localhost:3000/upcoming_event/deleteevent';

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

      this.http.delete<any>(url + '/' + Id).subscribe(res => {
        console.log(res.msg);

        if (res.state) {
            const config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open('Event Successfully Deleted..!', true ? 'Done' : undefined , config);

          }
        window.location.reload();
      });
    }
  });

}
}
