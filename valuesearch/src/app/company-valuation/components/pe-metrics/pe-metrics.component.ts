import { Component, Input, OnInit } from '@angular/core';
import { CompanyOverview } from 'src/app/company-overview/models/company-overview';
import { CompanyReportedIncomeStatements } from 'src/app/company-reported-income-statements/models/CompanyReportedIncomeStatements';

@Component({
  selector: 'app-pe-metrics',
  templateUrl: './pe-metrics.component.html',
  styleUrls: ['./pe-metrics.component.scss']
})
export class PeMetricsComponent implements OnInit {

  @Input() companyReportedIncomeStatements!: CompanyReportedIncomeStatements

  @Input() companyOverview!: CompanyOverview

  annualEPS: number = 0;
  TTMEPS: number = 0;
  

  constructor(
    
  ) {

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {

  //   this.annualEPS = this.calculateAnnualEPS()

  // }

  // calculateAnnualEPS() {

  //   console.log("Display EPS")

  //   let netIncome: number = 0;
  //   let sharesOutstanding: number = 0;

  //   if(this.companyReportedIncomeStatements && this.companyOverview) {
  //     netIncome = parseInt(this.companyReportedIncomeStatements?.annualReports[0].netIncome);
  //     sharesOutstanding = parseInt(this.companyOverview?.SharesOutstanding);
  //   }

  //   return this.calculateEarningsPerShare(netIncome, sharesOutstanding);
  // }

  // calculateTTMEPS() {

  //   let netIncome: number = 0;
  //   let sharesOutstanding: number = 0;

  //   for(let quarterlyReports of )

  //   netIncome = parseInt(this.companyReportedIncomeStatements?.annualReports[0].netIncome);
  //   sharesOutstanding = parseInt(this.companyOverview?.SharesOutstanding);
    

  //   return this.calculateEarningsPerShare(netIncome, sharesOutstanding);
  // }




  calculateEarningsPerShare(netIncome: number, SharesOutstanding: number) {
  
    return netIncome / SharesOutstanding;
  }


}
