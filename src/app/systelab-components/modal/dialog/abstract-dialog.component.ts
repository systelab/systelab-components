import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector:    'mp-dialog',
	templateUrl: 'abstract-dialog.component.html'
})

export class AbstractDialogComponent {

	@Input() public title: string = 'Sin título';

	@Output() public close = new EventEmitter();

	public emitClose() {
		this.close.emit();
	}

}

