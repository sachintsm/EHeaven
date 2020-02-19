import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareCertificationComponent } from './prepare-certification.component';

describe('PrepareCertificationComponent', () => {
  let component: PrepareCertificationComponent;
  let fixture: ComponentFixture<PrepareCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is form valid when empty', () => {
    let name = component.StudentStatusForm.controls["studentId"];
    name.setValue('S001');

    let year = component.StudentStatusForm.controls["dateofAdmission"];
    year.setValue('2015-01-01');

    let eName = component.StudentStatusForm.controls["description"];
    eName.setValue('TestDes');

    let index = component.StudentStatusForm.controls["admissionNum"];
    index.setValue('TestNum');

    expect(component.StudentStatusForm.valid).toBeTruthy();
  });
});
