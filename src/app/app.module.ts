import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './common/services/data/data.service';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { ActivityRowComponent } from './element-left/activity-row/activity-row.component';
import { ResortTypeFilterPipe } from './common/pipes/resort-type-filter.pipe';
import { SafeUrlPipe } from './common/pipes/safe-url.pipe';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { TelPipe } from './common/pipes/tel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    ActivityRowComponent,
    ResortTypeFilterPipe,
    SafeUrlPipe,
    TemperaturComponent,
    TeddyBearComponent,
    TelPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: DataService,
      useClass: DataService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
