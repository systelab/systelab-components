import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'systelab-button',
    templateUrl: 'button.component.html',
    styles: [`
      :host {
          display: inline-block;
      }`],
    standalone: false
})
export class ButtonComponent {

	@Output() public action = new EventEmitter();

	@Input() public disabled = false;

	@Input() public type: 'regular' | 'primary' | 'warning' | 'danger' | 'success' | 'link' = 'regular';

	@Input() public size: 'small' | 'medium' | 'large' = 'medium';

	constructor(private element: ElementRef) {

	}

	public getId() {
		return this.element.nativeElement.id;
	}

	public doClick(event: any) {
		if (this.disabled) {
			event.stopPropagation();
		} else {
			this.action.emit(event);
		}
	}
}
