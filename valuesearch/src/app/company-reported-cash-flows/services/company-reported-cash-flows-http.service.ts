import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyReportedCashFlows } from '../models/CompanyReportedCashFlows';

@Injectable()
export class CompanyReportedCashFlowsHttpService extends DefaultDataService<CompanyReportedCashFlows> {

  constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {

      super('company-reported-cash-flows', http, httpUrlGenerator, 
      // defaultDataServiceConfig
      );

  }

  override getById(key: string | number): Observable<CompanyReportedCashFlows> {

    console.log("CRCF HTTP Called")


      let url = environment.baseApiUrl + 'query?' + 'function=' + 'CASH_FLOW' + '&' + 'symbol=' + key + '&' + 'apikey=' + environment.apiKey;

      return this.http.get<CompanyReportedCashFlows>(url);
  }

}