import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'systelab-toggle-button',
    templateUrl: 'toggle-button.component.html',
    styles: [`
      :host {
          background-color: transparent;
      }`],
    standalone: false
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

	public doToggle(event: any) {
		if (this.disabled) {
			event.stopPropagation();
		} else {
			this.isChecked = !this.isChecked;
		}
	}
}
