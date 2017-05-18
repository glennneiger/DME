import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SellerintakeComponent } from './sellerintake/sellerintake.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffergeneratorComponent } from './offergenerator/offergenerator.component';
import { OfferanalysisComponent } from './offeranalysis/offeranalysis.component';

const appRoutes: Routes = [
  { path: 'sellerintake', component: SellerintakeComponent },
  { path: 'offeranalysis', component: OfferanalysisComponent },
  { path: 'offergenerator', component: OffergeneratorComponent },     
  { path: '', redirectTo: '/sellerintake', pathMatch: 'full'}



];


@NgModule({
  declarations: [
    AppComponent,
    SellerintakeComponent,
    NavbarComponent,
    OffergeneratorComponent,
    OfferanalysisComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }