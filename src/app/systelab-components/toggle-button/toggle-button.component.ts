import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector:    'systelab-toggle-button',
	templateUrl: 'toggle-button.component.html'})
export class ToggleButtonComponent {
	private checked = false;

	@Input() get isChecked() {
		return this.checked;
	}

	set isChecked(val: boolean) {
		this.checked = val;
		this.isCheckedChange.emit(this.checked);
	}
	@Output() public isCheckedChange = new EventEmitter();

	@Input() public disabled = false;

	@HostListener('click')
	public onToggle() {
		if (!this.disabled) {
			this.isChecked = !this.isChecked;
		}
	}
}
