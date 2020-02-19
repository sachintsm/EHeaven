import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import {ClassRoom} from './Classroom';

@Component({
  selector: 'app-class-registration',
  templateUrl: './class-registration.component.html',
  styleUrls: ['./class-registration.component.scss']
})
export class ClassRegistrationComponent implements OnInit {
   
  ClassRegistrationForm=new FormGroup({
    classname:new FormControl(''),
    grade:new FormControl(''),
    medium:new FormControl(''),
    teachername:new FormControl(''),
    classhead:new FormControl(''),
    numberofStudent:new FormControl(''),

  });
  classes:Array<ClassRoom>;
  constructor(
    private _http:HttpClient,
  ) { }

  ngOnInit() {
    var _url="http://localhost:3000/classroom/getdata";
    this._http.get(_url).subscribe((data:ClassRoom[])=>{
      this.classes=data;
      console.log(this.classes);
    });

  }
  addClass(formdata){
    console.log(formdata);
    var _url="http://localhost:3000/classroom/addLog";
    this._http.post(_url,formdata).subscribe(
      data=>console.log("Success",data),
      error=>console.log("Error",error)
    );
  }

}
