import { Component, Input } from '@angular/core';

@Component({
	selector:    'systelab-message-with-icon',
	templateUrl: 'message-with-icon.component.html',
	styleUrls:   ['message-with-icon.component.scss']
})
export class MessageWithIconComponent {

	public static readonly MESSAGE_QUESTION = 1;
	public static readonly MESSAGE_ERROR = 2;
	public static readonly MESSAGE_WARNING = 3;
	public static readonly MESSAGE_INFO = 4;

	@Input() public message = '';
	@Input() public type = 1;

	public getIcon() {
		switch (this.type) {
			case MessageWithIconComponent.MESSAGE_QUESTION:
				return 'icon-question-circle';
			case MessageWithIconComponent.MESSAGE_ERROR:
				return 'icon-times-circle';
			case MessageWithIconComponent.MESSAGE_WARNING:
				return 'icon-warning';
			case MessageWithIconComponent.MESSAGE_INFO:
				return 'icon-info-circle';
			default:
				return '';
		}
	}

	public getColor() {
		switch (this.type) {
			case MessageWithIconComponent.MESSAGE_QUESTION:
				return 'info';
			case MessageWithIconComponent.MESSAGE_ERROR:
				return 'danger';
			case MessageWithIconComponent.MESSAGE_WARNING:
				return 'warning';
			case MessageWithIconComponent.MESSAGE_INFO:
				return 'info';
			default:
				return 'info';
		}
	}
}
