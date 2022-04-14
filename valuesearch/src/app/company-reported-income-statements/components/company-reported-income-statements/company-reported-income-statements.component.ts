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


  private getIDFromUrl(): any {
    let id = this.route.snapshot.paramMap.get('id');

    return id;
  }
  
  getById(): void {

    let id = this.getIDFromUrl();
    this.companyReportedIncomeStatements$ = this.companyReportedIncomeStatementsStoreService.getByKey(id);
  }
}
