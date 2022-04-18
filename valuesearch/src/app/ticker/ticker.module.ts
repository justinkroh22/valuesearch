import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickerRoutingModule } from './ticker-routing.module';
import { CompanyOverviewModule } from '../company-overview/company-overview.module';
import { CompanyReportedBalanceSheetsModule } from '../company-reported-balance-sheets/company-reported-balance-sheets.module';
import { CompanyReportedCashFlowsModule } from '../company-reported-cash-flows/company-reported-cash-flows.module';
import { CompanyReportedIncomeStatementsModule } from '../company-reported-income-statements/company-reported-income-statements.module';
import { TickerComponent } from './components/ticker/ticker.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    TickerComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    TickerRoutingModule,
    CompanyOverviewModule,
    CompanyReportedIncomeStatementsModule,
    CompanyReportedBalanceSheetsModule,
    CompanyReportedCashFlowsModule,
    MatTabsModule

  ]
})
export class TickerModule { }
