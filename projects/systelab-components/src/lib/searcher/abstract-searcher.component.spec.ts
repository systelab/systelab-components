import { Component, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu-renderer.component';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { ComboBoxInputRendererComponent } from '../combobox/renderer/combobox-input-renderer.component';
import { AbstractSearcherComponent } from './abstract-searcher.component';
import { I18nService } from 'systelab-translate';
import { AbstractSearcher } from './abstract-searcher';
import { SearcherDialog, SearcherDialogParameters } from './searcher.dialog.component';
import { Observable, of } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { DialogBottomComponent } from '../modal/bottom/dialog-bottom.component';
import { SearcherTableComponent } from './searcher.table.component';
import { GridContextMenuComponent } from '../grid/contextmenu/grid-context-menu-component';
import { ContextMenuItemComponent } from '../contextmenu/context-menu-item.component';
import { DialogService } from '../modal/dialog/dialog.service';
import { DialogHeaderComponent } from '../modal/header/dialog-header.component';
import { MessagePopupService } from '../modal/message-popup/message-popup.service';
import { ContextMenuSubmenuItemComponent } from '../contextmenu/context-menu-submenu-item.component';
import { GridHeaderContextMenu } from '../grid/contextmenu/grid-header-context-menu.component';

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

		if (aCode) {
			const array: TestData[] = [];
			array.push(new TestData('1', '1', '1'));
			return of(array);
		} else {
			const array: TestData[] = [];
			array.push(new TestData('1', '1', '1'));
			array.push(new TestData('2', '2', '2'));
			array.push(new TestData('3', '3', '3'));
			return of(array);
		}
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
                              <systelab-searcher-example [(code)]="code" [(id)]="id" [(description)]="description"></systelab-searcher-example>
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
				SystelabPreferencesModule,
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
				ContextMenuSubmenuItemComponent,
				ComboBoxInputRendererComponent,
				SystelabSearcherComponent,
				SearcherTestComponent,
				GridContextMenuComponent,
				GridHeaderContextMenu,
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

	it('should show a help dialog and should be closed', (done) => {
		clickHelpButton(fixture);
		fixture.whenStable()
			.then(() => {
				expect(isPopupVisible(fixture)).toBeTruthy();
				clickCloseButton(fixture);
				expect(isPopupVisible(fixture)).toBeFalsy();
				done();
			});
	});

	it('should select a value if code is entered', (done) => {
		enterText(fixture, '1');
		fixture.whenStable()
			.then(() => {
				expect(getDescription(fixture)).toEqual('1');
				done();
			});
	});
});

function clickHelpButton(fixture: ComponentFixture<SearcherTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('.btn');
	button.click();
	fixture.detectChanges();
}

function isPopupVisible(fixture: ComponentFixture<SearcherTestComponent>) {
	return (document.querySelector('.cdk-overlay-pane') !== null);
}

function clickCloseButton(fixture: ComponentFixture<SearcherTestComponent>) {
	const button: any = document.querySelector('.slab-dialog-header-button.slab-dialog-close');
	button.click();
	fixture.detectChanges();
}

function enterText(fixture: ComponentFixture<SearcherTestComponent>, text: string) {
	const inputComponent = fixture.debugElement.query(By.css('.form-control')).nativeElement;
	inputComponent.value = text;
	inputComponent.dispatchEvent(new Event('keydown'));
	inputComponent.dispatchEvent(new Event('input'));
	inputComponent.dispatchEvent(new Event('keyup'));
	fixture.detectChanges();
	inputComponent.dispatchEvent(new Event('blur'));
	fixture.detectChanges();
}

function getDescription(fixture: ComponentFixture<SearcherTestComponent>) {
	const descriptionComponent = fixture.debugElement.query(By.css('.text-truncate')).nativeElement;
	return descriptionComponent.innerText;
}
