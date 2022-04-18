import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyOverviewComponent } from './company-overview/components/company-overview/company-overview.component';
import { CompanyReportedBalanceSheetsComponent } from './company-reported-balance-sheets/components/company-reported-balance-sheets/company-reported-balance-sheets.component';
import { CompanyReportedCashFlowsComponent } from './company-reported-cash-flows/components/company-reported-cash-flows/company-reported-cash-flows.component';
import { CompanyReportedIncomeStatementsComponent } from './company-reported-income-statements/components/company-reported-income-statements/company-reported-income-statements.component';

const routes: Routes = [

  // {
  //   path:'company-overview/:id',
  //   component: CompanyOverviewComponent
  // },
  // {
  //   path:'company-reported-income-statements/:id',
  //   component: CompanyReportedIncomeStatementsComponent
  // },
  // {
  //   path:'company-reported-balance-sheets/:id',
  //   component: CompanyReportedBalanceSheetsComponent
  // },
  // {
  //   path:'company-reported-cash-flows/:id',
  //   component: TickerWrapperComponent(CompanyReportedCashFlowsComponent)
  // }
  // {
  //   path:'company-reported-cash-flows/:id',
  //   component: CompanyReportedCashFlowsComponent
  // }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
