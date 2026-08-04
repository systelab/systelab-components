import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const libConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync()
    ]
};
