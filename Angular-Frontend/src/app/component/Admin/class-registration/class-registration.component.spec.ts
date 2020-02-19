import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRegistrationComponent } from './class-registration.component';

describe('ClassRegistrationComponent', () => {
  let component: ClassRegistrationComponent;
  let fixture: ComponentFixture<ClassRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
