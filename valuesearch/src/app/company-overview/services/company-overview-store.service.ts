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

  handleUndefined(key: string) {

    let companyOverviewInit: CompanyOverview = {
      Symbol: '',
      AssetType: '',
      Name: '',
      Description: '',
      CIK: '',
      Exchange: '',
      Currency: '',
      Country: '',
      Sector: '',
      Industry: '',
      Address: '',
      FiscalYearEnd: '',
      LatestQuarter: '',
      MarketCapitalization: '',
      EBITDA: 0,
      PERatio: 0,
      PEGRatio: 0,
      BookValue: 0,
      DividendPerShare: 0,
      DividendYield: '',
      EPS: 0,
      RevenuePerShareTTM: 0,
      ProfitMargin: 0,
      OperatingMarginTTM: 0,
      ReturnOnAssetsTTM: 0,
      ReturnOnEquityTTM: 0,
      RevenueTTM: 0,
      GrossProfitTTM: 0,
      DilutedEPSTTM: 0,
      QuarterlyEarningsGrowthYOY: 0,
      QuarterlyRevenueGrowthYOY: 0,
      AnalystTargetPrice: 0,
      TrailingPE: 0,
      ForwardPE: 0,
      PriceToSalesRatioTTM: 0,
      PriceToBookRatio: 0,
      EVToRevenue: 0,
      EVToEBITDA: 0,
      Beta: 0,
      WeekHigh52: 0,
      WeekLow52: 0,
      MovingAverage50: 0,
      MovingAverage200: 0,
      SharesOutstanding: 0,
      DividendDate: '',
      ExDividendDate: ''
    }

    return companyOverviewInit
  }

  getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<CompanyOverview> {

    // console.log(key)

    return this.entityMap$.pipe().pipe(map(entities => entities[key] ? entities[key]! : this.handleUndefined(key)));

  }


  checkForKey(key: string): Observable<boolean> {

    // console.log(key)

    // return this.keys$.pipe(map((keys: any[]) => !!keys.find(keyName => keyName == key)),first())
    // this.entityMap$.subscribe(entity => console.log(entity[key.toUpperCase()]))
    return this.entityMap$.pipe(map(entities => !!entities[key]), first())

  }

  checkOrPopulate(key: string) {

    this.checkForKey(key).pipe().subscribe(boolean => 

  
      {
        // console.log(boolean)
        if(boolean == false){

          this.getByKey(key)
        } 
      },
      );

  }

  
  getSharesOutstanding$(tickerSymbol: string): Observable<number> {

    let companyOverview$ = this.getFromStoreByKey(tickerSymbol)

    return companyOverview$.pipe(map(companyOverview => (companyOverview.SharesOutstanding)))
  }




}