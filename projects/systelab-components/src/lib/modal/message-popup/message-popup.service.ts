import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { I18nService } from 'systelab-translate';
import { DialogService } from '../dialog/dialog.service';
import { MessagePopupViewComponent } from './message-popup-view.component';
import { MessagePopupIcon, MessageWithIconComponent } from './message-with-icon.component';

export class MessagePopupButton {
	constructor(public title: string, public returnValue: any, public cssClass?: string, public focus: boolean = false) {
	}
}

@Injectable({providedIn: 'root'})
export class MessagePopupService {

	public static readonly breakpointMedium = 500;

	constructor(protected i18nService: I18nService, protected dialogService: DialogService) {
	}

	public showErrorPopup(titleDescription: string, errorDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(
			titleDescription,
			MessageWithIconComponent.MESSAGE_ERROR,
			errorDescription,
			modalClass,
			width,
			height,
			[]
		);
	}

	public showWarningPopup(titleDescription: string, warningDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(
			titleDescription,
			MessageWithIconComponent.MESSAGE_WARNING,
			warningDescription,
			modalClass,
			width,
			height,
			[]
		);
	}

	public showInformationPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(
			titleDescription,
			MessageWithIconComponent.MESSAGE_INFO,
			messageDescription,
			modalClass,
			width,
			height,
			[]
		);
	}

	public showYesNoQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, template?: string): Observable<any> {
		const buttons: MessagePopupButton[] = this.getButtonsTemplate(template);
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_QUESTION, messageDescription, modalClass, width, height, buttons);
	}

	public showCustomQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[], icon?: MessagePopupIcon): Observable<any> {
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_QUESTION, messageDescription, modalClass, width, height, buttons, icon);
	}

	public showAskAgainPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[], icon?: MessagePopupIcon, messageAskAgain?: string): Observable<any> {
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_QUESTION, messageDescription, modalClass, width, height, buttons, icon, messageAskAgain);
	}

	protected showPopup(title: string, type: number, message: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[], icon?: MessagePopupIcon, messageAskAgain?: string): Observable<any> {

		const defaultWidth = 600;
		const maxWidth = 700;
		const minWidth = 499;
		const defaultHeight = 300;
		const maxHeight = 400;
		const minHeight = 280;

		const parameters = MessagePopupViewComponent.getParameters();
		parameters.title = title;
		parameters.type = type;
		parameters.msg = message;
		parameters.buttons = buttons;
		parameters.width = width ? width : defaultWidth;
		parameters.height = height ? height : defaultHeight;

		parameters.maxWidth = maxWidth;
		parameters.minWidth = minWidth;

		parameters.maxHeight = maxHeight;
		parameters.minHeight = minHeight;

		parameters.icon = icon;

		parameters.askAgain = messageAskAgain !== undefined && messageAskAgain.length > 0;
		parameters.msgAskAgain = messageAskAgain;

		return this.dialogService.showDialog(MessagePopupViewComponent, parameters);
	}

	private getButtonsTemplate(template:string): MessagePopupButton[] {
		const buttons: MessagePopupButton[] = [];
		const availableTemplates: any = {
			'outline-danger': 'btn-outline-danger',
			'danger': 'btn-danger',
			'outline-warning': 'btn-outline-warning',
			'warning': 'btn-warning',
			'primary':'btn-primary',
			'outline-primary': 'btn-outline-primary',
		}
		const classTemplate: string = availableTemplates[template] || 'btn-outline-primary';

		buttons.push(new MessagePopupButton(this.i18nService.instant('COMMON_NO'), false, 'btn-link', template.includes('danger')));
		buttons.push(new MessagePopupButton(this.i18nService.instant('COMMON_YES'), true, classTemplate));
		return buttons;
	}

}
