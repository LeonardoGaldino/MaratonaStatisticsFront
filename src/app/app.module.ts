import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './SidenavComponent/sidenavComponent';
import { HomeComponent } from './HomeComponent/homeComponent';
import { StatsCodeforces } from './StatsCodeforces/statsCodeforces';
import { routes } from './app.routes';

import { APIService } from './Services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    StatsCodeforces
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
