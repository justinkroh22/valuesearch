import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyReportedBalanceSheets } from '../../models/CompanyReportedBalanceSheets';
import { CompanyReportedBalanceSheetsStoreService } from '../../services/company-reported-balance-sheets-store.service';

@Component({
  selector: 'app-company-reported-balance-sheets',
  templateUrl: './company-reported-balance-sheets.component.html',
  styleUrls: ['./company-reported-balance-sheets.component.scss']
})
export class CompanyReportedBalanceSheetsComponent implements OnInit {

  companyReportedBalanceSheets$?: Observable<CompanyReportedBalanceSheets>

  constructor(
    private companyReportedBalanceSheetsStoreService: CompanyReportedBalanceSheetsStoreService,
    private route: ActivatedRoute
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
    this.companyReportedBalanceSheets$ = this.companyReportedBalanceSheetsStoreService.getByKey(id);
  }

}
