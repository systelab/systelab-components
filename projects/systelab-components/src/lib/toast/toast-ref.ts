import { OverlayRef } from '@angular/cdk/overlay';
import { ToastData } from './toast-config';

let nextId = 0;

export class ToastRef {
  public readonly id: string;

  constructor(
    private readonly overlay: OverlayRef,
    public readonly data?: ToastData
  ) {
    this.id = `toast-${nextId++}`;
  }

  public close() {
    this.overlay.dispose();
  }

  public isVisible() {
    return this.overlay?.overlayElement ?? false;
  }

  public getPosition() {
    return this.overlay.overlayElement.getBoundingClientRect();
  }
}
