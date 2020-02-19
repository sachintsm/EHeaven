import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Navbar2Component } from '../navbar2/navbar2.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatToolbarModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let useridBox;
  let passwordBox ;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatInputModule,MatIconModule,MatFormFieldModule,FormsModule,MatToolbarModule,RouterTestingModule.withRoutes([]),HttpClientTestingModule
      ,  MatSnackBarModule
    
    ],
      declarations: [ LoginComponent,Navbar2Component,NavbarComponent ]
      
    })
    
    .compileComponents();
    // useridBox = fixture.debugElement.query(By.css('input[name="userid"]')).nativeElement;
    // passwordBox = fixture.debugElement.query(By.css('input[name="password"]')).nativeElement;
    // useridBox.focus();
    // passwordBox.focus();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('Wrong Password and userid ', () => {
  //   // expect(component).toBeTruthy();
    
  //   useridBox.value="00000000";
  //   passwordBox.value="admin123";
  //   useridBox.dispatchEvent(new Event('input'));
  //   passwordBox.dispatchEvent(new Event('input'));
  //   tick();
  //   fixture.detectChanges();
  //   // let val=component.userLogin();
  //   // expe/ct(val).toEqual('Log as admin');

  // });
});
