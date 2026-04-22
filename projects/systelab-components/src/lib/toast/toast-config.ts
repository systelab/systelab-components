export type ToastType = 'warning' | 'info' | 'success' | 'error';

export enum ToastPosition {
  topCenter = 'top-center',
  bottomCenter = 'bottom-center',
  topEnd = 'top-end',
  bottomEnd = 'bottom-end',
}

export interface ToastAction {
  label: string;
  callback: () => void;
}

export class ToastData {
  // Legacy support - if only text is provided, it will be used as title
  text?: string;
  
  // New structure
  title?: string;
  body?: string;
  type: ToastType;
  action?: ToastAction;
}

export enum ToastSize {
  small = 'small',
  large = 'large',
}

export interface ToastConfig {
  autoWidth?: boolean;
  fixedSize?: ToastSize;
  showCloseButton?: boolean;
  timeout: number;
  position?: ToastPosition;
  maxWidth?: number;
  maxHeight?: number;
  maxSimultaneousToasts?: number;
}

export const DEFAULT_TOAST_CONFIG: ToastConfig = {
  autoWidth: false,
  fixedSize: ToastSize.small,
  showCloseButton: false,
  timeout: 5000,
  position: ToastPosition.bottomCenter,
  maxWidth: 530,
  maxHeight: 72,
  maxSimultaneousToasts: 5,
};
