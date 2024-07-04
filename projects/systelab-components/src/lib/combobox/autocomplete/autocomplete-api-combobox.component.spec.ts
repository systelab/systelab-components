import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef, Component, Renderer2, ViewChild } from '@angular/core';
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
import { GridApi, RowNode } from 'ag-grid-community';

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

	public testableResetComboSelection() {
		this.resetComboSelection();
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
	const gridApiSpy = jasmine.createSpyObj('GridApi', ['getDisplayedRowAtIndex']);
	const gridApiMock = {
		getDisplayedRowAtIndex: () => {
			return new RowNode<any>(null);
		}
	} as unknown as GridApi;

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
			providers: [
				Renderer2,
				ChangeDetectorRef,
			],
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
		const closeDropDownSpy = spyOn(AutocompleteApiComboBox.prototype, 'closeDropDown').and.callThrough();
		component.combobox.isDropdownOpened = true;
		component.combobox.doSearch(event);
		expect(closeDropDownSpy).toHaveBeenCalled();
	});

	it('should clear input text and do search to reset result table', () => {
		const event = new MouseEvent('click');
		component.combobox.filterInput = {
			nativeElement: jasmine.createSpyObj('nativeElement', ['focus'])
		}
		const doSearchTextSpy = spyOn<any>(AutocompleteApiComboBox.prototype, 'doSearchText').and.callThrough();
		component.combobox.clearText(event);
		expect(component.combobox.input.nativeElement.value).toBe('');
		expect(doSearchTextSpy).toHaveBeenCalled();
	});

	it('should reset combo selection', () => {
		component.combobox.id = 'id';
		component.combobox.description = 'description';
		component.combobox.code = 'code';
		component.combobox.currentSelected = {};
		const resetComboSelectionSpy = spyOn<any>(AutocompleteApiComboBox.prototype, 'resetComboSelection').and.callThrough();
		component.combobox.testableResetComboSelection();
		expect(component.combobox.id).toBe(undefined);
		expect(component.combobox.code).toBe(undefined);
		expect(component.combobox.description).toBe(undefined);
		expect(component.combobox.currentSelected).toBe(undefined);
	});

	it('should open dropdown and search text on input click when it is not disabled and not already opened', () => {
		component.combobox.isDisabled = false;
		component.combobox.isDropdownOpened = false;
		component.combobox.description = 'description test';
		component.combobox.filterInput = {
			nativeElement: jasmine.createSpyObj('nativeElement', ['focus'])
		}
		const openDropDownSpy = spyOn<any>(AutocompleteApiComboBox.prototype, 'openDropDown').and.callThrough();
		const doSearchTextSpy = spyOn<any>(AutocompleteApiComboBox.prototype, 'doSearchText');
		component.combobox.onInputClicked(new MouseEvent(''));
		expect(openDropDownSpy).toHaveBeenCalled();
		expect(doSearchTextSpy).toHaveBeenCalledWith('description test');
	});

	it('should close drop down on enter key event on cell', () => {
		const keyEvent = new KeyboardEvent('keydown', {key: KeyName.enter});
		const setSelectedMock = () => {}
		const event = {event: keyEvent, node: {setSelected: setSelectedMock}}
		const closeDropDownSpy = spyOn<any>(AutocompleteApiComboBox.prototype, 'closeDropDown').and.callThrough();
		component.combobox.onCellKeyDown(event);
		expect(closeDropDownSpy).toHaveBeenCalled();
	});

	it('should remove last character on backspace key event on cell', () => {
		const keyEvent = new KeyboardEvent('keydown', {key: KeyName.backspace});
		const event = {event: keyEvent}
		component.combobox.inputElement.nativeElement.value = 'aa'
		component.combobox.onCellKeyDown(event);
		expect(component.combobox.inputElement.nativeElement.value).toEqual('a');
	});

	it('should append new character on alphanumeric key event on cell', () => {
		const keyEvent = new KeyboardEvent('keydown', {key: 'a'});
		const event = {event: keyEvent}
		component.combobox.inputElement.nativeElement.value = 'a'
		component.combobox.onCellKeyDown(event);
		expect(component.combobox.inputElement.nativeElement.value).toEqual('aa');
	});

	it('onEnterDoSelect', () => {
		const getDisplayedRowAtIndexSpy = spyOn<any>(gridApiMock, 'getDisplayedRowAtIndex').and.callThrough();
		spyOn(RowNode.prototype, 'selectThisNode');
		component.combobox.gridOptions.api = gridApiMock;
		component.combobox.isDropdownOpened = true;
		component.combobox.onEnterDoSelect(new KeyboardEvent('keydown', {}));
		expect(getDisplayedRowAtIndexSpy).toHaveBeenCalled();
	});

	it('onEnterDoSelect', () => {
		const getDisplayedRowAtIndexSpy = spyOn<any>(gridApiMock, 'getDisplayedRowAtIndex').and.callThrough();
		spyOn(RowNode.prototype, 'selectThisNode');
		component.combobox.gridOptions.api = gridApiMock;
		component.combobox.isDropdownOpened = false;
		component.combobox.onEnterDoSelect(new KeyboardEvent('keydown', {}));
		expect(getDisplayedRowAtIndexSpy).not.toHaveBeenCalled();
	});

	it('should open dropdown and give inputFilter the focus', () => {
		component.combobox.filterInput = {
			nativeElement: jasmine.createSpyObj('nativeElement', ['focus'])
		}
		component.combobox['openDropDown']();
		expect(component.combobox.isDropdownOpened).toBeTrue();
		expect(component.combobox.filterInput.nativeElement.focus).toHaveBeenCalled();
	});

});
