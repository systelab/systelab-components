export type ToastType = 'warning' | 'info' | 'success' | 'error';

export class ToastData {
  text: string;
  type: ToastType;
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
}

export const DEFAULT_TOAST_CONFIG: ToastConfig = {
  autoWidth: false,
  fixedSize: ToastSize.small,
  showCloseButton: false,
  timeout: 5000,
};
