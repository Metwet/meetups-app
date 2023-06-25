import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupsModule } from './modules/meetups/meetups.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
