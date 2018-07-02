import { AbstractListBox, ListBoxElement } from './abstract-listbox.component';

export abstract class AbstractApiListBox<T> extends AbstractListBox<T> {

	constructor() {
		super(false);
	}

	protected getRows(): void {
		this.getData()
			.subscribe(
				(dataVector: Array<T>) => {
					this.loadValues(dataVector);
					this.gridOptions.api.hideOverlay();
					this.gridOptions.api.setRowData(this.values);
					this.gridOptions.api.redrawRows();
					this.setSelectionList(this.selectedIDList);
				},
				() => {
					this.gridOptions.api.hideOverlay();
				}
			);
	}

	protected loadValues(dataVector: Array<T>) {
		this.values = [];
		dataVector.forEach((element: T) => {
			const node = new ListBoxElement(element[this.getIdField()].toString(), element[this.getDescriptionField()].toString(), 1, false);
			this.values.push(node);
		});

	}
}
