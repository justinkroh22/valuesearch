import { TestBed } from '@angular/core/testing';

import { CompanyReportedBalanceSheetsHttpService } from './company-reported-balance-sheets-http.service';

describe('CompanyReportedBalanceSheetsHttpService', () => {
  let service: CompanyReportedBalanceSheetsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyReportedBalanceSheetsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
