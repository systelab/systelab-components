import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector:    'systelab-dialog-header',
	templateUrl: 'dialog-header.component.html',
	styleUrls:   ['dialog-header.component.scss']
})
export class DialogHeaderComponent {

	@Input() title;
	@Input() withClose = true;
	@Input() withInfo = false;
	@Input() withProgressBar=false;

	@Output() public close = new EventEmitter();
	@Output() public info = new EventEmitter();

	constructor() {
	}

	public doClose() {
		this.close.emit();
	}

	public doInfo() {
		this.info.emit();
	}
}
