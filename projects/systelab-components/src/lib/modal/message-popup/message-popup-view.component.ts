import { Component } from '@angular/core';
import { MessagePopupButton } from './message-popup.service';
import { DialogRef } from '../dialog/dialog-ref';
import { ModalComponent, SystelabModalContext } from '../dialog/modal-context';
import { MessagePopupIcon } from './message-with-icon.component';

export class MessagePopupViewContext extends SystelabModalContext {

	public override fullScreen = false;
	public override maxWidth = 700;
	public override minWidth = 499;
	public override maxHeight = 400;
	public override minHeight = 280;
	public title: string;
	public msg: string;
	public icon: MessagePopupIcon;
	public type: number;
	public color: string;
	public buttons: MessagePopupButton[] = [];
}

@Component({
	selector:    'dialog-view',
	templateUrl: 'message-popup-view.component.html',
	styleUrls:   ['message-popup-view.component.scss']
})
export class MessagePopupViewComponent implements ModalComponent<MessagePopupViewContext> {

	public parameters: MessagePopupViewContext;
	public hasAnyButtonFocus = false;

	constructor(public dialog: DialogRef<MessagePopupViewContext>) {
		this.parameters = dialog.context;
		if (this.parameters.buttons) {
			this.hasAnyButtonFocus = this.parameters.buttons.some(button => button.focus);
		}
	}

	public static getParameters(): MessagePopupViewContext {
		return new MessagePopupViewContext();
	}

	public close(value?: any): void {
		this.dialog.close(value);
	}
}
