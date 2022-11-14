import { TestBed } from '@angular/core/testing';

import { FileStructService } from './file-struct.service';

describe('FileStructService', () => {
  let service: FileStructService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileStructService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
