import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchMatch } from '../../models/SearchMatch';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.scss']
})
export class SearchMatchComponent implements OnInit {


  @Input() searchMatch: SearchMatch | undefined

  constructor(private router: Router,) { }

  ngOnInit(): void {

  }

  viewCompanyOverview(symbol: string): void {

    let url: string = '/company-overview/' + symbol;

    this.router.navigate([url]);
  }

}
