import { TestBed } from '@angular/core/testing';

import { AcopiadoraService } from './acopiadora.service';

describe('AcopiadoraService', () => {
  let service: AcopiadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcopiadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
