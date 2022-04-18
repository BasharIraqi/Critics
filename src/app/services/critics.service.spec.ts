import { TestBed } from '@angular/core/testing';

import { CriticsService } from './critics.service';

describe('CriticsService', () => {
  let service: CriticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
