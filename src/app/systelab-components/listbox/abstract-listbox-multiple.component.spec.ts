import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserModule, By } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogService, MessagePopupService } from '../modal';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { ComboBoxInputRendererComponent } from '../combobox/renderer/combobox-input-renderer.component';
import { SystelabAbstractListboxComponent } from './abstract-listbox.component.spec';

export class TestData {
	constructor(public id: string, public description: string) {
	}
}

@Component({
	selector: 'abstract-multiple-listbox-test',
	template: `
                <div class="position-relative" style="height: 200px;">
                    <systelab-abstract-listbox-example #multipleListBox (selectedItemChange)="doSelect($event)" [multipleSelection]="true"
                                                       (multipleSelectedItemListChange)="doMultipleSelect($event)">
                    </systelab-abstract-listbox-example>
                </div>
	          `
})
export class AbstractMultipleListboxTestComponent {

	@ViewChild('multipleListBox', {static: false}) public multipleListBox: SystelabAbstractListboxComponent;

	public id = '1';
	public description = 'Description 1';
	public selectedTestData: TestData;

	public selectedTestDataList: Array<TestData>;

	public doSelect(data: TestData): void {
		this.selectedTestData = data;
	}

	public doMultipleSelect(dataList: Array<TestData>): void {
		this.selectedTestDataList = dataList;
	}

	public doCleanSelection() {
		this.multipleListBox.cleanSelection();
	}

}

