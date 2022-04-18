import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyMainComponent } from './components/company-main/company-main.component';
import { CompanyOverviewModule } from '../company-overview/company-overview.module';
import { CompanyReportedIncomeStatementsModule } from '../company-reported-income-statements/company-reported-income-statements.module';
import { CompanyReportedBalanceSheetsModule } from '../company-reported-balance-sheets/company-reported-balance-sheets.module';
import { CompanyReportedCashFlowsModule } from '../company-reported-cash-flows/company-reported-cash-flows.module';



@NgModule({
  declarations: [
    CompanyMainComponent
  ],
  imports: [
    CommonModule,
    CompanyOverviewModule,
    CompanyReportedIncomeStatementsModule,
    CompanyReportedBalanceSheetsModule,
    CompanyReportedCashFlowsModule
  ]
})
export class CompanyModule { }
