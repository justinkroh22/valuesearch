import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Dictionary } from '@ngrx/entity';
import { filter, first, firstValueFrom, map, Observable, tap } from 'rxjs';
import { FromStore } from 'src/app/utility/FromStore';
import { FromStoreOptions } from 'src/app/utility/FromStoreOptions';
import { CompanyReportedIncomeStatements } from '../models/CompanyReportedIncomeStatements';
import { IncomeStatement } from '../models/IncomeStatement';
import { QuarterlyIncomeStatement } from '../models/QuarterlyIncomeStatement';

@Injectable()
export class CompanyReportedIncomeStatementsStoreService extends EntityCollectionServiceBase<CompanyReportedIncomeStatements> implements FromStore<CompanyReportedIncomeStatements>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('company-reported-income-statements', serviceElementsFactory);

  }  


  handleUndefined(key: string) {

    // this.getByKey(key, {isOptimistic: false})

    let iS: IncomeStatement = {
      fiscalDateEnding: '',
      reportedCurrency: '',
      grossProfit: 0,
      totalRevenue: 0,
      costOfRevenue: 0,
      costofGoodsAndServicesSold: 0,
      operatingIncome: 0,
      sellingGeneralAndAdministrative: 0,
      researchAndDevelopment: 0,
      operatingExpenses: 0,
      investmentIncomeNet: 0,
      netInterestIncome: 0,
      interestIncome: 0,
      interestExpense: 0,
      nonInterestIncome: 0,
      otherNonOperatingIncome: 0,
      depreciation: 0,
      depreciationAndAmortization: 0,
      incomeBeforeTax: 0,
      incomeTaxExpense: 0,
      interestAndDebtExpense: 0,
      netIncomeFromContinuingOperations: 0,
      comprehensiveIncomeNetOfTax: 0,
      ebit: 0,
      ebitda: 0,
      netIncome: 0
    }

    let cRISInit: CompanyReportedIncomeStatements = {
      symbol: key,
      annualReports: [iS, iS, iS, iS, iS],
      quarterlyReports: [iS, iS, iS, iS, iS]
    }


    return cRISInit;
  }



  getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<CompanyReportedIncomeStatements> {

    // console.log(key)

    return this.entityMap$.pipe().pipe(map(entities => !!entities[key] ? entities[key]! : this.handleUndefined(key)));

  }


  checkForKey(key: string): Observable<boolean> {

    // console.log(key)

    // return this.keys$.pipe(map((keys: any[]) => !!keys.find(keyName => keyName == key)),first())
    // this.entityMap$.subscribe(entity => console.log(entity[key.toUpperCase()]))
    return this.entityMap$.pipe(map(entities => !!entities[key]), first())

  }

  checkOrPopulate(key: string) {

    // console.log(key)

    this.checkForKey(key).pipe().subscribe(boolean => 

  
      {
        // console.log(boolean)
        if(boolean == false){

          this.getByKey(key)
        } 
      },
      );

  }


  getAnnualNetIncomeGAAP$(tickerSymbol: string): Observable<number> {
    
    let companyReportedIncomeStatements$ = this.getFromStoreByKey(tickerSymbol)

    return companyReportedIncomeStatements$.pipe(map(cRIS => (cRIS.annualReports[0].netIncome)));

  }

  getTTMNetIncomeGAAP$(tickerSymbol: string) {

    let companyReportedIncomeStatements$ = this.getFromStoreByKey(tickerSymbol)

    return companyReportedIncomeStatements$.pipe(map(cRIS => this.calculateTTMNetIncomeGAAP(cRIS.quarterlyReports)))


  }

  calculateTTMNetIncomeGAAP(quarterlyIncomeStatements: QuarterlyIncomeStatement[]): number {

    let ttmNetIncome: number = 0;

    for(let i = 0; i < 3; i ++) {

      if(i < quarterlyIncomeStatements.length)
      ttmNetIncome = ttmNetIncome + quarterlyIncomeStatements[i].netIncome
    }

    return ttmNetIncome;

  }



}