import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyOverview } from '../../models/company-overview';
import { CompanyOverviewHttpService } from '../../services/company-overview-http.service';
import { CompanyOverviewStoreService } from '../../services/company-overview-store.service';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit {


  companyOverview$?: Observable<CompanyOverview>;

  constructor(
    private companyOverviewHttpService: CompanyOverviewHttpService,
    private companyOverviewStoreService: CompanyOverviewStoreService,
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
    this.companyOverview$ = this.companyOverviewStoreService.getByKey(id);
  }

}
