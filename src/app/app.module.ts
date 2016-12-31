import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

import { ContributorModule } from 'app/contributors/contributor.module';
import { ContributorComponent } from 'app/contributors/contributor.component';

import { DashboardModule } from 'app/dashboard/dashboard.module';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

import { DocumentModule } from 'app/documents/document.module';
import { DocumentComponent } from 'app/documents/document.component';

import { EventModule } from 'app/events/event.module';
import { EventComponent } from 'app/events/event.component';

import { ItemModule } from 'app/items/item.module';
import { ItemComponent } from 'app/items/item.component';

import { LayoutModule } from 'app/layout/layout.module';
import { LayoutComponent } from 'app/layout/layout.component';

import { TaskModule } from 'app/tasks/task.module';
import { TaskComponent } from 'app/tasks/task.component';

import { TreasuryModule } from 'app/treasury/treasury.module';
import { TreasuryComponent } from 'app/treasury/treasury.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    LayoutModule,
    DashboardModule,
    ContributorModule,
    DocumentModule,
    EventModule,
    ItemModule,
    TaskModule,
    TreasuryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    LayoutComponent
  ]
})
export class AppModule { }