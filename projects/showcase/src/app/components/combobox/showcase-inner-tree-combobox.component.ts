import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractApiTreeComboBox } from 'systelab-components';
import { PreferencesService } from 'systelab-preferences';

@Component({
	selector:    'showcase-inner-tree-combobox',
	templateUrl: '../../../../../systelab-components/src/lib/combobox/abstract-combobox.component.html'
})

export class ShowcaseInnerTreeComboBox extends AbstractApiTreeComboBox<any> {

	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef, public preferencesService: PreferencesService) {
		super(myRenderer, chref, preferencesService);
	}

	public getInstance(): any {
		return {};
	}

	public getLevelDescriptionField(level: number): string {
		if (level === 1) {
			return 'serviceDescription';
		}
		return 'centerDescription';

	}

	public getLevelIdField(level: number): string {
		if (level === 1) {
			return 'serviceID';
		}
		return 'centerID';
	}

	public getAllNodeId(): number | string {
		return 0;
	}

	public getAllNodeDescription(): string {
		return 'General';
	}

	protected getFavouriteText(): string {
		return 'Favourites';
	}

	public getData(): Observable<Array<any>> {
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

	public getTotalItems(): number {
		return 3;
	}

	public getSelectionPrefix(level: number): string {
		if (level === 0) {
			return 'C';
		} else {
			return 'S';
		}
	}
}
