import { OnInit, Component } from '@angular/core';
import { TreeListBoxElement } from 'systelab-components';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
    selector: 'showcase-listbox',
    templateUrl: 'showcase-listbox.component.html',
    standalone: false
})
export class ShowcaseListBoxComponent implements OnInit {

	public selectedItem;
	public selectedTreeItem;
	public multipleSelectedItemList;
	public selectAllmultipleSelectedItemList;
	public multipleSelectedItemListTree;

	constructor() {
		this.multipleSelectedItemList = [new Element('F', 'COMMON_FEMALE')];
		this.selectAllmultipleSelectedItemList = [...this.multipleSelectedItemList];
		this.multipleSelectedItemListTree = [];
		this.multipleSelectedItemListTree.push({
			'centerID':           1,
			'centerDescription':  'Center',
			'serviceID':          '2',
			'serviceDescription': 'Service 2'
		});

	}

	public ngOnInit(): void {
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
