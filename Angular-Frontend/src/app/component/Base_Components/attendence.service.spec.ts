import { TestBed } from '@angular/core/testing';

import { AttendenceService } from './attendance/attendence.service';

describe('AttendenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendenceService = TestBed.get(AttendenceService);
    expect(service).toBeTruthy();
  });
});
