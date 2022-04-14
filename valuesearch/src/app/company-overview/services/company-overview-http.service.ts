import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyOverview } from '../models/company-overview';

@Injectable()
export class CompanyOverviewHttpService extends DefaultDataService<CompanyOverview> {

  constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {

      // let defaultDataServiceConfig: DefaultDataServiceConfig = {

      //   root: "http://localhost:8080/api/",

      //   //environment.apiPlayerUrls.getAllPlayers
      // }

      super('company-overview', http, httpUrlGenerator, 
      // defaultDataServiceConfig
      );

  }

  override getById(key: string | number): Observable<CompanyOverview> {

      let url = environment.baseApiUrl + 'query?' + 'function=' + 'OVERVIEW' + '&' + 'symbol=' + key + '&' + 'apikey=' + environment.apiKey;

      return this.http.get<CompanyOverview>(url);
  }



}