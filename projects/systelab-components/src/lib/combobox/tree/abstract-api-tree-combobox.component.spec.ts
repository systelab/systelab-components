import { ChangeDetectorRef, Component, inject, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PreferencesService } from 'systelab-preferences';
import { AbstractApiTreeComboBox } from './abstract-api-tree-combobox.component';

interface TestNode {
	data: {
		level: number;
		nodeData: {
			parentId?: number;
			childId?: number;
		};
	};
	isSelected?: () => boolean;
	setSelected?: (value: boolean) => void;
}

/* =========================================================
 * Clase concreta SOLO para test
 * ========================================================= */
class TestApiTreeComboBox extends AbstractApiTreeComboBox<{
	parentId: number;
	childId: number;
	descParent: string;
	descChild: string;
}> {

	constructor(
		renderer: Renderer2,
		cdr: ChangeDetectorRef,
		prefs: PreferencesService
	) {
		super(renderer, cdr, prefs);
	}

	getData() {
		return of([
			{parentId: 1, childId: 10, descParent: 'P1', descChild: 'C1'},
			{parentId: 1, childId: 11, descParent: 'P1', descChild: 'C2'},
			{parentId: 2, childId: 20, descParent: 'P2', descChild: 'C3'}
		]);
	}

	getTotalItems(): number {
		return 3;
	}

	getLevelDescriptionField(level: number): string {
		return level === 0 ? 'descParent' : 'descChild';
	}

	getLevelIdField(level: number): string {
		return level === 0 ? 'parentId' : 'childId';
	}

	getAllNodeId() {
		return 'ALL';
	}

	getAllNodeDescription() {
		return 'All';
	}

	getSelectionPrefix(): string {
		return '#';
	}

	/* ===== Wrappers públicos para métodos protected ===== */

	public testSelectUnselectChildTree(event: unknown) {
		this.selectUnselectChildTree(event);
	}

	public testSelectUnselectParentTree(event: unknown) {
		this.selectUnselectParentTree(event);
	}

	public testAddRemoveToMultipleSelectedItem(event: unknown) {
		this.addRemoveToMultipleSelectedItem(event);
	}
}

/* =========================================================
 * Host component
 * ========================================================= */
@Component({
	template:   '',
	standalone: false
})
class TestHostComponent extends TestApiTreeComboBox {

	constructor() {
		super(
			inject(Renderer2),
			inject(ChangeDetectorRef),
			inject(PreferencesService)
		);
	}
}

