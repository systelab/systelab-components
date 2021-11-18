import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { AbstractApiGrid } from './abstract-api-grid.component';
import { Observable, of } from 'rxjs';
import { GridContextMenuOption } from './contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from './contextmenu/grid-context-menu-action-data';
import { GridContextMenuComponent } from './contextmenu/grid-context-menu-component';
import { ContextMenuItemComponent } from '../contextmenu/context-menu-item.component';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { GridContextMenuCellRendererComponent } from './contextmenu/grid-context-menu-cell-renderer.component';
import { GridHeaderContextMenuComponent } from './contextmenu/grid-header-context-menu-renderer.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { DialogBottomComponent } from '../modal/bottom/dialog-bottom.component';
import { TwoListComponent } from '../twolist/two-list.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab.component';
import { TwoListSortableListComponent } from '../twolist/two-list-sortable-list.component';
import { DataFilterPipe } from '../twolist/datafilter.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridColumnOptionsDialog } from './options/grid-column-options-dialog.component';
import { I18nService } from 'systelab-translate';
import { PreferencesService } from 'systelab-preferences';
import { DialogService } from '../modal/dialog/dialog.service';
import { DialogHeaderComponent } from '../modal/header/dialog-header.component';
import { MessagePopupService } from '../modal/message-popup/message-popup.service';
import { ContextMenuSubmenuItemComponent } from '../contextmenu/context-menu-submenu-item.component';
import { GridHeaderContextMenu } from './contextmenu/grid-header-context-menu.component';

export class TestData {
	constructor(public field1: string, public field2: number) {
	}
}

@Component({
	selector:    'systelab-grid',
	templateUrl: 'abstract-grid.component.html'
})
export class SystelabGridComponent extends AbstractApiGrid<TestData> implements OnInit {

	private totalItems = 10;

	public constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
					   protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellSelection = false;
	}

	protected getColumnDefs(): Array<any> {
		return [{
			colId:      'field1',
			headerName: 'Title Field 1',
			field:      'field1',
			width:      220
		}, {
			colId:                    'field2',
			headerName:               'Title Field 2',
			field:                    'field2',
			headerComponentFramework: GridHeaderContextMenuComponent,
			headerComponentParams:    {headerName: 'Field2', headerData: 'field2'},
			width:                    200
		}];
	}

	public getTotalItems(): number {
		return this.totalItems;
	}

	protected getData(page: number, itemsPerPage: number): Observable<Array<TestData>> {
		const values: TestData[] = [];
		values.push(new TestData('Data 1', 1));
		values.push(new TestData('Data 2', 2));
		values.push(new TestData('Data 3', 3));
		this.totalItems = values.length;
		return of(values);
	}
}

@Component({
	selector: 'systelab-grid-test',
	template: `
                  <div class="position-relative" style="height: 200px;">
                      <systelab-grid #grid [menu]="getMenu()" (action)="doMenuAction($event)" [headerMenu]="getHeaderMenu()"
                                     [multipleSelection]="true" (clickRow)="doSelect($event)"></systelab-grid>
                  </div>
                  <systelab-button> (click)="grid.showOptions()">Options</systelab-button>
			  `
})
export class GridTestComponent {

	public selectedOptionID = '';
	public selectedTestData: TestData;

	public doSelect(data: TestData): void {
		this.selectedTestData = data;
	}

	public getMenu(): Array<GridContextMenuOption<TestData>> {
		const contextMenuSubOptions22: Array<GridContextMenuOption<TestData>> = [
			new GridContextMenuOption('action31', 'Action 31 son of 3', (b) => this.doMenuAction(b)),
			new GridContextMenuOption('action32', 'Action 32 son of 3', (b) => this.doMenuAction(b)),
			new GridContextMenuOption('action33', 'Action 33 son of 3', (b) => this.doMenuAction(b))
		];

		return [
			new GridContextMenuOption('action1', 'Action 1', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action2', 'Action 2', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action3', 'Action 3', null, () => true, false, undefined, null, null, contextMenuSubOptions22)

		];
	}

	public doMenuAction(action: GridContextMenuActionData<TestData>): void {
		this.selectedOptionID = action.actionId;
		this.selectedTestData = action.data;
	}

	public doHeaderMenuAction(action: GridContextMenuActionData<String>): void {
		this.selectedOptionID = action.actionId;
	}

	public getHeaderMenu(): Array<GridContextMenuOption<string>> {
		return [
			new GridContextMenuOption('headeraction1', 'Header Action 1', (data) => this.doHeaderMenuAction(data)),
			new GridContextMenuOption('headeraction2', 'Header Action 2'),
		];
	}
}

