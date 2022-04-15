import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CompanyReportedBalanceSheets } from '../models/CompanyReportedBalanceSheets';

@Injectable()
export class CompanyReportedBalanceSheetsStoreService extends EntityCollectionServiceBase<CompanyReportedBalanceSheets>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-reported-balance-sheets', serviceElementsFactory);

  }  
}