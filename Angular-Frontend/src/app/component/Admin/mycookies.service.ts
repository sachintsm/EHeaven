import { Injectable } from '@angular/core';
import {CookieData} from './CookieData';

@Injectable({
  providedIn: 'root'
})
/***********User cookie class which is use to User level Authorization**********/ 
export class MycookiesService {

  // this is stored boolean value user is loged or no default its false 
  // After user loged it will be true
  logingStatus=false;

  // this object variable  will use stored user data  
  userData:CookieData={userid:"",usertype:""};

  // this for stored loged user  name and usertype  
  profile;

 
    
  
  constructor() { 
    // cheking if there is a cookie in our localstorage 
    // if not set relevent data empty
    // if has set relevent data using cookie
    if(this.getCookie("userAuth")!=''){
      
      
      var data=JSON.parse(this.getCookie("userAuth"));
      this.userData.userid=data.userid;
      this.userData.usertype=data.usertype;
      var name=data.name.split(" ");
      this.profile=name[0] + " ("+data.usertype+")";
      this.logingStatus=true;
    }else{
      this.logingStatus=false;
      this.userData.userid="";
      this.userData.usertype="";
    }
  }
  
  // This is function stored  user session data in readabale form , for only us with expie date and and path
  // cname is user cookies name ,cvalue is session data,exdays is number of days it will store in our browser memory

  setCookie(cname, cvalue, exdays:number) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    if(exdays!=-1){
      var data=JSON.parse(this.getCookie("userAuth"));
      var name=data.name.split(" ");
      this.profile=name[0] + " ("+data.usertype+")";
      console.log(name);
      this.userData.userid=data.userid;
      this.userData.usertype=data.usertype;
      
      this.logingStatus=true;
    }
    
  }
  

  /*******Return user cookies ********/
  /*******cname is cookies name we set********/
  getCookie(cName) {
    var name = cName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}