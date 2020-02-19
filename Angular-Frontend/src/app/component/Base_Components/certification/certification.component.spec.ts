import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationComponent } from './certification.component';


describe('CertificationComponent', () => {
  let component: CertificationComponent;
  let fixture: ComponentFixture<CertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is form valid when empty', () => {
    let name = component.CertificationForm.controls["certName"];
    name.setValue('TestName');

    let type = component.CertificationForm.controls["certType"];
    type.setValue('TestType');

    let year = component.CertificationForm.controls["examYear"];
    year.setValue('2015');

    let eName = component.CertificationForm.controls["examName"];
    eName.setValue('TesteName');

    let index = component.CertificationForm.controls["examIndex"];
    index.setValue('TestIndex');

    expect(component.CertificationForm.valid).toBeTruthy();
  });
});
