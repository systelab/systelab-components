import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu-renderer.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { GenderSelect } from './gender-combobox.component';
import { ComboBoxInputRendererComponent } from '../combobox/renderer/combobox-input-renderer.component';

@Component({
	selector: 'systelab-gender-select-test',
	template: `
                  <div>
                      <systelab-gender-select [(id)]="id" [(description)]="description"
                                              [showAll]="showAll"
                                              (change)="doChange()"></systelab-gender-select>
                      <p>{{id}}</p>
                      <p>{{description}}</p>
                  </div>

			  `,
	styles:   []
})
export class GenderSelectTestComponent {

	public id;
	public description;

	public showAll = true;

	public doChange() {
		// Do change action
	}
}

@NgModule({
	declarations: [GenderSelect,
		GenderSelectTestComponent,
		GridContextMenuCellRendererComponent,
		ComboBoxInputRendererComponent,
		GridHeaderContextMenuComponent],
	imports:      [
		CommonModule,
		FormsModule,
		SystelabTranslateModule,
		AgGridModule]
})
class GenderSelectTestModule {
}


const closeDropdown = async (fixture: ComponentFixture<GenderSelectTestComponent>) => {
	const overlay = document.querySelector('.cdk-overlay-backdrop');
	if (overlay) {
		(overlay as HTMLElement).click();
		fixture.detectChanges();
		await fixture.whenStable();
		await new Promise(resolve => setTimeout(resolve, 100));
	}
};

const clickOnDropDown = async (fixture: ComponentFixture<GenderSelectTestComponent>) => {
	// Close any open dropdown first
	await closeDropdown(fixture);

	const button = fixture.debugElement.nativeElement.querySelector('.slab-combo-label');
	button.click();
	fixture.detectChanges();
	await fixture.whenStable();
	// Wait for ag-Grid to render
	await new Promise(resolve => setTimeout(resolve, 300));
};

const clickOnRow = async (fixture: ComponentFixture<GenderSelectTestComponent>, id: string) => {
	// Retry logic to wait for element to be available
	let attempts = 0;
	let button = null;

	while (!button && attempts < 20) {
		await new Promise(resolve => setTimeout(resolve, 100));
		button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + id + '\']');
		attempts++;
	}

	if (!button) {
		throw new Error(`Element with row-id="${id}" not found after ${attempts * 100}ms`);
	}

	button.click();
	fixture.detectChanges();
	await fixture.whenStable();
};

describe('Systelab Gender selector', () => {
	let fixture: ComponentFixture<GenderSelectTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				AgGridModule,
				GenderSelectTestModule]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GenderSelectTestComponent);
		fixture.detectChanges();
	});

	afterEach(async () => {
		// Ensure dropdown is closed after each test
		await closeDropdown(fixture);
		// Destroy the fixture to clean up ag-Grid instances
		if (fixture) {
			fixture.destroy();
		}
		// Clean up any remaining overlays
		const overlays = document.querySelectorAll('.cdk-overlay-container');
		overlays.forEach(overlay => overlay.remove());
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();

	});

	it('should select all', async () => {
		await clickOnDropDown(fixture);
		await clickOnRow(fixture, 'A');
		expect(fixture.componentInstance.id).toEqual('A');
	});

	it('should select unknown', async () => {
		await clickOnDropDown(fixture);
		await clickOnRow(fixture, 'U');
		expect(fixture.componentInstance.id).toEqual('U');
	});

	it('should select male', async () => {
		await clickOnDropDown(fixture);
		await clickOnRow(fixture, 'M');
		expect(fixture.componentInstance.id).toEqual('M');
	});

	it('should select female', async () => {
		await clickOnDropDown(fixture);
		await clickOnRow(fixture, 'F');
		expect(fixture.componentInstance.id).toEqual('F');
	});
});
