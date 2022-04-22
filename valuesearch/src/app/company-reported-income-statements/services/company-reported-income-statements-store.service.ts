import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { first, map, Observable, tap } from 'rxjs';
import { FromStore } from 'src/app/utility/FromStore';
import { FromStoreOptions } from 'src/app/utility/FromStoreOptions';
import { CompanyReportedIncomeStatements } from '../models/CompanyReportedIncomeStatements';

@Injectable()
export class CompanyReportedIncomeStatementsStoreService extends EntityCollectionServiceBase<CompanyReportedIncomeStatements> implements FromStore<CompanyReportedIncomeStatements>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-reported-income-statements', serviceElementsFactory);

  }  
  getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<CompanyReportedIncomeStatements | undefined> {

    // let companyOverview$: Observable<CompanyOverview | undefined>;
    if(options?.tryQueryRemoteStorageIfKeyNotExists) {
      return this.entityMap$.pipe(map(entities => entities[key])).pipe(tap(entity => this.tryQueryIfKeyNotExists(entity, key)));
    } else {
      return this.entityMap$.pipe(map(entities => entities[key]))
    }
  }

  tryQueryIfKeyNotExists(object: object | undefined, key: string) {
    if(this.checkObjectUndefined(object)) {
      this.getByKey(key)
    }

  }

  checkObjectUndefined(object: object | undefined) {

    if (object == undefined) {
      return true;
    } else {
      return false;
    }
  }


}