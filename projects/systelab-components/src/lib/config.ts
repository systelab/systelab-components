import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG_PARAMS');

export interface AppConfig{
    productionMode: boolean;
}
