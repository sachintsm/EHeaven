import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSubjectComponent } from './academic-subject.component';

describe('AcademicSubjectComponent', () => {
  let component: AcademicSubjectComponent;
  let fixture: ComponentFixture<AcademicSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
