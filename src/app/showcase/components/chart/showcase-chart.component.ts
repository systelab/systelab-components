import { Component } from '@angular/core';
import { chartItem } from '../../../systelab-components/chart/chart.component';

@Component({
	selector: 'showcase-chart',
	templateUrl: './showcase-chart.component.html'
})
export class ShowcaseChartComponent {
	public typeChart: string;
	public itemSelected: any;
	public legend: boolean;
	public dataLine: Array<chartItem> = [];
	public dataBar: Array<chartItem> = [];
	public dataRadar: Array<chartItem> = [];
	public dataPie: Array<chartItem> = [];
	public dataDoughnut: Array<chartItem> = [];
	public dataBubble: Array<chartItem> = [];
	public dataPolarArea: Array<chartItem> = [];
	public dataLineBar: Array<chartItem> = [];
	public dataLineBubble: Array<chartItem> = [];
	public labels: Array<string> = [];
	public isBackgroundGrid = false;
	constructor() {
		this.typeChart = 'line';
		this.legend = true;
		this.labels = ['January', 'February', 'March', 'April'];

		this.dataLine.push(new chartItem('Only Line', [13, 20, 21, 15], '', '', false, true, false, 3));
		this.dataLine.push(new chartItem('Only Dots', [11, 18, 4, 3], '', '', false, false, false, 4));
		this.dataLine.push(new chartItem('Line and Area', [12, 41, 1, 21], '', '', true, true, false, 3));

		this.dataBar.push(new chartItem('Only Line', [12, 41, 1, 21], '', '', false, false, false, 3));
		this.dataBar.push(new chartItem('Line and Area', [13, 20, 21, 15], '', '', true, true, false, 3));

		this.dataRadar.push(new chartItem('Only Line', [36, 41, 35, 21], '', '', false, true, false, 3));
		this.dataRadar.push(new chartItem('Line and Area', [37, 40, 21, 15], '', '', true, true, false, 3));

		this.dataDoughnut.push(new chartItem('', [36, 23, 42, 52], '', '', true, true, false, 3));

		this.dataPie.push(new chartItem('', [36, 23, 42, 52], '', '', true, true, false, 3));

		this.dataPolarArea.push(new chartItem('', [21, 23, 42, 52], '', '', true, true, false, 3));

		this.dataBubble.push(new chartItem('Test 1', [{ x: 13, y: 13, r: 4 }, { x: 1, y: 2, r: 3 }, { x: 15, y: 23, r: 4 },
		{ x: -2, y: -2, r: 4 }, { x: -10, y: 13, r: 3 }, { x: 23, y: 12, r: 7 }, { x: 4, y: 4, r: 8 },
		{ x: 3, y: 2, r: 9 }], '', '', true, false, false, 2));
		this.dataBubble.push(new chartItem('Test 2', [{ x: 6, y: -2, r: 4 }, { x: 2, y: 5, r: 3 }, { x: 12, y: 11, r: 4 }, { x: 5, y: 10, r: 4 },
		{ x: 10, y: 46, r: 3 }, { x: 16, y: 24, r: 7 }, { x: 37, y: 6, r: 8 }, { x: 5, y: 3, r: 9 }], '', '', true, false, false, 2));

		this.dataLineBar.push(new chartItem('Line', [13, 20, 21, 15], '', '', false, true, true, 3, 'line'));
		this.dataLineBar.push(new chartItem('Bar', [10, 20, 10, 15], '', '', true, true, false, 3));
	}

	public doAction() {
		const xValue = this.labels[this.itemSelected._index];
		const yValue = this.dataPie[0].data[this.itemSelected._index];
		console.log(xValue);
		console.log(yValue);
	}
}
