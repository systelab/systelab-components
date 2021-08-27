import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { toastAnimations, ToastAnimationState } from './toast-animation';
import { ToastData } from './toast-config';
import { ToastRef } from './toast-ref';

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
})
export class ToastComponent implements OnInit, OnDestroy {
  iconType: string;
  classType: string;
  animationState: ToastAnimationState = 'default';

  private intervalId: number;

  constructor(readonly data: ToastData, readonly ref: ToastRef) {
    this.iconType = ICONS[data.type];
    this.classType = `slab-toast--${data.type}`;
  }

  public ngOnInit(): void {
    this.intervalId = window.setTimeout(() => (this.animationState = 'closing'), 5000);
  }

  public close(): void {
    this.ref.close();
  }

  public onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }

  public ngOnDestroy() {
    clearTimeout(this.intervalId);
  }
}
