import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

declare var Nanobar: any;

@Component({
	selector:    'systelab-dialog-header',
	templateUrl: 'dialog-header.component.html',
	styleUrls:   ['dialog-header.component.scss']
})
export class DialogHeaderComponent implements AfterViewInit {

	@Input() title;
	@Input() withClose = true;
	@Input() withInfo = false;
	@Input() withProgressBar = false;

	@Output() public close = new EventEmitter();
	@Output() public info = new EventEmitter();

	private nanobar: any;
	public randomId: string;

	constructor() {
		this.randomId = (Math.random() * (999999999999 - 1) ).toString();
	}

	public ngAfterViewInit() {
		const options = {
			id:     'nanobar-id-' + this.randomId,
			target: document.getElementById(this.randomId)
		};
		this.nanobar = new Nanobar(options);
	}

	public doClose() {
		this.close.emit();
	}

	public doInfo() {
		this.info.emit();
	}

	public go(n: number) {
		if (this.nanobar && this.withProgressBar) {
			if (n > 100) {
				n = 100;
			}
			this.nanobar.go(n); // size bar 30%
		}
	}

}
