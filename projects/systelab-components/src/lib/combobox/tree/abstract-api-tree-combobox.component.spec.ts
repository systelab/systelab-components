import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { Observable, of } from 'rxjs';
import { PreferencesService } from 'systelab-preferences';
import { AbstractApiTreeComboBox, ComboTreeNode } from './abstract-api-tree-combobox.component';

// Test data class
class TestItem {
	constructor(
		public id: string | number,
		public description: string,
		public parentId?: string | number,
		public level0Id?: string | number,
		public level0Description?: string,
		public level1Id?: string | number,
		public level1Description?: string
	) {
	}
}

// Concrete implementation for testing
@Component({
	selector:    'test-tree-combobox',
	templateUrl: '../abstract-combobox.component.html',
	standalone:  false
})
class TestTreeComboBoxComponent extends AbstractApiTreeComboBox<TestItem> {
	private testData: TestItem[] = [];

	constructor(
		public override myRenderer: Renderer2,
		public override chref: ChangeDetectorRef,
		public override preferencesService?: PreferencesService
	) {
		super(myRenderer, chref, preferencesService);
	}

	public setTestData(data: TestItem[]): void {
		this.testData = data;
	}

	public getData(): Observable<Array<TestItem>> {
		return of(this.testData);
	}

	public getTotalItems(): number {
		return this.testData.length;
	}

	public getInstance(): ComboTreeNode<TestItem> {
		return new ComboTreeNode<TestItem>();
	}

	public getDescriptionField(level?: number): string {
		return level === 1 ? 'level1Description' : 'level0Description';
	}

	public getCodeField(level?: number): string {
		return 'id';
	}

	public getIdField(level?: number): string {
		return level === 1 ? 'level1Id' : 'level0Id';
	}

	public getLevelDescriptionField(level: number): string {
		return level === 1 ? 'level1Description' : 'level0Description';
	}

	public getLevelIdField(level: number): string {
		return level === 1 ? 'level1Id' : 'level0Id';
	}

	public getAllNodeId(): string | number {
		return 'ALL';
	}

	public getAllNodeDescription(): string {
		return 'All Items';
	}

	public getSelectionPrefix(level: number): string {
		return level === 1 ? 'L' : 'P';
	}

	// Public wrappers for testing protected methods
	public testAddRemoveToMultipleSelectedItem(event: any): void {
		this.addRemoveToMultipleSelectedItem(event);
	}

	public testSelectUnselectChildTree(event: any): void {
		this.selectUnselectChildTree(event);
	}

	public testSelectUnselectParentTree(event: any): void {
		this.selectUnselectParentTree(event);
	}

	public testCheckIfIsFavourite(id: string | number): void {
		this.checkIfIsFavourite(id);
	}

	public testToggleFavourite(): void {
		this.toggleFavourite();
	}
}

