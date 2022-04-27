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

  sharesOutstanding$: any
  annualEPS$: any
  ttmEPS$: any;

  // companyOverview?: CompanyOverview;
  // companyReportedIncomeStatements?: CompanyReportedIncomeStatements
  // companyReportedBalanceSheets?: CompanyReportedBalanceSheets
  // companyReportedCashFlows?: CompanyReportedCashFlows

  // companyOverview$?: Observable<CompanyOverview | undefined>;
  // companyReportedIncomeStatements$?: Observable<CompanyReportedIncomeStatements | undefined>
  // companyReportedBalanceSheets$?: Observable<CompanyReportedBalanceSheets | undefined>;
  // companyReportedCashFlows$?: Observable<CompanyReportedCashFlows | undefined>

  constructor(

    private route: ActivatedRoute,
    private companyOverviewStoreService: CompanyOverviewStoreService,
    private companyReportedBalanceSheetsStoreService: CompanyReportedBalanceSheetsStoreService,
    private companyReportedIncomeStatementsStoreService: CompanyReportedIncomeStatementsStoreService,
    private companyReportedCashFlowsStoreService: CompanyReportedCashFlowsStoreService,
    private metricsService: MetricsService

  ) { }

  ngOnInit(): void {

    if(this.tickerSymbol) {

      this.companyReportedIncomeStatementsStoreService.checkOrPopulate(this.tickerSymbol)
      this.companyOverviewStoreService.checkOrPopulate(this.tickerSymbol)

      this.annualEPS$ = this.metricsService.getAnnualEPS(this.tickerSymbol)
      this.ttmEPS$ = this.metricsService.getTTMEPS(this.tickerSymbol)
      this.sharesOutstanding$ = this.metricsService.getSharesOutstanding(this.tickerSymbol)

    }

    // this.companyOverview$ = this.getCompanyOverview(this.tickerSymbol)
    // this.companyReportedBalanceSheets$ = this.getCompanyReportedBalanceSheets(this.tickerSymbol)
    // this.companyReportedIncomeStatements$ = this.getCompanyReportedIncomeStatements(this.tickerSymbol)
    // this.companyReportedCashFlows$ = this.getCompanyReportedCashFlows(this.tickerSymbol)


    // this.getCompanyOverview(this.tickerSymbol).subscribe(companyOverview => this.companyOverview = companyOverview);
    // this.getCompanyReportedIncomeStatements(this.tickerSymbol).subscribe(companyReportedIncomeStatements => this.companyReportedIncomeStatements = companyReportedIncomeStatements)
    // this.getCompanyReportedBalanceSheets(this.tickerSymbol).subscribe(companyReportedBalanceSheets => this.companyReportedBalanceSheets = companyReportedBalanceSheets)
    // this.getCompanyReportedCashFlows(this.tickerSymbol).subscribe(companyReprotedCashFlows => this.companyReportedCashFlows = companyReprotedCashFlows)


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