describe('AbstractApiTreeComboBox', () => {

	let fixture: ComponentFixture<TestHostComponent>;
	let component: TestHostComponent;
	let preferences: jasmine.SpyObj<PreferencesService>;
	let gridNodes: TestNode[];

	beforeEach(() => {
		preferences = jasmine.createSpyObj<PreferencesService>('PreferencesService', ['get', 'put']);
		gridNodes = [];

		TestBed.configureTestingModule({
			declarations: [TestHostComponent],
			providers:    [
				{provide: PreferencesService, useValue: preferences}
			]
		});

		fixture = TestBed.createComponent(TestHostComponent);
		component = fixture.componentInstance;

		component.gridApi = {
			forEachNode:          (cb: (node: TestNode) => void) => gridNodes.forEach(cb),
			hideOverlay:          jasmine.createSpy(),
			redrawRows:           jasmine.createSpy(),
			getDisplayedRowCount: () => gridNodes.length
		} as unknown as typeof component.gridApi;
	});

	it('should create', () => {
		expect(component)
			.toBeTruthy();
	});

	it('should generate label with padding', () => {
		const label = component.getLabelForLevel({
			level:    2,
			nodeData: {descChild: 'Child'} as any
		});

		expect(label)
			.toContain('padding-left: 40px');
		expect(label)
			.toContain('Child');
	});

	it('should select children when parent is selected', () => {
		const childNode: TestNode = {
			data:        {level: 1, nodeData: {parentId: 1}},
			setSelected: jasmine.createSpy()
		};

		gridNodes = [childNode];

		component.testSelectUnselectChildTree({
			node: {
				isSelected: () => true,
				data:       {nodeData: {parentId: 1}}
			}
		});

		expect(childNode.setSelected)
			.toHaveBeenCalledWith(true);
	});

	it('should add and remove from multipleSelectedItemList', () => {
		component.multipleSelectedItemList = [];

		const event = {
			node: {
				isSelected: () => true,
				data:       {nodeData: {childId: 10}}
			}
		};

		component.testAddRemoveToMultipleSelectedItem(event);
		expect(component.multipleSelectedItemList.length)
			.toBe(1);

		event.node.isSelected = () => false;
		component.testAddRemoveToMultipleSelectedItem(event);
		expect(component.multipleSelectedItemList.length)
			.toBe(0);
	});

	it('should call getData when getRows is executed', (done) => {
		const getDataSpy = spyOn(component, 'getData')
			.and
			.callThrough();

		component.getRows()
			.subscribe(() => {
				expect(getDataSpy)
					.toHaveBeenCalled();
				done();
			});
	});

	it('should map getData result into ComboTreeNode structure', (done) => {
		component.getRows()
			.subscribe(nodes => {
				const parent = nodes.find(n => n.level === 0 && n.nodeData.parentId === 1);
				const child = nodes.find(n => n.level === 1 && n.nodeData.childId === 10);

				expect(parent)
					.toBeDefined();
				expect(child)
					.toBeDefined();
				done();
			});
	});

	it('should update internal flags when rows are loaded', (done) => {
		component.isFirstTime = true;
		component.totalItemsLoaded = false;

		component.getRows()
			.subscribe(() => {
				expect(component.isFirstTime)
					.toBeFalse();
				expect(component.totalItemsLoaded)
					.toBeTrue();
				done();
			});
	});

	it('should select parent when all children are selected', () => {
		const parentNode: TestNode = {
			data:        {
				level:    0,
				nodeData: {childId: 1}
			},
			isSelected:  jasmine.createSpy()
							 .and
							 .returnValue(false),
			setSelected: jasmine.createSpy()
		};

		const child1: TestNode = {
			data:        {
				level:    1,
				nodeData: {parentId: 1}
			},
			isSelected:  jasmine.createSpy()
							 .and
							 .returnValue(true),
			setSelected: jasmine.createSpy()
		};

		const child2: TestNode = {
			data:        {
				level:    1,
				nodeData: {parentId: 1}
			},
			isSelected:  jasmine.createSpy()
							 .and
							 .returnValue(true),
			setSelected: jasmine.createSpy()
		};

		gridNodes = [child1, child2, parentNode];

		component.testSelectUnselectParentTree({
			node: {
				data: {nodeData: {parentId: 1}}
			}
		});

		expect(parentNode.setSelected)
			.toHaveBeenCalledWith(true);
	});

	it('should unselect parent when not all children are selected', () => {
		const parentNode: TestNode = {
			data:        {
				level:    0,
				nodeData: {childId: 1}
			},
			isSelected:  jasmine.createSpy()
							 .and
							 .returnValue(true),
			setSelected: jasmine.createSpy()
		};

		const child1: TestNode = {
			data:        {
				level:    1,
				nodeData: {parentId: 1}
			},
			isSelected:  jasmine.createSpy()
							 .and
							 .returnValue(true),
			setSelected: jasmine.createSpy()
		};

		const child2: TestNode = {
			data:        {
				level:    1,
				nodeData: {parentId: 1}
			},
			isSelected:  jasmine.createSpy()
							 .and
							 .returnValue(false),
			setSelected: jasmine.createSpy()
		};

		gridNodes = [child1, child2, parentNode];

		component.testSelectUnselectParentTree({
			node: {
				data: {nodeData: {parentId: 1}}
			}
		});

		expect(parentNode.setSelected)
			.toHaveBeenCalledWith(false);
	});

});
