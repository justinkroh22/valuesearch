import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyOverviewComponent } from './company-overview/components/company-overview/company-overview.component';

const routes: Routes = [

  {
  path:'company-overview/:id',
  component: CompanyOverviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
