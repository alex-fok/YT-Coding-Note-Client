import { TestBed } from '@angular/core/testing';

import { TimeSegmentService } from './time-segment.service';

describe('TimeSegmentService', () => {
  let service: TimeSegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
