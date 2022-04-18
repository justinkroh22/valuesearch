import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {

  ticker: any = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute

  ) {
    // this.ticker = 
   }

  ngOnInit(): void {

    // this.getById();
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
