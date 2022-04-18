import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyOverview } from 'src/app/company-overview/models/company-overview';
import { CompanyOverviewStoreService } from 'src/app/company-overview/services/company-overview-store.service';
import { CompanyReportedBalanceSheets } from 'src/app/company-reported-balance-sheets/models/CompanyReportedBalanceSheets';
import { CompanyReportedBalanceSheetsStoreService } from 'src/app/company-reported-balance-sheets/services/company-reported-balance-sheets-store.service';
import { CompanyReportedCashFlows } from 'src/app/company-reported-cash-flows/models/CompanyReportedCashFlows';
import { CompanyReportedCashFlowsStoreService } from 'src/app/company-reported-cash-flows/services/company-reported-cash-flows-store.service';
import { CompanyReportedIncomeStatements } from 'src/app/company-reported-income-statements/models/CompanyReportedIncomeStatements';
import { CompanyReportedIncomeStatementsStoreService } from 'src/app/company-reported-income-statements/services/company-reported-income-statements-store.service';

@Component({
  selector: 'app-company-main',
  templateUrl: './company-main.component.html',
  styleUrls: ['./company-main.component.scss']
})
export class CompanyMainComponent implements OnInit {

  companyOverview$?: Observable<CompanyOverview>;
  companyReportedIncomeStatements$?: Observable<CompanyReportedIncomeStatements>
  companyReportedBalanceSheets$?: Observable<CompanyReportedBalanceSheets>;
  companyReportedCashFlows$?: Observable<CompanyReportedCashFlows>


  constructor(
    private route: ActivatedRoute,
    private companyOverviewStoreService: CompanyOverviewStoreService,
    private companyReportedBalanceSheetsStoreService: CompanyReportedBalanceSheetsStoreService,
    private companyReportedIncomeStatementsStoreService: CompanyReportedIncomeStatementsStoreService,
    private companyReportedCashFlowsStoreService: CompanyReportedCashFlowsStoreService,

  ) { }

  ngOnInit(): void {
    this.getById()
  }

  private getIDFromUrl(): any {
    let id = this.route.snapshot.paramMap.get('id');

    return id;
  }
  
  getById(): void {

    let id = this.getIDFromUrl();
    this.companyOverview$ = this.companyOverviewStoreService.getByKey(id);
    this.companyReportedIncomeStatements$ = this.companyReportedIncomeStatementsStoreService.getByKey(id);
    this.companyReportedBalanceSheets$ = this.companyReportedBalanceSheetsStoreService.getByKey(id);
    this.companyReportedCashFlows$ = this.companyReportedCashFlowsStoreService.getByKey(id);
  }

}
