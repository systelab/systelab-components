import { Component, OnInit } from '@angular/core';
import { PieElement } from '../../../systelab-components/piechart/pie.component';

@Component({
	selector:    'showcase-pie',
	templateUrl: 'showcase-pie.component.html'
})
export class ShowcasePieComponent implements OnInit {

	public data: PieElement[] = [];

	constructor() {
	}

	public ngOnInit() {
		this.data.push(new PieElement('id1', 150, '#FFDAB9', 'ACTION1'));
		this.data.push(new PieElement('id2', 150, '#E6E6FA', 'ACTION2'));
		this.data.push(new PieElement('id3', 300, '#E0FFFF', 'ACTION3'));

	}
}
