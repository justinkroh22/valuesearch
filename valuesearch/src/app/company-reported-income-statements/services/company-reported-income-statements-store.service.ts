import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CompanyReportedIncomeStatements } from '../models/CompanyReportedIncomeStatements';

@Injectable()
export class CompanyReportedIncomeStatementsStoreService extends EntityCollectionServiceBase<CompanyReportedIncomeStatements>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-reported-income-statements', serviceElementsFactory);

  }  
}