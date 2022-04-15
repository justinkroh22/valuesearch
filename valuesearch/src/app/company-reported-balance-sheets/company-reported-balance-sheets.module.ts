import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CompanyReportedBalanceSheets } from './models/CompanyReportedBalanceSheets';
import { CompanyReportedBalanceSheetsHttpService } from './services/company-reported-balance-sheets-http.service';
import { CompanyReportedBalanceSheetsComponent } from './components/company-reported-balance-sheets/company-reported-balance-sheets.component';
import { CompanyReportedBalanceSheetsStoreService } from './services/company-reported-balance-sheets-store.service';
import { InverseTableModule } from '../inverse-table/inverse-table.module';



@NgModule({
  declarations: [
    CompanyReportedBalanceSheetsComponent
  ],
  imports: [
    CommonModule,
    InverseTableModule
  ],
  providers: [
    CompanyReportedBalanceSheetsHttpService,
    CompanyReportedBalanceSheetsStoreService
  ],
  exports: [
    CompanyReportedBalanceSheetsComponent
  ]
})
export class CompanyReportedBalanceSheetsModule {

  entityMetadata: EntityMetadataMap = {
    CompanyReportedBalanceSheets: {
      entityName: 'company-reported-balance-sheets',
      selectId: this.getId
    }
  };

  constructor(private eds: EntityDefinitionService,private entityDataService: EntityDataService,private companyReportedBalanceSheetsHttpService: CompanyReportedBalanceSheetsHttpService) {

    this.eds.registerMetadataMap(this.entityMetadata);

    this.entityDataService.registerService('company-reported-balance-sheets', this.companyReportedBalanceSheetsHttpService);

  }

  getId(companyReportedBalanceSheets: CompanyReportedBalanceSheets): string {

    return companyReportedBalanceSheets.symbol;
  }
}
