import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

declare var Nanobar: any;

@Component({
	selector:    'systelab-dialog-header',
	templateUrl: 'dialog-header.component.html',
	styles:   [`
			:host {
      width: 100%;
  	}
	`]
})
export class DialogHeaderComponent implements AfterViewInit {

	@Input() withClose = true;
	@Input() withInfo = false;
	@Input() withProgressBar = false;

	@ViewChild('progress') progress: ElementRef;

	@Output() public close = new EventEmitter();
	@Output() public info = new EventEmitter();

	private nanobar: any;

	constructor() {
	}

	public ngAfterViewInit() {
		if (this.progress) {
			const options = {
				target: this.progress.nativeElement
			};
			this.nanobar = new Nanobar(options);
		}
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
