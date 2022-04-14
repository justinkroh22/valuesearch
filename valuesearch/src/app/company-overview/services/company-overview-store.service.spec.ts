import { TestBed } from '@angular/core/testing';

import { CompanyOverviewStoreService } from './company-overview-store.service';

describe('CompanyOverviewStoreService', () => {
  let service: CompanyOverviewStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyOverviewStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
