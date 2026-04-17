import { ComponentRef, Inject, Injectable, Injector, Optional } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastRef } from './toast-ref';
import { DEFAULT_TOAST_CONFIG, ToastConfig, ToastData, ToastAction } from './toast-config';
import { ToastComponent } from './toast.component';
import { APP_CONFIG } from '../systelab-components.module.config';

export interface ShowToastOptions {
  title: string;
  body?: string;
  action?: ToastAction;
  config?: Partial<ToastConfig>;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _activeToasts: ToastRef[] = [];
  private _config: ToastConfig;
  private readonly _containers = new Map<string, { overlayRef: OverlayRef; containerRef: ComponentRef<ToastComponent> }>();

  constructor(
    @Optional() @Inject(APP_CONFIG) private readonly appConfig: any,
    private readonly overlay: Overlay,
    private readonly parentInjector: Injector,
  ) {
    this._config = this.appConfig?.toast ?? DEFAULT_TOAST_CONFIG;
  }

  public setConfig(config: ToastConfig): void {
    this._config = config;
  }

  public getConfig(): ToastConfig {
    return this._config;
  }

  // Legacy methods - backward compatible
  public showError(text: string) {
    this.show({ text, type: 'error' });
  }

  public showWarning(text: string) {
    this.show({ text, type: 'warning' });
  }

  public showInformation(text: string) {
    this.show({ text, type: 'info' });
  }

  public showSuccess(text: string) {
    this.show({ text, type: 'success' });
  }

  // New enhanced methods
  public showErrorMessage(options: ShowToastOptions | string): ToastRef {
    if (typeof options === 'string') {
      return this.show({ text: options, type: 'error' });
    }
    return this.show({ title: options.title, body: options.body, type: 'error', action: options.action }, options.config);
  }

  public showWarningMessage(options: ShowToastOptions | string): ToastRef {
    if (typeof options === 'string') {
      return this.show({ text: options, type: 'warning' });
    }
    return this.show({ title: options.title, body: options.body, type: 'warning', action: options.action }, options.config);
  }

  public showInformationMessage(options: ShowToastOptions | string): ToastRef {
    if (typeof options === 'string') {
      return this.show({ text: options, type: 'info' });
    }
    return this.show({ title: options.title, body: options.body, type: 'info', action: options.action }, options.config);
  }

  public showSuccessMessage(options: ShowToastOptions | string): ToastRef {
    if (typeof options === 'string') {
      return this.show({ text: options, type: 'success' });
    }
    return this.show({ title: options.title, body: options.body, type: 'success', action: options.action }, options.config);
  }

  // Toast management methods
  public dismissAll(): void {
    this._containers.forEach(({ overlayRef }) => overlayRef.dispose());
    this._containers.clear();
    this._activeToasts = [];
  }

  public dismiss(id: string): void {
    const toast = this._activeToasts.find(t => t.id === id);
    toast?.close();
  }

  public getActiveToasts(): ToastRef[] {
    return [...this._activeToasts];
  }

  private show(data: ToastData, customConfig?: Partial<ToastConfig>): ToastRef {
    const config = { ...this._config, ...customConfig };

    this.validateContent(data);

    const container = this._getOrCreateContainer(config);

    const maxToasts = config.maxSimultaneousToasts ?? DEFAULT_TOAST_CONFIG.maxSimultaneousToasts;
    if (container.items.length >= maxToasts) {
      container.removeToast(container.items[0].id);
    }

    let toastRef: ToastRef;
    const toastItemId = container.addToast(data, config, () => {
      this._activeToasts = this._activeToasts.filter(t => t !== toastRef);
    });

    toastRef = new ToastRef(() => container.removeToast(toastItemId));
    this._activeToasts.push(toastRef);
    return toastRef;
  }

  private validateContent(data: ToastData): void {
    const title = data.title || data.text || '';
    const body = data.body || '';

    if (title.split('.').length > 2) {
      console.warn('Toast title should be limited to one sentence for better readability.');
    }
    if (body.split('.').filter(s => s.trim()).length > 3) {
      console.warn('Toast body should be limited to two sentences for better readability.');
    }
    if (data.action && data.action.label.split(' ').length > 2) {
      console.warn('Toast action label should be limited to one or two words.');
    }
  }

  private _getOrCreateContainer(config: ToastConfig): ToastComponent {
    const positionKey = config.position ?? DEFAULT_TOAST_CONFIG.position;
    const existing = this._containers.get(positionKey);

    if (existing?.overlayRef.hasAttached()) {
      return existing.containerRef.instance;
    }

    if (existing) {
      this._containers.delete(positionKey);
    }

    const positionStrategy = this.createPositionStrategy(config, '25px');
    const overlayRef = this.overlay.create({ positionStrategy, panelClass: ['slab-toast-panel', `slab-toast-panel--${positionKey}`] });
    const portal = new ComponentPortal(ToastComponent, null, this.parentInjector);
    const containerRef = overlayRef.attach(portal);

    containerRef.instance.onEmpty = () => {
      overlayRef.dispose();
      this._containers.delete(positionKey);
    };

    this._containers.set(positionKey, { overlayRef, containerRef });
    return containerRef.instance;
  }

  private createPositionStrategy(config: ToastConfig, offset: string) {
    const position = this.overlay.position().global();

    switch (config.position) {
      case 'top-center':
        return position.top(offset).centerHorizontally();
      case 'bottom-center':
        return position.bottom(offset).centerHorizontally();
      case 'top-end':
        return position.top(offset).right('25px');
      case 'bottom-end':
        return position.bottom(offset).right('25px');
      default:
        return position.bottom(offset).centerHorizontally();
    }
  }
}
