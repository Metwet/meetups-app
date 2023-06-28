import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupsModule } from './modules/meetups/meetups.module';
import { HttpClientModule } from '@angular/common/http'
import { AuthModule } from './modules/auth/auth.module';
import { LabModule } from './modules/lab/lab.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetupsModule,
    AuthModule,
    LabModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
