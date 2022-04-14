import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyReportedIncomeStatements } from '../models/CompanyReportedIncomeStatements';

@Injectable()
export class CompanyReportedIncomeStatementsHttpService extends DefaultDataService<CompanyReportedIncomeStatements> {

  constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {

      super('company-reported-income-statements', http, httpUrlGenerator, 
      // defaultDataServiceConfig
      );

  }

  override getById(key: string | number): Observable<CompanyReportedIncomeStatements> {

      let url = environment.baseApiUrl + 'query?' + 'function=' + 'INCOME_STATEMENT' + '&' + 'symbol=' + key + '&' + 'apikey=' + environment.apiKey;

      return this.http.get<CompanyReportedIncomeStatements>(url);
  }

}