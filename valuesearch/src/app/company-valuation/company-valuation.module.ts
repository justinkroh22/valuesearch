import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyValuationComponent } from './components/company-valuation/company-valuation.component';
import { CompanyOverviewModule } from '../company-overview/company-overview.module';
import { PeMetricsComponent } from './components/pe-metrics/pe-metrics.component';
import { MetricsService } from './services/metrics.service';



@NgModule({
  declarations: [
    CompanyValuationComponent,
    PeMetricsComponent
  ],
  imports: [
    CommonModule,
    CompanyOverviewModule
  ],
  providers: [
    MetricsService
  ],
  exports: [CompanyValuationComponent]
})
export class CompanyValuationModule { }