describe('Systelab Grid', () => {
	let fixture: ComponentFixture<GridTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				ButtonModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				AgGridModule.withComponents([
					GridContextMenuCellRendererComponent,
					GridHeaderContextMenuComponent
				])],
			declarations: [GridHeaderContextMenuComponent,
				GridContextMenuCellRendererComponent,
				GridContextMenuComponent,
				GridHeaderContextMenu,
				ContextMenuItemComponent,
				ContextMenuSubmenuItemComponent,
				SystelabGridComponent,
				GridTestComponent,
				GridColumnOptionsDialog,
				DialogHeaderComponent,
				DialogBottomComponent,
				TwoListComponent,
				TwoListSortableListComponent,
				TabsComponent,
				TabComponent,
				DataFilterPipe],
			providers:    [
				DialogService,
				MessagePopupService]
		});
		TestBed.overrideModule(BrowserDynamicTestingModule, {
			set: {
				entryComponents: [GridColumnOptionsDialog]
			}
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GridTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have the right number of columns', () => {
		expect(getNumberOfColumns(fixture))
			.toEqual(3);
	});

	it('should have the right number of rows', (done) => {
		fixture.whenStable()
			.then(() => {
				expect(getNumberOfRows(fixture))
					.toEqual(3);
				done();
			});
	});

	it('should be possible to select a row', (done) => {
		fixture.whenStable()
			.then(() => {
				const rows = clickOnGridCell(fixture, 5);
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.selectedTestData.field1)
							.toEqual('Data 2');
						expect(fixture.componentInstance.selectedTestData.field2)
							.toEqual(2);
						done();
					});
			});
	});

	it('should be able to show the menu on a row and select an option', (done) => {
		fixture.whenStable()
			.then(() => {
				const rows = clickMenuOnRow(fixture, 1);
				fixture.whenStable()
					.then(() => {
						clickOption(fixture, 1);
						expect(fixture.componentInstance.selectedOptionID)
							.toEqual('action2');
						expect(fixture.componentInstance.selectedTestData.field1)
							.toEqual('Data 1');
						expect(fixture.componentInstance.selectedTestData.field2)
							.toEqual(1);
						done();
					});
			});
	});

	it('should be able to show the menu on a row and select an option and then a suboption', (done) => {
		fixture.whenStable()
			.then(() => {
				const rows = clickMenuOnRow(fixture, 1);
				fixture.whenStable()
					.then(() => {
						clickOption(fixture, 2);
						expect(fixture.componentInstance.selectedOptionID)
							.toEqual('');

						fixture.whenStable().then(() => {
							clickOption(fixture, 5);
							expect(fixture.componentInstance.selectedOptionID)
								.toEqual('action33');
							done();
						});
					});
			});
	});


	it('should be able to show the menu on a header and select an option', (done) => {
		fixture.whenStable()
			.then(() => {
				const rows = clickMenuHeaderOnRow(fixture);
				fixture.whenStable()
					.then(() => {
						clickOption(fixture, 1);
						expect(fixture.componentInstance.selectedOptionID)
							.toEqual('headeraction2');
						done();
					});
			});
	});

	it('should be possible to select the options', (done) => {
		fixture.whenStable()
			.then(() => {
				const rows = clickOnGridCell(fixture, 5);
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.selectedTestData.field1)
							.toEqual('Data 2');
						expect(fixture.componentInstance.selectedTestData.field2)
							.toEqual(2);
						done();
					});
			});
	});

	it('should be possible to show a modal with the columns', (done) => {
		fixture.whenStable()
			.then(() => {
				const rows = clickOnOptionsButton(fixture);
				fixture.whenStable()
					.then(() => {
						expect(isModalVisible(fixture))
							.toBeTruthy();
						clickCloseButton(fixture, 'ID_optionsSubmitButton');
						fixture.whenStable()
							.then(() => {
								expect(isModalVisible(fixture))
									.toBeFalsy();
								done();
							});
					});
			});
	});
});

function getNumberOfRows(fixture: ComponentFixture<GridTestComponent>) {
	return fixture.debugElement.nativeElement.querySelectorAll('.ag-center-cols-container > .ag-row').length;
}

function clickMenuOnRow(fixture: ComponentFixture<GridTestComponent>, row: number) {
	fixture.debugElement.nativeElement.querySelectorAll('div[role="row"] * .slab-context-menu')[row].click();
	fixture.detectChanges();
}

function clickOnGridCell(fixture: ComponentFixture<GridTestComponent>, cell: number) {
	fixture.debugElement.nativeElement.querySelectorAll('div[role="gridcell"]')[cell].click();
	fixture.detectChanges();
}

function clickMenuHeaderOnRow(fixture: ComponentFixture<GridTestComponent>) {
	fixture.debugElement.nativeElement.querySelectorAll('.slab-grid-header-context-menu > .slab-context-menu')[0].click();
	fixture.detectChanges();
}

function clickOption(fixture: ComponentFixture<GridTestComponent>, option: number) {
	fixture.debugElement.nativeElement.querySelectorAll('li')[option].click();
	fixture.detectChanges();
}

function getNumberOfColumns(fixture: ComponentFixture<GridTestComponent>) {
	return fixture.debugElement.nativeElement.querySelectorAll('.ag-header-cell').length;
}

function clickOnOptionsButton(fixture: ComponentFixture<GridTestComponent>) {
	const button = fixture.debugElement.query(By.css('.btn')).nativeElement;
	button.click();
	fixture.detectChanges();
}

function isModalVisible(fixture: ComponentFixture<GridTestComponent>) {
	return (document.querySelector('.cdk-overlay-pane') !== null);
}

function clickCloseButton(fixture: ComponentFixture<GridTestComponent>, buttonId: string) {
	const button: any = document.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
}
