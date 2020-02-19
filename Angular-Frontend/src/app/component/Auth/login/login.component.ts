import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MycookiesService } from '../../Admin/mycookies.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userid: String="";
  password: String="";
  user_id: any;
  user: any;
  authtoken: any;
  mySubscription: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookies: MycookiesService,
    public snackBar: MatSnackBar,

  ) { }
  ngOnInit() {
    if(this.cookies.logingStatus===true){
      var myCookie = JSON.parse(this.cookies.getCookie("userAuth"));
      this.router.navigate([myCookie.userid,'menu']);
    }
   }

  userLogin() {
    // get user login details
    const user = {
      userid: this.userid,
      password: this.password
    };

    //login backend url
    var url = "http://localhost:3000/users/login";

    if(user.userid == ''){  //check users userid null or not
      let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          this.snackBar.open("User ID is empty..! ", true ? "Retry" : undefined, config);
          return "userid empty";
    }
    else if(user.password == ''){ //check users password null or not
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Password is Empty..! ", true ? "Retry" : undefined, config);
      return "password empty";
    }
    else{
      this.http.post<any>(url, user).subscribe(res => { //requested to data to the server to login
    
        if (res.state == true) {
          this.cookies.setCookie("userAuth", JSON.stringify(res.user), 1);  //set cookeis, user data
          var myCookie = JSON.parse(this.cookies.getCookie("userAuth"));  //userdata convert to  JSON array
          var id = myCookie.usertype;   //get user type from the cookies
          
          /*here user type equal to the administrator redirected to the admin panel directlt*/
          if(id=="Administrator"){  
            this.router.navigate([myCookie.userid,'admin_dashboard']);
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Successfully Logged In..! ", true ? "Done" : undefined, config);
            return "Log as admin";
          }else if(id){   //if other user logd in redirecto the menu 
            this.router.navigate([myCookie.userid,'menu']);
            return "Log as normal user";
          }else{    //else redirected to the login form again
            this.router.navigate(['/login']);
            return "You are not a user"
          }
        }
        else {
          //user login state false shows error message 
          let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          this.snackBar.open("Username or Password Incorrect..! ", true ? "Retry" : undefined, config);
          this.router.navigate(['/login']);
          return "userid or password wrong";
        }
      });
    }
    return " ";
  }
}
