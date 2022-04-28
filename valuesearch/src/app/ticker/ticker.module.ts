import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalQuote } from './models/GlobalQuote';


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
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';



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
export class TickerModule {

  entityMetadata: EntityMetadataMap = {
    GlobalQuote: {
      entityName: 'global-quote',
      selectId: this.getId
    }
  };

  constructor(private eds: EntityDefinitionService,private entityDataService: EntityDataService,private GlobalQuoteHttpService: GlobalQuoteHttpService) {

    this.eds.registerMetadataMap(this.entityMetadata);

    this.entityDataService.registerService('global-quote', this.GlobalQuoteHttpService);

  }

  getId(GlobalQuote: GlobalQuote): string {

    return GlobalQuote.symbol;
  }

 }
