import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SearchComponent,
    SearchMatchComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,

  ],
  providers: [
    SearchService
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
