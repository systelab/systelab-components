import { Injectable } from '@angular/core';
import { MessagePopupComponent } from './message-popup.component';
import { Observable } from 'rxjs';
import { Modal } from '../plugin/modulab/modal';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Injectable()
export class MessagePopupService {

	private messagePopUpComponent: MessagePopupComponent;

	constructor(modal: Modal, i18nService: I18nService) {
		this.messagePopUpComponent = new MessagePopupComponent(modal, i18nService);
	}

	public showErrorPopup(errorDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showErrorPopup(errorDescription, modalClass, width, height);
	}

	public showWarningPopup(warningDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showWarningPopup(warningDescription, modalClass, width, height);
	}

	public showInformationPopup(messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showInformationPopup(messageDescription, modalClass, width, height);
	}

	public showQuestionPopup(messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showQuestionPopup(messageDescription, modalClass, width, height);
	}

	public showYesNoQuestionPopup(messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showYesNoQuestionPopup(messageDescription, modalClass, width, height);
	}

}
