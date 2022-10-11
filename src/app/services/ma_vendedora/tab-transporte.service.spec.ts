import { TestBed } from '@angular/core/testing';

import { TabTransporteService } from './tab-transporte.service';

describe('TabTransporteService', () => {
  let service: TabTransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabTransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
