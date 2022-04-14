import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CompanyOverviewModule } from './company-overview/company-overview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


    SearchModule,
    CompanyOverviewModule,



    StoreModule.forRoot({}),

    StoreDevtoolsModule.instrument({
      name: 'DevTools & Debugging in NgRx',
      maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),

    EntityDataModule.forRoot({}),

    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
