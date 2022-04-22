import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { first, map, Observable, tap } from 'rxjs';
import { FromStore } from 'src/app/utility/FromStore';
import { FromStoreOptions } from 'src/app/utility/FromStoreOptions';
import { CompanyReportedBalanceSheets } from '../models/CompanyReportedBalanceSheets';

@Injectable()
export class CompanyReportedBalanceSheetsStoreService extends EntityCollectionServiceBase<CompanyReportedBalanceSheets> implements FromStore<CompanyReportedBalanceSheets>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-reported-balance-sheets', serviceElementsFactory);

  }  
  getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<CompanyReportedBalanceSheets | undefined> {

    // let companyOverview$: Observable<CompanyOverview | undefined>;
    if(options?.tryQueryRemoteStorageIfKeyNotExists) {
      return this.entityMap$.pipe(map(entities => entities[key])).pipe(tap(entity => this.tryQueryIfKeyNotExists(entity, key)));
    } else {
      return this.entityMap$.pipe(map(entities => entities[key]))
    }
  }

  tryQueryIfKeyNotExists(object: object | undefined, key: string) {
    if(this.checkObjectUndefined(object)) {

      console.log("Balance Sheets API CALLED")
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