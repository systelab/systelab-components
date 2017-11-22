import { Component } from '@angular/core';
import { Modal, ModulabModalContext } from '../plugin/modulab';
import { overlayConfigFactory, DialogRef } from 'angular2-modal';
import { MessagePopupViewComponent } from './message-popup-view.component';
import { Observable } from 'rxjs';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector: 'mp-message-popup',
	template: ''
})
export class MessagePopupComponent {

	constructor(protected modal: Modal, protected i18nService: I18nService) {
	}

	public showErrorPopup(titleDescription: string, errorDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, 'danger', 'icon-times-circle', errorDescription, modalClass, width, height);
	}

	public showWarningPopup(titleDescription: string, warningDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, 'warning', 'icon-warning', warningDescription, modalClass, width, height);
	}

	public showInformationPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, 'info', 'icon-info-circle', messageDescription, modalClass, width, height);
	}

	public showQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, 'info', 'icon-question-circle', messageDescription, modalClass, width, height);
	}

	public showYesNoQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.showPopup(titleDescription, 'info', 'icon-question-circle', messageDescription, modalClass, width, height, true);
	}

	protected showPopup(title: string, color: string, icon: string, message: string, modalClass?: string, width?: number, height?: number, yesNoButtons?: boolean): Observable<any> {

		let p: Promise<any> = new Promise((resolve: any, reject: any) => {
			this.modal.open(MessagePopupViewComponent,
				overlayConfigFactory(
					{
						dialogClass:  modalClass,
						msg:          message,
						title:        title,
						color:        color,
						icon:         icon,
						width:        width,
						height:       height,
						yesNoButtons: yesNoButtons
					},
					ModulabModalContext)
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

		return Observable.fromPromise(p);
	}

}