describe('AbstractApiTreeComboBox', () => {
	let component: TestTreeComboBoxComponent;
	let fixture: ComponentFixture<TestTreeComboBoxComponent>;
	let mockPreferencesService: jasmine.SpyObj<PreferencesService>;

	const mockTestData: TestItem[] = [
		new TestItem('1', 'Parent 1', null, 'P1', 'Parent 1', 'C1', 'Child 1'),
		new TestItem('2', 'Parent 1', null, 'P1', 'Parent 1', 'C2', 'Child 2'),
		new TestItem('3', 'Parent 2', null, 'P2', 'Parent 2', 'C3', 'Child 3'),
		new TestItem('4', 'Parent 2', null, 'P2', 'Parent 2', 'C4', 'Child 4')
	];

	beforeEach(async () => {
		mockPreferencesService = jasmine.createSpyObj('PreferencesService', ['get', 'put']);
		mockPreferencesService.get.and.returnValue(of([]));

		await TestBed.configureTestingModule({
			declarations: [TestTreeComboBoxComponent],
			imports:      [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				AgGridModule
			],
			providers:    [
				{provide: PreferencesService, useValue: mockPreferencesService}
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(TestTreeComboBoxComponent);
		component = fixture.componentInstance;
		component.setTestData(mockTestData);
	});

	it('should create', () => {
		expect(component)
			.toBeTruthy();
	});

	it('should have FAVOURITEID constant', () => {
		expect(AbstractApiTreeComboBox.FAVOURITEID)
			.toBe('favourite');
	});

	it('should initialize with default values', () => {
		expect(component.isParentSelectable)
			.toBe(false);
		expect(component.isAllSelectable)
			.toBe(true);
		expect(component.totalItemsLoaded)
			.toBe(false);
		expect(component.isFirstTime)
			.toBe(true);
		expect(component.isTree)
			.toBe(true);
		expect(component.modelUpdated)
			.toBe(false);
	});

	it('should create ComboTreeNode instance', () => {
		const instance = component.getInstance();
		expect(instance)
			.toBeTruthy();
		expect(instance instanceof ComboTreeNode)
			.toBe(true);
	});

	it('should return correct description field for level', () => {
		expect(component.getDescriptionField(0))
			.toBe('level0Description');
		expect(component.getDescriptionField(1))
			.toBe('level1Description');
	});

	it('should return correct id field for level', () => {
		expect(component.getIdField(0))
			.toBe('level0Id');
		expect(component.getIdField(1))
			.toBe('level1Id');
	});

	it('should return correct level description field', () => {
		expect(component.getLevelDescriptionField(0))
			.toBe('level0Description');
		expect(component.getLevelDescriptionField(1))
			.toBe('level1Description');
	});

	it('should return correct level id field', () => {
		expect(component.getLevelIdField(0))
			.toBe('level0Id');
		expect(component.getLevelIdField(1))
			.toBe('level1Id');
	});

	it('should return all node id', () => {
		expect(component.getAllNodeId())
			.toBe('ALL');
	});

	it('should return all node description', () => {
		expect(component.getAllNodeDescription())
			.toBe('All Items');
	});

	it('should return selection prefix for level', () => {
		expect(component.getSelectionPrefix(0))
			.toBe('P');
		expect(component.getSelectionPrefix(1))
			.toBe('L');
	});

	it('should get data', fakeAsync(() => {
		component.getData()
			.subscribe(data => {
				expect(data)
					.toEqual(mockTestData);
				expect(data.length)
					.toBe(4);
			});
		tick();
	}));

	it('should get total items', () => {
		expect(component.getTotalItems())
			.toBe(4);
	});

	it('should configure grid with correct column definitions', () => {
		component.ngOnInit();
		expect(component.columnDefs)
			.toBeDefined();
		expect(component.columnDefs.length)
			.toBeGreaterThan(0);
		expect(component.gridOptions)
			.toBeDefined();
	});

	describe('getRows', () => {
		it('should return tree nodes with correct structure', fakeAsync(() => {
			component.getRows()
				.subscribe(nodes => {
					expect(nodes)
						.toBeDefined();
					expect(nodes.length)
						.toBeGreaterThan(0);

					// Should have "All" element
					const allNode = nodes.find(n => n.nodeData[component.getLevelIdField(0)] === 'ALL');
					expect(allNode)
						.toBeDefined();
					expect(allNode?.level)
						.toBe(0);
				});
			tick();
		}));

		it('should include empty element when emptyElement is true', fakeAsync(() => {
			component.emptyElement = true;
			component.getRows()
				.subscribe(nodes => {
					const emptyNode = nodes[0];
					expect(emptyNode.nodeData[component.getLevelIdField(0)])
						.toBe('');
					expect(emptyNode.level)
						.toBe(0);
				});
			tick();
		}));

		it('should include favourite elements when withFavourites is true', fakeAsync(() => {
			component.withFavourites = true;
			component.favouriteList = ['C1'];
			component.getRows()
				.subscribe(nodes => {
					const favouriteNode = nodes.find(n =>
						n.nodeData[component.getLevelIdField(0)] === AbstractApiTreeComboBox.FAVOURITEID
					);
					expect(favouriteNode)
						.toBeDefined();
				});
			tick();
		}));

		it('should set totalItemsLoaded to true after loading', fakeAsync(() => {
			expect(component.totalItemsLoaded)
				.toBe(false);
			component.getRows()
				.subscribe(() => {
					expect(component.totalItemsLoaded)
						.toBe(true);
				});
			tick();
		}));

		it('should group items by parent', fakeAsync(() => {
			component.getRows()
				.subscribe(nodes => {
					const parentNodes = nodes.filter(n => n.level === 0);
					const childNodes = nodes.filter(n => n.level === 1);

					expect(parentNodes.length)
						.toBeGreaterThan(0);
					expect(childNodes.length)
						.toBeGreaterThan(0);
				});
			tick();
		}));
	});

	describe('getLabelForLevel', () => {
		it('should return formatted label for level 0', () => {
			const node = new ComboTreeNode<TestItem>(mockTestData[0], 0);
			node.nodeData['level0Description'] = 'Test Description';

			const label = component.getLabelForLevel(node);
			expect(label)
				.toContain('Test Description');
			expect(label)
				.toContain('span');
		});

		it('should return formatted label with padding for level 1', () => {
			const node = new ComboTreeNode<TestItem>(mockTestData[0], 1);
			node.nodeData['level1Description'] = 'Child Description';

			const label = component.getLabelForLevel(node);
			expect(label)
				.toContain('Child Description');
			expect(label)
				.toContain('padding-left: 20px');
		});

		it('should apply correct padding based on level', () => {
			const node = new ComboTreeNode<TestItem>(mockTestData[0], 2);
			node.nodeData['level0Description'] = 'Test';

			const label = component.getLabelForLevel(node);
			expect(label)
				.toContain('padding-left: 40px');
		});
	});

	describe('closeDropDown', () => {
		it('should reset isFirstTime to true', () => {
			component.isFirstTime = false;
			component.closeDropDown();
			expect(component.isFirstTime)
				.toBe(true);
		});
	});

	describe('multiple selection', () => {
		beforeEach(() => {
			component.multipleSelection = true;
			(component as any).multipleSelectedItemList = [];
		});

		it('should add item to multiple selection list when selected', () => {
			const mockEvent = {
				node:   {
					data:        new ComboTreeNode<TestItem>(mockTestData[0], 1),
					isSelected:  () => true,
					setSelected: jasmine.createSpy('setSelected')
				},
				source: 'user'
			};

			const initialLength = (component as any).multipleSelectedItemList.length;
			component.testAddRemoveToMultipleSelectedItem(mockEvent);

			expect((component as any).multipleSelectedItemList.length)
				.toBeGreaterThan(initialLength);
		});

		it('should remove item from multiple selection list when deselected', () => {
			const testItem = mockTestData[0];
			testItem.level1Id = 'C1';
			const treeNode = new ComboTreeNode<TestItem>(testItem, 1);
			(component as any).multipleSelectedItemList = [testItem];

			const mockEvent = {
				node:   {
					data:        treeNode,
					isSelected:  () => false,
					setSelected: jasmine.createSpy('setSelected')
				},
				source: 'user'
			};

			component.testAddRemoveToMultipleSelectedItem(mockEvent);

			const found = (component as any).multipleSelectedItemList.find(
				item => item[component.getIdField(1)] === 'C1'
			);
			expect(found)
				.toBeUndefined();
		});
	});

	describe('parent-child selection', () => {
		beforeEach(() => {
			component.multipleSelection = true;
			component.gridApi = jasmine.createSpyObj('GridApi', ['forEachNode']);
		});

		it('should select all children when parent is selected', () => {
			const childNodes = [
				{
					data:        new ComboTreeNode<TestItem>(mockTestData[0], 1),
					setSelected: jasmine.createSpy('setSelected')
				},
				{
					data:        new ComboTreeNode<TestItem>(mockTestData[1], 1),
					setSelected: jasmine.createSpy('setSelected')
				}
			];

			childNodes[0].data.nodeData.level0Id = 'P1';
			childNodes[1].data.nodeData.level0Id = 'P1';

			(component.gridApi.forEachNode as jasmine.Spy).and.callFake((callback: any) => {
				childNodes.forEach(node => callback(node));
			});

			const mockEvent = {
				node: {
					data:       new ComboTreeNode<TestItem>({level0Id: 'P1'} as TestItem, 0),
					isSelected: () => true
				}
			};

			component.testSelectUnselectChildTree(mockEvent);

			expect(childNodes[0].setSelected)
				.toHaveBeenCalledWith(true);
			expect(childNodes[1].setSelected)
				.toHaveBeenCalledWith(true);
		});

		it('should select parent when all children are selected', () => {
			const parentNode = {
				data:        new ComboTreeNode<TestItem>({level1Id: 'P1'} as TestItem, 0),
				setSelected: jasmine.createSpy('setSelected'),
				isSelected:  () => false
			};

			const childNodes = [
				{
					data:       new ComboTreeNode<TestItem>({level0Id: 'P1'} as TestItem, 1),
					isSelected: () => true
				},
				{
					data:       new ComboTreeNode<TestItem>({level0Id: 'P1'} as TestItem, 1),
					isSelected: () => true
				}
			];

			(component.gridApi.forEachNode as jasmine.Spy).and.callFake((callback: any) => {
				childNodes.forEach(node => callback(node));
				callback(parentNode);
			});

			const mockEvent = {
				node: childNodes[0]
			};

			component.testSelectUnselectParentTree(mockEvent);

			expect(parentNode.setSelected)
				.toHaveBeenCalledWith(true);
		});

		it('should deselect parent when not all children are selected', () => {
			const parentNode = {
				data:        new ComboTreeNode<TestItem>({level1Id: 'P1'} as TestItem, 0),
				setSelected: jasmine.createSpy('setSelected'),
				isSelected:  () => true
			};

			const childNodes = [
				{
					data:       new ComboTreeNode<TestItem>({level0Id: 'P1'} as TestItem, 1),
					isSelected: () => true
				},
				{
					data:       new ComboTreeNode<TestItem>({level0Id: 'P1'} as TestItem, 1),
					isSelected: () => false
				}
			];

			(component.gridApi.forEachNode as jasmine.Spy).and.callFake((callback: any) => {
				childNodes.forEach(node => callback(node));
				callback(parentNode);
			});

			const mockEvent = {
				node: childNodes[0]
			};

			component.testSelectUnselectParentTree(mockEvent);

			expect(parentNode.setSelected)
				.toHaveBeenCalledWith(false);
		});
	});

	describe('favourites', () => {
		it('should get favourite text', () => {
			const text = component['getFavouriteText']();
			expect(text)
				.toBe('Favourites');
		});

		it('should check if item is favourite', () => {
			component.favouriteList = ['C1', 'C2'];
			component.id = 'LC1';
			component.testCheckIfIsFavourite('LC1');
			expect(component.isFavourite)
				.toBe(true);
		});

		it('should toggle favourite status', () => {
			component.favouriteList = [];
			component.id = 'LC1';
			component.isFavourite = false;

			component.testToggleFavourite();

			expect(component.isFavourite)
				.toBe(true);
			expect(component.favouriteList)
				.toContain('C1');
			expect(mockPreferencesService.put)
				.toHaveBeenCalled();
		});

		it('should remove from favourites when toggling off', () => {
			component.favouriteList = ['C1'];
			component.id = 'LC1';
			component.isFavourite = true;

			component.testToggleFavourite();

			expect(component.isFavourite)
				.toBe(false);
			expect(component.favouriteList)
				.not
				.toContain('C1');
			expect(mockPreferencesService.put)
				.toHaveBeenCalled();
		});
	});

	describe('onModelUpdated', () => {
		beforeEach(() => {
			component.multipleSelection = true;
			component.gridApi = jasmine.createSpyObj('GridApi', ['forEachNode']);
		});

		it('should select nodes that are in multipleSelectedItemList', () => {
			const selectedItem = mockTestData[0];
			selectedItem.level1Id = 'C1';
			(component as any).multipleSelectedItemList = [selectedItem];

			const mockNode = {
				data:        new ComboTreeNode<TestItem>(selectedItem, 1),
				setSelected: jasmine.createSpy('setSelected')
			};
			mockNode.data.nodeData.level1Id = 'C1';

			(component.gridApi.forEachNode as jasmine.Spy).and.callFake((callback: any) => {
				callback(mockNode);
			});

			component.onModelUpdated();

			expect(mockNode.setSelected)
				.toHaveBeenCalledWith(true);
			expect(component.modelUpdated)
				.toBe(true);
		});
	});
});












