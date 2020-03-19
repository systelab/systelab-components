import { Component, OnInit, ViewChild } from '@angular/core';
import { TouchSpinValues } from 'systelab-components';
import { ContextPanelComponent } from 'systelab-components';

@Component({
	selector:    'showcase-context-panel',
	templateUrl: 'showcase-context-panel.component.html'
})
export class ShowcaseContextPanel implements OnInit {
	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;
	public fromDate: Date = null;
	public toDate: Date = new Date();

	public numericDateRadio = 'days';
	@ViewChild('contextPanel1', {static: false}) public contextPanel: ContextPanelComponent;

	constructor() {
		this.touchSpinValues1 = new TouchSpinValues(30, 1, 365, 1);
		this.touchSpinValues2 = new TouchSpinValues(30, 1, 1000, 1);
	}

	public ngOnInit() {
		this.fromDate = new Date();
		this.fromDate.setMonth(this.fromDate.getMonth() - 1);
	}

	public getInterval() {
		if (this.numericDateRadio === 'calendar') {
			if (this.fromDate && this.toDate) {
				return this.formatDate(this.fromDate) + ' to ' + this.formatDate(this.toDate);
			}
		}
		if (this.numericDateRadio === 'days') {
			return 'Last ' + this.touchSpinValues1.value + ' days';
		}
		if (this.numericDateRadio === 'number') {
			return 'Last ' + this.touchSpinValues2.value + ' points';
		}
		return '';
	}

	private formatDate(date: Date) {
		const monthNames = [
			'January', 'February', 'March',
			'April', 'May', 'June', 'July',
			'August', 'September', 'October',
			'November', 'December'
		];
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear();

		return day + ' ' + monthNames[monthIndex] + ' ' + year;
	}

	public close() {
		this.contextPanel.closeDropDown();
	}

}
