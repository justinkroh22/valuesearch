import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyReportedIncomeStatementsDAO } from '../dao/CompanyReportedIncomeStatementsDAO';
import { IncomeStatementDAO } from '../dao/IncomeStatementDAO';
import { AnnualIncomeStatement } from '../models/AnnualIncomeStatement';
import { CompanyReportedIncomeStatements } from '../models/CompanyReportedIncomeStatements';
import { IncomeStatement } from '../models/IncomeStatement';
import { QuarterlyIncomeStatement } from '../models/QuarterlyIncomeStatement';

@Injectable()
export class CompanyReportedIncomeStatementsHttpService extends DefaultDataService<CompanyReportedIncomeStatements> {

  constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {

      super('company-reported-income-statements', http, httpUrlGenerator, 
      // defaultDataServiceConfig
      );

  }

  override getById(key: string | number): Observable<CompanyReportedIncomeStatements> {

      let url = environment.baseApiUrl + 'query?' + 'function=' + 'INCOME_STATEMENT' + '&' + 'symbol=' + key + '&' + 'apikey=' + environment.apiKey;

      console.log("CRIS HTTP CALLED")

      return this.http.get<CompanyReportedIncomeStatementsDAO>(url).pipe(map(companyReportedIncomeStatementsDao => this.constructCRISFromDAO(companyReportedIncomeStatementsDao)));
  }

  constructCRISFromDAO(companyReportedIncomeStatementsDao: CompanyReportedIncomeStatementsDAO) {

    let annualIncomeStatements: AnnualIncomeStatement[] = companyReportedIncomeStatementsDao.annualReports.map(is => this.constructISFromDAO(is));

    let quarterlyIncomeStatements: QuarterlyIncomeStatement[] = companyReportedIncomeStatementsDao.quarterlyReports.map(is => this.constructISFromDAO(is));

    let companyReportedIncomeStatements: CompanyReportedIncomeStatements = {
      symbol: companyReportedIncomeStatementsDao.symbol,
      annualReports: annualIncomeStatements,
      quarterlyReports: quarterlyIncomeStatements

    }

    return companyReportedIncomeStatements;

  }

  constructISFromDAO(incomeStatementDao: IncomeStatementDAO) {

    let incomeStatement: IncomeStatement = {
      fiscalDateEnding: incomeStatementDao.fiscalDateEnding,
      reportedCurrency: incomeStatementDao.reportedCurrency,
      grossProfit: parseInt(incomeStatementDao.grossProfit),
      totalRevenue: parseInt(incomeStatementDao.totalRevenue),
      costOfRevenue: parseInt(incomeStatementDao.costOfRevenue),
      costofGoodsAndServicesSold: parseInt(incomeStatementDao.costofGoodsAndServicesSold),
      operatingIncome: parseInt(incomeStatementDao.operatingIncome),
      sellingGeneralAndAdministrative: parseInt(incomeStatementDao.sellingGeneralAndAdministrative),
      researchAndDevelopment: parseInt(incomeStatementDao.researchAndDevelopment),
      operatingExpenses: parseInt(incomeStatementDao.operatingExpenses),
      investmentIncomeNet: parseInt(incomeStatementDao.investmentIncomeNet),
      netInterestIncome: parseInt(incomeStatementDao.nonInterestIncome),
      interestIncome: parseInt(incomeStatementDao.interestIncome),
      interestExpense: parseInt(incomeStatementDao.interestExpense),
      nonInterestIncome: parseInt(incomeStatementDao.nonInterestIncome),
      otherNonOperatingIncome: parseInt(incomeStatementDao.otherNonOperatingIncome),
      depreciation: parseInt(incomeStatementDao.depreciation),
      depreciationAndAmortization: parseInt(incomeStatementDao.depreciationAndAmortization),
      incomeBeforeTax: parseInt(incomeStatementDao.incomeBeforeTax),
      incomeTaxExpense: parseInt(incomeStatementDao.incomeTaxExpense),
      interestAndDebtExpense: parseInt(incomeStatementDao.interestAndDebtExpense),
      netIncomeFromContinuingOperations: parseInt(incomeStatementDao.netIncomeFromContinuingOperations),
      comprehensiveIncomeNetOfTax: parseInt(incomeStatementDao.comprehensiveIncomeNetOfTax),
      ebit: parseInt(incomeStatementDao.ebit),
      ebitda: parseInt(incomeStatementDao.ebitda),
      netIncome: parseInt(incomeStatementDao.netIncome)
    }

    return incomeStatement

  }

}