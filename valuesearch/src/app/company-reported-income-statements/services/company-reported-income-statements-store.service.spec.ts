import { TestBed } from '@angular/core/testing';

import { CompanyReportedIncomeStatementsStoreService } from './company-reported-income-statements-store.service';

describe('CompanyReportedIncomeStatementsStoreService', () => {
  let service: CompanyReportedIncomeStatementsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyReportedIncomeStatementsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
