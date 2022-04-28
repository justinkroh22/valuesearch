import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyReportedBalanceSheets } from '../models/CompanyReportedBalanceSheets';

@Injectable()
export class CompanyReportedBalanceSheetsHttpService extends DefaultDataService<CompanyReportedBalanceSheets> {

  constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {

      super('company-reported-balance-sheets', http, httpUrlGenerator, 
      // defaultDataServiceConfig
      );

  }

  override getById(key: string | number): Observable<CompanyReportedBalanceSheets> {

    console.log("CRBS HTTP Called")


      let url = environment.baseApiUrl + 'query?' + 'function=' + 'BALANCE_SHEET' + '&' + 'symbol=' + key + '&' + 'apikey=' + environment.apiKey;

      return this.http.get<CompanyReportedBalanceSheets>(url);
  }

}