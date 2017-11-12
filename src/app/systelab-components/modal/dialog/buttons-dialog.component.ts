import { Component, ContentChild, Output, EventEmitter, Input } from '@angular/core';

export class Button {

	public static LEFT_POSITION: string = 'LEFT';
	public static RIGHT_POSITION: string = 'RIGHT';

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
		console.log('Pasa por aki 1');
		console.log(actionName);

		this.action.emit(actionName);
	}

}

