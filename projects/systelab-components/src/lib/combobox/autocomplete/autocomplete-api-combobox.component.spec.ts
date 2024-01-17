import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AutocompleteApiComboBox, KeyName } from './autocomplete-api-combobox.component';
import { Observable, of } from 'rxjs';
import { GridContextMenuCellRendererComponent } from '../../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { GridHeaderContextMenuComponent } from '../../grid/contextmenu/grid-header-context-menu-renderer.component';
import { ComboBoxInputRendererComponent } from '../renderer/combobox-input-renderer.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';

export class TestData {
	constructor(public id: string | number, public description: string) {
	}
}

@Component({
	selector:    'systelab-autocomplete-example',
	templateUrl: 'autocomplete-combobox.component.html'
})
export class SystelabAutocompleteComponent extends AutocompleteApiComboBox<TestData> {

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
		values.push(new TestData('4', 'Description 4'));
		this.totalItems = values.length;
		return of(values);
	}

	public getTotalItems(): number {
		return this.totalItems;
	}

	public override closeDropDown() {
		super.closeDropDown();
	}

	public override doSearch(event: any) {
		super.doSearch(event);
	}
}

@Component({
	selector: 'systelab-autocomplete-test',
	template: `
                <div class="container-fluid" style="height: 200px;">
                    <div class="row mt-1">
                        <label class="col-md-3 col-form-label" for="form-h-s">Test:</label>
                        <div class="col-md-9">
                            <systelab-autocomplete-example #combobox [(id)]="id" [(description)]="description"
													   [multipleSelection]="multipleSelection"
													   [withClearOption]="true"
                                                       [(multipleSelectedItemList)]="multipleSelectedItemList">
							</systelab-autocomplete-example>
                        </div>
                    </div>
                </div>
	          `
})
export class AutocompleteTestComponent {
	@ViewChild('combobox') public combobox: SystelabAutocompleteComponent;
	public id = '1';
	public description = 'Description 2';
	public multipleSelection = false;
	public multipleSelectedItemList = [
		new TestData('3', 'Description 3'),
		new TestData('4', 'Description 4')
	];
}

describe('AutocompleteApiAutocomplete', () => {
	let component: AutocompleteTestComponent;
	let fixture: ComponentFixture<AutocompleteTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				AgGridModule
			],
			declarations: [
				GridContextMenuCellRendererComponent,
				GridHeaderContextMenuComponent,
				ComboBoxInputRendererComponent,
				SystelabAutocompleteComponent,
				AutocompleteTestComponent
			],
			providers: [Renderer2, ChangeDetectorRef],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AutocompleteTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should not do search on shift or ctrl key press', () => {
		const event = new KeyboardEvent('keydown', { shiftKey: true });
		const doSearchText = spyOn<any>(AutocompleteApiComboBox.prototype, 'doSearchText');
		component.combobox.doSearch(event);
		expect(doSearchText).not.toHaveBeenCalled();
	});

	it('should close dropdown on escape, enter, or tab key press', () => {
		const event = new KeyboardEvent('keydown', { key: KeyName.escape });
		const closeDropDownSpy = spyOn(AutocompleteApiComboBox.prototype, 'closeDropDown');
		component.combobox.isDropdownOpened = true;
		component.combobox.doSearch(event);
		expect(closeDropDownSpy).toHaveBeenCalled();
	});

	it('should clear input text and do search to reset result table', () => {
		const event = new MouseEvent('click');
		const doSearchTextSpy = spyOn<any>(AutocompleteApiComboBox.prototype, 'doSearchText');
		component.combobox.clearText(event);
		expect(component.combobox.input.nativeElement.value).toBe('');
		expect(doSearchTextSpy).toHaveBeenCalled();
	});
});
