import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MycookiesService } from '../../Admin/mycookies.service';
import { faAt, faPhone, faMap, faMobile, faBirthdayCake, faVenusMars, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

//profile data class
interface profile {
  usertype: String;
  userid: String;
  name: String;
  email: String;
  password: String;
  birthday: String;
  mobilenumber: String;
  homenumber: String;
  gender: String;
  nationality: String;
  nicnumber: String;
  father: String;
  mother: String;
  address: String;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // decalre icons
  faVenusMars = faVenusMars
  faAt = faAt
  faGlobeEurope = faGlobeEurope
  faPhone = faPhone
  faBirthdayCake = faBirthdayCake
  faMap = faMap
  faMobile = faMobile
  profiledata: profile[] = []

  authtoken: any;
  user: any;
  id: any;

  constructor(
    private http: HttpClient,
    private cookies: MycookiesService,
    private router: Router,
  ) { }

  ngOnInit() {

    if (this.cookies.getCookie("userAuth") != "") { //check correct cookies availeble in the cookie storage And its null or not

      var myCookie = JSON.parse(this.cookies.getCookie("userAuth"))
      this.id = myCookie.userid;    //TAKE userid 

      var url = "http://localhost:3000/users/profile";

      this.http.get<any>(url + '/' + this.id).subscribe(res => {
        this.profiledata = res; //get profile data in to the profile dat array
      }, (err) => {
        console.log(err); //consloe log if error loading profile
      });

      if (this.router.url != '/' + this.id) { //if router url have some problem. redirected to the oops page
        this.router.navigate(['/404']);

      }
    } else {
      this.router.navigate(['/login']);   //if has not cookies available redirect to the login page
    }
  }
}
