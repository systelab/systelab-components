import {Injectable} from '@angular/core';
import {Modal, SystelabModalContext} from '../plugin/custom';
import {I18nService} from 'systelab-translate/lib/i18n.service';
import {MessagePopupViewComponent} from './message-popup-view.component';
import {Observable, from} from 'rxjs';
import {MessageWithIconComponent} from './message-with-icon.component';
import {overlayConfigFactory} from '../base/models/overlay-context';
import {DialogRef} from '../';

export class MessagePopupButton {
	constructor(public title: string, public returnValue: any) {

	}
}

@Injectable()
export class MessagePopupService {

	public static breakpointMedium = 500;

	constructor(protected modal: Modal, protected i18nService: I18nService) {
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

	public showYesNoQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[]): Observable<any> {
		return this.showPopup(titleDescription, MessageWithIconComponent.MESSAGE_QUESTION, messageDescription, modalClass, width, height, buttons);
	}

	protected showPopup(title: string, type: number, message: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[]): Observable<any> {

		let fullScreen = false;
		let maxWidth = 700;
		let minWidth = 499;
		let maxHeight = 400;
		let minHeight = 280;

		if (window.innerWidth <= MessagePopupService.breakpointMedium) {
			fullScreen = true;
			width = undefined;
			height = undefined;
			maxWidth = undefined;
			minWidth = undefined;
			maxHeight = undefined;
			minHeight = undefined;
			modalClass = undefined;
		} else {
			if (height && height > maxHeight) {
				height = maxHeight;
			}
			if (height && height < minHeight) {
				height = minHeight;
			}
			if (width && width > maxWidth) {
				width = maxWidth;
			}
			if (width && width < minWidth) {
				width = minWidth;
			}
		}
		let p: Promise<any> = new Promise((resolve: any, reject: any) => {
			this.modal.open(MessagePopupViewComponent,
				overlayConfigFactory(
					{
						fullScreen: fullScreen,
						dialogClass: modalClass,
						msg: message,
						buttons: buttons,
						title: title,
						type: type,
						width: width,
						maxWidth: maxWidth,
						minWidth: minWidth,
						maxHeight: maxHeight,
						minHeight: minHeight,
						height: height
					},
					SystelabModalContext)
			)
				.then((dialogRef: DialogRef<any>) => {
					dialogRef.result.then((v) => {
						resolve(v);
					})
						.catch((e) => {
							reject(e);
						});
				});
		});

		return from(p);
	}

}
