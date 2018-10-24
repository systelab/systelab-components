import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractApiTreeListBox, TreeListBoxElement } from '../../../systelab-components/listbox/abstract-api-tree-listbox.component';

@Component({
	selector:    'showcase-inner-tree-listbox',
	templateUrl: '../../../systelab-components/listbox/abstract-listbox.component.html'
})

export class ShowcaseInnerTreeListBox extends AbstractApiTreeListBox<TreeListBoxElement<any>> {

	constructor() {
		super();
	}

	public getInstance(): any {
		return {};
	}

	public getDescriptionField(level: number): string {
		if (level === 1) {
			return 'serviceDescription';
		}
		return 'centerDescription';

	}

	public getIdField(level: number): string {
		if (level === 1) {
			return 'serviceID';
		}
		return 'centerID';
	}

	protected getData(): Observable<Array<any>> {
		const testList = [];
		testList.push({
			'centerID':           1,
			'centerDescription':  'Center',
			'serviceID':          1,
			'serviceDescription': 'Service 1'
		});
		testList.push({
			'centerID':           1,
			'centerDescription':  'Center',
			'serviceID':          2,
			'serviceDescription': 'Service 2'
		});
		testList.push({
			'centerID':           1,
			'centerDescription':  'Center',
			'serviceID':          3,
			'serviceDescription': 'Service 3'
		});
		return of(testList);
	}

	protected getSelectionPrefix(level: number): string {
		if (level === 0) {
			return 'C';
		} else {
			return 'S';
		}
	}

}
