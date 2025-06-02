import { ChangeDetectorRef, Component, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { Observable, of } from 'rxjs';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { AbstractApiComboBox } from './abstract-api-combobox.component';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu-renderer.component';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { ComboBoxInputRendererComponent } from './renderer/combobox-input-renderer.component';
import { Column, GridReadyEvent, RowNode } from 'ag-grid-community';

export class TestData {
	constructor(public id: string | number, public description: string) {
	}
}

@Component({
    selector: 'systelab-combobox-example',
    templateUrl: 'abstract-combobox.component.html',
    standalone: false
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

	public getData(): Observable<Array<TestData>> {
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
    selector: 'systelab-combobox-test',
    template: `
                <div class="container-fluid" style="height: 200px;">
                    <div class="row mt-1">
                        <label class="col-md-3 col-form-label" for="form-h-s">Test:</label>
                        <div class="col-md-9">
                            <systelab-combobox-example #combobox [(id)]="id" [(description)]="description"
													   [multipleSelection]="multipleSelection"
                                                       [(multipleSelectedItemList)]="multipleSelectedItemList">
							</systelab-combobox-example>
                        </div>
                    </div>
                </div>
	          `,
    standalone: false
})
export class ComboboxTestComponent {
	@ViewChild('combobox') public combobox: SystelabComboboxComponent;
	public id = '1';
	public description = 'Description 2';
	public multipleSelection = false;
	public multipleSelectedItemList = [
		new TestData('3', 'Description 3'),
		new TestData(4, 'Description 4')
	];
}

const clickButton = (fixture: ComponentFixture<ComboboxTestComponent>) => {
	fixture.debugElement.nativeElement.querySelector('.slab-dropdown-toogle')
		.click();
	fixture.detectChanges();
};

const getNumberOfRows = (fixture: ComponentFixture<ComboboxTestComponent>) =>
	fixture.debugElement.nativeElement.querySelectorAll('.ag-center-cols-container > .ag-row').length;

const clickOnGridCell = (fixture: ComponentFixture<ComboboxTestComponent>, cell: number) => {
	fixture.debugElement.nativeElement.querySelectorAll('div[role="gridcell"]')[cell].click();
	fixture.detectChanges();
};

let gridEventMock;

describe('Systelab Combobox', () => {
	let fixture: ComponentFixture<ComboboxTestComponent>;
	let component: ComboboxTestComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [
        GridContextMenuCellRendererComponent,
        GridHeaderContextMenuComponent,
        ComboBoxInputRendererComponent,
        SystelabComboboxComponent,
        ComboboxTestComponent
    ],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        ButtonModule,
        SystelabTranslateModule,
        SystelabPreferencesModule,
        AgGridModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ComboboxTestComponent);
		gridEventMock = {
			api: {
				getSelectedNodes: () => component.multipleSelectedItemList.map(data => ({data} as RowNode)),
				setGridOption: () => null
			}
		} as any;
		fixture.detectChanges();
		component = fixture.componentInstance;
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should be able to show a popup with the values to choose', async () => {
		clickButton(fixture);
		component.combobox.gridOptions.onGridReady = async (event) => {
			await fixture.whenRenderingDone();
			expect(getNumberOfRows(fixture)).toEqual(4);
		}
	});

	it('should be able to select a value in the popup', async () => {
		clickButton(fixture);
		component.combobox.gridOptions.onGridReady = async () => {
			await fixture.whenStable();
			clickOnGridCell(fixture, 2);
			await fixture.whenStable();
			expect(fixture.componentInstance.id)
				.toEqual('3');
			expect(fixture.componentInstance.description)
				.toEqual('Description 3');
		}
	});

	it('should check selected items', () => {
		fixture.componentInstance.multipleSelection = true;
		clickButton(fixture);
		const component = fixture.componentInstance;
		component.combobox.doGridReady(gridEventMock)
		const listSelectedItems = component.combobox.gridApi.getSelectedNodes().map(node => node.data);
		expect(listSelectedItems).toEqual(component.multipleSelectedItemList);

	});

	it('should check clear id', async () => {
		clickButton(fixture);
		component.combobox.gridOptions.onGridReady = async () => {
			await fixture.whenStable();
			fixture.componentInstance.id = undefined;
			clickButton(fixture);
			await fixture.whenStable();
			const component = fixture.componentInstance;
			const id = component.combobox.id;
			expect(id).toEqual(component.id);
		}
	});

});
