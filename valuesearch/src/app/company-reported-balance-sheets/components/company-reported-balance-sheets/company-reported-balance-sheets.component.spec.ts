import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReportedBalanceSheetsComponent } from './company-reported-balance-sheets.component';

describe('CompanyReportedBalanceSheetsComponent', () => {
  let component: CompanyReportedBalanceSheetsComponent;
  let fixture: ComponentFixture<CompanyReportedBalanceSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyReportedBalanceSheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReportedBalanceSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
