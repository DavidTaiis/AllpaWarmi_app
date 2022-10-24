import { TestBed } from '@angular/core/testing';

import { LiderezaService } from './lidereza.service';

describe('LiderezaService', () => {
  let service: LiderezaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiderezaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
