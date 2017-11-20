import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector:    'switch',
	templateUrl: 'switch.component.html',
	styleUrls:   ['switch.component.scss']
})
export class SwitchComponent {
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
