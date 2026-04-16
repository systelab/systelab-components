import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
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

  constructor(@Optional() @Inject(APP_CONFIG) private readonly config: any, private readonly overlay: Overlay, private readonly parentInjector: Injector) {
    this._config = config?.toast ?? DEFAULT_TOAST_CONFIG;
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
    return this.show({ 
      title: options.title, 
      body: options.body, 
      type: 'error', 
      action: options.action 
    }, options.config);
  }

  public showWarningMessage(options: ShowToastOptions | string): ToastRef {
    if (typeof options === 'string') {
      return this.show({ text: options, type: 'warning' });
    }
    return this.show({ 
      title: options.title, 
      body: options.body, 
      type: 'warning', 
      action: options.action 
    }, options.config);
  }

  public showInformationMessage(options: ShowToastOptions | string): ToastRef {
    if (typeof options === 'string') {
      return this.show({ text: options, type: 'info' });
    }
    return this.show({ 
      title: options.title, 
      body: options.body, 
      type: 'info', 
      action: options.action 
    }, options.config);
  }

  public showSuccessMessage(options: ShowToastOptions | string): ToastRef {
    if (typeof options === 'string') {
      return this.show({ text: options, type: 'success' });
    }
    return this.show({ 
      title: options.title, 
      body: options.body, 
      type: 'success', 
      action: options.action 
    }, options.config);
  }

  // Toast management methods
  public dismissAll(): void {
    this._activeToasts.forEach(toast => toast.close());
    this._activeToasts = [];
  }

  public dismiss(id: string): void {
    const index = this._activeToasts.findIndex(toast => toast.id === id);
    if (index !== -1) {
      this._activeToasts[index].close();
      this._activeToasts.splice(index, 1);
    }
  }

  public getActiveToasts(): ToastRef[] {
    return [...this._activeToasts];
  }

  private show(data: ToastData, customConfig?: Partial<ToastConfig>): ToastRef {
    // Merge configurations
    const config = { ...this._config, ...customConfig };

    // Validate content length
    this.validateContent(data);

    // Validate action on auto-dismissible toasts
    if (data.action && !config.showCloseButton) {
      console.warn('Toast with action button should either have showCloseButton enabled or ensure the action is available elsewhere in the app.');
    }

    // Check max simultaneous toasts limit
    const maxToasts = config.maxSimultaneousToasts ?? DEFAULT_TOAST_CONFIG.maxSimultaneousToasts;
    if (this._activeToasts.length >= maxToasts) {
      // Remove oldest toast
      const oldestToast = this._activeToasts.shift();
      if (oldestToast) {
        oldestToast.close();
      }
    }

    const positionStrategy = this.getPositionStrategy(config);
    const overlayRef = this.overlay.create({ positionStrategy, panelClass: 'slab-toast-panel' });

    const toastRef = new ToastRef(overlayRef, data);
    this._activeToasts.push(toastRef);

    const injector = this.getInjector(data, toastRef, config, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    // Clean up when toast is closed
    overlayRef.detachments().subscribe(() => {
      const index = this._activeToasts.findIndex(t => t.id === toastRef.id);
      if (index !== -1) {
        this._activeToasts.splice(index, 1);
      }
    });

    return toastRef;
  }

  private validateContent(data: ToastData): void {
    const title = data.title || data.text || '';
    const body = data.body || '';

    // Validate title length (recommend 1 sentence)
    if (title.split('.').length > 2) {
      console.warn('Toast title should be limited to one sentence for better readability.');
    }

    // Validate body length (recommend max 2 sentences)
    if (body.split('.').filter(s => s.trim()).length > 3) {
      console.warn('Toast body should be limited to two sentences for better readability.');
    }

    // Validate action label
    if (data.action && data.action.label.split(' ').length > 2) {
      console.warn('Toast action label should be limited to one or two words.');
    }
  }

  private getPositionStrategy(config: ToastConfig) {
    const visibleToasts = this._activeToasts.filter(t => t.isVisible());
    
    if (visibleToasts.length === 0) {
      // First toast - use configured position
      return this.createPositionStrategy(config, '25px');
    }

    // Calculate position based on existing toasts
    const lastToast = visibleToasts[visibleToasts.length - 1];
    const { height, top, bottom } = lastToast.getPosition();
    
    // Determine if we're stacking from top or bottom
    const position = config.position ?? DEFAULT_TOAST_CONFIG.position;
    const isTopPosition = position.startsWith('top');
    
    let offset: string;
    if (isTopPosition) {
      offset = (top + height + 25) + 'px';
    } else {
      offset = (window.innerHeight - bottom + 25) + 'px';
    }

    return this.createPositionStrategy(config, offset);
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

  private getInjector(data: ToastData, toastRef: ToastRef, config: ToastConfig, parentInjector: Injector) {
    return Injector.create({
      parent: parentInjector,
      providers: [
        { provide: ToastData, useValue: data },
        { provide: ToastRef, useValue: toastRef },
      ]
    });
  }
}
