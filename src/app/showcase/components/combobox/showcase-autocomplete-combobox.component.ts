import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { AutocompleteApiComboBox } from '../../../systelab-components/combobox/autocomplete/autocomplete-api-combobox.component';
import { Observable, of } from 'rxjs';

export class ShowcaseCities {
	public id: string;
	public description: string;
}

@Component({
	selector:    'showcase-autocomplete',
	//templateUrl: '../../../../../node_modules/systelab-components/html/autocomplete-combobox.component.html' *This is the template path to be used in your project*
	templateUrl: '../../../systelab-components/combobox/autocomplete/autocomplete-combobox.component.html'
})

export class ShowcaseAutocomplete extends AutocompleteApiComboBox<ShowcaseCities> {

	public defaultValues = [
		{description: 'New York', id: '1'},
		{description: 'Rome', id: '2'},
		{description: 'London', id: '3'},
		{description: 'Barcelona', id: '4'},
		{description: 'París', id: '5'},
		{description: 'Berlín', id: '6'},
		{description: 'Oslo', id: '7'},
		{description: 'Atenas', id: '8'},
		{description: 'Lisboa', id: '9'},
		{description: 'Amsterdam', id: '10'},
		{description: 'St Petersburgo', id: '11'}
	];

	private totalItems = 11;

	constructor(myRenderer: Renderer2, public chref: ChangeDetectorRef) {
		super(myRenderer, chref);
	}

	public getInstance() {
		return new ShowcaseCities();
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getCodeField(): string {
		return null;
	}

	public getIdField(): string {
		return 'id';
	}

	public getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<ShowcaseCities>> {

		// On a real scenario you will retrive the data from a API
		// return this.api.getData(page, itemsPerPage).pipe(map((value) => {
		//        // this.totalItems = *Get the count of the items*;
		//         return value;
		// }));

		/** This code is for the showcase **/
		let values = [...this.defaultValues];
		if (startsWithParameter) {
			values = values.filter(
				v => v.description.toLowerCase()
					.includes(startsWithParameter.toLowerCase()));
		}
		this.totalItems = values.length;

		return of(values);
		/** This code is for the showcase **/
	}

	public getTotalItems(): number {
		return this.totalItems;
	}
}