import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkBulkAddComponent } from './mark-bulk-add.component';

describe('MarkBulkAddComponent', () => {
  let component: MarkBulkAddComponent;
  let fixture: ComponentFixture<MarkBulkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkBulkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkBulkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
