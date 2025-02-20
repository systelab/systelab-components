import { InjectionToken } from '@angular/core';
import { ToastConfig } from './toast/toast-config';
import { SystelabDialogConfig } from './modal/systelab-dialog-config';

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG_PARAMS');

export interface AppConfig{
    productionMode: boolean;
    toast?: ToastConfig;
    dialogConfig?: SystelabDialogConfig;
}
