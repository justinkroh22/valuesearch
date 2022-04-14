import { TestBed } from '@angular/core/testing';

import { CompanyOverviewHttpService } from './company-overview-http.service';

describe('CompanyOverviewHttpService', () => {
  let service: CompanyOverviewHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyOverviewHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
