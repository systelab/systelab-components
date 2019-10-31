import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { DialogService, MessagePopupService } from '../modal';
import { Observable, of } from 'rxjs';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { AbstractApiComboBox } from './abstract-api-combobox.component';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu.component';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { ComboBoxInputRendererComponent } from './renderer/combobox-input-renderer.component';
import { GridTestComponent } from '../grid/abstract-api-grid.component.spec';

export class TestData {
	constructor(public id: string, public description: string) {
	}
}

@Component({
	selector:    'systelab-combobox-example',
	templateUrl: 'abstract-combobox.component.html'
})
export class SystelabComboboxComponent extends AbstractApiComboBox<TestData> {

	private totalItems: number;

	constructor(myRenderer: Renderer2, public chref: ChangeDetectorRef) {
		super(myRenderer, chref);
	}

	public getInstance() {
		return new TestData('', '');
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getCodeField(): string {
		return null;
	}

	public getIdField(): string {
		return 'id';
	}

	public getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<TestData>> {
		const values: TestData[] = [];
		values.push(new TestData('1', 'Description 1'));
		values.push(new TestData('2', 'Description 2'));
		values.push(new TestData('3', 'Description 3'));
		console.log('getData');
		this.totalItems = values.length;
		return of(values);
	}

	public getTotalItems(): number {
		return this.totalItems;
	}
}

@Component({
	selector: 'systelab-combobox-test',
	template: `
                <div class="container-fluid" style="height: 200px;">
                    <div class="row mt-1">
                        <label class="col-md-3 col-form-label" for="form-h-s">Test:</label>
                        <div class="col-md-9">
                            <systelab-combobox-example [(id)]="id" [(description)]="description"></systelab-combobox-example>
                        </div>
                    </div>
                </div>
	          `
})
export class ComboboxTestComponent {
	public id: string;
	public description: string;
}

fdescribe('Systelab Combobox', () => {
	let fixture: ComponentFixture<ComboboxTestComponent>;

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
				SystelabComboboxComponent,
				ComboboxTestComponent],
			providers:    [
				DialogService,
				MessagePopupService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		jasmine.clock().install();
		fixture = TestBed.createComponent(ComboboxTestComponent);
		fixture.detectChanges();
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should be able to show a popup with the values to chose', () => {
		clickButton(fixture);
		jasmine.clock().tick(10000);
		const rows = getNumberOfRows(fixture);
		expect(rows).toEqual(3);
	});

	it('should be able to select a value in the popup', () => {
		clickButton(fixture);
		jasmine.clock().tick(10000);
		clickOnGridCell(fixture, 2);
		jasmine.clock().tick(10000);
		expect(fixture.componentInstance.id).toEqual('3');
		expect(fixture.componentInstance.description).toEqual('Description 3');
	});
});

function clickButton(fixture: ComponentFixture<ComboboxTestComponent>) {
	fixture.debugElement.nativeElement.querySelector('.slab-dropdown-toogle').click();
	fixture.detectChanges();
}

function getNumberOfRows(fixture: ComponentFixture<ComboboxTestComponent>) {
	return fixture.debugElement.nativeElement.querySelectorAll('.ag-center-cols-container > .ag-row').length;
}

function clickOnGridCell(fixture: ComponentFixture<ComboboxTestComponent>, cell: number) {
	fixture.debugElement.nativeElement.querySelectorAll('div[role="gridcell"]')[cell].click();
	fixture.detectChanges();
}
