import { AfterViewInit, Component } from '@angular/core';
import { AbstractListBox } from './abstract-listbox.component';
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

export class TestData {
	constructor(public id: string, public description: string) {
	}
}

@Component({
	selector:    'systelab-abstract-listbox-example',
	templateUrl: 'abstract-listbox.component.html'
})
export class SystelabAbstractListboxComponent extends AbstractListBox<TestData> implements AfterViewInit {
	public constructor() {
		super();
	}

	public ngAfterViewInit(): void {
		const testValues = [];

		testValues.push(new TestData('1', 'Description 1'));
		testValues.push(new TestData('2', 'Description 2'));
		testValues.push(new TestData('3', 'Description 3'));

		this.values = testValues;
	}

	protected getDescriptionField(level?: number): string {
		return 'description';
	}

	protected getIdField(level?: number): string {
		return 'id';
	}

	public getInstance(): TestData {
		return new TestData('', '');
	}

}

@Component({
	selector: 'abstract-listbox-test',
	template: `
                  <div class="position-relative" style="height: 200px;">
                      <systelab-abstract-listbox-example (selectedItemChange)="doSelect($event)">
                      </systelab-abstract-listbox-example>
                  </div>
			  `
})
export class AbstractListboxTestComponent {
	public id = '1';
	public description = 'Description 1';
	public selectedTestData: TestData;

	public doSelect(data: TestData): void {
		this.selectedTestData = data;
	}

}

@Component({
	selector: 'abstract-multiple-listbox-test',
	template: `
                  <div class="position-relative" style="height: 200px;">
                      <systelab-abstract-listbox-example (selectedItemChange)="doSelect($event)" [multipleSelection]="true"
                                                         (multipleSelectedItemListChange)="doMultipleSelect($event)">
                      </systelab-abstract-listbox-example>
                  </div>
			  `
})
export class AbstractMultipleListboxTestComponent extends AbstractListboxTestComponent {

	public selectedTestDataList: Array<TestData>;

	public doMultipleSelect(dataList: Array<TestData>): void {
		console.log('doMultipleSelect', dataList);
		this.selectedTestDataList = dataList;
		console.log('doMultipleSelect.selectedTestDataList', this.selectedTestDataList);
	}

}

describe('Abstract Listbox', () => {

	let fixture: ComponentFixture<AbstractListboxTestComponent>;
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
				AbstractListboxTestComponent,
				AbstractMultipleListboxTestComponent],
			providers:    [
				DialogService,
				MessagePopupService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AbstractListboxTestComponent);
		fixture.detectChanges();

		fixtureMultiple = TestBed.createComponent(AbstractMultipleListboxTestComponent);
		fixtureMultiple.detectChanges();
	});

	xit(' AbstractListboxTestComponent and AbstractMultipleListboxTestComponent should instantiate with default values', () => {
		expect(fixture.componentInstance)
			.toBeDefined();

		expect(fixture.componentInstance.id)
			.toEqual('1');

		expect(fixture.componentInstance.description)
			.toEqual('Description 1');

		expect(fixtureMultiple.componentInstance)
			.toBeDefined();

		expect(fixtureMultiple.componentInstance.id)
			.toEqual('1');

		expect(fixtureMultiple.componentInstance.description)
			.toEqual('Description 1');

	});

	xit(' AbstractListboxTestComponent should have an instantiate of AbstractListBox', () => {

		const systelabAbstractListComponentDEs = fixture.debugElement.query(By.directive(SystelabAbstractListboxComponent));

		expect(systelabAbstractListComponentDEs.componentInstance)
			.toBeDefined();
	});

	xit(' should inform selectedItem with the data passed to doClick when multiSelection and isDisabled have their default values', () => {
		const systelabAbstractListboxComponent = new SystelabAbstractListboxComponent();

		const testData = new TestData('2', 'Description-2');
		const row = {node: {data: testData}};
		systelabAbstractListboxComponent.doClick(row);

		expect(systelabAbstractListboxComponent.selectedItem.id)
			.toEqual('2');

		expect(systelabAbstractListboxComponent.selectedItem.description)
			.toEqual('Description-2');
	});

	xit(' should leave selectedItem as undefined when doClick is invoked and multiSelection is true', () => {
		const systelabAbstractListboxComponent = new SystelabAbstractListboxComponent();

		systelabAbstractListboxComponent.multipleSelection = true;
		const testData = new TestData('2', 'Description-2');
		const row = {node: {data: testData}};
		systelabAbstractListboxComponent.doClick(row);

		expect(systelabAbstractListboxComponent.selectedItem)
			.toBeUndefined();
	});

	xit(' should leave selectedItem as undefined when doClick is invoked and isDisabled is true', () => {
		const systelabAbstractListboxComponent = new SystelabAbstractListboxComponent();

		systelabAbstractListboxComponent.isDisabled = true;
		const testData = new TestData('2', 'Description-2');
		const row = {node: {data: testData}};
		systelabAbstractListboxComponent.doClick(row);

		expect(systelabAbstractListboxComponent.selectedItem)
			.toBeUndefined();
	});

	xit('should be possible to click on a row in a NOT multiple selection list', (done) => {
		fixture.whenStable()
			.then(() => {
				clickOnGridCell(fixture, 1);
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.selectedTestData.id)
							.toEqual('2');
						expect(fixture.componentInstance.selectedTestData.description)
							.toEqual('Description 2');
						done();
					});
			});
	});

	xit('should be NO possible to click on a row in a multiple selection list', (done) => {
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

	xit('should be possible to click on several rows in a multiple selection list', (done) => {
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
								// expect(fixtureMultiple.componentInstance.selectedTestDataList.length).toBe(2);
								done();
							});
					});
			});
	});
	it('should be possible to click on several rows in a multiple selection list', (done) => {
		fixtureMultiple.whenStable()
			.then(() => {
				selectOnGridRow(fixtureMultiple, 0);
				fixtureMultiple.whenStable()
					.then(() => {
						expect(fixtureMultiple.componentInstance.selectedTestDataList)
							.toBeDefined();
						// expect(fixtureMultiple.componentInstance.selectedTestDataList.length).toBe(2);
						done();
					});
			});
	});
});

function clickOnGridCell(fixture: ComponentFixture<AbstractListboxTestComponent>, cell: number) {
	const gridCellArray = fixture.debugElement.nativeElement.querySelectorAll('div[role="gridcell"]');
	gridCellArray[cell].click();
	fixture.detectChanges();
}

function selectOnGridRow(fixture: ComponentFixture<AbstractMultipleListboxTestComponent>, row: number) {
	// const gridRowArray = fixture.debugElement.nativeElement.querySelectorAll('span[class="ag-selection-checkbox"]');
	// const gridRowArray = fixture.debugElement.nativeElement.querySelectorAll('span[class="slab-grid-checkbox"]');
	// const gridRowArray = fixture.debugElement.nativeElement.querySelectorAll('span[class="slab-grid-checkbox-unchecked"]');
	// const gridRowArray = fixture.debugElement.nativeElement.querySelectorAll('div[role="row"]');
	// const gridRowArray = fixture.debugElement.nativeElement.querySelectorAll('div[class="ag-cell-wrapper"]');
	const gridRowArray = fixture.debugElement.nativeElement.querySelectorAll('div[ref="eCellWrapper"]');
	gridRowArray[row].click();
	fixture.detectChanges();
}
