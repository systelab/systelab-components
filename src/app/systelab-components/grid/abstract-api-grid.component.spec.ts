import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { AbstractApiGrid } from './abstract-api-grid.component';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogService, MessagePopupService } from '../modal';
import { Observable, of } from 'rxjs';
import { GridContextMenuOption } from './contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from './contextmenu/grid-context-menu-action-data';
import { GridContextMenuComponent } from './contextmenu/grid-context-menu-component';
import { ContextMenuItemComponent } from '../contextmenu/context-menu-item.component';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { GridContextMenuCellRendererComponent } from './contextmenu/grid-context-menu-cell-renderer.component';
import { GridHeaderContextMenuComponent } from './contextmenu/grid-header-context-menu.component';

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

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService, protected dialogService: DialogService) {
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
			colId:      'field2',
			headerName: 'Title Field 2',
			field:      'field2',
			width:      200
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
                <form class="position-relative" style="height: 200px;">
                    <systelab-grid #grid [menu]="getMenu()" (action)="doMenuAction($event)" [headerMenu]="getHeaderContextMenuOptions()"
                                   [multipleSelection]="true" (clickRow)="doSelect($event)"></systelab-grid>
                </form>
	          `
})
export class GridTestComponent {

	public doSelect(data: TestData): void {
	}

	public getMenu(): Array<GridContextMenuOption<TestData>> {
		return [
			new GridContextMenuOption('action1', 'Action 1', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action2', 'Action 2', (a) => this.doMenuAction(a)),
		];
	}

	public doMenuAction(action: GridContextMenuActionData<TestData>): void {
	}

	public getHeaderContextMenuOptions(): Array<GridContextMenuOption<string>> {
		return [
			new GridContextMenuOption('headeraction1', 'Header Action 1'),
			new GridContextMenuOption('headeraction2', 'Header Action 2')
		];
	}
}

describe('Systelab Grid', () => {
	let fixture: ComponentFixture<GridTestComponent>;

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
			declarations: [GridHeaderContextMenuComponent,
				GridContextMenuCellRendererComponent,
				GridContextMenuComponent,
				ContextMenuItemComponent,
				SystelabGridComponent,
				GridTestComponent],
			providers:    [
				DialogService,
				MessagePopupService]
		})
			.compileComponents();
	}));

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

	it('should have the right number of rows', async(() => {
		fixture.whenStable().then(() => {
			const rows = getNumberOfRows(fixture);
			expect(rows)
				.toEqual(3);
		});
	}));
});

function getNumberOfRows(fixture: ComponentFixture<GridTestComponent>) {
	console.log(fixture.debugElement.nativeElement);
	return fixture.debugElement.nativeElement.querySelectorAll('.ag-center-cols-container > .ag-row').length;
}

function getNumberOfColumns(fixture: ComponentFixture<GridTestComponent>) {
	return fixture.debugElement.nativeElement.querySelectorAll('.ag-header-cell').length;
}
