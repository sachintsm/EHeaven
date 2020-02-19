import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder} from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
        
        private http: HttpClient,
        private fb: FormBuilder,
        public snackBar: MatSnackBar

    ) { }

  addUser(formData){
    const url = 'http://localhost:3000/users/bulkUserRegistration';

    return this.http.post<any>(url,formData);
  }

}
  
  