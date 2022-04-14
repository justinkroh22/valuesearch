import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CompanyOverview } from '../models/company-overview';

@Injectable()
export class CompanyOverviewStoreService extends EntityCollectionServiceBase<CompanyOverview>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-overview', serviceElementsFactory);

  }  
}