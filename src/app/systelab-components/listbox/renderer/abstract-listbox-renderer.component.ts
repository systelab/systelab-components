import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ListBoxElement } from '../abstract-listbox.component';

@Component({
	selector:    'abstract-listbox-renderer',
	templateUrl: 'abstract-listbox-renderer.component.html'
})
export class AbstractListboxRendererComponent implements AgRendererComponent {
	public params: any;

	public isCheckboxActive: boolean;
	public id: string;
	public description: string;
	public level: number;
	public prefix = '';

	public agInit(params: any): void {
		this.params = params;
		this.prefix = params.prefix ? params.prefix : '';
		if (params.data) {
			const listBoxElement: ListBoxElement = params.data;
			this.id = listBoxElement.id;
			this.isCheckboxActive = listBoxElement.selected;
			this.description = listBoxElement.description;
			this.level = listBoxElement.level;
		}
	}

	public refresh(params: any): boolean {
		return true;
	}

	public changeValue(): void {
		this.params.changeFunction(this.params.data);

	}
}
