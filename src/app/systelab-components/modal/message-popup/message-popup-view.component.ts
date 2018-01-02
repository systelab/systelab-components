import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { SystelabModalContext } from '../modal-context';

export class MessagePopupViewContext extends SystelabModalContext {
	public title: string;
	public msg: string;
	public icon: string;
	public color: string;
	public yesNoButtons: boolean;
}


@Component({
	selector:    'dialog-view',
	templateUrl: 'message-popup-view.component.html',
	styleUrls:   ['message-popup-view.component.scss']
})
export class MessagePopupViewComponent implements ModalComponent<MessagePopupViewContext> {

	public context: MessagePopupViewContext;

	constructor(public dialog: DialogRef<MessagePopupViewContext>) {
		this.context = dialog.context;
	}

	public close(value?: any): void {
		this.dialog.close(value);
	}
}
