import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CompanyReportedIncomeStatements } from './models/CompanyReportedIncomeStatements';

import { CompanyReportedIncomeStatementsHttpService } from './services/company-reported-income-statements-http.service';
import { CompanyReportedIncomeStatementsStoreService } from './services/company-reported-income-statements-store.service';
import { CompanyReportedIncomeStatementsComponent } from './components/company-reported-income-statements/company-reported-income-statements.component';



@NgModule({
  declarations: [
    CompanyReportedIncomeStatementsComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CompanyReportedIncomeStatementsHttpService,
    CompanyReportedIncomeStatementsStoreService
  ],
  exports: [
    CompanyReportedIncomeStatementsComponent
  ]
})
export class CompanyReportedIncomeStatementsModule { 

  entityMetadata: EntityMetadataMap = {
    CompanyOverview: {
      entityName: 'company-reported-income-statements',
      selectId: this.getId
    }
  };

  constructor(private eds: EntityDefinitionService,private entityDataService: EntityDataService,private companyReportedIncomeStatementsHttpService: CompanyReportedIncomeStatementsHttpService) {

    this.eds.registerMetadataMap(this.entityMetadata);

    this.entityDataService.registerService('company-reported-income-statements', this.companyReportedIncomeStatementsHttpService);

  }

  getId(companyReportedIncomeStatements: CompanyReportedIncomeStatements): string {

    return companyReportedIncomeStatements.symbol;
  }


}
