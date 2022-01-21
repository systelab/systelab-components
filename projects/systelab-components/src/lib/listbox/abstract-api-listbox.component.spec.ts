import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from '@angular/common/http';
import {SystelabTranslateModule} from 'systelab-translate';
import {Observable, of} from 'rxjs';
import {SystelabPreferencesModule} from 'systelab-preferences';
import {AgGridModule} from 'ag-grid-angular';
import {GridHeaderContextMenuComponent} from '../grid/contextmenu/grid-header-context-menu-renderer.component';
import {GridContextMenuCellRendererComponent} from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import {AbstractApiListBox} from './abstract-api-listbox.component';
import {ComboBoxInputRendererComponent} from '../combobox/renderer/combobox-input-renderer.component';

export class TestData {
	constructor(public id: string | number, public description: string) {
	}
}

@Component({
	selector: 'systelab-listbox-example',
	templateUrl: 'abstract-listbox.component.html'
})
export class SystelabListboxComponent extends AbstractApiListBox<TestData> {

	private totalItems = 0;

	constructor() {
		super();
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

	public getData(page: number, itemsPerPage: number): Observable<Array<TestData>> {
		const values: TestData[] = [];
		values.push(new TestData('1', 'Description 1'));
		values.push(new TestData('2', 'Description 2'));
		values.push(new TestData('3', 'Description 3'));
		values.push(new TestData(4, 'Description 4'));
		this.totalItems = values.length;
		return of(values);
	}

	public getTotalItems(): number {
		return this.totalItems;
	}
}

@Component({
	selector: 'systelab-listbox-test',
	template: `
        <div class="position-relative" style="height: 200px;">
            <systelab-listbox-example #listbox
                                      [multipleSelection]="true" [multipleSelectedItemList]="multipleSelectedItemList">
            </systelab-listbox-example>
        </div>
	`
})
export class ListboxTestComponent {
	public id = '1';
	public description = 'Description 1';
	public multipleSelectedItemList = [
		new TestData('3', 'Description 3'),
		new TestData(4, 'Description 4')
	]
	@ViewChild('listbox') public listbox: SystelabListboxComponent;

}

describe('Systelab Listbox', () => {
	let fixture: ComponentFixture<ListboxTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
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
				GridContextMenuCellRendererComponent,
				GridHeaderContextMenuComponent,
				ComboBoxInputRendererComponent,
				SystelabListboxComponent,
				ListboxTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ListboxTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});
	it('should check selected items', (done) => {
		fixture.whenStable().then(() => {
			const component = fixture.componentInstance;
			let listboxComponent = component.listbox;
			let listSelectedItems = listboxComponent.gridOptions.api.getSelectedNodes().map(node => {
				return node.data;
			});
			expect(listSelectedItems).toEqual(component.multipleSelectedItemList);
			done();
		})
	});
});
