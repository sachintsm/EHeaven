import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MatInputModule, MatIconModule, MatFormFieldModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Navbar2Component } from '../../Auth/navbar2/navbar2.component';
import { NavbarComponent } from '../../Auth/navbar/navbar.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      // declarations: [ MenuComponent ]
      imports: [MatInputModule,MatIconModule,MatFormFieldModule,FormsModule,MatToolbarModule,RouterTestingModule.withRoutes([]),HttpClientTestingModule
      ,  MatSnackBarModule
    
    ],
      declarations: [ MenuComponent,Navbar2Component,NavbarComponent ],
      
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
