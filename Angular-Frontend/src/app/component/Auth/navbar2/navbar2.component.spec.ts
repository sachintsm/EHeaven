import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2Component } from './navbar2.component';
import { MatInputModule, MatIconModule, MatFormFieldModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Navbar2Component', () => {
  let component: Navbar2Component;
  let fixture: ComponentFixture<Navbar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatInputModule,MatIconModule,MatFormFieldModule,FormsModule,MatToolbarModule,RouterTestingModule.withRoutes([]),HttpClientTestingModule
      ,  MatSnackBarModule
    
    ],
      declarations: [ Navbar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
