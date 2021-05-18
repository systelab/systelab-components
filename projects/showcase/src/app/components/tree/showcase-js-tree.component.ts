import {Component} from '@angular/core';
import {AbstractTreeJS} from '../../../../../systelab-components/src/lib/tree-js/abstract-tree-js.component';
import {TreeElement} from '../../../../../systelab-components/src/lib/tree-js/tree-element';

export class ShowcaseTreeElement extends TreeElement {
}

@Component({
	selector: 'showcase-js-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree-js/abstract-tree-js.component.html'
})
export class ShowcaseJSTreeComponent extends AbstractTreeJS {

	constructor() {
		super();

		const myTree: ShowcaseTreeElement[] = [];

		const helloTreeElement = new ShowcaseTreeElement();
		helloTreeElement.id = 1;
		helloTreeElement.label = 'Hello';
		helloTreeElement.collapsedIcon = 'fas fa-chevron-right';
		helloTreeElement.expandedIcon = 'fas fa-chevron-down';
		helloTreeElement.icon = 'fas fa-square';

		const helloFirstChild = new ShowcaseTreeElement();
		helloFirstChild.id = 2;
		helloFirstChild.label = 'First';
		helloFirstChild.collapsedIcon = 'fas fa-chevron-right';
		helloFirstChild.expandedIcon = 'fas fa-chevron-down';

		const helloFirstGrandSon = new ShowcaseTreeElement();
		helloFirstGrandSon.id = 3;
		helloFirstGrandSon.label = 'We are family';
		helloFirstChild.children = [helloFirstGrandSon];

		const helloSecondChild = new ShowcaseTreeElement();
		helloSecondChild.id = 4;
		helloSecondChild.label = 'Second';
		helloTreeElement.children = [helloFirstChild, helloSecondChild];


		const byeTreeElement = new ShowcaseTreeElement();
		byeTreeElement.id = 5;
		byeTreeElement.label = 'Bye Bye';
		byeTreeElement.collapsedIcon = 'fas fa-chevron-right';
		byeTreeElement.expandedIcon = 'fas fa-chevron-down';

		const byeFirstChild = new ShowcaseTreeElement();
		byeFirstChild.id = 6;
		byeFirstChild.label = 'First';

		const byeSecondChild = new ShowcaseTreeElement();
		byeSecondChild.id = 7;
		byeSecondChild.label = 'Second';
		byeTreeElement.children = [byeFirstChild, byeSecondChild];

		myTree.push(helloTreeElement, byeTreeElement);

		this.tree = myTree;
	}
}
