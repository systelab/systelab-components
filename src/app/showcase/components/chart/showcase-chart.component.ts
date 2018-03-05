import { Component } from '@angular/core';
import { dataObject } from '../../../systelab-components/chart/chart.component';

@Component({
	selector: 'showcase-chart',
	templateUrl: './showcase-chart.component.html'
})
export class ShowcaseChartComponent {
	public typeChart: string;
	public legend: boolean;
	public data: Array<dataObject> = [];
	public xAxesLabels: Array<string> = [];
	constructor() {
		this.typeChart = 'line';
		this.legend = false;
		this.xAxesLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'June', 'June'];
		// this.data.push(new dataObject('test1', [ {x:13,y:13,r:4}, {x:1,y:2,r:3}, {x:15,y:23,r:4}, {x:-2,y:-2,r:4},
		// 	{x:-10,y:13,r:3}, {x:23,y:12,r:7}, {x:4,y:4,r:8}, {x:3,y:2,r:50}], '', '', false,2));
		 this.data.push(new dataObject('test3', [11, 18, 4, 3, 4, 43], '', '', true, true, 10));
		 this.data.push(new dataObject('test2', [12, 41, 1, 21, 25, 6], '#000', '#000', true, false));
	}


}
