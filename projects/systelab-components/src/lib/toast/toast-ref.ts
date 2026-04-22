let nextId = 0;

export class ToastRef {
  public readonly id: string;
  private readonly _dismiss: () => void;

  constructor(dismissFn: () => void) {
    this.id = `toast-${nextId++}`;
    this._dismiss = dismissFn;
  }

  public close(): void {
    this._dismiss();
  }
}
