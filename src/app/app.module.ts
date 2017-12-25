import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { MAT_DATE_LOCALE } from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './SidenavComponent/sidenavComponent';
import { HomeComponent } from './HomeComponent/homeComponent';
import { StatsCodeforces } from './StatsCodeforces/statsCodeforces';
import { routes } from './app.routes';

import { RatingComparisonCF } from './StatsCodeforces/RatingComparison/ratingComparison';
import { CompetitorComparisonCF } from './StatsCodeforces/CompetitorComparison/competitorComparison';

import { APIService } from './Services/api.service';
import { DataRepository } from './Services/data.repository';
import { LocationService } from './Services/location.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    StatsCodeforces,
    RatingComparisonCF,
    CompetitorComparisonCF
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    APIService,
    DataRepository,
    LocationService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
