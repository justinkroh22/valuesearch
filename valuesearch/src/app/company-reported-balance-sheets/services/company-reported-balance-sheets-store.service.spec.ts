import { TestBed } from '@angular/core/testing';

import { CompanyReportedBalanceSheetsStoreService } from './company-reported-balance-sheets-store.service';

describe('CompanyReportedBalanceSheetsStoreService', () => {
  let service: CompanyReportedBalanceSheetsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyReportedBalanceSheetsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
