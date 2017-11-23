import { Component, Output, EventEmitter, Input } from '@angular/core';

export class Button {

	public static LEFT_POSITION = 'LEFT';
	public static RIGHT_POSITION = 'RIGHT';

	constructor(public text: string, public action: string, public position: string) {
	}
}

@Component({
	selector:    'buttons-dialog',
	templateUrl: 'buttons-dialog.component.html'
})

export class ButtonsDialogComponent {

	@Input() public buttons: Array<Button> = [];

	@Output() public action = new EventEmitter<string>();

	public getLeftButtons(): Array<Button> {
		return this.buttons.filter(
			button => button.position === Button.LEFT_POSITION);
	}

	public getRightButtons(): Array<Button> {
		return this.buttons.filter(
			button => button.position === Button.RIGHT_POSITION);
	}

	public sendAction(actionName: string) {
		this.action.emit(actionName);
	}

}

