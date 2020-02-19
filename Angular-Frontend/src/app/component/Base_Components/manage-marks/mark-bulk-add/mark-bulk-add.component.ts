import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../../attendance/attendence.service';
import { ClassRoom } from '../../../Admin/class-registration/Classroom';
import { HttpClient } from '@angular/common/http';
import { Mark} from '../mark';
import { Marksheet} from '../mark';


@Component({
  selector: 'app-mark-bulk-add',
  templateUrl: './mark-bulk-add.component.html',
  styleUrls: ['./mark-bulk-add.component.scss']
})
// adding a marksheet to database using text file
export class MarkBulkAddComponent implements OnInit {
  // variable declaration which I use
  flag = false;
  fileToUpload: File = null;
  stringData = '';
  marks = [];
  userVisibale;
  mySubject;
  classList: Array<ClassRoom>;
  years = [];
  terms = [1, 2, 3]
  constructor(
    private attendanceservice: AttendenceService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    var year = new Date().getFullYear();
    
    this.years=[];
    /*load the last 5 years in to the mat select*/
    for (var i = 0; i < 5; i++) {
      this.years.push(year - i);
    }

    this.attendanceservice.getClass()
      .subscribe((data: ClassRoom[]) => {
        this.classList = data;
        console.log(this.classList);
      });
      const url = "http://localhost:3000/class_management/getSubjects"
      this._http.get<any>(url).subscribe(res => {
        this.mySubject = res.data;
        console.log(this.mySubject)
      });
  }
  handleFileInput(files: FileList) {

    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload.name);
  }
  bulkRegistration(classname, year, term,subje) {
    let fileReader = new FileReader();
    fileReader.readAsText(this.fileToUpload);

    fileReader.onload = (e) => {
      this.stringData = fileReader.result.toString();
      console.log(this.stringData);
      var Stringmark = this.stringData.split('\n');
      console.log(Stringmark.length);

      console.log(Stringmark);
      for (var i = 0; i < Stringmark.length; i++) {
        if (Stringmark[i] == '\n') {
          console.log(Stringmark[i]);
          break;
        }
        var markstr = Stringmark[i].split(',');

        var mark = new Mark();
        mark.userid = markstr[0]
        mark.mark = Number(markstr[1]);
        mark.name=markstr[2];
        console.log(mark);
        this.marks.push(mark);
      }
      var temp = new Marksheet();
      temp.classname = classname;
      temp.term = term;
      temp.year = year;
      temp.marks = this.marks;
      for(var i=0;i<this.mySubject.length;i++){
        if(this.mySubject[i].subName==subje){
          temp.subId=this.mySubject[i].subid;
        }
      }
      var result = this.mySubject.find(obj => {
        return obj.subName == subje 
      })
      temp.subject=subje;
      temp.subId=result.subId;
      console.log(temp);
      this._http.post<any>('http://localhost:3000/student_marks/addLog',temp)
        .subscribe(
          data => console.log('Success', data),
          error => console.error('Error!', error)
        );
      console.log("hellp");
    }
  }
}