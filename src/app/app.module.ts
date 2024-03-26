import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FanformComponent } from './components/dashboard/fanform/fanform.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FanformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
