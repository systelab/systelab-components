import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
    selector: 'combobox-favourite-renderer',
    templateUrl: 'combobox-favourite-renderer.component.html',
    standalone: false
})
export class ComboboxFavouriteRendererComponent implements AgRendererComponent {

	public isFavourite = false;
	public label: string;
	public favouriteList: Array<string> = [];

	public agInit(params: any): void {
		this.favouriteList = (<any>params).favouriteList;
		if (params && params.data) {
			this.label = params.data[params.colDef.field];
			this.checkIfIsFavourite(params);
		}

	}

	public refresh(params: any): boolean {
		return true;
	}

	protected checkIfIsFavourite(params: any): void {
		if(params.data[params.colDef.id]) {
			this.isFavourite = this.favouriteList.map(String)
				.includes(params.data[params.colDef.id].toString());
		}
	}
}
