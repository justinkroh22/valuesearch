import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyOverviewComponent } from '../company-overview/components/company-overview/company-overview.component';
import { CompanyReportedBalanceSheetsComponent } from '../company-reported-balance-sheets/components/company-reported-balance-sheets/company-reported-balance-sheets.component';
import { CompanyReportedCashFlowsComponent } from '../company-reported-cash-flows/components/company-reported-cash-flows/company-reported-cash-flows.component';
import { CompanyReportedIncomeStatementsComponent } from '../company-reported-income-statements/components/company-reported-income-statements/company-reported-income-statements.component';
import { CompanyValuationComponent } from '../company-valuation/components/company-valuation/company-valuation.component';
import { CompanyMainComponent } from './components/company-main/company-main.component';

const routes: Routes = [
  {
    path:'company/:id',
    component: CompanyMainComponent,
    children: [
      {
        path:'company-overview/:id',
        component: CompanyOverviewComponent,
        // outlet: "ticker"
    
      },
      {
        path:'company-reported-income-statements/:id',
        component: CompanyReportedIncomeStatementsComponent
      },
      {
        path:'company-reported-balance-sheets/:id',
        component: CompanyReportedBalanceSheetsComponent
      },
      {
        path:'company-reported-cash-flows/:id',
        component: CompanyReportedCashFlowsComponent
      },
      {
        path:'company-valuation/:id',
        component: CompanyValuationComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
