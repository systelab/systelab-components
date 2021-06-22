export type ToastType = 'warning' | 'info' | 'success' | 'error';

export class ToastData {
  text: string;
  type: ToastType;
}
