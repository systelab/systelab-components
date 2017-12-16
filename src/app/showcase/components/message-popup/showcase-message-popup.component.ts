import { Component } from '@angular/core';
import { MessagePopupService } from '../../../systelab-components/modal/message-popup/message-popup.service';

@Component({
	selector:    'showcase-message-popup',
	templateUrl: 'showcase-message-popup.component.html'
})
export class ShowcaseMessagePopupComponent {


	constructor(protected messagePopupService: MessagePopupService) {
	}

	public showError() {
		this.messagePopupService.showErrorPopup('Test', 'Error message popup example', null, 800, 600)
			.subscribe((v) => {
				console.log('Observable returned to showcase', v);
			});
	}

	public showWarning() {
		this.messagePopupService.showWarningPopup('Test', 'Warning message popup example', 'w-33 h-33');

	}

	public showInfo() {
		this.messagePopupService.showInformationPopup('Test', 'Info message popup example');

	}

	public showQuestion() {
		// window.alert('Hall!!!!!');
		this.messagePopupService.showQuestionPopup('Test', 'Are you sure?')
			.subscribe((v) => {
				console.log('closing');
			});
	}

	public showQuestionYN() {

	}
}
