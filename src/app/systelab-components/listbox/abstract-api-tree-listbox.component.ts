import { AbstractApiListBox } from './abstract-api-listbox.component';
import { TreeListBoxElement } from './abstract-listbox.component';

export abstract class AbstractApiTreeListBox<T> extends AbstractApiListBox<T> {

	constructor() {
		super();
		this.isTree = true;
	}

	protected loadValues(dataVector: Array<T>) {
		this.values = [];
		let previousParent: number | string;

		dataVector.forEach(element => {
			if (!previousParent || element[this.getIdField(0)] !== previousParent) {
				previousParent = element[this.getIdField(0)];
				const parentNode = new TreeListBoxElement(element[this.getIdField()].toString(), '', element[this.getDescriptionField()].toString(), 0, false);
				this.values.push(parentNode);
			}
			const node = new TreeListBoxElement(element[this.getIdField(1)].toString(), element[this.getIdField(0)].toString(), element[this.getDescriptionField(1)].toString(), 1, false);
			this.values.push(node);
		});
	}
}
