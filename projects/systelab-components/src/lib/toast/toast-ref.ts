import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
  constructor(private readonly overlay: OverlayRef) {}

  public close() {
    this.overlay.dispose();
  }

  public isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  public getPosition() {
    return this.overlay.overlayElement.getBoundingClientRect();
  }
}
