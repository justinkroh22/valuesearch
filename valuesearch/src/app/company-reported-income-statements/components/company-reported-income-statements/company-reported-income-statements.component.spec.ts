import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReportedIncomeStatementsComponent } from './company-reported-income-statements.component';

describe('CompanyReportedIncomeStatementsComponent', () => {
  let component: CompanyReportedIncomeStatementsComponent;
  let fixture: ComponentFixture<CompanyReportedIncomeStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyReportedIncomeStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReportedIncomeStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
