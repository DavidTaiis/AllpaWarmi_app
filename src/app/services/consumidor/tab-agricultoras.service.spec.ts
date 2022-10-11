import { TestBed } from '@angular/core/testing';

import { TabAgricultorasService } from './tab-agricultoras.service';

describe('TabAgricultorasService', () => {
  let service: TabAgricultorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabAgricultorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
