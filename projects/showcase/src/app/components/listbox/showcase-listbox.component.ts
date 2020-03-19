import { AfterViewInit, Component } from '@angular/core';
import { TreeListBoxElement } from 'systelab-components';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'showcase-listbox',
	templateUrl: 'showcase-listbox.component.html'
})
export class ShowcaseListBoxComponent implements AfterViewInit {

	public selectedItem;
	public selectedTreeItem;
	public multipleSelectedItemList;
	public multipleSelectedItemListTree;

	constructor() {
		this.multipleSelectedItemList = [new Element('F', 'COMMON_FEMALE')];

		this.multipleSelectedItemListTree = [];
		this.multipleSelectedItemListTree.push({
			'centerID':           1,
			'centerDescription':  'Center',
			'serviceID':          '2',
			'serviceDescription': 'Service 2'
		});

	}

	public ngAfterViewInit(): void {
		this.selectedTreeItem = new TreeListBoxElement({
			'centerID':           1,
			'centerDescription':  'Center',
			'serviceID':          3,
			'serviceDescription': 'Service 3'
		}, 1, true);
	}

	public onSelectedItemChange(event: any) {
		console.log('Emit', event);
	}

}
