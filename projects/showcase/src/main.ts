import { enableProdMode, provideZoneChangeDetection } from '@angular/core';

import { environment } from './environments/environment';
import { ShowcaseModule } from './app/showcase.module';
import { platformBrowser } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModule(ShowcaseModule, { applicationProviders: [provideZoneChangeDetection()], });
