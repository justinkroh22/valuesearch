import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalQuote } from '../../models/GlobalQuote';
import { GlobalQuoteHttpService } from '../../services/global-quote-http.service';

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
    private globalQuoteHttpService: GlobalQuoteHttpService

  ) {

   }

  ngOnInit(): void {

    this.globalQuote$ = this.globalQuoteHttpService.getById(this.tickerSymbol)
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
