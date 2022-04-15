import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CompanyReportedIncomeStatements } from '../company-reported-income-statements/models/CompanyReportedIncomeStatements';
import { CompanyReportedIncomeStatementsHttpService } from '../company-reported-income-statements/services/company-reported-income-statements-http.service';
import { CompanyReportedCashFlows } from './models/CompanyReportedCashFlows';
import { CompanyReportedCashFlowsHttpService } from './services/company-reported-cash-flows-http.service';
import { CompanyReportedCashFlowsStoreService } from './services/company-reported-cash-flows-store.service';
import { CompanyReportedCashFlowsComponent } from './components/company-reported-cash-flows/company-reported-cash-flows.component';



@NgModule({
  declarations: [
    CompanyReportedCashFlowsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CompanyReportedCashFlowsHttpService,
    CompanyReportedCashFlowsStoreService
  ],
  exports: []
})
export class CompanyReportedCashFlowsModule { 

  entityMetadata: EntityMetadataMap = {
    CompanyReportedCashFlows: {
      entityName: 'company-reported-cash-flows',
      selectId: this.getId
    }
  };

  constructor(private eds: EntityDefinitionService,private entityDataService: EntityDataService,private companyReportedCashFlowsHttpService: CompanyReportedCashFlowsHttpService) {

    this.eds.registerMetadataMap(this.entityMetadata);

    this.entityDataService.registerService('company-reported-cash-flows', this.companyReportedCashFlowsHttpService);

  }

  getId(companyReportedCashFlows: CompanyReportedCashFlows): string {

    return companyReportedCashFlows.symbol;
  }
}
