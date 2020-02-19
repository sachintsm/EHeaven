import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MycookiesService } from '../../Admin/mycookies.service';
import { Router,ActivatedRoute } from '@angular/router';
import {UserDetail} from '../../Userdetail';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userid: String;
  user: any;
  myCookie: string = this.cookies.getCookie("userAuth");
  // userDetail:=JSON.parse(this.cookies.getCookie("userAuth"));
  userdeatail:UserDetail={usertype:"",id:"",name:"",email:"",selectclass:"",userid:""};
  flag=true;
  
  constructor(
    private router: Router,
    private cookies: MycookiesService,
    public snackBar: MatSnackBar,
    public route :ActivatedRoute,
  ) { }

  ngOnInit() { 
    if(this.myCookie!=""){
      this.userdeatail=JSON.parse(this.myCookie);
    }else{
      this.router.navigate(['/login']);
    }
    
  }
}
