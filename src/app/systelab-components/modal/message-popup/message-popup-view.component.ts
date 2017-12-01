import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../plugin/modulab/modal-context';

export class MessagePopupViewContext extends ModulabModalContext {
	public title: string;
	public msg: string;
	public icon: string;
	public color: string;
	public yesNoButtons: boolean;
}

// TODO: Move this to its own file
export class DefaultModalActions {

	constructor(public dialog: DialogRef<ModulabModalContext>) {
	}

	public close(value?: any): void {
		this.dialog.close(value);
	}
}

@Component({
	selector:    'dialog-view',
	templateUrl: 'message-popup-view.component.html',
	styleUrls:   ['message-popup-view.component.scss']
})
export class MessagePopupViewComponent extends DefaultModalActions implements ModalComponent<MessagePopupViewContext> {

	public context: MessagePopupViewContext;

	constructor(public dialog: DialogRef<MessagePopupViewContext>) {
		super(dialog);
		this.context = dialog.context;
	}
}
