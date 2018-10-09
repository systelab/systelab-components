import { AfterViewInit, Component } from '@angular/core';
import { TreeListBoxElement } from '../../../systelab-components/listbox/abstract-api-tree-listbox.component';

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
	public selectedItem2;
	public multipleSelectedItemList;
	public multipleSelectedItemList2;
	public multipleSelectedItemListTree;
	public selectedIDList = 'S3';

	constructor() {
		this.multipleSelectedItemList = [new Element('F', 'COMMON_FEMALE')];
		this.selectedItem2 = {'genderDescription': 3};

		this.multipleSelectedItemListTree = [];
		this.multipleSelectedItemListTree.push({
			'centerID':           1,
			'centerDescription':  'CENTER1',
			'serviceID':          '2',
			'serviceDescription': 'SERVICE2'
		});

	}

	public ngAfterViewInit(): void {
		this.selectedItem = new TreeListBoxElement({
			'centerID':           1,
			'centerDescription':  'CENTER1',
			'serviceID':          3,
			'serviceDescription': 'SERVICE3'
		}, 0, true);
	}

	public onSelectedItemChange() {
		console.log('Emit', this.selectedItem);
	}

	public onSelectedItemChange2() {
		console.log('Emit2', this.multipleSelectedItemList2);
	}

	public selectedIDListChange() {
		console.log('Emit2', this.selectedIDList);
	}
}
