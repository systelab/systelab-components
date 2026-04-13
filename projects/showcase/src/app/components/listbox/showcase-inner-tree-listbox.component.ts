import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractApiTreeListBox, TreeListBoxElement } from 'systelab-components';

@Component({
    selector: 'showcase-inner-tree-listbox',
    templateUrl: '../../../../../systelab-components/src/lib/listbox/abstract-listbox.component.html',
    standalone: false
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
		return of(this.getListBoxValues());
	}

	private getListBoxValues(): any[] {
		const values = [];
		for(let i = 1; i <= 20; i++) {
			for(let j = 1; j <= 5; j++) {
				values.push({
					'centerID':           i,
					'centerDescription':  'Center ' + i,
					'serviceID':          j,
					'serviceDescription': 'Service ' + j + ' of Center ' + i
				});
			}
		}
		return values;
	}

	protected getSelectionPrefix(level: number): string {
		if (level === 0) {
			return 'C';
		} else {
			return 'S';
		}
	}

}
