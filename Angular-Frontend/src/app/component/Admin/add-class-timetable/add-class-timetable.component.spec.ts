import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassTimetableComponent } from './add-class-timetable.component';

describe('AddClassTimetableComponent', () => {
  let component: AddClassTimetableComponent;
  let fixture: ComponentFixture<AddClassTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   // expect(component).toBeTruthy();
  // });
});
