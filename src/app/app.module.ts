import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupsModule } from './modules/meetups/meetups.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthModule } from './modules/auth/auth.module';
import { LabModule } from './modules/lab/lab.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './modules/admin/admin.module';
import { HeaderComponent } from './components/header/header.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MeetupsModule,
    AuthModule,
    LabModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
