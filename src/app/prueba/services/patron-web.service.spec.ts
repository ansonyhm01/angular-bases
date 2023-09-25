import { TestBed } from '@angular/core/testing';

import { PatronWebService } from './patron-web.service';

describe('PatronWebService', () => {
  let service: PatronWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatronWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
