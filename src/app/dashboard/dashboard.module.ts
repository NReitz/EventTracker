import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from './charts/chart.component';
import { PanelComponent } from './panels/panel.component'; 
import { NotificationComponent } from './notifications/notifications.component'; 

@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent,
    PanelComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DashboardComponent, NotificationComponent]
})
export class DashboardModule { } 