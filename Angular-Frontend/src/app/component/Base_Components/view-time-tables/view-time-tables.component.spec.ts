import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimeTablesComponent } from './view-time-tables.component';

describe('ViewTimeTablesComponent', () => {
  let component: ViewTimeTablesComponent;
  let fixture: ComponentFixture<ViewTimeTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTimeTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimeTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