describe('Abstract Listbox (multiple selection)', () => {

	let fixtureMultiple: ComponentFixture<AbstractMultipleListboxTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule.forRoot(),
				AgGridModule.withComponents([
					GridContextMenuCellRendererComponent,
					GridHeaderContextMenuComponent
				])],
			declarations: [
				GridContextMenuCellRendererComponent,
				GridHeaderContextMenuComponent,
				ComboBoxInputRendererComponent,
				SystelabAbstractListboxComponent,
				AbstractMultipleListboxTestComponent],
			providers:    [
				DialogService,
				MessagePopupService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixtureMultiple = TestBed.createComponent(AbstractMultipleListboxTestComponent);
		fixtureMultiple.detectChanges();
	});

	it(' AbstractMultipleListboxTestComponent should instantiate with default values', () => {
		expect(fixtureMultiple.componentInstance)
			.toBeDefined();

		expect(fixtureMultiple.componentInstance.id)
			.toEqual('1');

		expect(fixtureMultiple.componentInstance.description)
			.toEqual('Description 1');
		
		expect(fixtureMultiple.componentInstance.multipleListBox.getAllFieldDescription()).toBe('All');

	});

	it(' AbstractMultipleListboxTestComponent should have an instance of a multiple AbstractListBox', () => {

		const systelabAbstractListComponentDEs = fixtureMultiple.debugElement.query(By.directive(SystelabAbstractListboxComponent));

		expect(systelabAbstractListComponentDEs.componentInstance)
			.toBeDefined();

		expect(systelabAbstractListComponentDEs.componentInstance.multipleSelection)
			.toBeTruthy();			
	});

	it(' should leave selectedItem as undefined when doClick is invoked and isDisabled is true', () => {
		const systelabAbstractListboxComponent = new SystelabAbstractListboxComponent();
		systelabAbstractListboxComponent.multipleSelection = true;
		systelabAbstractListboxComponent.isDisabled = true;
		systelabAbstractListboxComponent.ngOnInit();

		const testData = new TestData('2', 'Description 2');
		const row = {node: {data: testData, selected: false, selectThisNode: (b: boolean) => {}}};
		systelabAbstractListboxComponent.doClick(row);

		expect(systelabAbstractListboxComponent.multipleSelectedItemList)
			.toBeUndefined();
	});

	xit(' should clear the selected rows if cleanSelection is invoked [disabled because gridOptions.api is undefined and we dont know how to fix that]', () => {
		const systelabAbstractListboxComponent = new SystelabAbstractListboxComponent();
		systelabAbstractListboxComponent.multipleSelection = true;
		systelabAbstractListboxComponent.ngOnInit();

		const testData = new TestData('2', 'Description 2');
		const row = {node: {data: testData, selected: false, selectThisNode: (b: boolean) => {}}};
		const testData2 = new TestData('3', 'Description 3');
		const row2 = {node: {data: testData2, selected: false, selectThisNode: (b: boolean) => {}}};

		systelabAbstractListboxComponent.doClick(row);
		systelabAbstractListboxComponent.doClick(row2);

		expect(systelabAbstractListboxComponent.multipleSelectedItemList)
			.toBeDefined();

		systelabAbstractListboxComponent.cleanSelection();

		expect(systelabAbstractListboxComponent.multipleSelectedItemList)
			.toBeUndefined();
	});

	it('should be NO possible to click on a single row in a multiple selection list', (done) => {
		fixtureMultiple.whenStable()
			.then(() => {
				clickOnGridCell(fixtureMultiple, 1);
				fixtureMultiple.whenStable()
					.then(() => {
						expect(fixtureMultiple.componentInstance.selectedTestData)
							.toBeUndefined();
						done();
					});
			});
	});

	it('should be possible to click on several rows in a multiple selection list', (done) => {
		fixtureMultiple.whenStable()
			.then(() => {
				selectOnGridRow(fixtureMultiple, 0);
				fixtureMultiple.whenStable()
					.then(() => {
						selectOnGridRow(fixtureMultiple, 1);
						fixtureMultiple.whenStable()
							.then(() => {
								expect(fixtureMultiple.componentInstance.selectedTestDataList)
									.toBeDefined();
								expect(fixtureMultiple.componentInstance.selectedTestDataList.length).toBe(2);
								expect(fixtureMultiple.componentInstance.selectedTestDataList[0].id).toBe('1');
								expect(fixtureMultiple.componentInstance.selectedTestDataList[0].description).toBe('Description 1');
								expect(fixtureMultiple.componentInstance.selectedTestDataList[1].id).toBe('2');
								expect(fixtureMultiple.componentInstance.selectedTestDataList[1].description).toBe('Description 2');								
								done();
							});
					});
			});
	});

	it('should be possible to unselect a row with two clicks in a multiple selection list', (done) => {
		fixtureMultiple.whenStable()
			.then(() => {
				selectOnGridRow(fixtureMultiple, 0);
				fixtureMultiple.whenStable()
					.then(() => {
						selectOnGridRow(fixtureMultiple, 0);
						fixtureMultiple.whenStable()
							.then(() => {
								expect(fixtureMultiple.componentInstance.selectedTestDataList)
									.toBeDefined();
								expect(fixtureMultiple.componentInstance.selectedTestDataList.length).toBe(0);
								done();
							});
					});
			});
	});

	it('should be possible to click on several rows and then clear the selection in a multiple selection list', (done) => {
		fixtureMultiple.whenStable()
			.then(() => {
				selectOnGridRow(fixtureMultiple, 0);
				fixtureMultiple.whenStable()
					.then(() => {
						selectOnGridRow(fixtureMultiple, 1);
						fixtureMultiple.whenStable()
							.then(() => {
								fixtureMultiple.componentInstance.multipleListBox.cleanSelection();
								fixtureMultiple.whenStable()
								.then(() => {								
									fixtureMultiple.componentInstance.multipleListBox.gridOptions.api.forEachNode(node => {
										if (node && node.id !== fixtureMultiple.componentInstance.multipleListBox.getAllFieldID()) {
											expect(node.isSelected()).toBeFalsy();
										}
									});
									done();
								});
							});
					});
			});
	});
});

function clickOnGridCell(fixture: ComponentFixture<AbstractMultipleListboxTestComponent>, cell: number) {
	const gridCellArray = fixture.debugElement.nativeElement.querySelectorAll('div[role="gridcell"]');
	gridCellArray[cell].click();
	fixture.detectChanges();
}

function selectOnGridRow(fixture: ComponentFixture<AbstractMultipleListboxTestComponent>, row: number) {
	const gridRowArray = fixture.debugElement.nativeElement.querySelectorAll('.ag-cell-not-inline-editing.ag-cell-value');
	gridRowArray[row].click();
	fixture.detectChanges();
}
