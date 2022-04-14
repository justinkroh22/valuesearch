import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchMatch } from '../../models/SearchMatch';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchMatches$?: Observable<SearchMatch[]>;

  constructor(public searchService: SearchService) { }


  ngOnInit(): void {
  }

  handleSearch(keyword: string) {

    this.searchMatches$ = this.searchService.symbolSearch(keyword)

  }

}


// searchMatches: SearchMatch[] = [];

// constructor(public searchService: SearchService) { }



// ngOnInit(): void {
// }

// // handleSearch($event: any) {

// //   this.searchService.symbolSearch($event.target.value).subscribe(searchMatches => this.searchMatches = searchMatches)

// // }

// handleSearch(keyword: string) {

//   this.searchService.symbolSearch(keyword).subscribe(searchMatches => this.searchMatches = searchMatches)

// }
