import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
	selector:    'systelab-toggle-button',
	templateUrl: 'toggle-button.component.html',
	styles:      [`
      :host {
          background-color: transparent;
      }`]
})
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

	constructor(private element: ElementRef) {

	}

	public getId() {
		return this.element.nativeElement.id;
	}

	@HostListener('click')
	public onToggle() {
		if (!this.disabled) {
			this.isChecked = !this.isChecked;
		}
	}
}
