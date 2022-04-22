import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Dictionary } from '@ngrx/entity';
import { first, map, Observable, tap } from 'rxjs';
import { FromStore } from 'src/app/utility/FromStore';
import { FromStoreOptions } from 'src/app/utility/FromStoreOptions';
import { CompanyOverview } from '../models/company-overview';

@Injectable()
export class CompanyOverviewStoreService extends EntityCollectionServiceBase<CompanyOverview> implements FromStore<CompanyOverview>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-overview', serviceElementsFactory);

  }  

  getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<CompanyOverview | undefined> {

    // let companyOverview$: Observable<CompanyOverview | undefined>;
    if(options?.tryQueryRemoteStorageIfKeyNotExists) {
      return this.entityMap$.pipe(map(entities => entities[key])).pipe(tap(entity => this.tryQueryIfKeyNotExists(entity, key)));
    } else {
      return this.entityMap$.pipe(map(entities => entities[key]))
    }
  }

  getValueFromObservableDictionary(dictionaryObservable$: Observable<Dictionary<CompanyOverview>>, key: string) {

    return dictionaryObservable$.pipe(map(entities => entities[key]));
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