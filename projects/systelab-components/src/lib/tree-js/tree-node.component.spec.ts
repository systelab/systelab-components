import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import {TreeNode} from './tree-node.component';
import {TreeElement} from './tree-element';

@Component({
	template: `<tree-node [node]="element"></tree-node>`
})
export class TreeNodeTestComponent {

	public element: TreeElement = new TreeElement<any>();

	constructor() {
		console.log(this.element);
		this.element.id = 1;
		this.element.isSelected = false;
		this.element.expanded = false;
		console.log(this.element);
	}
}

fdescribe('Systelab TreeNode Component', () => {
	let component: TreeNode;
	let fixture: ComponentFixture<TreeNode>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TreeNode, TreeNodeTestComponent],
		})
			.compileComponents();
		fixture = TestBed.createComponent(TreeNode);
		fixture.detectChanges();
		component = fixture.debugElement.query(By.directive(TreeNode)).componentInstance;
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should create spy menu', () => {
		expect(component).toBeDefined();
	});

});
