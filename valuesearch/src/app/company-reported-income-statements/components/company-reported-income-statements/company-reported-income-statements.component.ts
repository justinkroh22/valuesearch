import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyReportedIncomeStatements } from '../../models/CompanyReportedIncomeStatements';
import { CompanyReportedIncomeStatementsStoreService } from '../../services/company-reported-income-statements-store.service';

@Component({
  selector: 'app-company-reported-income-statements',
  templateUrl: './company-reported-income-statements.component.html',
  styleUrls: ['./company-reported-income-statements.component.scss']
})
export class CompanyReportedIncomeStatementsComponent implements OnInit {

  companyReportedIncomeStatements$?: Observable<CompanyReportedIncomeStatements>

  constructor(
    private companyReportedIncomeStatementsStoreService: CompanyReportedIncomeStatementsStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getById();
  }

  rowNamesArray: string[] = [
    'Fiscal Date Ending',
    'Reported Currency',
    'GrossProfit',
    'Total Revenue',
    'Cost of Revenue',
    'Cost of Goods and Services Sold',
    'Operating Income',
    'Selling  G+ A',
    'Research and Development',
    'Operating Expenses',
    'Net Investment Income',
    'Net Interest Income',
    'Interest Income',
    'Interest Expense',
    'Non Interest Income',
    'Other Non Operating Income',
    'Depreciation',
    'Depreciation and Amortiziation',
    'Income Before Tax',
    'Income Tax Expense',
    'Interest And Debt Expense',
    'Net Income From Continuing Operations',
    'Comprehensive Income Net of Tax',
    'EBIT',
    'EBITDA',
    'Net Income'

]



  private getIDFromUrl(): any {
    let id = this.route.snapshot.paramMap.get('id');

    return id;
  }
  
  getById(): void {

    let id = this.getIDFromUrl();
    // this.companyReportedIncomeStatements$ = this.companyReportedIncomeStatementsStoreService.getByKey(id);
  }
}
