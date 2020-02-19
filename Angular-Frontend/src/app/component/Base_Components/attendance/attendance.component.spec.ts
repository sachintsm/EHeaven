import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceComponent } from './attendance.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatIconModule, MatFormFieldModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from '../../Auth/login/login.component';
import { Navbar2Component } from '../../Auth/navbar2/navbar2.component';
import { NavbarComponent } from 'angular-bootstrap-md';

describe('AttendanceComponent', () => {
  let component: AttendanceComponent;
  let fixture: ComponentFixture<AttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatInputModule,MatIconModule,MatFormFieldModule,FormsModule,MatToolbarModule,RouterTestingModule.withRoutes([]),HttpClientTestingModule
      ,  MatSnackBarModule
    
    ],
      declarations: [ Navbar2Component,NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
