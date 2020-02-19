import { Component, OnInit,Input } from '@angular/core';
import {AttendenceService} from '../attendence.service';
import {Returnuser} from '../attend';
import {Attend} from '../attend';
import {AttendList} from '../attend';
import { MycookiesService} from '../../../Admin/mycookies.service';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {


  /**********  variable declaration **********/ 
  @Input('parentData') public className; //get selected class from parent component which is attendance component 
  public userCookie=JSON.parse(this.cookie.getCookie("userAuth"));
  public students:Array<Returnuser>;
  public attendRecord:Attend[];
  public i=0;
  public numberOfStudent=0;
  public presentStu=0;
  public mainFlag=true;
  public today=new Date();
  public toggle;
  
  
  constructor(
              private attendanceService:AttendenceService,
              private cookie:MycookiesService,
              private snackBar:MatSnackBar
              ) { }
  
  ngOnInit() {

    /**********  retrive all students belongs to selcted className **********/ 
    this.attendanceService.retriveUsers(this.className)
    .subscribe((data:Returnuser[])=>{
      this.students=data;
      this.numberOfStudent=data.length;
      this.toggle=new Array(this.numberOfStudent);

      /**********  make an array for display in frontend show relevant student has presenet or absent **********/ 
     /**********  default it present **********/  
      for (var j=0;j<this.numberOfStudent;j++){
        this.toggle[j]="Absent";
        
      }
    });
  }
  
 
  /**********  this function occur when the toggle button click **********/ 
  /**********  Just change the value after clicked student **********/ 
  count(index){
    if(this.toggle[index]=="Present"){
      this.presentStu--;
      this.toggle[index]="Absent";
      
    }else{
      this.presentStu++;
      this.toggle[index]="Present";
    }
  }
  
  /**********  creating attendance sheet and stroring attendance sheet in database **********/ 
  onSubmit(userForm){
    var attendList=[];
    this.mainFlag=false;
    window.scrollTo(0,5);
    const student = Object.entries(userForm.value);
    
    /**********  creating each student attendance separatly **********/ 
    for (const [i,attend] of student) {
      var newRec=new Attend();
      newRec.name=this.students[i].name;
      newRec.userid=this.students[i].userid;
      
      
      if(attend==""){

        newRec.attend=false;

      }else if(attend==true){
        
        newRec.attend=true;
      }else if(attend==false){
        
        newRec.attend=false;
      }
      console.log(newRec);
      attendList.push(newRec);
      
    }

    /**********  make final attendance sheet **********/ 
    var FinalList=new AttendList();
    FinalList.class=this.className;
    FinalList.markedby=this.userCookie.userid;
    FinalList.atendList=attendList;
    
    /**********  store in database **********/ 
    this.attendanceService.logAdd(FinalList)
       .subscribe(
          data=>{
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            config.verticalPosition='top';
            this.snackBar.open("Attendance sheet successfully entered!!!!!!!!", true ? "Ok" : undefined, config);
          },
          error=>{
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            config.verticalPosition='top';
            this.snackBar.open("Attendance sheet not entered!!!!!!!!", true ? "Retry" : undefined, config);
            this.mainFlag=true;
          }
       )
    
  }
  

}
