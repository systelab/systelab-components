import {AbstractComboBox} from '../combobox/abstract-combobox.component';
import {ChangeDetectorRef, Component, Renderer2} from '@angular/core';
import {PreferencesService} from 'systelab-preferences';


class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
    selector: 'systelab-select',
    templateUrl: '../combobox/abstract-combobox.component.html',
    standalone: false
})

export class ModulabSelect extends AbstractComboBox<Element> {

	constructor(public override myRenderer: Renderer2, public override chRef: ChangeDetectorRef, public override preferencesService?: PreferencesService) {
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
