import {Component, EventEmitter, forwardRef, HostListener, Input, Output} from '@angular/core';
import {ControlValueAccessorBase} from "../utilities/form/control-value-accessor-base";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
	selector:    'systelab-switch',
	templateUrl: 'switch.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SwitchComponent),
			multi: true
		}
	]
})
export class SwitchComponent extends ControlValueAccessorBase {
	private checked = false;

	@Input() get isChecked() {
		return this.checked;
	}

	set isChecked(val: boolean) {
		this.checked = val;
		this.isCheckedChange.emit(this.checked);
		// Notify Angular forms of the change
		this.onChange(val);
	}

	@Output() public isCheckedChange = new EventEmitter();

	@Input() public override get disabled(): boolean {
		return super.disabled;
	}

	public override set disabled(value: boolean) {
		super.disabled = value;
	}
	// Override
	public override writeValue(value: any) {
		super.writeValue(value);
		if (value) {
			this.checked = value;
		}
	}

	@HostListener('click')
	public onToggle() {
		if (!this.disabled) {
			this.isChecked = !this.isChecked;
		}
	}

	public doKeyDown(event: KeyboardEvent) {
		if (event.key === ' ') {
			if (!this.disabled) {
				this.isChecked = !this.isChecked;
			}
			event.preventDefault();
		}
	}
}
