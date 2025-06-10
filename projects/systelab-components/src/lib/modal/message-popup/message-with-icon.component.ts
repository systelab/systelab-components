import { Component, Input } from '@angular/core';

export class MessagePopupIcon {
	constructor(public cssClass: string, public cssPropertiesClass?: string) {

	}
}

@Component({
    selector: 'systelab-message-with-icon',
    templateUrl: 'message-with-icon.component.html',
    styleUrls: ['message-with-icon.component.scss'],
    standalone: false
})
export class MessageWithIconComponent {

	public static readonly MESSAGE_QUESTION = 1;
	public static readonly MESSAGE_ERROR = 2;
	public static readonly MESSAGE_WARNING = 3;
	public static readonly MESSAGE_INFO = 4;

	@Input() public message = '';
	@Input() public type = 1;
	@Input() public icon: MessagePopupIcon;

	public getIcon() {
		if (this.icon) {
			return this.icon.cssClass;
		} else {
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
	}

	public getColor() {
		if (this.icon) {
			if (this.icon.cssPropertiesClass) {
				return this.icon.cssPropertiesClass;
			} else {
				return 'info';
			}
		} else {
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
}
