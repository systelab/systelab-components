import { Injectable } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { MessagePopupViewComponent } from './message-popup-view.component';
import { Observable } from 'rxjs';
import { MessageWithIconComponent } from './message-with-icon.component';
import { DialogService } from '../dialog/dialog.service';

export class MessagePopupButton {
	constructor(public title: string, public returnValue: any) {

	}
}

@Injectable()
export class MessagePopupService {

	public static readonly breakpointMedium = 500;

	constructor(protected i18nService: I18nService, protected dialogService: DialogService) {
	}

	public showErrorPopup(titleDescription: string, errorDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_ERROR, errorDescription, modalClass, width, height, []);
	}

	public showWarningPopup(titleDescription: string, warningDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_WARNING, warningDescription, modalClass, width, height, []);
	}

	public showInformationPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_INFO, messageDescription, modalClass, width, height, []);
	}

	public showYesNoQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		const buttons: MessagePopupButton[] = [];
		buttons.push(new MessagePopupButton(this.i18nService.instant('COMMON_YES'), true));
		buttons.push(new MessagePopupButton(this.i18nService.instant('COMMON_NO'), false));
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_QUESTION, messageDescription, modalClass, width, height, buttons);
	}

	public showCustomQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[]): Observable<any> {
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_QUESTION, messageDescription, modalClass, width, height, buttons);
	}

	protected showPopup(title: string, type: number, message: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[]): Observable<any> {

		const maxWidth = 700;
		const minWidth = 499;
		const maxHeight = 400;
		const minHeight = 280;

		const parameters = MessagePopupViewComponent.getParameters();
		parameters.title = title;
		parameters.type = type;
		parameters.msg = message;
		parameters.buttons = buttons;
		parameters.width = width;
		parameters.height = height;

		parameters.maxWidth = maxWidth;
		parameters.minWidth = minWidth;

		parameters.maxHeight = maxHeight;
		parameters.minHeight = minHeight;

		return this.dialogService.showDialog(MessagePopupViewComponent, parameters);
	}

}
