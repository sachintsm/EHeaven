import { TestBed } from '@angular/core/testing';

import { MycookiesService } from './mycookies.service';

describe('MycookiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycookiesService = TestBed.get(MycookiesService);
    expect(service).toBeTruthy();
  });
});
