import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyReportedCashFlows } from '../../models/CompanyReportedCashFlows';
import { CompanyReportedCashFlowsStoreService } from '../../services/company-reported-cash-flows-store.service';

@Component({
  selector: 'app-company-reported-cash-flows',
  templateUrl: './company-reported-cash-flows.component.html',
  styleUrls: ['./company-reported-cash-flows.component.scss']
})
export class CompanyReportedCashFlowsComponent implements OnInit {

  companyReportedCashFlows$?: Observable<CompanyReportedCashFlows>

  constructor(
    private companyReportedCashFlowsStoreService: CompanyReportedCashFlowsStoreService,
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
    this.companyReportedCashFlows$ = this.companyReportedCashFlowsStoreService.getByKey(id);
  }
}
