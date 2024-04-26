import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastRef } from './toast-ref';
import { DEFAULT_TOAST_CONFIG, ToastConfig, ToastData } from './toast-config';
import { ToastComponent } from './toast.component';
import { APP_CONFIG } from '../systelab-components.module.config';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _lastToast: ToastRef;
  private _config: ToastConfig;

  constructor(@Optional() @Inject(APP_CONFIG) private config, private overlay: Overlay, private parentInjector: Injector) {
    this._config = config?.toast ?? DEFAULT_TOAST_CONFIG;
  }

  public setConfig(config: ToastConfig): void {
    this._config = config;
  }

  public getConfig(): ToastConfig {
    return this._config;
  }

  public showError(text: string) {
    this.show({text, type: 'error' });
  }

  public showWarning(text: string) {
    this.show({text, type: 'warning' });
  }

  public showInformation(text: string) {
    this.show({text, type: 'info' });
  }

  public showSuccess(text: string) {
    this.show({text, type: 'success' });
  }

  private show(data: ToastData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy, panelClass: 'slab-toast-panel' });

    const toastRef = new ToastRef(overlayRef);
    this._lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  private getPositionStrategy() {
    if (!this._lastToast || (this._lastToast && !this._lastToast.isVisible())) {
      return this.overlay.position().global().bottom(this.getPosition()).centerHorizontally();
    } else {
      return this.overlay.position().global().top(this.getPosition()).centerHorizontally();
    }
  }

  private getPosition() {
    const lastToastIsVisible = this._lastToast && this._lastToast.isVisible();
    let position = 25;
    if (lastToastIsVisible) {
      const { height, top } = this._lastToast.getPosition();
      position = top - height - 25;
    }

    return position + 'px';
  }

  private getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    return Injector.create({
      parent: parentInjector,
      providers: [
        { provide: ToastData, useValue: data },
        { provide: ToastRef, useValue: toastRef },
      ]
    });
  }
}
