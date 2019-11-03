import { AfterViewInit, Component, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { DialogHeaderComponent, DialogService, MessagePopupService } from '../modal';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu.component';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { ComboBoxInputRendererComponent } from '../combobox/renderer/combobox-input-renderer.component';
import { AbstractSearcherComponent } from './abstract-searcher.component';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { AbstractSearcher } from './abstract-searcher';
import { SearcherDialog, SearcherDialogParameters } from './searcher.dialog.component';
import { Observable, of } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { DialogBottomComponent } from '../modal/bottom/dialog-bottom.component';
import { SearcherTableComponent } from './searcher.table.component';
import { GridContextMenuComponent } from '../grid/contextmenu/grid-context-menu-component';
import { ContextMenuItemComponent } from '../contextmenu/context-menu-item.component';

export class TestData {
	constructor(public id: string, public code: string, public description: string) {
	}
}


@Directive({
	selector: '[systelabTooltip],[systelabTooltipHtml]'
})
export class MockTooltipDirective {
	@Input() public systelabTooltip: string;
	@Input() public systelabTooltipHtml: string;

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}
}

export class SystelabSearcherInnerComponent extends AbstractSearcher<TestData> {

	constructor() {
		super();
	}

	public getDialogParameters(): SearcherDialogParameters<TestData> {
		const searcherDialogParameters: SearcherDialogParameters<TestData> = new SearcherDialogParameters<TestData>();
		searcherDialogParameters.widthRelative = '66%';
		searcherDialogParameters.heightRelative = '66%';
		return searcherDialogParameters;
	}

	public getData(valueToSearch: string, page: number, pageNumber: number, useCode?: boolean): Observable<Array<TestData>> {
		const aCode = (useCode) ? valueToSearch : undefined;
		const aSearch = (useCode) ? undefined : valueToSearch;

		const array: TestData[] = [];
		array.push(new TestData('1', '1', '1'));
		array.push(new TestData('2', '2', '2'));
		array.push(new TestData('3', '3', '3'));
		return of(array);
	}

	public getTotalItems(): number {
		return 3;
	}

	public getColumnDefs(): Array<any> {
		return [
			{
				colId:      'code',
				headerName: 'COMMON_CODE',
				field:      'code',
				width:      300
			},
			{
				colId:      'description',
				headerName: 'COMMON_DESCRIPTION',
				field:      'description',
			}
		];
	}

	public getIdField(): string {
		return 'id';
	}

	public getCodeField(): string {
		return 'code';
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getTextForSearcherLabel(): string {
		return 'COMMON_DATA';
	}

	public getTitleForDialog(): string {
		return 'COMMON_DATA';
	}

	public getGridOptionsPreferencesPrefix(): string {
		return 'SystelabSearcherInnerComponent';
	}
}

@Component({
	selector:    'systelab-searcher-example',
	templateUrl: 'abstract-searcher.component.html'
})
export class SystelabSearcherComponent extends AbstractSearcherComponent<TestData> {
	constructor(public i18nService: I18nService, public dialogService: DialogService) {
		super(dialogService, new SystelabSearcherInnerComponent());
	}
}

@Component({
	selector: 'systelab-searcher-test',
	template: `
                <div class="container-fluid" style="height: 200px;">
                    <div class="row mt-1">
                        <label class="col-md-3 col-form-label" for="form-h-s">Test:</label>
                        <div class="col-md-9">
                            <systelab-searcher-example  [(code)]="code" [(id)]="id" [(description)]="description"></systelab-searcher-example>
                        </div>
                    </div>
                </div>
	          `
})
export class SearcherTestComponent {
	public id: string;
	public code: string;
	public description: string;
}

describe('Systelab Searcher', () => {
	let fixture: ComponentFixture<SearcherTestComponent>;

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
				MockTooltipDirective,
				DialogBottomComponent,
				DialogHeaderComponent,
				SearcherDialog,
				GridContextMenuCellRendererComponent,
				GridHeaderContextMenuComponent,
				ContextMenuItemComponent,
				ComboBoxInputRendererComponent,
				SystelabSearcherComponent,
				SearcherTestComponent,
				GridContextMenuComponent,
				SearcherTableComponent],
			providers:    [
				DialogService,
				MessagePopupService]
		});
		TestBed.overrideModule(BrowserDynamicTestingModule, {
			set: {
				entryComponents: [SearcherDialog]
			}
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearcherTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});
});
