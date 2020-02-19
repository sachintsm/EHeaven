import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCurricularComponent } from './extra-curricular.component';

describe('ExtraCurricularComponent', () => {
  let component: ExtraCurricularComponent;
  let fixture: ComponentFixture<ExtraCurricularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraCurricularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
