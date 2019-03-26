import { Component } from '@angular/core';
import { MessagePopupService, MessagePopupButton } from '../../../systelab-components/modal/message-popup/message-popup.service';
import { MessagePopupIcon } from '../../../systelab-components/modal/message-popup/message-with-icon.component';

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
		this.messagePopupService.showInformationPopup('Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero sem, bibendum in urna non, mollis luctus urna. Nunc placerat urna vitae lobortis accumsan. In hac habitasse platea dictumst. In ut dapibus mauris, luctus facilisis velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc blandit ut dui in malesuada. Pellentesque efficitur pellentesque faucibus. Sed urna felis, porta eu pharetra in, euismod non ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia felis sit amet leo consectetur suscipit. Ut maximus libero et felis faucibus gravida ut ac enim. Donec in fermentum mauris. Praesent aliquet felis vitae urna pharetra tempus. Cras vestibulum nisl ante, sit amet posuere sem volutpat at. Nulla mollis sapien a quam accumsan, eget ultricies lorem pretium. In vel lectus rutrum, semper felis id, dignissim est.');

	}

	public showQuestionYN() {
		this.messagePopupService.showYesNoQuestionPopup('Test', 'Error message popup example', null, 800, 600)
			.subscribe((v) => {
				console.log('Observable returned to showcase', v);
			});
	}

	public showCustomized() {
		const buttons: MessagePopupButton[] = [];
		buttons.push( new MessagePopupButton('Approve', '', 'btn-primary'));
		buttons.push( new MessagePopupButton('Reject', '', 'btn-danger'));
		const icon = new MessagePopupIcon('icon-print', 'text-danger');
		this.messagePopupService.showCustomQuestionPopup('Test', 'Customized Message popup', null, 800, 600, buttons, icon)
			.subscribe((v) => {
				console.log('Observable returned to showcase', v);
			});
	}
}
