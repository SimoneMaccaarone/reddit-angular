import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {MatSelectModule} from '@angular/material/select';
import { Component, EventEmitter, Input } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    Component,
    EventEmitter,
    Input,
    MatFormFieldModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
