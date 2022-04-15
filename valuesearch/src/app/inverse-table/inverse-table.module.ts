import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InverseTableComponent } from './components/inverse-table/inverse-table.component';
import { DataColumnComponent } from './components/data-column/data-column.component';



@NgModule({
  declarations: [InverseTableComponent, DataColumnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InverseTableComponent
  ]
})
export class InverseTableModule { }
