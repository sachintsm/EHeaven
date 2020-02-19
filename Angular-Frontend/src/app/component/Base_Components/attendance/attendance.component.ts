import { Component, OnInit } from '@angular/core';
import {ClassRoom} from '../../Admin/class-registration/Classroom';
import {AttendenceService} from './attendence.service';
import { Attendreturn } from './attend';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
 /********** Main attendance component **********/
export class AttendanceComponent implements OnInit {
   /********** public variables declaration  **********/
  classList:Array<ClassRoom>;
  flag=true;
  class:string;
  status;
  searchdate;
  searchStuResult;
  searchDateResult:[];
  historyflagD=true;
  historyflagS=true;
  data=new Attendreturn();
  spanflageD=false;
  spanflageS=false;
  dateErrFlag=false;
  dateErro;
  months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  classControl = new FormControl('', Validators.required);
  monthControl = new FormControl('', Validators.required);

  constructor(private attendanceService:AttendenceService,private snackBar:MatSnackBar){}

  ngOnInit(){
    /********** retrive all classes **********/ 
    this.attendanceService.getClass()
      .subscribe((response)=>{
        this.classList=response.data;
        this.status=new Array(this.classList.length);

        /********** this function return array of classnames which already has marked attendance **********/ 
        this.attendanceService.getStatus().subscribe((marked:[])=>{

        /********** getting status array to check wether relevent class attendance has marked or not **********/ 
        /********** set default all classes status as true **********/ 
        for(var i=0;i<this.classList.length;i++){
            this.status[i]=true;
        }
        /********** then compare with marked array class list an set false as status which is already marked **********/ 
        for(var i=0;i<this.classList.length;i++){
          for(var j=0;j<marked.length;j++){
            if(marked[j] == this.classList[i].className){
              this.status[i]=false;
            }
          }
        }
      });
    });
  }

  /**********  this function will locate clicked class student name list to mark attendance **********/ 
  /**********  if and only if that clicked classe status true which is not marked yet **********/ 
  goTo(name,i){
    if(this.status[i]){

      this.flag=false;
      this.class=name;
    }else{
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      config.verticalPosition='top';
      this.snackBar.open("This class already marked!!!!!!!!", true ? "Retry" : undefined, config);
          
    }
  }

  /**********  back to the classList again **********/ 
  showclass(){
    window.scrollTo(0,5);
    this.ngOnInit();
    this.flag=true;
  }

  /**********  finding list of attendance given student of given month **********/ 
  searchStudent(month:string,stu:string){

    console.log(month);
    console.log(stu);
    var temp=parseInt(month)
    temp+=1;
    if(month == null || stu.length==0){
      return;
    }else{
        this.attendanceService.retriveStudent(temp,stu)
        .subscribe((data)=>{
          if(data.length==0){
            this.spanflageS=true;
          }else{
            this.historyflagS=false;
            this.searchStuResult=data;
            console.log(this.searchStuResult);
          }
        });
    }
    
  }

  /********** Finding Attendance sheet given class ,given date **********/ 
  searchDate(date:string,classNm:string){
    this.class=classNm;
    this.searchdate=date;
  /**********validating given two field **********/ 
    if(date.length==0){
      this.dateErro="Please select a date";
      this.dateErrFlag=true;
    }else{
      var temp=date.split("/");
      var dateObject=new Date(parseInt(temp[2]),parseInt(temp[1])-1,parseInt(temp[0]));
      var today=new Date();
      var todayStart=new Date(today.getFullYear(),today.getMonth(),today.getDate());
      console.log(today.getMonth());
      console.log(today);
      console.log(dateObject)
      if(dateObject>todayStart){
        // this.dateErrFlag=true;
        // this.dateErro="Insert valid date";
        // return;
      }else{
        this.dateErrFlag=false;
      }
      
    }
    if(classNm==null){
      return;
    }
     /**********  create params variable which is contain search date and class in a one variable separating ';'**********/
      /********** It will pass in get request paramiter **********/  
    var params=date+";"+classNm;
    this.attendanceService.retriveDate(params)
    .subscribe((data)=>{
      if(data.length==0){
        this.spanflageD=true;
      }else{
        
        this.searchDateResult=data[0];
        this.spanflageD=false;
        this.historyflagD=false;
      }
    });

  }

}
