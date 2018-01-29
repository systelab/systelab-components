import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

export class PieElement {
	constructor(public label: string, public value: number, public color: string, public action: string) {

	}
}

@Component({
	selector: 'systelab-pie',
	template: `
                <canvas #chartCanvas style="width: 100%; heigth: 100%;" (click)="doClick($event)"
                        (mousemove)="doMouseMove($event)" [class.pointer]="mustShowPointer"></canvas>`,
	styles: [`
      .pointer {
          cursor: pointer;
      }
	`]
})
export class PieComponent implements AfterViewInit, OnChanges {

	@ViewChild('chartCanvas') public chartCanvas: ElementRef;

	@Input() public data: PieElement[] = [];
	@Input() public fixedWidth: number = null;
	@Input() public fixedHeight: number = null;
	@Output() public select = new EventEmitter();
	public mustShowPointer = false;

	constructor() {
	}

	public ngAfterViewInit(): void {
		const timer = Observable.timer(50);
		timer.subscribe(t => {
			this.drawChart();
		});
	}

	public ngOnChanges(): void {
		this.drawChart();
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event: any) {
		this.drawChart();
	}

	public drawChart() {
		console.log('drawChart()');

		if (this.fixedWidth) {
			this.chartCanvas.nativeElement.width = this.fixedWidth;
		} else {
			this.chartCanvas.nativeElement.width = this.chartCanvas.nativeElement.offsetWidth;
		}

		if (this.fixedHeight) {
			this.chartCanvas.nativeElement.height = this.fixedHeight;
		} else {
			this.chartCanvas.nativeElement.height = this.chartCanvas.nativeElement.offsetHeight;
		}

		console.log(this.chartCanvas.nativeElement.width + 'x' + this.chartCanvas.nativeElement.height);

		const context: CanvasRenderingContext2D = this.chartCanvas.nativeElement.getContext('2d');

		let startangle = 0;
		const totalvalue = this.sumTo(this.data, this.data.length);
		for (let i = 0; i < this.data.length; i++) {
			this.drawSegment(context, i, totalvalue);
			startangle = this.drawSegmentLabel(context, i, startangle, totalvalue);
		}
	}

	private drawSegment(context: CanvasRenderingContext2D, i: number, totalvalue: number) {
		context.save();
		const centerX = Math.floor(this.chartCanvas.nativeElement.width / 2);
		const centerY = Math.floor(this.chartCanvas.nativeElement.height / 2);

		let radius = Math.floor(this.chartCanvas.nativeElement.width / 2);
		if (this.chartCanvas.nativeElement.width > this.chartCanvas.nativeElement.height) {
			radius = Math.floor(this.chartCanvas.nativeElement.height / 2);
		}

		radius = radius - 40;

		const startingAngle = this.degreesToRadians(this.sumTo(this.data, i), totalvalue);
		const arcSize = this.degreesToRadians(this.data[i].value, totalvalue);
		const endingAngle = startingAngle + arcSize;

		context.beginPath();
		context.moveTo(centerX, centerY);
		context.arc(centerX, centerY, radius, startingAngle, endingAngle, false);
		context.closePath();

		context.fillStyle = this.data[i].color;
		context.fill();

		context.restore();

	}

	private drawSegmentLabel(context: CanvasRenderingContext2D, i: number, startangle: number, totalvalue: number) {

		context.save();
		const val = this.data[i].value;
		const sliceangle = 2 * Math.PI * val / totalvalue;
		const pieRadius = Math.min(this.chartCanvas.nativeElement.width / 2, this.chartCanvas.nativeElement.height / 2);
		const labelX = this.chartCanvas.nativeElement.width / 2 + (pieRadius - 10) * Math.cos(startangle + sliceangle / 2);
		const labelY = this.chartCanvas.nativeElement.height / 2 + (pieRadius - 10) * Math.sin(startangle + sliceangle / 2);

		const labelText = Math.round(100 * val / totalvalue);
		context.fillStyle = 'black';
		context.font = '14px Arial';
		context.textAlign = 'center';
		context.fillText(labelText + '%', labelX, labelY);

		context.restore();
		return startangle + sliceangle;

	}

	private degreesToRadians(degrees: number, totalvalue: number) {
		return (degrees * Math.PI) / (totalvalue / 2);
	}

	private sumTo(a: PieElement[], i: number) {
		let sum = 0;
		for (let j = 0; j < i; j++) {
			sum += a[j].value;
		}
		return sum;
	}

	public doClick(event: MouseEvent) {
		const context: CanvasRenderingContext2D = this.chartCanvas.nativeElement.getContext('2d');

		const p = context.getImageData(event.offsetX, event.offsetY, 1, 1).data;
		const hex = '#' + ('000000' + this.rgbToHex(p[0], p[1], p[2])).slice(-6);

		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i].color === hex) {
				this.select.emit(this.data[i].action);
				return;
			}
		}
	}

	public doMouseMove(event: MouseEvent) {
		const context: CanvasRenderingContext2D = this.chartCanvas.nativeElement.getContext('2d');

		const p = context.getImageData(event.offsetX, event.offsetY, 1, 1).data;
		const hex = '#' + ('000000' + this.rgbToHex(p[0], p[1], p[2])).slice(-6);

		this.mustShowPointer = hex !== '#000000';
	}

	private rgbToHex(r: number, g: number, b: number) {
		if (r > 255 || g > 255 || b > 255) {
			throw 'Invalid color component';
		}
		return ((r << 16) | (g << 8) | b).toString(16)
			.toUpperCase();
	}

}
