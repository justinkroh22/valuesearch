import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyValuationComponent } from './components/company-valuation/company-valuation.component';
import { CompanyOverviewModule } from '../company-overview/company-overview.module';



@NgModule({
  declarations: [
    CompanyValuationComponent
  ],
  imports: [
    CommonModule,
    CompanyOverviewModule
  ],
  exports: [CompanyValuationComponent]
})
export class CompanyValuationModule { }
