import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { GlobalQuote } from '../models/GlobalQuote';

@Injectable()
export class GlobalQuoteStoreService extends EntityCollectionServiceBase<GlobalQuote>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('global-quote', serviceElementsFactory);

  }  
}