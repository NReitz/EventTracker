import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertComponent } from './alerts/alert.component';
import { TaskComponent } from './tasks/task.component';
import { LayoutComponent } from './layout.component';
import { UserActionsComponent } from './userActions/userAction.component';
import { NavigationComponent } from './navigations/navigation.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AlertComponent,
    NavigationComponent,
    TaskComponent,
    UserActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AlertComponent,
    LayoutComponent, 
    NavigationComponent, 
    TaskComponent,
    UserActionsComponent
  ]
})
export class LayoutModule {}