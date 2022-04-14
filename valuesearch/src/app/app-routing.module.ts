import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyOverviewComponent } from './company-overview/components/company-overview/company-overview.component';
import { CompanyReportedIncomeStatementsComponent } from './company-reported-income-statements/components/company-reported-income-statements/company-reported-income-statements.component';

const routes: Routes = [

  {
    path:'company-overview/:id',
    component: CompanyOverviewComponent
  },
  {
    path:'company-reported-income-statements/:id',
    component: CompanyReportedIncomeStatementsComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
