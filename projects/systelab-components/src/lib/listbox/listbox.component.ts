import { Component } from '@angular/core';
import { AbstractListBox } from './abstract-listbox.component';

export class ListBoxElement {
	constructor(public id: string, public description: string) {

	}
}

@Component({
    selector: 'systelab-listbox',
    templateUrl: 'abstract-listbox.component.html',
    standalone: false
})

export class ModulabListBox extends AbstractListBox<ListBoxElement> {

	constructor() {
		super();
	}

	getInstance(): ListBoxElement {
		return new ListBoxElement('', '');
	}

	getDescriptionField(): string {
		return 'description';
	}

	getIdField(): string {
		return 'id';
	}
}
