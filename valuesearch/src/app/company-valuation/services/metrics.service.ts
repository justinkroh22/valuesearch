import { Injectable } from '@angular/core';
import { combineLatest, map, merge, Observable, tap } from 'rxjs';
import { CompanyOverview } from 'src/app/company-overview/models/company-overview';
import { CompanyOverviewStoreService } from 'src/app/company-overview/services/company-overview-store.service';
import { CompanyReportedBalanceSheets } from 'src/app/company-reported-balance-sheets/models/CompanyReportedBalanceSheets';
import { CompanyReportedBalanceSheetsStoreService } from 'src/app/company-reported-balance-sheets/services/company-reported-balance-sheets-store.service';
import { CompanyReportedCashFlows } from 'src/app/company-reported-cash-flows/models/CompanyReportedCashFlows';
import { CompanyReportedCashFlowsStoreService } from 'src/app/company-reported-cash-flows/services/company-reported-cash-flows-store.service';
import { CompanyReportedIncomeStatements } from 'src/app/company-reported-income-statements/models/CompanyReportedIncomeStatements';
import { QuarterlyIncomeStatement } from 'src/app/company-reported-income-statements/models/QuarterlyIncomeStatement';
import { CompanyReportedIncomeStatementsStoreService } from 'src/app/company-reported-income-statements/services/company-reported-income-statements-store.service';

@Injectable()
export class MetricsService {



  // companyOverview$?: Observable<CompanyOverview | undefined>;
  // companyReportedIncomeStatements$?: Observable<CompanyReportedIncomeStatements | undefined>
  // companyReportedBalanceSheets$?: Observable<CompanyReportedBalanceSheets | undefined>;
  // companyReportedCashFlows$?: Observable<CompanyReportedCashFlows | undefined>

  // companyOverview$ = this.getCompanyOverview(this.tickerSymbol)
  // companyReportedBalanceSheets$ = this.getCompanyReportedBalanceSheets(this.tickerSymbol)
  // companyReportedIncomeStatements$ = this.getCompanyReportedIncomeStatements(this.tickerSymbol)
  // companyReportedCashFlows$ = this.getCompanyReportedCashFlows(this.tickerSymbol)

  constructor(
    private companyOverviewStoreService: CompanyOverviewStoreService,
    private companyReportedBalanceSheetsStoreService: CompanyReportedBalanceSheetsStoreService,
    private companyReportedIncomeStatementsStoreService: CompanyReportedIncomeStatementsStoreService,
    private companyReportedCashFlowsStoreService: CompanyReportedCashFlowsStoreService,
  ) { }


  getSharesOutstanding(tickerSymbol: string): Observable<number> {

    let companyOverview$ = this.getCompanyOverview(tickerSymbol)

    return companyOverview$.pipe(map(companyOverview => (companyOverview?.SharesOutstanding ? parseInt(companyOverview.SharesOutstanding) : 0)))
  }

  getAnnualNetIncome(tickerSymbol: string): Observable<number> {
    
    let companyReportedIncomeStatements$ = this.getCompanyReportedIncomeStatements(tickerSymbol)

    return companyReportedIncomeStatements$.pipe(map(cRIS => (cRIS?.annualReports[0].netIncome ? parseInt(cRIS.annualReports[0].netIncome) : 0 )))

  }

  getTTMNetIncome(tickerSymbol: string) {

    let companyReportedIncomeStatements$ = this.getCompanyReportedIncomeStatements(tickerSymbol)

    return companyReportedIncomeStatements$.pipe(map(cRIS => (cRIS?.quarterlyReports ? this.calculateTTMNetIncome(cRIS.quarterlyReports) : 0 )))


  }

  calculateTTMNetIncome(quarterlyIncomeStatements: QuarterlyIncomeStatement[]): number {

    let ttmNetIncome: number = 0;

    for(let i = 0; i < 3; i ++) {
      ttmNetIncome = ttmNetIncome + parseInt(quarterlyIncomeStatements[i].netIncome)
    }

    return ttmNetIncome;

  }


  getAnnualEPS(tickerSymbol: string): Observable<number> {

  let sharesOutstanding$ = this.getSharesOutstanding(tickerSymbol)

  let netIncome$ = this.getAnnualNetIncome(tickerSymbol)

  let annualEPS$ = this.calculateEPS(sharesOutstanding$, netIncome$)

  return annualEPS$;

  }

  getTTMEPS(tickerSymbol: string): Observable<number> {

    return this.calculateEPS(this.getSharesOutstanding(tickerSymbol), this.getTTMNetIncome(tickerSymbol))

  }



  calculateEPS(sharesOutstanding$: Observable<number>, netIncome$: Observable<number>): Observable<number> {

    let EPS$ = combineLatest([sharesOutstanding$, netIncome$]).pipe(map(([sharesOutstanding,netIncome]) =>  netIncome / sharesOutstanding));

    return EPS$;
  }


  getCompanyOverview(tickerSymbol: string): Observable<CompanyOverview | undefined> {

    // let companyOverview$: Observable<CompanyOverview | undefined>;

    return this.companyOverviewStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true});

  }

  getCompanyReportedIncomeStatements(tickerSymbol: string): Observable<CompanyReportedIncomeStatements| undefined> {

    // let companyReportedIncomeStatements$: Observable<CompanyReportedIncomeStatements | undefined>;

    return this.companyReportedIncomeStatementsStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true})
  }

  getCompanyReportedBalanceSheets(tickerSymbol: string): Observable<CompanyReportedBalanceSheets| undefined> {

    // let CompanyReportedBalanceSheets$: Observable<CompanyReportedBalanceSheets | undefined>;
    return this.companyReportedBalanceSheetsStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true})

  }

  getCompanyReportedCashFlows(tickerSymbol: string): Observable<CompanyReportedCashFlows| undefined> {
    // let CompanyReportedCashFlows$: Observable<CompanyReportedCashFlows | undefined>;
    return this.companyReportedCashFlowsStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true})
  }




}
