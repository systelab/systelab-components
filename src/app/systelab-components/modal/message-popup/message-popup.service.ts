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

	public showErrorPopup(titleDescription: string, errorDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showErrorPopup(titleDescription, errorDescription, modalClass, width, height);
	}

	public showWarningPopup(titleDescription: string, warningDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showWarningPopup(titleDescription, warningDescription, modalClass, width, height);
	}

	public showInformationPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showInformationPopup(titleDescription, messageDescription, modalClass, width, height);
	}

	public showQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showQuestionPopup(titleDescription, messageDescription, modalClass, width, height);
	}

	public showYesNoQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any> {
		return this.messagePopUpComponent.showYesNoQuestionPopup(titleDescription, messageDescription, modalClass, width, height);
	}

}
