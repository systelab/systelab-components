import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { ShowcaseModule } from './app/showcase.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ShowcaseModule, { applicationProviders: [provideZoneChangeDetection()], });
