import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './SidenavComponent/sidenavComponent';
import { HomeComponent } from './HomeComponent/homeComponent';
import { StatsCodeforces } from './StatsCodeforces/statsCodeforces';
import { routes } from './app.routes';


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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
