import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReportedCashFlowsComponent } from './company-reported-cash-flows.component';

describe('CompanyReportedCashFlowsComponent', () => {
  let component: CompanyReportedCashFlowsComponent;
  let fixture: ComponentFixture<CompanyReportedCashFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyReportedCashFlowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReportedCashFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
