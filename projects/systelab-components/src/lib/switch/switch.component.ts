import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
    selector: 'systelab-switch',
    templateUrl: 'switch.component.html',
    standalone: false
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

	public doKeyDown(event: KeyboardEvent) {
		if (event.key === ' ') {
			if (!this.disabled) {
				this.isChecked = !this.isChecked;
			}
			event.preventDefault();
		}
	}
}
