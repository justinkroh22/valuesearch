import { TestBed } from '@angular/core/testing';

import { CompanyReportedCashFlowsHttpService } from './company-reported-cash-flows-http.service';

describe('CompanyReportedCashFlowsHttpService', () => {
  let service: CompanyReportedCashFlowsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyReportedCashFlowsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
