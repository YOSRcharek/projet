import { TestBed } from '@angular/core/testing';

import { SejourService } from './sejour.service';

describe('SejourService', () => {
  let service: SejourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SejourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
