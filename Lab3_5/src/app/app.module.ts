import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NumOperationsComponent } from './num-operations/num-operations.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ArrayHandlerComponent } from './array-handler/array-handler.component';
import { MinMaxDiffComponent } from './array-handler/min-max-diff/min-max-diff.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { PopupComponent } from './weather-table/popup/popup.component';
import { FavouriteComponent } from './weather-table/favourite/favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    NumOperationsComponent,
    NavHeaderComponent,
    ArrayHandlerComponent,
    MinMaxDiffComponent,
    WeatherTableComponent,
    PopupComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
