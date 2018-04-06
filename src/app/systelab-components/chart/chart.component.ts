import { Component, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Chart } from 'chart.js';

export class chartItem {
	constructor(public label: string, public data: Array<any>, public borderColor?: string,
		public backgroundColor?: string, public fill?: boolean, public showLine?: boolean,
		public isGradient?: boolean, public borderWidth?: number, public chartType?: string) {
	}
}

@Component({
	selector: 'systelab-chart',
	templateUrl: './chart.component.html'
})
export class ChartComponent implements AfterViewInit {
	public defaultColors: Array<number[]> = [
		[255, 99, 132],
		[54, 162, 235],
		[255, 206, 86],
		[75, 192, 192],
		[220, 220, 220],
		[247, 70, 74],
		[70, 191, 189],
		[253, 180, 92],
		[148, 159, 177],
		[151, 187, 205],
		[231, 233, 237],
		[77, 83, 96]];
	chart = [];
	public cx: CanvasRenderingContext2D;
	private _itemSelected: any;

	@Input()
	get itemSelected(): any {
		return this._itemSelected;
	}
	@Output() itemSelectedChange = new EventEmitter();
	set itemSelected(value: any) {
		this._itemSelected = value;
		this.itemSelectedChange.emit(this._itemSelected);
	}
	@Input() labels: Array<any> = [];
	@Input() data: Array<chartItem> = [];
	@Input() legend = true;
	@Input() isHorizontal = false;
	@Input() startInZero = true;
	@Input() isBackgroundGrid = true;
	@Input() typeChart: string;
	public dataset: Array<any> = [];
	public axesVisible= true;

	@Output() action = new EventEmitter();

	@ViewChild('canvas') canvas: ElementRef;
	constructor() { }
	ngAfterViewInit() {
		const canvas: HTMLCanvasElement = this.canvas.nativeElement;
		/* If is horizontal */
		if (this.typeChart === 'bar') {
			if (this.isHorizontal) {
				this.typeChart = 'horizontalBar';
			}
		}
		let borderColors: any;
		let backgroundColors: any;
		if (canvas) {
			this.cx = canvas.getContext('2d');
		}

		/* Data */
		if (this.data) {
			let colorNumber = 0;

			for (let i = 0; i < this.data.length; i++) {
				colorNumber = i;
				if (this.data[i].isGradient) {
					this.cx = canvas.getContext('2d');
					const gradientStroke = this.cx.createLinearGradient(500, 0, 100, 0);
					gradientStroke.addColorStop(0, this.rgba(this.defaultColors[0], 1));
					gradientStroke.addColorStop(1, this.rgba(this.defaultColors[1], 1));
					borderColors = gradientStroke;
					backgroundColors = gradientStroke;
				}
				else if ((this.typeChart === 'pie' || this.typeChart === 'doughnut' || this.typeChart === 'polarArea') && !this.data[i].chartType) {
					const backgroundColorList: Array<any> = [];
					const borderColorList: Array<any> = [];
					for (let j = 0; j < this.data[i].data.length; j++) {
						borderColorList.push(this.rgba(this.defaultColors[colorNumber], 1));
						backgroundColorList.push(this.rgba(this.defaultColors[colorNumber], 1));
						colorNumber++;
						if (colorNumber > (this.defaultColors.length - 1)) {
							colorNumber = 0;
						}
					}
					borderColors = borderColorList;
					backgroundColors = backgroundColorList;
				}
				else {
					if (colorNumber > (this.defaultColors.length - 1)) {
						colorNumber = 0;
					}
					if (!this.data[i].borderColor) {
						this.data[i].borderColor = this.rgba(this.defaultColors[colorNumber], 1);
					}
					if (!this.data[i].backgroundColor) {
						if (this.data[i].fill) {
							this.data[i].backgroundColor = this.rgba(this.defaultColors[colorNumber], 0.6);
						} else { this.data[i].backgroundColor = 'transparent'; }
					}
					borderColors = this.data[i].borderColor;
					backgroundColors = this.data[i].backgroundColor;
				}
				this.dataset.push({
					label: this.data[i].label, data: this.data[i].data, borderColor: borderColors,
					backgroundColor: backgroundColors, fill: this.data[i].fill,
					type: this.data[i].chartType, borderWidth: this.data[i].borderWidth, showLine: this.data[i].showLine
				});
			}
		}
		if (this.typeChart === 'pie' || this.typeChart === 'doughnut' || this.typeChart === 'polarArea' || this.typeChart === 'radar') {
			this.axesVisible = false;
		}

		if (canvas) {
			this.chart = new Chart(this.cx, {
				type: this.typeChart,
				data: {
					labels: this.labels,
					datasets: this.dataset
				},
				options: {
					onClick: (evt, item) => {
						const e = item[0];
						if (e) {
							this.itemSelected = e;
							this.action.emit();
						}
					},
					display: true,
					legend: {
						display: this.legend
					},
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: this.startInZero,
								display: this.axesVisible
							},
							gridLines: {
								display: this.isBackgroundGrid,
								drawBorder: this.axesVisible
							}
						}],
						xAxes: [{
							ticks: {
								display: this.axesVisible
							},
							gridLines: {
								display: this.isBackgroundGrid,
								drawBorder: this.axesVisible
							}
						}]
					}
				}
			});
		}
	}
	public rgba(colour: Array<number>, alpha: number): string {
		return 'rgba(' + colour.concat(alpha).join(',') + ')';
	}
	public doSomenthing(yValue, xValue) {
		alert(yValue);
	}

}
