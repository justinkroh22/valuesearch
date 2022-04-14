import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BestMatches } from '../models/BestMatches';
import { environment } from 'src/environments/environment';
import { SearchMatch } from '../models/SearchMatch';
import { BestMatch } from '../models/BestMatch';
import { map } from 'rxjs';






@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }



  symbolSearch(keyword: string) {

    let url = environment.baseApiUrl + 'query?' + 'function=' + 'SYMBOL_SEARCH' + '&' + 'keywords=' + keyword + '&' + 'apikey=' + environment.apiKey;

    return this.http.get<BestMatches>(url).pipe(map(bestMatches => this.cleanBestMatches(bestMatches)))
  }


  cleanBestMatches(bestMatches: BestMatches) {


    console.log("best matches iter" + JSON.stringify(bestMatches))

    // bestMatches

    let searchMatches: SearchMatch[] = [];

    for(let bestMatch of bestMatches.bestMatches) {
        searchMatches.push(this.cleanBestMatch(bestMatch))
    }

    return searchMatches;

}

cleanBestMatch(bestMatch: BestMatch) {

  let searchMatch: SearchMatch = {
      symbol: bestMatch["1. symbol"],
      name: bestMatch["2. name"],
      type: bestMatch["3. type"],
      region: bestMatch["4. region"],
      marketOpen: bestMatch["5. marketOpen"],
      marketClose: bestMatch["6. marketClose"],
      timezone: bestMatch["7. timezone"],
      currency: bestMatch["8. currency"],
      matchScore: bestMatch["9. matchScore"]
  }


  return searchMatch;
}






}
