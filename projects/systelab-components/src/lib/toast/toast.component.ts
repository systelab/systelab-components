import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { toastAnimations, ToastAnimationState } from './toast-animation';
import { ToastConfig, ToastData, ToastSize } from './toast-config';
import { ToastRef } from './toast-ref';
import { ToastService } from './toast.service';

const ICONS = {
  success: 'icon-check-circle',
  info: 'icon-info-circle',
  warning: 'icon-warning',
  error: 'icon-times-circle',
};

@Component({
    selector: 'systelab-toast',
    templateUrl: './toast.component.html',
    animations: [toastAnimations.fadeToast],
    standalone: false
})
export class ToastComponent implements OnInit, OnDestroy {
  public iconClass: string;
  public toastClass: string;
  public animationState: ToastAnimationState = 'default';
  public config: ToastConfig;

  private _intervalId: number;

  constructor(readonly data: ToastData, readonly ref: ToastRef, readonly toastService: ToastService) {
    this.config = this.toastService.getConfig();
    this.iconClass = `fa ${ICONS[data.type]}`;
    this.toastClass = `slab-toast slab-toast--${data.type}`;
    if (this.config.autoWidth) {
      this.toastClass = `${this.toastClass} slab-toast--auto-width`;
    } else if (this.config.fixedSize === ToastSize.small) {
      this.toastClass = `${this.toastClass} slab-toast--fixed-size-small`;
    } else if (this.config.fixedSize === ToastSize.large) {
      this.toastClass = `${this.toastClass} slab-toast--fixed-size-large`;
    }
    if (this.config.showCloseButton) {
      this.toastClass = `${this.toastClass} show-close-button`;
    }
  }

  public ngOnInit(): void {
    this._intervalId = window.setTimeout(() => (this.animationState = 'closing'), this.config.timeout);
  }

  public closeToast(): void {
    this.close();
  }

  public onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const isFinished = this.animationState === 'closing';

    if (isFadeOut && isFinished) {
      this.close();
    }
  }

  public ngOnDestroy() {
    clearTimeout(this._intervalId);
  }

  private close(): void {
    this.ref.close();
  }
}
