import { TestBed } from '@angular/core/testing';

import { CompanyReportedIncomeStatementsHttpService } from './company-reported-income-statements-http.service';

describe('CompanyReportedIncomeStatementsHttpService', () => {
  let service: CompanyReportedIncomeStatementsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyReportedIncomeStatementsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
