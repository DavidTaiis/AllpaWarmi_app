import { TestBed } from '@angular/core/testing';

import { CamionetaService } from './camioneta.service';

describe('CamionetaService', () => {
  let service: CamionetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamionetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
