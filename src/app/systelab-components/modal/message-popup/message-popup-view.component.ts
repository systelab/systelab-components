import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MessagePopupButton } from './message-popup.service';
import { DialogRef } from '../dialog/dialog-ref';
import { ModalComponent, SystelabModalContext } from '../dialog/modal-context';
import { MessagePopupIcon } from './message-with-icon.component';

export class MessagePopupViewContext extends SystelabModalContext {

	public fullScreen = false;
	public maxWidth = 700;
	public minWidth = 499;
	public maxHeight = 400;
	public minHeight = 280;
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
export class MessagePopupViewComponent implements ModalComponent<MessagePopupViewContext>, AfterViewInit {

	@ViewChild('closeBtn', {static: false}) closeBtn: ElementRef;
	public parameters: MessagePopupViewContext;

	constructor(public dialog: DialogRef<MessagePopupViewContext>) {
		this.parameters = dialog.context;
	}

	public static getParameters(): MessagePopupViewContext {
		return new MessagePopupViewContext();
	}

	ngAfterViewInit() {
		if (this.closeBtn) {
			setTimeout(() => this.closeBtn.nativeElement.focus());
		}
	}

	public close(value?: any): void {
		this.dialog.close(value);
	}
}
