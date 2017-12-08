import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector:    'systelab-dialog',
	templateUrl: 'decorated-dialog.component.html',
	styleUrls: ['decorated-dialog.component.scss']
})

export class DecoratedDialogComponent {

	@Input() public title = '';
	@Input() public space = true;


	@Output() public close = new EventEmitter();

	public emitClose() {
		this.close.emit();
	}

}

