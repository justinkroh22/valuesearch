import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { map, Observable, tap } from 'rxjs';
import { FromStore } from 'src/app/utility/FromStore';
import { FromStoreOptions } from 'src/app/utility/FromStoreOptions';
import { GlobalQuote } from '../models/GlobalQuote';

@Injectable()
export class GlobalQuoteStoreService extends EntityCollectionServiceBase<GlobalQuote> implements FromStore<GlobalQuote>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('global-quote', serviceElementsFactory);

  }  

  handleUndefined(key: string) {

    let qoute: GlobalQuote = {
      symbol: '',
      open: 0,
      high: 0,
      low: 0,
      price: 0,
      volume: 0,
      latestTradingDay: '',
      previousClose: 0,
      change: 0,
      changePercent: ''
    }

    return qoute;
  }

  getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<GlobalQuote> {

    console.log(key)

    return this.entityMap$.pipe().pipe(map(entities => !!entities[key] ? entities[key]! : this.handleUndefined(key)));

  }


  getSharePrice(tickerSymbol: string) {
    return this.getFromStoreByKey(tickerSymbol).pipe(map(qoute => qoute.price)).pipe(tap(qoute => console.log(qoute)))

  }

  getSharePriceChange(tickerSymbol: string) {
    return this.getFromStoreByKey(tickerSymbol).pipe(map(qoute => qoute.change))

  }

  getSharePriceChangePercent(tickerSymbol: string) {
    return this.getFromStoreByKey(tickerSymbol).pipe(map(qoute => qoute.changePercent))

  }


}