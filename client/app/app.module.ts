import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { SurveysModule } from './surveys/surveys.module';
import { AuthenticationModule } from './authentication/authentication.module'
import { AuthenticationService } from './authentication/authentication.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

    SurveysModule,
   // AuthenticationModule,
    RouterModule,
    ],
  declarations: [AppComponent],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
