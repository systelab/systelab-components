import {Component} from '@angular/core';
import {AbstractTreeJS} from '../../../../../systelab-components/src/lib/tree-js/abstract-tree-js.component';
import {TreeElement} from '../../../../../systelab-components/src/lib/tree-js/tree-element';
import {AbstractTreeObservable} from '../../../../../systelab-components/src/lib/tree-js/abstract-tree-js-observable.service';

export class ShowcaseTreeElement extends TreeElement {
}

@Component({
	selector: 'showcase-js-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree-js/abstract-tree-js.component.html'
})
export class ShowcaseJSTreeComponent extends AbstractTreeJS {

	constructor(protected readonly abstractTreeObservable: AbstractTreeObservable) {
		super(abstractTreeObservable);

		const myTree: ShowcaseTreeElement[] = [];

		const helloTreeElement = new ShowcaseTreeElement();
		helloTreeElement.id = 1;
		helloTreeElement.label = 'Hello';
		helloTreeElement.icon = 'fab fa-jedi-order text-primary';

		const helloFirstChild = new ShowcaseTreeElement();
		helloFirstChild.id = 2;
		helloFirstChild.label = 'First';

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
