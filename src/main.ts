import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { PanelModule } from './app/dashboard/panels/panel.module';
import { LayoutModule } from './app/layout/layout.module';
import { ContributorModule } from './app/contributors/contributor.module';
import { EventModule } from './app/events/event.module';
import { TaskModule } from './app/tasks/task.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);