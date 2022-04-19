import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GlobalQuote } from '../models/GlobalQuote';
import { GlobalQuoteAV } from '../models/GlobalQuoteAV';
import { GlobalQuoteDataAV } from '../models/GlobalQuoteDataAV';

@Injectable()
export class GlobalQuoteHttpService extends DefaultDataService<GlobalQuote> {

  constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {

      super('global-quote', http, httpUrlGenerator, 
      // defaultDataServiceConfig
      );

  }

  override getById(key: string | number): Observable<GlobalQuote> {

      let url = environment.baseApiUrl + 'query?' + 'function=' + 'GLOBAL_QUOTE' + '&' + 'symbol=' + key + '&' + 'apikey=' + environment.apiKey;

      return this.http.get<GlobalQuoteDataAV>(url).pipe(map(globalQouteDataAV => globalQouteDataAV['Global Quote'])).pipe(map(globalQouteAV => this.cleanGlobalQuoteAV(globalQouteAV)));
  }

  cleanGlobalQuoteAV(globalQuoteAV: GlobalQuoteAV) {

    let globalQuote: GlobalQuote = {
      symbol: globalQuoteAV['01. symbol'],
      open: globalQuoteAV['02. open'],
      high: globalQuoteAV['03. high'],
      low: globalQuoteAV['04. low'],
      price: globalQuoteAV['05. price'],
      volume: globalQuoteAV['06. volume'],
      latestTradingDay: globalQuoteAV['07. latest trading day'],
      previousClose: globalQuoteAV['08. previous close'],
      change: globalQuoteAV['09. change'],
      changePercent: globalQuoteAV['10. change percent']
    }
  
  
    return globalQuote;
  }

}