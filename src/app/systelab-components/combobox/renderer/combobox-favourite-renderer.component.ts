import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';

@Component({
	selector: 'combobox-favourite-renderer',
	templateUrl: 'combobox-favourite-renderer.component.html'
})
export class ComboboxFavouriteRendererComponent implements AgRendererComponent {
	public params: any;
	public isFavourite = false;

	public favouriteList: Array<string> = [];

	public agInit(params: any): void {
		this.params = params;
		this.favouriteList = (<any>params).favouriteList;

		this.checkIfIsFavourite();
	}

	public refresh(params: any): boolean {
		return true;
	}

	private checkIfIsFavourite(): void {
		this.isFavourite = this.favouriteList.map(String).indexOf(this.params.data[this.params.colDef.id].toString()) > -1;
	}
}
