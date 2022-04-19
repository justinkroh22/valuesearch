import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickerRoutingModule } from './ticker-routing.module';
import { CompanyOverviewModule } from '../company-overview/company-overview.module';
import { CompanyReportedBalanceSheetsModule } from '../company-reported-balance-sheets/company-reported-balance-sheets.module';
import { CompanyReportedCashFlowsModule } from '../company-reported-cash-flows/company-reported-cash-flows.module';
import { CompanyReportedIncomeStatementsModule } from '../company-reported-income-statements/company-reported-income-statements.module';
import { TickerComponent } from './components/ticker/ticker.component';
import { TabsComponent } from '../company/components/tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { GlobalQuoteHttpService } from './services/global-quote-http.service';
import { GlobalQuoteStoreService } from './services/global-quote-store.service';



@NgModule({
  declarations: [
    TickerComponent,
  ],
  imports: [
    CommonModule,
    TickerRoutingModule,
    CompanyOverviewModule,
    CompanyReportedIncomeStatementsModule,
    CompanyReportedBalanceSheetsModule,
    CompanyReportedCashFlowsModule,
    MatTabsModule

  ],
  providers: [
    GlobalQuoteHttpService,
    GlobalQuoteStoreService
  ],
  exports: [
    TickerComponent
  ]
})
export class TickerModule { }
