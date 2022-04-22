import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { first, map, Observable, tap } from 'rxjs';
import { FromStore } from 'src/app/utility/FromStore';
import { FromStoreOptions } from 'src/app/utility/FromStoreOptions';
import { CompanyReportedCashFlows } from '../models/CompanyReportedCashFlows';

@Injectable()
export class CompanyReportedCashFlowsStoreService extends EntityCollectionServiceBase<CompanyReportedCashFlows> implements FromStore<CompanyReportedCashFlows> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-reported-cash-flows', serviceElementsFactory);

  }  

  getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<CompanyReportedCashFlows | undefined> {

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
