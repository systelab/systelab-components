import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessorBase} from "../utilities/form/control-value-accessor-base";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

export interface ToggleSelectorOption {
  id: string;
  name: string;
}

@Component({
  selector: 'systelab-toggle-selector',
  templateUrl: './toggle-selector.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSelectorComponent),
      multi: true
    }
  ]
})
export class ToggleSelectorComponent extends ControlValueAccessorBase {
  @Input() public options: Array<ToggleSelectorOption> = [];

  @Input() public currentOption: string;
  @Output() public currentOptionChange = new EventEmitter<string>();

  @Output() public select = new EventEmitter<ToggleSelectorOption>();

  public selectOption(option: ToggleSelectorOption): void {
    this.currentOption = option.id;
    this.select.emit(option);
    this.currentOptionChange.emit(option.id);
  }

  public override writeValue(value: any): void {
    super.writeValue(value);
    this.currentOption = value;
    this.currentOptionChange.emit(value);
  }

  public override setDisabledState(isDisabled: boolean): void {
    super.setDisabledState(isDisabled);
  }

}
