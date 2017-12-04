import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector:    'systelab-dialog',
	templateUrl: 'decorated-dialog.component.html'
})

export class DecoratedDialogComponent {

	@Input() public title = '';

	@Output() public close = new EventEmitter();

	public emitClose() {
		this.close.emit();
	}

}

