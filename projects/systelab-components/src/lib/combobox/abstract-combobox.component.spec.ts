import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
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
							  <systelab-select #combobox [values]="valuesList" [filter]="filter"></systelab-select>
                          </div>
                      </div>
                  </div>
			  `
})
export class ComboboxTestComponent {
	@ViewChild('combobox') public combobox: ModulabSelect;
	public filter = false;
	public valuesList: TestData[] = [new TestData('1', 'Description 1'), new TestData('2', 'Description 2')];
}

describe('Systelab Select Combobox', () => {

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
				ModulabSelect,
				ComboboxTestComponent]
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

});
