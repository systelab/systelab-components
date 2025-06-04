import { ControlValueAccessor } from '@angular/forms';

export abstract class ControlValueAccessorBase implements ControlValueAccessor {
  // Private properties with public getters and setters
  private _value: any;
  private _disabled: boolean = false;

  // Public property to access the value
  public get value(): any {
    return this._value;
  }

  public set value(val: any) {
    this._value = val;
    // Call onChange when a new value is set
    this.onChange(this._value);
  }

  // Public property to access the disabled state
  public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
    // Call setDisabledState for additional updates
    this.setDisabledState(this._disabled);
  }

  // Public methods from ControlValueAccessor
  public onChange: any = () => {};
  public onTouched: any = () => {};

  public writeValue(value: any): void {
    this._value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  // Specific abstract methods to be implemented in each component
  //   public abstract onInputChange(event: any): void;
  //   public abstract onBlur(): void;
}