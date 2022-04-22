import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, Observable, of, tap } from 'rxjs';
import { CompanyOverview } from '../../models/company-overview';
import { CompanyOverviewHttpService } from '../../services/company-overview-http.service';
import { CompanyOverviewStoreService } from '../../services/company-overview-store.service';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit {

  tickerSymbol: any = this.route.snapshot.paramMap.get('id');

  // companyOverview$?: Observable<CompanyOverview | undefined>;

  companyOverview$: Observable<CompanyOverview | undefined> = this.companyOverviewStoreService.getFromStoreByKey(this.tickerSymbol, {tryQueryRemoteStorageIfKeyNotExists: true})

  constructor(
    private companyOverviewHttpService: CompanyOverviewHttpService,
    public companyOverviewStoreService: CompanyOverviewStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    console.log(this.tickerSymbol)

    this.getById();
  }


  private getIDFromUrl(): any {
    let id = this.route.snapshot.paramMap.get('id');

    return id;
  }
  
  getById(): void {

    let id = this.getIDFromUrl();

  }

}
