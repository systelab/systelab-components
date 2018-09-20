import {AbstractComboBox} from '../combobox/abstract-combobox.component';
import {ChangeDetectorRef, Component, Renderer2} from '@angular/core';
import {PreferencesService} from 'systelab-preferences/lib/preferences.service';


class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector: 'systelab-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class ModulabSelect extends AbstractComboBox<Element> {

	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public preferencesService?: PreferencesService) {
		super(myRenderer, chRef, preferencesService);
	}

	getInstance(): Element {
		return new Element('', '');
	}

	getDescriptionField(): string {
		return 'description';
	}

	getCodeField(): string {
		return 'code';
	}

	getIdField(): string {
		return 'id';
	}
}
