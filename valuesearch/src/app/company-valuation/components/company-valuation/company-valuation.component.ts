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

@Component({
  selector: 'app-company-valuation',
  templateUrl: './company-valuation.component.html',
  styleUrls: ['./company-valuation.component.scss']
})
export class CompanyValuationComponent implements OnInit {

  tickerSymbol: any = 'k';

  // PERatio: any = parseInt(this.companyReportedIncomeStatements?.annualReports[0].netIncome) / parseInt(this.companyOverview?.SharesOutstanding);

  EPS?: any = this.displayEPS()
  ;

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



  companyOverview?: CompanyOverview;
  companyReportedIncomeStatements?: CompanyReportedIncomeStatements
  companyReportedBalanceSheets?: CompanyReportedBalanceSheets
  companyReportedCashFlows?: CompanyReportedCashFlows

  // companyOverview$!: Observable<CompanyOverview | undefined>;
  // companyReportedIncomeStatements$?: Observable<CompanyReportedIncomeStatements>
  // companyReportedBalanceSheets$?: Observable<CompanyReportedBalanceSheets>;
  // companyReportedCashFlows$?: Observable<CompanyReportedCashFlows>

  constructor(

    private route: ActivatedRoute,
    private companyOverviewStoreService: CompanyOverviewStoreService,
    private companyReportedBalanceSheetsStoreService: CompanyReportedBalanceSheetsStoreService,
    private companyReportedIncomeStatementsStoreService: CompanyReportedIncomeStatementsStoreService,
    private companyReportedCashFlowsStoreService: CompanyReportedCashFlowsStoreService,

  ) { }


  ngDoCheck() {
    this.EPS = this.displayEPS()
  }

  ngOnInit(): void {

    this.tickerSymbol = this.route.snapshot.paramMap.get('id');

    this.getCompanyOverview(this.tickerSymbol).subscribe(companyOverview => this.companyOverview = companyOverview);
    this.getCompanyReportedIncomeStatements(this.tickerSymbol).subscribe(companyReportedIncomeStatements => this.companyReportedIncomeStatements = companyReportedIncomeStatements)
    this.getCompanyReportedBalanceSheets(this.tickerSymbol).subscribe(companyReportedBalanceSheets => this.companyReportedBalanceSheets = companyReportedBalanceSheets)
    // this.getCompanyReportedCashFlows(this.tickerSymbol).subscribe(companyReprotedCashFlows => this.companyReportedCashFlows = companyReprotedCashFlows)

    console.log("test")

    // this.companyReportedBalanceSheetsStoreService.entities$.subscribe(entities => console.log(entities))

    this.cRBS.annualReports.push(this.balanceSheet)

    // this.companyReportedBalanceSheetsStoreService.addOneToCache(this.cRBS)

    // this.companyOverviewStoreService.addOneToCache({})

    // this.EPS = this.displayEPS()
  }

  // getSharesOutstanding() {
  //   return this.companyOverview$.pipe(map(companyOverview => companyOverview?.SharesOutstanding))
  // }

  displayEPS() {

    console.log("Display EPS")

    let netIncome: number = 5;
    let sharesOutstanding: number = 1;

    if(this.companyReportedIncomeStatements && this.companyOverview) {
      netIncome = parseInt(this.companyReportedIncomeStatements?.annualReports[0].netIncome);
      sharesOutstanding = parseInt(this.companyOverview?.SharesOutstanding);
    }

    return this.calculateEarningsPerShare(netIncome, sharesOutstanding);
  }

  calculateEarningsPerShare(netIncome: number, SharesOutstanding: number) {
  
    return netIncome / SharesOutstanding;
  }

  calculateTrailingPERatio(stockPrice: any, earningsPerShare: any) {

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