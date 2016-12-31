import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'; //import dashboard components
import { AppComponent } from './app.component';
import { ContributorComponent } from './contributors/contributor.component';
import { DocumentComponent } from './documents/document.component';
import { EventComponent } from './events/event.component';
import { ItemComponent } from './items/item.component';
import { TaskComponent } from './tasks/task.component';
import { TreasuryComponent } from './treasury/treasury.component';

export const appRoutes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', component: DashboardComponent, pathMatch: 'full'}, // redirect to home page on load
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  { path: 'contributors', component: ContributorComponent, pathMatch: 'full'},
  { path: 'documents', component: DocumentComponent, pathMatch: 'full'},
  { path: 'events', component: EventComponent, pathMatch: 'full'},
  { path: 'items', component: ItemComponent, pathMatch: 'full'},
  { path: 'tasks', component: TaskComponent, pathMatch: 'full'},
  { path: 'treasury', component: TreasuryComponent, pathMatch: 'full'},
  { path: '**', component: DashboardComponent, pathMatch: 'full'} // redirect unknown to home
];

export const APP_ROUTER: ModuleWithProviders = RouterModule.forRoot(appRoutes);