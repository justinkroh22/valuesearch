import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
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
import { GlobalQuoteStoreService } from 'src/app/ticker/services/global-quote-store.service';
import { ObservableMath } from 'src/app/utility/ObservableMath';

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
    private globalQuoteStoreService: GlobalQuoteStoreService,
    private companyOverviewStoreService: CompanyOverviewStoreService,
    private companyReportedBalanceSheetsStoreService: CompanyReportedBalanceSheetsStoreService,
    private companyReportedIncomeStatementsStoreService: CompanyReportedIncomeStatementsStoreService,
    private companyReportedCashFlowsStoreService: CompanyReportedCashFlowsStoreService,
  ) { }


  getTTMPEGAAP$(tickerSymbol: string) {
    let sharePrice$ = this.globalQuoteStoreService.getSharePrice(tickerSymbol)
    let eps$ = this.getTTMEPSGAAP$(tickerSymbol)

    return ObservableMath.divideObvservable$(sharePrice$, eps$);

  }

  getAnnualEPSGAAP$(tickerSymbol: string): Observable<number> {

    let sharesOutstanding$ = this.companyOverviewStoreService.getSharesOutstanding$(tickerSymbol)

    let annualNetIncomeGAAP$ = this.companyReportedIncomeStatementsStoreService.getAnnualNetIncomeGAAP$(tickerSymbol)

    return ObservableMath.divideObvservable$(annualNetIncomeGAAP$, sharesOutstanding$)

  }

  getTTMEPSGAAP$(tickerSymbol: string): Observable<number> {

    let sharesOutstanding$ = this.companyOverviewStoreService.getSharesOutstanding$(tickerSymbol)

    let ttmNetIncomeGAAP$ = this.companyReportedIncomeStatementsStoreService.getAnnualNetIncomeGAAP$(tickerSymbol)

    return ObservableMath.divideObvservable$(ttmNetIncomeGAAP$, sharesOutstanding$)


  }

  // getCompanyOverview(tickerSymbol: string): Observable<CompanyOverview> {

  //   // let companyOverview$: Observable<CompanyOverview | undefined>;

  //   return this.companyOverviewStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true});

  // }

  // getCompanyReportedIncomeStatements(tickerSymbol: string): Observable<CompanyReportedIncomeStatements> {

  //   // let companyReportedIncomeStatements$: Observable<CompanyReportedIncomeStatements | undefined>;

  //   return this.companyReportedIncomeStatementsStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true})
  // }

  // getCompanyReportedBalanceSheets(tickerSymbol: string): Observable<CompanyReportedBalanceSheets| undefined> {

  //   // let CompanyReportedBalanceSheets$: Observable<CompanyReportedBalanceSheets | undefined>;
  //   return this.companyReportedBalanceSheetsStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true})

  // }

  // getCompanyReportedCashFlows(tickerSymbol: string): Observable<CompanyReportedCashFlows| undefined> {
  //   // let CompanyReportedCashFlows$: Observable<CompanyReportedCashFlows | undefined>;
  //   return this.companyReportedCashFlowsStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true})
  // }




}
