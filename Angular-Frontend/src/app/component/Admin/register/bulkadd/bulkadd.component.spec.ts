import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkaddComponent } from './bulkadd.component';

describe('BulkaddComponent', () => {
  let component: BulkaddComponent;
  let fixture: ComponentFixture<BulkaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
