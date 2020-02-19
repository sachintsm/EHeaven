import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MycookiesService } from '../../Admin/mycookies.service';


interface Extra {
  _id: String;
  userid: String;
  extracurrCat: String;
  desp: String;
  dateofMembership: String;
  extracurrname: String;
  type: String;
  reqDate: String;
  compName: String;
  dateofAchv: String;
  achv: String;
  state: String;
  filapath: String;
}

@Component({
  selector: 'app-extra-curricular',
  templateUrl: './extra-curricular.component.html',
  styleUrls: ['./extra-curricular.component.scss']
})




export class ExtraCurricularComponent implements OnInit {

  flag = false;
  attachment
  filename
  value: String = '';
  userid: String;
  cookie = JSON.parse(this.cookies.getCookie('userAuth'));

  pendingExtra: Extra[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private cookies: MycookiesService, ) { }

  extracurrForm = this.fb.group({
    extracurrCat: ['', Validators.required],
    desp: ['', Validators.required],
    dateofMembership: ['', Validators.required],
    sportclubs: this.fb.group({
      extracurrname: ['', Validators.required],
      type: ['', Validators.required],
      compName: ['', Validators.required],
      dateofAchv: ['', Validators.required],
      achv: ['', Validators.required],
    })
  });


  category = [
    'Sports',
    'Clubs & Associations',
    'Aesthetics',
    'Scouting/Cadeting',
    'Other'
  ];

  extras = [
    'Chess',
    'Cricket',
    'Rugby',
    'Badminton',
    'Squash'
  ];

  type = [
    'Membership',
    'District Level',
    'Provincial Level',
    'All Island Level',
    'International',
  ];
  ngOnInit() {
    let date = Date();
    let myCookie = JSON.parse(this.cookies.getCookie("userAuth")); // get userdate cookies from cookies
    let id = myCookie.userid;

    //pending extra-curr requests
    let pendingUrl = "http://localhost:3000/student_extra/pendingExtra";

    this.http.get<any>(pendingUrl + "/" + id).subscribe(res => {
      console.log(res);
      this.pendingExtra = res;
    });
  }
  selectImage(event) {
    if (event.target.files.length > 0) {  // check the file is select or not.
      const file = event.target.files[0];
      this.attachment = file;
      this.filename = file.name;
    }
  }

  submitToApproval() {
    let myCookie = JSON.parse(this.cookies.getCookie('userAuth'));  // get userdate cookies from cookies
    this.userid = myCookie.userid;     // get userid from cookies
    let date = Date();
    //console.log('Hello at ');
    //console.log(this.extracurrForm.value , myCookie.usertype)
    if (this.userid) {
      if (this.extracurrForm.value.extracurrCat == '' || this.extracurrForm.value.desp == '') {
        alert('Fill the form field please..!');
      } else {
        // create extracurrApproval
        const formData = new FormData();
        formData.append('extracurrAttachment', this.attachment)
        formData.append('userid', myCookie.userid)
        formData.append('extracurrCat', this.extracurrForm.value.extracurrCat)
        formData.append('desp', this.extracurrForm.value.desp)
        formData.append('dateofMembership', this.extracurrForm.value.dateofMembership)
        formData.append('extracurrname', this.extracurrForm.value.sportclubs.extracurrname)
        formData.append('type', this.extracurrForm.value.sportclubs.type)
        formData.append('compName', this.extracurrForm.value.sportclubs.compName)
        formData.append('dataofAchv', this.extracurrForm.value.sportclubs.dateofAchv)
        formData.append('achv', this.extracurrForm.value.sportclubs.achv)
        formData.append('date', date)
        formData.append('state', 'Pending')


        let url = 'http://localhost:3000/student_extra/requestExtracurr';

        this.http.post<any>(url, formData).subscribe(res => {
          if (res.state) {
            console.log(res.msg);
            alert('Successfully Requested..!');
            window.location.reload();
            this.extracurrForm.reset();
            this.router.navigate(['../', this.cookie.userid, 'extra_curricular']);
          } else {
            console.log(res.msg);
            alert('Unsuccessfull..!');
            window.location.reload();
            this.router.navigate(['../', this.cookie.userid, 'extra_curricular']);
          }
        });
      }
    } else {
      alert('Please Login First..!');
      this.router.navigate(['/login']);
    }
    //window.location.reload();     //reload the page
  }


  togglefunction(value) {
    if (value == 'Sports' || value == 'Clubs & Associations') {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

}
