import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyOverviewDAO } from '../dao/company-overview-dao';
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

      console.log("Company Overview HTTP called")

      return this.http.get<CompanyOverviewDAO>(url).pipe(map(companyOverviewDAO => this.constructCompanyOverviewFromDAO(companyOverviewDAO)));
  }

  constructCompanyOverviewFromDAO(coDAO: CompanyOverviewDAO) {

    let companyOverview: CompanyOverview = {
      Symbol: coDAO.Symbol,
      AssetType: coDAO.AssetType,
      Name: coDAO.Name,
      Description: coDAO.Description,
      CIK: coDAO.CIK,
      Exchange: coDAO.Exchange,
      Currency: coDAO.Currency,
      Country: coDAO.Country,
      Sector: coDAO.Sector,
      Industry: coDAO.Industry,
      Address: coDAO.Address,
      FiscalYearEnd: coDAO.FiscalYearEnd,
      LatestQuarter: coDAO.LatestQuarter,
      MarketCapitalization: coDAO.MarketCapitalization,
      EBITDA: parseInt(coDAO.EBITDA),
      PERatio: parseInt(coDAO.PERatio),
      PEGRatio: parseInt(coDAO.PEGRatio),
      BookValue: parseInt(coDAO.BookValue),
      DividendPerShare: parseInt(coDAO.DividendPerShare),
      DividendYield: coDAO.DividendYield,
      EPS: parseInt(coDAO.EPS),
      RevenuePerShareTTM: parseInt(coDAO.RevenuePerShareTTM),
      ProfitMargin: parseInt(coDAO.ProfitMargin),
      OperatingMarginTTM: parseInt(coDAO.OperatingMarginTTM),
      ReturnOnAssetsTTM: parseInt(coDAO.ReturnOnAssetsTTM),
      ReturnOnEquityTTM: parseInt(coDAO.ReturnOnEquityTTM),
      RevenueTTM: parseInt(coDAO.RevenueTTM),
      GrossProfitTTM: parseInt(coDAO.GrossProfitTTM),
      DilutedEPSTTM: parseInt(coDAO.DilutedEPSTTM),
      QuarterlyEarningsGrowthYOY: parseInt(coDAO.QuarterlyEarningsGrowthYOY),
      QuarterlyRevenueGrowthYOY: parseInt(coDAO.QuarterlyRevenueGrowthYOY),
      AnalystTargetPrice: parseInt(coDAO.AnalystTargetPrice),
      TrailingPE: parseInt(coDAO.TrailingPE),
      ForwardPE: parseInt(coDAO.ForwardPE),
      PriceToSalesRatioTTM: parseInt(coDAO.PriceToSalesRatioTTM),
      PriceToBookRatio: parseInt(coDAO.PriceToBookRatio),
      EVToRevenue: parseInt(coDAO.EVToRevenue),
      EVToEBITDA: parseInt(coDAO.EVToEBITDA),
      Beta: parseInt(coDAO.Beta),
      WeekHigh52: parseInt(coDAO['52WeekHigh']),
      WeekLow52: parseInt(coDAO['52WeekLow']),
      MovingAverage50: parseInt(coDAO['50DayMovingAverage']),
      MovingAverage200: parseInt(coDAO['200DayMovingAverage']),
      SharesOutstanding: parseInt(coDAO.SharesOutstanding),
      DividendDate: coDAO.DividendDate,
      ExDividendDate: coDAO.ExDividendDate
    }

    return companyOverview;
  }




}