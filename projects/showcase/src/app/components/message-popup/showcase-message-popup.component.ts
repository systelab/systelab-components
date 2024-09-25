import { Component } from '@angular/core';
import { MessagePopupButton, MessagePopupIcon, MessagePopupService } from 'systelab-components';

@Component({
	selector: 'showcase-message-popup',
	templateUrl: 'showcase-message-popup.component.html'
})
export class ShowcaseMessagePopupComponent {


	constructor(protected messagePopupService: MessagePopupService) {
	}

	public showError() {
		setInterval(()=>{
			this.messagePopupService.showErrorPopup('Test', 'Error message popup example', null, 800, 600)
				.subscribe((v) => {
					console.log('Observable returned to showcase', v);
				});
		}, 1000);
	}

	public showWarning() {
		this.messagePopupService.showWarningPopup('Test', 'Warning message popup example', 'w-33 h-33');

	}

	public showInfo() {
		this.messagePopupService.showInformationPopup('Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero sem, bibendum in urna non, mollis luctus urna. Nunc placerat urna vitae lobortis accumsan. In hac habitasse platea dictumst. In ut dapibus mauris, luctus facilisis velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc blandit ut dui in malesuada. Pellentesque efficitur pellentesque faucibus. Sed urna felis, porta eu pharetra in, euismod non ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia felis sit amet leo consectetur suscipit. Ut maximus libero et felis faucibus gravida ut ac enim. Donec in fermentum mauris. Praesent aliquet felis vitae urna pharetra tempus. Cras vestibulum nisl ante, sit amet posuere sem volutpat at. Nulla mollis sapien a quam accumsan, eget ultricies lorem pretium. In vel lectus rutrum, semper felis id, dignissim est.');

	}

	public showQuestionYN(template?:string) {
		this.messagePopupService.showYesNoQuestionPopup('Test', 'Error message popup example', null, 800, 600, template)
			.subscribe((v) => {
				console.log('Observable returned to showcase', v);
			});
	}

	public showCustomized() {
		const buttons: MessagePopupButton[] = [
			new MessagePopupButton('Approve', '', 'btn-primary'),
			new MessagePopupButton('Reject', '', 'btn-outline-danger')];
		const icon = new MessagePopupIcon('icon-print', 'text-danger');
		this.messagePopupService.showCustomQuestionPopup('Test', 'Customized Message popup', null, 800, 600, buttons, icon)
			.subscribe((v) => {
				console.log('Observable returned to showcase', v);
			});
	}

	public showAskAgain() {
		const buttons: MessagePopupButton[] = [
			new MessagePopupButton('Approve', '', 'btn-primary')];
		this.messagePopupService.showAskAgainPopup('Test', 'Are you sure?', null, 800, 400, buttons, null, 'Don\'t ask again');
	}
}
