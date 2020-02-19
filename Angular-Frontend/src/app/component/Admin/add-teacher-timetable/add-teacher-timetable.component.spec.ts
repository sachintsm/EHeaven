import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherTimetableComponent } from './add-teacher-timetable.component';

describe('AddTeacherTimetableComponent', () => {
  let component: AddTeacherTimetableComponent;
  let fixture: ComponentFixture<AddTeacherTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
