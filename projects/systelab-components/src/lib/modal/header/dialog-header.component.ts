import { AfterViewInit, Component,  EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'systelab-dialog-header',
    templateUrl: 'dialog-header.component.html',
    styles: [`
        :host {
            width: 100%;
        }
        .slab-draggable {
            cursor: move;
            cursor: grab;
            cursor: -moz-grab;
            cursor: -webkit-grab;
        }
	`],
    standalone: false
})
export class DialogHeaderComponent implements AfterViewInit {

	@Input() withClose = true;
	@Input() withInfo = false;
	@Input() withProgressBar = false;
	@Input() withTextProgressBar = false;
	@Input() withHome = false;
	@Input() withMinimize = false;
	@Input() withDrag = true;

	@Output() public close = new EventEmitter();
	@Output() public info = new EventEmitter();
	@Output() public home = new EventEmitter();
	@Output() public minimize = new EventEmitter();

	public textProgress: string;
	public progress: number;
	private on: number;
	private here: number;

	constructor() {
	}

	public ngAfterViewInit() {
	}

	public doClose() {
		this.close.emit();
	}

	public doInfo() {
		this.info.emit();
	}

	public doHome() {
		this.home.emit();
	}

	public doMinimize() {
		this.minimize.emit();
	}

	public go(n: number, textProgress?: string): void {
		if (this.withProgressBar || this.withTextProgressBar) {
			if (n > 100) {
				n = 100;
			}
			if (n >= 0) {
				this.here = n;
				if (!this.on) {
					this.on = 1;
					this.move(n);
				}
			} else if (this.on) {
				this.move(n);
			}
			this.textProgress = textProgress ?? `${n}%`;
		}
	}

	// animation loop
	private move(width: number): void {
		const dist = width - this.here;
		if (dist < 0.1 && dist > -0.1) {
			this.place(this.here);
			this.on = 0;
		} else {
			this.place(width - dist / 4);
		}
	}

	// set bar width
	private place(num: number): void {
		this.progress = num;
	}

}
