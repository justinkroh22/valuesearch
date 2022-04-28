import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalQuote } from '../../models/GlobalQuote';
import { GlobalQuoteHttpService } from '../../services/global-quote-http.service';
import { GlobalQuoteStoreService } from '../../services/global-quote-store.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {

  @Input() tickerSymbol: any

  // tickerSymbol: any = this.route.snapshot.paramMap.get('id');

  globalQuote$?: Observable<GlobalQuote>;

  constructor(
    private route: ActivatedRoute,
    private globalQuoteHttpService: GlobalQuoteHttpService,
    private globalQuoteStoreService: GlobalQuoteStoreService

  ) {

   }

  ngOnInit(): void {

    this.globalQuote$ = this.globalQuoteStoreService.getByKey(this.tickerSymbol)
  }


  // private getIDFromUrl(): any {
  //   let id = this.route.snapshot.paramMap.get('id');

  //   return id;
  // }
  
  // getById(): void {

  //   let id = this.getIDFromUrl();
  //   // this.companyOverview$ = this.companyOverviewStoreService.getByKey(id);
  // }


}
