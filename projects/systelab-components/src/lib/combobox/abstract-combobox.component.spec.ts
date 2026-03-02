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
	selector:   'systelab-combobox-test',
	template:   `
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
	public valuesList: TestData[] = [new TestData(0, 'Description 0'), new TestData('1', 'Description 1'), new TestData('2', 'Description 2')];
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
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				AgGridModule],
			providers:    [provideHttpClient(withInterceptorsFromDi())]
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

	describe('transferFocusToGrid', () => {

		it('should deselect all rows when multipleSelection is false', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					const mockColumn = {isVisible: () => true};
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');
					combobox.gridApi.forEachNodeAfterFilterAndSort = jasmine.createSpy('forEachNodeAfterFilterAndSort');
					combobox.gridApi.getDisplayedRowCount = jasmine.createSpy('getDisplayedRowCount')
						.and
						.returnValue(3);
					combobox.gridApi.ensureIndexVisible = jasmine.createSpy('ensureIndexVisible');
					combobox.gridApi.getColumns = jasmine.createSpy('getColumns')
						.and
						.returnValue([mockColumn] as any);
					combobox.gridApi.ensureColumnVisible = jasmine.createSpy('ensureColumnVisible');
					combobox.gridApi.setFocusedCell = jasmine.createSpy('setFocusedCell');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.deselectAll)
						.toHaveBeenCalled();
					done();
				});
		});

		it('should not deselect rows when multipleSelection is true', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = true;

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.deselectAll)
						.not
						.toHaveBeenCalled();
					done();
				});
		});

		it('should find and focus on the row matching the current id', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;
					combobox._id = '1';

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					const mockColumn = {isVisible: () => true};
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');

					// Mock forEachNodeAfterFilterAndSort to simulate finding the row at index 1
					combobox.gridApi.forEachNodeAfterFilterAndSort = jasmine.createSpy('forEachNodeAfterFilterAndSort')
						.and
						.callFake((callback: any) => {
							// Simulate three rows, where the second one (index 1) matches the id '1'
							callback({data: {id: 0}}, 0);
							callback({data: {id: '1'}}, 1);
							callback({data: {id: '2'}}, 2);
						});

					combobox.gridApi.getDisplayedRowCount = jasmine.createSpy('getDisplayedRowCount')
						.and
						.returnValue(3);
					combobox.gridApi.ensureIndexVisible = jasmine.createSpy('ensureIndexVisible');
					combobox.gridApi.getColumns = jasmine.createSpy('getColumns')
						.and
						.returnValue([mockColumn] as any);
					combobox.gridApi.ensureColumnVisible = jasmine.createSpy('ensureColumnVisible');
					combobox.gridApi.setFocusedCell = jasmine.createSpy('setFocusedCell');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.forEachNodeAfterFilterAndSort)
						.toHaveBeenCalled();
					expect(combobox.gridApi.setFocusedCell)
						.toHaveBeenCalledWith(1, jasmine.anything());
					done();
				});
		});

		it('should ensure the selected row is visible when there are displayed rows', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;
					combobox._id = '1';

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');
					combobox.gridApi.forEachNodeAfterFilterAndSort = jasmine.createSpy('forEachNodeAfterFilterAndSort');
					combobox.gridApi.getDisplayedRowCount = jasmine.createSpy('getDisplayedRowCount')
						.and
						.returnValue(3);
					combobox.gridApi.ensureIndexVisible = jasmine.createSpy('ensureIndexVisible');
					combobox.gridApi.getColumns = jasmine.createSpy('getColumns')
						.and
						.returnValue([{isVisible: () => true}] as any);
					combobox.gridApi.ensureColumnVisible = jasmine.createSpy('ensureColumnVisible');
					combobox.gridApi.setFocusedCell = jasmine.createSpy('setFocusedCell');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.ensureIndexVisible)
						.toHaveBeenCalled();
					done();
				});
		});

		it('should not ensure row visibility when there are no displayed rows', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					const mockColumn = {isVisible: () => true};
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');
					combobox.gridApi.forEachNodeAfterFilterAndSort = jasmine.createSpy('forEachNodeAfterFilterAndSort');
					combobox.gridApi.getDisplayedRowCount = jasmine.createSpy('getDisplayedRowCount')
						.and
						.returnValue(0);
					combobox.gridApi.ensureIndexVisible = jasmine.createSpy('ensureIndexVisible');
					combobox.gridApi.getColumns = jasmine.createSpy('getColumns')
						.and
						.returnValue([mockColumn] as any);
					combobox.gridApi.ensureColumnVisible = jasmine.createSpy('ensureColumnVisible');
					combobox.gridApi.setFocusedCell = jasmine.createSpy('setFocusedCell');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.ensureIndexVisible)
						.not
						.toHaveBeenCalled();
					done();
				});
		});

		it('should scroll to the first visible column', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					const mockColumn = {isVisible: () => true};
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');
					combobox.gridApi.forEachNodeAfterFilterAndSort = jasmine.createSpy('forEachNodeAfterFilterAndSort');
					combobox.gridApi.getDisplayedRowCount = jasmine.createSpy('getDisplayedRowCount')
						.and
						.returnValue(3);
					combobox.gridApi.ensureIndexVisible = jasmine.createSpy('ensureIndexVisible');
					combobox.gridApi.getColumns = jasmine.createSpy('getColumns')
						.and
						.returnValue([mockColumn] as any);
					combobox.gridApi.ensureColumnVisible = jasmine.createSpy('ensureColumnVisible');
					combobox.gridApi.setFocusedCell = jasmine.createSpy('setFocusedCell');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.ensureColumnVisible)
						.toHaveBeenCalledWith(jasmine.anything());
					done();
				});
		});

		it('should set focus on the selected grid cell', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;
					combobox._id = '1';

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					const mockColumn = {isVisible: () => true};
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');
					combobox.gridApi.forEachNodeAfterFilterAndSort = jasmine.createSpy('forEachNodeAfterFilterAndSort');
					combobox.gridApi.getDisplayedRowCount = jasmine.createSpy('getDisplayedRowCount')
						.and
						.returnValue(3);
					combobox.gridApi.ensureIndexVisible = jasmine.createSpy('ensureIndexVisible');
					combobox.gridApi.getColumns = jasmine.createSpy('getColumns')
						.and
						.returnValue([mockColumn] as any);
					combobox.gridApi.ensureColumnVisible = jasmine.createSpy('ensureColumnVisible');
					combobox.gridApi.setFocusedCell = jasmine.createSpy('setFocusedCell');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.setFocusedCell)
						.toHaveBeenCalledWith(jasmine.any(Number), jasmine.anything());
					done();
				});
		});

		it('should focus on row index 0 when no id is set', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			clickButton(fixture);
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;
					combobox._id = undefined;

					// Ensure gridApi exists and has required methods
					if (!combobox.gridApi) {
						combobox.gridApi = {} as any;
					}
					const mockColumn = {isVisible: () => true};
					combobox.gridApi.deselectAll = jasmine.createSpy('deselectAll');
					combobox.gridApi.forEachNodeAfterFilterAndSort = jasmine.createSpy('forEachNodeAfterFilterAndSort');
					combobox.gridApi.getDisplayedRowCount = jasmine.createSpy('getDisplayedRowCount')
						.and
						.returnValue(3);
					combobox.gridApi.ensureIndexVisible = jasmine.createSpy('ensureIndexVisible');
					combobox.gridApi.getColumns = jasmine.createSpy('getColumns')
						.and
						.returnValue([mockColumn] as any);
					combobox.gridApi.ensureColumnVisible = jasmine.createSpy('ensureColumnVisible');
					combobox.gridApi.setFocusedCell = jasmine.createSpy('setFocusedCell');

					combobox['transferFocusToGrid']();

					expect(combobox.gridApi.setFocusedCell)
						.toHaveBeenCalledWith(0, jasmine.anything());
					done();
				});
		});

		it('should handle null gridApi gracefully', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;
					combobox.gridApi = null;

					expect(() => combobox['transferFocusToGrid']())
						.not
						.toThrow();
					done();
				});
		});

		it('should handle undefined gridApi gracefully', (done) => {
			const fixture = setup();
			fixture.detectChanges();
			fixture.whenStable()
				.then(() => {
					const combobox = fixture.componentInstance.combobox;
					combobox.multipleSelection = false;
					combobox.gridApi = undefined;

					expect(() => combobox['transferFocusToGrid']())
						.not
						.toThrow();
					done();
				});
		});

	});

});
