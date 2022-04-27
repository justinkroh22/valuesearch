import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityActionOptions } from '@ngrx/data';
import { filter, first, map, Observable, tap } from 'rxjs';
import { CompanyOverview } from 'src/app/company-overview/models/company-overview';
import { CompanyOverviewStoreService } from 'src/app/company-overview/services/company-overview-store.service';
import { AnnualBalanceSheet } from 'src/app/company-reported-balance-sheets/models/AnnualBalanceSheet';
import { BalanceSheet } from 'src/app/company-reported-balance-sheets/models/BalanceSheet';
import { CompanyReportedBalanceSheets } from 'src/app/company-reported-balance-sheets/models/CompanyReportedBalanceSheets';
import { CompanyReportedBalanceSheetsStoreService } from 'src/app/company-reported-balance-sheets/services/company-reported-balance-sheets-store.service';
import { CompanyReportedCashFlows } from 'src/app/company-reported-cash-flows/models/CompanyReportedCashFlows';
import { CompanyReportedCashFlowsStoreService } from 'src/app/company-reported-cash-flows/services/company-reported-cash-flows-store.service';
import { CompanyReportedIncomeStatements } from 'src/app/company-reported-income-statements/models/CompanyReportedIncomeStatements';
import { CompanyReportedIncomeStatementsStoreService } from 'src/app/company-reported-income-statements/services/company-reported-income-statements-store.service';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'app-company-valuation',
  templateUrl: './company-valuation.component.html',
  styleUrls: ['./company-valuation.component.scss']
})
export class CompanyValuationComponent implements OnInit {

  tickerSymbol: string | null = this.route.snapshot.paramMap.get('id');


  annualEPS$: any
  ttmEPS$: any;

  // PERatio: any = parseInt(this.companyReportedIncomeStatements?.annualReports[0].netIncome) / parseInt(this.companyOverview?.SharesOutstanding);

  // EPS?: any = this.displayEPS()

  // options: EntityActionOptions

  cRBS: CompanyReportedBalanceSheets = {
    symbol: 'JKJK',
    annualReports: [],
    quarterlyReports: []
  }

  balanceSheet: AnnualBalanceSheet = {
    fiscalDateEnding: '',
    reportedCurrency: '',
    totalAssets: '',
    totalCurrentAssets: '',
    cashAndCashEquivalentsAtCarryingValue: '',
    cashAndShortTermInvestments: '',
    inventory: '',
    currentNetReceivables: '',
    totalNonCurrentAssets: '',
    propertyPlantEquipment: '',
    accumulatedDepreciationAmortizationPPE: '',
    intangibleAssets: '',
    intangibleAssetsExcludingGoodwill: '',
    goodwill: '',
    investments: '',
    longTermInvestments: '',
    shortTermInvestments: '',
    otherCurrentAssets: '',
    otherNonCurrrentAssets: '',
    totalLiabilities: '',
    totalCurrentLiabilities: '',
    currentAccountsPayable: '',
    deferredRevenue: '',
    currentDebt: '',
    shortTermDebt: '',
    totalNonCurrentLiabilities: '',
    capitalLeaseObligations: '',
    longTermDebt: '',
    currentLongTermDebt: '',
    longTermDebtNoncurrent: '',
    shortLongTermDebtTotal: '',
    otherCurrentLiabilities: '',
    otherNonCurrentLiabilities: '',
    totalShareholderEquity: '',
    treasuryStock: '',
    retainedEarnings: '',
    commonStock: '',
    commonStockSharesOutstanding: ''
  }



  // companyOverview?: CompanyOverview;
  // companyReportedIncomeStatements?: CompanyReportedIncomeStatements
  // companyReportedBalanceSheets?: CompanyReportedBalanceSheets
  // companyReportedCashFlows?: CompanyReportedCashFlows

