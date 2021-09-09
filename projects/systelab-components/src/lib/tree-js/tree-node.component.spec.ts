import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import {TreeNode} from './tree-node.component';
import {TreeElement} from './tree-element';

export class TestTreeElement extends TreeElement {
}

@Component({
	template: `<tree-node [node]="element"></tree-node>`
})
export class TreeNodeTestComponent {

	public element: TestTreeElement = new TestTreeElement();

	constructor() {
		this.element.id = 1;
		this.element.isSelected = false;
		this.element.expanded = false;
		this.element.children = [];
		this.element.collapsedIcon = 'collapsed';
		this.element.expandedIcon = 'expanded';
		this.element.textClass = 'dummy-class';
	}
}

describe('Systelab TreeNode Component', () => {
	let component: TreeNode;
	let fixture: ComponentFixture<TreeNodeTestComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TreeNode, TreeNodeTestComponent],
		})
			.compileComponents();
		fixture = TestBed.createComponent(TreeNodeTestComponent);
		fixture.detectChanges();
		component = fixture.debugElement.query(By.directive(TreeNode)).componentInstance;
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should create a tree node', () => {
		expect(component).toBeDefined();
	});

	it('should be expanded', () => {
		const expandButton = fixture.debugElement.nativeElement.querySelectorAll('.collapsed')[0];
		expandButton.click();
		expect(component.node.expanded).toBe(true);
	});

	it('shoould be collapsed', () => {
		component.doCollapse(component.node);
		expect(component.node.expanded).toBe(false);
	});

	it('should select a node', () => {
		component.node.isSelected = false;
		const selectNodeButton = fixture.debugElement.nativeElement.querySelectorAll('.dummy-class')[0];
		selectNodeButton.click();
		expect(component.node.isSelected).toBe(true);
	});

});
