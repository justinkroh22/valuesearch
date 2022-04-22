import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyMainComponent } from './components/company-main/company-main.component';
import { CompanyOverviewModule } from '../company-overview/company-overview.module';
import { CompanyReportedIncomeStatementsModule } from '../company-reported-income-statements/company-reported-income-statements.module';
import { CompanyReportedBalanceSheetsModule } from '../company-reported-balance-sheets/company-reported-balance-sheets.module';
import { CompanyReportedCashFlowsModule } from '../company-reported-cash-flows/company-reported-cash-flows.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { CompanyRoutingModule } from './company-routing.module';
import { TickerModule } from '../ticker/ticker.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CompanyValuationModule } from '../company-valuation/company-valuation.module';



@NgModule({
  declarations: [
    CompanyMainComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    CompanyValuationModule,
    TickerModule,
    CompanyOverviewModule,
    CompanyReportedIncomeStatementsModule,
    CompanyReportedBalanceSheetsModule,
    CompanyReportedCashFlowsModule,
    MatTabsModule
  ],
  exports: [
    TabsComponent
  ]
})
export class CompanyModule { }
