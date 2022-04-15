import { TestBed } from '@angular/core/testing';

import { CompanyReportedCashFlowsStoreService } from './company-reported-cash-flows-store.service';

describe('CompanyReportedCashFlowsStoreService', () => {
  let service: CompanyReportedCashFlowsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyReportedCashFlowsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
