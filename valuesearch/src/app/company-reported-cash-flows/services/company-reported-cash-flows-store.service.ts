import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CompanyReportedCashFlows } from '../models/CompanyReportedCashFlows';

@Injectable()
export class CompanyReportedCashFlowsStoreService extends EntityCollectionServiceBase<CompanyReportedCashFlows>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-reported-cash-flows', serviceElementsFactory);

  }  
}