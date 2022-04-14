import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyOverviewComponent } from './components/company-overview/company-overview.component';
import { CompanyOverviewHttpService } from './services/company-overview-http.service';
import { CompanyOverviewStoreService } from './services/company-overview-store.service';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CompanyOverview } from './models/company-overview';



@NgModule({
  declarations: [
    CompanyOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CompanyOverviewHttpService,
    CompanyOverviewStoreService
  ],
  exports: [
    CompanyOverviewComponent
  ]
  
})
export class CompanyOverviewModule { 

  entityMetadata: EntityMetadataMap = {
    CompanyOverview: {
      entityName: 'company-overview',
      selectId: this.getPlayerCityId
    }
  };

  constructor(private eds: EntityDefinitionService,private entityDataService: EntityDataService,private companyOverviewHttpService: CompanyOverviewHttpService) {

    this.eds.registerMetadataMap(this.entityMetadata);

    this.entityDataService.registerService('company-overview', this.companyOverviewHttpService);

  }

  getPlayerCityId(companyOverview: CompanyOverview): string {

    return companyOverview.Symbol;
  }

}
