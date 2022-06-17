import { TestBed } from '@angular/core/testing';

import { FirstSharedService } from './first-shared.service';

describe('FirstSharedService', () => {
  let service: FirstSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
