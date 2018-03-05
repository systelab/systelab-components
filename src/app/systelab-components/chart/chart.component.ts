import { Component, ViewChild, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

export class dataObject {
	constructor(public label: string, public data: Array<any>, public borderColor?: string,
		public backgroundColor?: string, public fill?: boolean, public showLine?: boolean, public borderWidth?: number,
		public chartType?: string) {
}
}

@Component({
	selector: 'systelab-chart',
	templateUrl: './chart.component.html'
})
export class ChartComponent implements AfterViewInit {
	public  defaultColors: Array<number[]> = [
		[255, 99, 132],
		[54, 162, 235],
		[255, 206, 86],
		[231, 233, 237],
		[75, 192, 192],
		[151, 187, 205],
		[220, 220, 220],
		[247, 70, 74],
		[70, 191, 189],
		[253, 180, 92],
		[148, 159, 177],
		[77, 83, 96]];
	chartx = [];
	public cx: CanvasRenderingContext2D;
	@Input() xAxesLabels: Array<any> = [];
	@Input() data: Array<dataObject> = [];
	@Input() legend = true;
	@Input() isHorizontal = false;
	@Input() typeChart: string;
	public dataset: Array<any> = [];
	@ViewChild('canvas') canvas: ElementRef;
	constructor() {	}
	ngAfterViewInit() {
		const canvas: HTMLCanvasElement = this.canvas.nativeElement;
		/* If is horizontal */
		if (this.typeChart === 'bar') {
			if (this.isHorizontal) {
				this.typeChart = 'horizontalBar';
			}
		}

		/* Data */
		if (this.data) {
			for (let i = 0; i < this.data.length; i++) {

				const rndNumberColor = Math.floor(Math.random() * 11);

				if (!this.data[i].borderColor) {
					if (this.typeChart === 'line' || this.typeChart === 'bubble' ||
						this.data[i].chartType === 'line' || this.data[i].chartType === 'bubble') {
							this.data[i].borderColor = this.rgba(this.defaultColors[rndNumberColor], 1);
					}
				}
				if (!this.data[i].backgroundColor) {
					if (this.typeChart !== 'line') {
						let alpha = 0.6;
						if (!this.data[i].borderColor) {
							alpha = 1;
						}
						this.data[i].backgroundColor = this.rgba(this.defaultColors[rndNumberColor], alpha);
					}
				}
				this.dataset.push({label: this.data[i].label, data: this.data[i].data, borderColor: this.data[i].borderColor,
					backgroundColor: this.data[i].backgroundColor, fill: this.data[i].fill,
					type: this.data[i].chartType, borderWidth: this.data[i].borderWidth, showLine: this.data[i].showLine});
			}
		}

		if (canvas) {
			this.cx = canvas.getContext('2d');
			this.chartx = new Chart(this.cx, {
				type: this.typeChart,
				data: {
					labels: this.xAxesLabels,
					datasets: this.dataset
				},
				options: {
					legend: {
						display: this.legend
					},
					showLine:false
				}
			});
		}
	}
	public rgba (colour: Array<number>, alpha: number): string {
		return 'rgba(' + colour.concat(alpha).join(',') + ')';
	}

}
