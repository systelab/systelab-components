import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu-renderer.component';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { ComboBoxInputRendererComponent } from './renderer/combobox-input-renderer.component';
import { ModulabSelect } from '../select/select.component';

export class TestData {
	constructor(public id: string | number, public description: string) {
	}
}

@Component({
    selector: 'systelab-combobox-test',
    template: `
                  <div class="container-fluid" style="height: 200px;">
                      <div class="row mt-1">
                          <label class="col-md-3 col-form-label" for="form-h-s">Test:</label>
                          <div class="col-md-9">
                              <systelab-select #combobox [withDeleteOption]="withDeleteOption"
                                               [defaultIdValue]="defaultIdValue"
                                               [withEmptyValue]="withEmptyValue"
                                               [values]="valuesList"
                                               [filter]="filter"
                                               [deleteIconClass]="deleteIconClass">
                              </systelab-select>
                          </div>
                      </div>
                  </div>
			  `,
    standalone: false
})
export class ComboboxTestComponent {
	@ViewChild('combobox') public combobox: ModulabSelect;
	public filter = false;
	public valuesList: TestData[] = [new TestData(0, 'Description 0'),new TestData('1', 'Description 1'), new TestData('2', 'Description 2')];
	public withEmptyValue = false;
	public deleteIconClass = 'icon-close';
	public defaultIdValue = undefined;
	public withDeleteOption = false;

	public selectValue(id: string | number): void {
		this.combobox.id = id;
	}

}

describe('Systelab Select Combobox', () => {

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [
        GridContextMenuCellRendererComponent,
        GridHeaderContextMenuComponent,
        ComboBoxInputRendererComponent,
        ModulabSelect,
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

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	const setup = () => {
		const fixture = TestBed.createComponent(ComboboxTestComponent);
		fixture.componentInstance.filter = false;
		fixture.detectChanges();
		return fixture;
	};

	const setupWithFilter = () => {
		const fixture = TestBed.createComponent(ComboboxTestComponent);
		fixture.componentInstance.filter = true;
		fixture.detectChanges();
		return fixture;
	};

	const clickButton = (fixture: ComponentFixture<ComboboxTestComponent>) => {
		fixture.debugElement.nativeElement.querySelector('.slab-dropdown-toogle')
			.click();
		fixture.detectChanges();
	};

	it('should instantiate', () => {
		const fixture = setup();
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should be able to focus in search input when the dropdown is opened and filter input is true', async ()  => {
		const fixture = setupWithFilter();
		spyOn(fixture.componentInstance.combobox.filterInput.nativeElement, 'focus');
		fixture.detectChanges();
		clickButton(fixture);
		await fixture.whenStable();
		expect(fixture.componentInstance.combobox.filterInput.nativeElement.focus).toHaveBeenCalled();
	});

	it('should not be able to focus in search input when the dropdown is opened and filter input is false', async () => {
		const fixture = setup();
		fixture.detectChanges();
		clickButton(fixture);
		await fixture.whenStable();
		expect(fixture.componentInstance.combobox.filterInput).toBeUndefined();
	});

	it('should include an empty option when property withEmptyValue is set to true', async () => {
		const fixture = setup();
		fixture.componentInstance.withEmptyValue = true;
		fixture.detectChanges();
		fixture.componentInstance.combobox.values = fixture.componentInstance.valuesList;
		fixture.detectChanges();
		clickButton(fixture);
		await fixture.whenStable();
		fixture.detectChanges();
		expect(fixture.componentInstance.combobox._values.length).toEqual(4);

	});

	it('should not include an empty option when property withEmptyValue is set to false', async () => {
		const fixture = setup();
		clickButton(fixture);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(fixture.componentInstance.combobox._values.length).toEqual(3);

	});

	it('should set delete icon to rubbish icon', async ()  => {
		const fixture = setup();
		fixture.componentInstance.withEmptyValue = true;
		fixture.componentInstance.defaultIdValue = 1;
		fixture.componentInstance.withDeleteOption = true;
		fixture.componentInstance.deleteIconClass = 'icon-trash';
		fixture.detectChanges();
		clickButton(fixture);
		fixture.componentInstance.selectValue('1');
		fixture.detectChanges();
		await fixture.whenStable();
		expect(fixture.debugElement.nativeElement.querySelectorAll('.icon-trash').length).toEqual(1);

	});

	it('should set the Description 0 element that has a zero number id', async () => {
		const fixture = setup();
		fixture.componentInstance.withEmptyValue = true;
		fixture.componentInstance.defaultIdValue = '1';
		fixture.componentInstance.withDeleteOption = true;
		fixture.detectChanges();
		clickButton(fixture);
		fixture.componentInstance.selectValue(0);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(fixture.componentInstance.combobox._description).toEqual('Description 0');
	});

});
