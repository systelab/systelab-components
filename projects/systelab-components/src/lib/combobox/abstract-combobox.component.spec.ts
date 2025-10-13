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

	it('should be able to focus in search input when the dropdown is opened and filter input is true', (done) => {
		const fixture = setupWithFilter();
		spyOn(fixture.componentInstance.combobox.filterInput.nativeElement, 'focus');
		fixture.detectChanges();
		clickButton(fixture);
		fixture.whenStable()
			.then(() => {
				expect(fixture.componentInstance.combobox.filterInput.nativeElement.focus)
					.toHaveBeenCalled();
				done();
			});
	});

	it('should not be able to focus in search input when the dropdown is opened and filter input is false', (done) => {
		const fixture = setup();
		fixture.detectChanges();
		clickButton(fixture);
		fixture.whenStable()
			.then(() => {
				expect(fixture.componentInstance.combobox.filterInput)
					.toBeUndefined();
				done();
			});
	});

	it('should include an empty option when property withEmptyValue is set to true', (done) => {
		const fixture = setup();
		fixture.componentInstance.withEmptyValue = true;
		fixture.detectChanges();
		fixture.componentInstance.combobox.values = fixture.componentInstance.valuesList;
		fixture.detectChanges();
		clickButton(fixture);
		fixture.whenStable()
			.then(() => {
				fixture.detectChanges();
				expect(fixture.componentInstance.combobox._values.length)
					.toEqual(4);
				done();
			});
	});

	it('should not include an empty option when property withEmptyValue is set to false', (done) => {
		const fixture = setup();
		clickButton(fixture);
		fixture.detectChanges();
		fixture.whenStable()
			.then(() => {
				expect(fixture.componentInstance.combobox._values.length)
					.toEqual(3);
				done();
			});
	});

	it('should set delete icon to rubbish icon', (done) => {
		const fixture = setup();
		fixture.componentInstance.withEmptyValue = true;
		fixture.componentInstance.defaultIdValue = 1;
		fixture.componentInstance.withDeleteOption = true;
		fixture.componentInstance.deleteIconClass = 'icon-trash';
		fixture.detectChanges();
		clickButton(fixture);
		fixture.componentInstance.selectValue('1');
		fixture.detectChanges();
		fixture.whenStable()
			.then(() => {
				expect(fixture.debugElement.nativeElement.querySelectorAll('.icon-trash').length)
					.toEqual(1);
				done();
			});
	});

	it('should set the Description 0 element that has a zero number id', (done) => {
		const fixture = setup();
		fixture.componentInstance.withEmptyValue = true;
		fixture.componentInstance.defaultIdValue = '1';
		fixture.componentInstance.withDeleteOption = true;
		fixture.detectChanges();
		clickButton(fixture);
		fixture.componentInstance.selectValue(0);
		fixture.detectChanges();
		fixture.whenStable()
			.then(() => {
				expect(fixture.componentInstance.combobox._description)
					.toEqual('Description 0');
				done();
			});
	});

    it('should initialize inherited properties from ControlValueAccessorBase', () => {
        const fixture = TestBed.createComponent(ComboboxTestComponent);
        fixture.detectChanges();

        const combo = fixture.componentInstance.combobox;

        // This test indirectly verifies that the parent constructor (super) was called.
        // If the ControlValueAccessorBase constructor wasn't executed,
        // these properties and methods would not be defined in the child class.
        expect(combo).toBeDefined();
        expect(combo['onChange']).toBeDefined();
        expect(combo['onTouched']).toBeDefined();
        expect(typeof combo['writeValue']).toBe('function');
        expect(typeof combo['registerOnChange']).toBe('function');
        expect(typeof combo['registerOnTouched']).toBe('function');
    });

    it('should update isDisabled and trigger change detection when setDisabledState is called', () => {
        const fixture = TestBed.createComponent(ComboboxTestComponent);
        fixture.detectChanges();

        const combo = fixture.componentInstance.combobox;

        // Spy on ChangeDetectorRef.markForCheck to ensure it's called
        const markForCheckSpy = spyOn(combo['chRef'], 'markForCheck');

        // Call the method with "true" to disable the control
        combo.setDisabledState(true);

        // The component should reflect the disabled state
        expect(combo.isDisabled).toBeTrue();

        // Change detection should be triggered
        expect(markForCheckSpy).toHaveBeenCalled();

        // Now call it again with "false" to re-enable the control
        combo.setDisabledState(false);

        // The disabled state should be reverted
        expect(combo.isDisabled).toBeFalse();
    });

    it('should set id and update description/code when writeValue is called in single selection mode', () => {
        const fixture = TestBed.createComponent(ComboboxTestComponent);
        fixture.detectChanges();

        const combo = fixture.componentInstance.combobox;

        // Mock required methods and data
        spyOn(combo, 'getIdField').and.returnValue('id');
        spyOn(combo, 'setCodeDescriptionById');
        combo.multipleSelection = false;

        // Create a mock value representing the selected item
        const mockValue = { id: 123, description: 'Test Item' };

        // Call the method
        combo.writeValue(mockValue);

        // The id should be set correctly
        expect(combo.id).toBe(123);

        // And setCodeDescriptionById should be triggered
        expect(combo.setCodeDescriptionById).toHaveBeenCalled();
    });

    it('should set multipleSelectedItemList when writeValue is called in multiple selection mode', () => {
        const fixture = TestBed.createComponent(ComboboxTestComponent);
        fixture.detectChanges();

        const combo = fixture.componentInstance.combobox;

        combo.multipleSelection = true;
        const mockList = [
            { id: 1, description: 'Item 1' },
            { id: 2, description: 'Item 2' }
        ] as any; // force type compatibility

        combo.writeValue(mockList);

        expect(combo.multipleSelectedItemList as any).toEqual(mockList);
    });

    it('should call onChange with selectedRow when selection changes in single selection mode', () => {
        const fixture = TestBed.createComponent(ComboboxTestComponent);
        fixture.detectChanges();

        const combo = fixture.componentInstance.combobox;
        combo.multipleSelection = false;

        // Mock getSelectedRow() to return a fake selected row
        const mockRow = { id: '1', description: 'Test item' };
        spyOn(combo, 'getSelectedRow').and.returnValue(mockRow);

        // Spy on onChange callback
        combo['onChange'] = jasmine.createSpy('onChange');

        // Simulate event
        combo.onSelectionChanged({ source: 'rowClicked' });

        // Expect ControlValueAccessor callback to have been called
        expect(combo['onChange']).toHaveBeenCalledWith(mockRow);
    });

    it('should call onChange with multipleSelectedItemList when selection changes in multiple selection mode', () => {
        const fixture = TestBed.createComponent(ComboboxTestComponent);
        fixture.detectChanges();

        const combo = fixture.componentInstance.combobox;
        combo.multipleSelection = true;

        // Prepare mock data
        combo.multipleSelectedItemList = [
            { id: 1, description: 'Item 1' },
            { id: 2, description: 'Item 2' }
        ] as any; // force type compatibility

        // Spy on onChange
        combo['onChange'] = jasmine.createSpy('onChange');

        // Trigger the selection change logic for multiple mode
        combo.onSelectionChanged({ source: 'rowClicked' });

        // Verify callback is called with the full list
        expect(combo['onChange']).toHaveBeenCalledWith(combo.multipleSelectedItemList);
    });

});