  companyOverview$?: Observable<CompanyOverview | undefined>;
  companyReportedIncomeStatements$?: Observable<CompanyReportedIncomeStatements | undefined>
  companyReportedBalanceSheets$?: Observable<CompanyReportedBalanceSheets | undefined>;
  companyReportedCashFlows$?: Observable<CompanyReportedCashFlows | undefined>

  constructor(

    private route: ActivatedRoute,
    private companyOverviewStoreService: CompanyOverviewStoreService,
    private companyReportedBalanceSheetsStoreService: CompanyReportedBalanceSheetsStoreService,
    private companyReportedIncomeStatementsStoreService: CompanyReportedIncomeStatementsStoreService,
    private companyReportedCashFlowsStoreService: CompanyReportedCashFlowsStoreService,
    private metricsService: MetricsService

  ) { }


  // ngDoCheck() {
  //   this.EPS = this.displayEPS()
  // }

  ngOnInit(): void {

    // this.companyReportedIncomeStatementsStoreService.checkForKey(this.tickerSymbol).pipe(tap(keyExists => {if keyExists{this.}}))

    // this.companyReportedIncomeStatementsStoreService.getByKey(this.tickerSymbol)

    if(this.tickerSymbol) {

      this.companyReportedIncomeStatementsStoreService.checkOrPopulate(this.tickerSymbol)

      this.annualEPS$ = this.metricsService.getAnnualEPS(this.tickerSymbol)
      this.ttmEPS$ = this.metricsService.getTTMEPS(this.tickerSymbol)


    }

      // this.companyReportedIncomeStatementsStoreService.keys$.subscribe(keys => console.log(keys))


    // this.companyOverview$ = this.getCompanyOverview(this.tickerSymbol)
    // this.companyReportedBalanceSheets$ = this.getCompanyReportedBalanceSheets(this.tickerSymbol)
    // this.companyReportedIncomeStatements$ = this.getCompanyReportedIncomeStatements(this.tickerSymbol)
    // this.companyReportedCashFlows$ = this.getCompanyReportedCashFlows(this.tickerSymbol)


    // this.getCompanyOverview(this.tickerSymbol).subscribe(companyOverview => this.companyOverview = companyOverview);
    // this.getCompanyReportedIncomeStatements(this.tickerSymbol).subscribe(companyReportedIncomeStatements => this.companyReportedIncomeStatements = companyReportedIncomeStatements)
    // this.getCompanyReportedBalanceSheets(this.tickerSymbol).subscribe(companyReportedBalanceSheets => this.companyReportedBalanceSheets = companyReportedBalanceSheets)
    // this.getCompanyReportedCashFlows(this.tickerSymbol).subscribe(companyReprotedCashFlows => this.companyReportedCashFlows = companyReprotedCashFlows)

    // console.log("test")


    // this.cRBS.annualReports.push(this.balanceSheet)

  }


  // displayEPS() {

  //   console.log("Display EPS")

  //   let netIncome: number = 5;
  //   let sharesOutstanding: number = 1;

  //   if(this.companyReportedIncomeStatements && this.companyOverview) {
  //     netIncome = parseInt(this.companyReportedIncomeStatements?.annualReports[0].netIncome);
  //     sharesOutstanding = parseInt(this.companyOverview?.SharesOutstanding);
  //   }

  //   return this.calculateEarningsPerShare(netIncome, sharesOutstanding);
  // }

  calculateEarningsPerShare(netIncome: number, SharesOutstanding: number) {
  
    return netIncome / SharesOutstanding;
  }

  calculateTrailingPERatio(stockPrice: any, earningsPerShare: any) {

  }

  // getCompanyOverview(tickerSymbol: string): Observable<CompanyOverview | undefined> {

  //   // let companyOverview$: Observable<CompanyOverview | undefined>;

  //   return this.companyOverviewStoreService.getFromStoreByKey(tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true});

  // }

  // getCompanyReportedIncomeStatements(tickerSymbol: string): Observable<CompanyReportedIncomeStatements| undefined> {

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