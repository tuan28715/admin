import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PageModule } from './shared/pagemodule';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    PageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCFpblkZnZgb-p31WL8wO7W8fdxMYwd2HA",
      authDomain: "pizza-dffae.firebaseapp.com",
      databaseURL: "https://pizza-dffae-default-rtdb.firebaseio.com",
      projectId: "pizza-dffae",
      storageBucket: "pizza-dffae.appspot.com",
      messagingSenderId: "737849603676",
      appId: "1:737849603676:web:b78085e68926ded606d899",
      measurementId: "G-1F0Z4ED9XX"
    }),
    AngularFireStorageModule
  ],
  exports:[],
  providers: [
  {
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
