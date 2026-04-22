import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { toastAnimations, ToastAnimationState } from './toast-animation';
import { ToastConfig, ToastData, ToastSize } from './toast-config';

const ICONS = {
  success: 'icon-check-circle',
  info: 'icon-info-circle',
  warning: 'icon-warning',
  error: 'icon-times-circle',
};

interface ToastItem {
  id: string;
  data: ToastData;
  iconClass: string;
  toastClass: string;
  title: string;
  body: string;
  hasAction: boolean;
  showClose: boolean;
  animationState: ToastAnimationState;
  timerId?: number;
  onClose?: () => void;
}

@Component({
    selector: 'systelab-toast',
    templateUrl: './toast.component.html',
    animations: [toastAnimations.fadeToast],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ToastComponent {
  public items: ToastItem[] = [];
  public onEmpty?: () => void;

  constructor(private readonly _cdr: ChangeDetectorRef) {}

  public addToast(data: ToastData, config: ToastConfig, onClose?: () => void): string {
    const id = `ti-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
    const title = data.title || data.text || '';
    const body = data.body || '';
    const hasAction = !!data.action;

    let toastClass = `slab-toast slab-toast--${data.type}`;
    if (config.autoWidth) {
      toastClass += ' slab-toast--auto-width';
    } else if (config.fixedSize === ToastSize.large) {
      toastClass += ' slab-toast--fixed-size-large';
    }
    if (config.showCloseButton) { toastClass += ' show-close-button'; }
    if (hasAction) { toastClass += ' has-action'; }
    if (body) { toastClass += ' has-body'; }

    const item: ToastItem = {
      id, data, title, body, hasAction, onClose,
      iconClass: `fa ${ICONS[data.type]}`,
      toastClass,
      showClose: !!config.showCloseButton,
      animationState: 'default',
    };

    item.timerId = window.setTimeout(() => this._startClose(id), config.timeout);
    this.items = [...this.items, item];
    this._cdr.detectChanges();
    return id;
  }

  public removeToast(id: string): void {
    const item = this.items.find(i => i.id === id);
    if (item) {
      clearTimeout(item.timerId);
      this._remove(id);
    }
  }

  public closeToast(item: ToastItem): void {
    clearTimeout(item.timerId);
    this._remove(item.id);
  }

  public onActionClick(item: ToastItem): void {
    if (item.data.action) {
      item.data.action.callback();
      clearTimeout(item.timerId);
      this._remove(item.id);
    }
  }

  public onFadeFinished(event: AnimationEvent, item: ToastItem): void {
    const isFadeOut = (event.toState as ToastAnimationState) === 'closing';
    if (isFadeOut && item.animationState === 'closing') {
      this._remove(item.id);
    }
  }

  private _startClose(id: string): void {
    const item = this.items.find(i => i.id === id);
    if (item && item.animationState !== 'closing') {
      item.animationState = 'closing';
      this._cdr.detectChanges();
    }
  }

  private _remove(id: string): void {
    const item = this.items.find(i => i.id === id);
    this.items = this.items.filter(i => i.id !== id);
    this._cdr.detectChanges();
    if (item?.onClose) { item.onClose(); }
    if (this.items.length === 0) { this.onEmpty?.(); }
  }
}
