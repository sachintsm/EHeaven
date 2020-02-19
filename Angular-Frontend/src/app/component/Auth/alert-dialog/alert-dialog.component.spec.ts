import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogComponent } from './alert-dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('AlertDialogComponent', () => {
  let component: AlertDialogComponent;
  let fixture: ComponentFixture<AlertDialogComponent>;
  const dialogMock = {
    close: () => { }
};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
      declarations: [ AlertDialogComponent ],
      imports:[MatDialogModule],
      
    
       
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
