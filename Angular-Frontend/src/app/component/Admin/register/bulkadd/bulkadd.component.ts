import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service'; 
import { MatSnackBarConfig ,MatSnackBar} from '@angular/material';

 /********** This is template for one user(Class)  **********/
export class  User{
  usertype:string;
  name:string;
  userid:string;
  email:string;
  password:string;
  birthday:string;
  gender:string;
  nationality:string;
  NIC:string;
  address:string;
  image:string;
  selectclass:string;
}

@Component({
  selector: 'app-bulkadd',
  templateUrl: './bulkadd.component.html',
  styleUrls: ['./bulkadd.component.scss']
})
export class BulkaddComponent {
  filename;
  flag = false;
  fileToUpload: File = null;
  Stringdata = '';
  users = [];
  userVisibale;
  imageUrls=[];
  
  constructor(private register:RegisterService,public snackBar: MatSnackBar){ }
  
  /**********  load the image as the button event and asign to  the images variable  **********/  
 
  handleFileInput(files: FileList) {

    this.fileToUpload = files.item(0);
   
  }
  

  /**********  Read input file and extratc each user one by one then display to user  **********/  
  bulkRegistration() {
    let fileReader = new FileReader();
    fileReader.readAsText(this.fileToUpload);

    fileReader.onload = (e) => {
      this.Stringdata = fileReader.result.toString();
      var Stringusers = this.Stringdata.split('\n');
      console.log(Stringusers.length);

      for (var i = 0; i < Stringusers.length; i++) {

        if (Stringusers[i] == '\n') {
          break;
        }
        var userstr = Stringusers[i].split(',');

        var user = new User();
        var temp = userstr[0].split(':');
        user.usertype = temp[1];
        var temp = userstr[1].split(':');
        user.name = temp[1];
        var temp = userstr[2].split(':');
        user.userid = temp[1];
        var temp = userstr[3].split(':');
        user.email = temp[1];
        var temp = userstr[4].split(':');
        user.password = temp[1];
        var temp = userstr[5].split(':');
        user.birthday = temp[1];
        var temp = userstr[6].split(':');
        user.gender = temp[1];
        var temp = userstr[7].split(':');
        user.nationality = temp[1];
        var temp = userstr[8].split(':');
        user.NIC = temp[1];
        var temp = userstr[9].split(':');
        user.address = temp[1];
        var temp = userstr[10].split(':');
        user.image = temp[1];
        var temp = userstr[11].split(':');
        user.selectclass = temp[1];
        this.users.push(user);
      }
      this.userVisibale = new Array(this.users.length);

      for (var i = 0; i < this.users.length; i++) {
        this.userVisibale[i] = true;
      }
      this.imageUrls = new Array(this.users.length);
      
      this.flag = true;
      console.log(this.users);
    }
  }
  /**********  Add users one by one.After this function call it will add to database ith position data in users object array   **********/ 
  addUser(i,reload){
    
    return this.register.addUser(this.users[i]).subscribe(res => {
      if (res.state) {
        console.log(res.msg);
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Registration Successfull..! ", true ? "Done" : undefined, config);
        if(reload==1){
          window.location.reload();
        }
        return true;
        this.userVisibale[i]=false;
        
      }
      else {
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Registration Unsuccessfull..! ", true ? "Retry" : undefined, config);
        return false;
      }
    });
    

  }
  /********** Remove user from array  **********/ 
  remove(i) {
    this.userVisibale[i] = false;
  }
  /********** Add all  user from array  **********/
  addAll(){
    for(var i=0;i<this.users.length;i++){
      if(this.userVisibale[i]){
        if( i == this.users.length-1){
          this.addUser(i,1);
        }else{
          this.addUser(i,0);
        }
      }
    }
    
  }
   /********** Just reaload page  **********/
  removeAll() {
    window.location.reload();
  }

}
