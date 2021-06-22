import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastRef } from './toast-ref';
import { ToastData } from './toast-config';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private lastToast: ToastRef;

  constructor(private overlay: Overlay, private parentInjector: Injector) {}

  public showError(text: string) {
    this.show({text: text, type: 'error' });
  }

  public showWarning(text: string) {
    this.show({text: text, type: 'warning' });
  }

  public showInformation(text: string) {
    this.show({text: text, type: 'info' });
  }

  public showSuccess(text: string) {
    this.show({text: text, type: 'success' });
  }

  private show(data: ToastData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy, panelClass: 'slab-toast-panel' });

    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  private getPositionStrategy() {
    if (!this.lastToast || (this.lastToast && !this.lastToast.isVisible())) {
      return this.overlay.position().global().bottom(this.getPosition()).centerHorizontally();
    } else {
      return this.overlay.position().global().top(this.getPosition()).centerHorizontally();
    }
  }

  private getPosition() {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    let position = 25;
    if (lastToastIsVisible) {
      const { height, top } = this.lastToast.getPosition();
      position = top - height - 25;
    }

    return position + 'px';
  }

  private getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    return Injector.create({
      parent: parentInjector,
      providers: [
        { provide: ToastData, useValue: data },
        { provide: ToastRef, useValue: toastRef }
      ]
    });
  }
}
