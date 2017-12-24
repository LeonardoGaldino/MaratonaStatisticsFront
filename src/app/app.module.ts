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

import { APIService } from './Services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    StatsCodeforces,
    RatingComparisonCF
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    APIService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
