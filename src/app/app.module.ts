import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BnbComponent } from './bnb/bnb.component';
import { HomeComponent } from './home/home.component';
import { CmcComponent } from './cmc/cmc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmcComponent,
    BnbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
