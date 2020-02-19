import { Injectable } from '@angular/core'; 
import{HttpClient, HttpParams} from '@angular/common/http';
import {Attend} from './attend';
import {AttendList} from './attend';
import {dateSearch} from './attend';


@Injectable({
  providedIn: 'root'
})

export class AttendenceService {

  /**********  url using in http request **********/ 
  postUrl='http://localhost:3000/attendance/addLog';
  getUrl='http://localhost:3000/attendance/received';
  

  
  constructor(private http:HttpClient) { }

  /**********  Add new attedence sheet to database **********/ 
  logAdd(stu:AttendList){
    return this.http.post<Attend>(this.postUrl,stu);
  }

  /**********  retrive all users given class **********/ 
  retriveUsers(className){
    return this.http.get(this.getUrl+'/'+className);
  }

  /**********  get   attendance sheet given date and given class **********/ 
  retriveDate(data:string){

    var  getDate='http://localhost:3000/attendance/searchDate';
    return this.http.get<any>(getDate,{params:{date:data}});

  }

  /**********  retrive list of attendance given student given month **********/ 
  retriveStudent(month:Number,stu:string){
    
    var  getStudents='http://localhost:3000/attendance/searchStu/'+stu+'/'+month;
    return this.http.get<any>(getStudents);

  }
  /**********  getting list of class have marked attendance today **********/ 
  getStatus(){
    var url="http://localhost:3000/attendance/getstatus";
    return this.http.get(url);
  }
  /**********  getting list of all classes existing database **********/ 
  getClass(){
    var url="http://localhost:3000/class_management/classRoomsNames";
    return this.http.get<any>(url);
  }
}
