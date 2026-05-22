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
import { ColorComboBox } from './colorpicker.component';
import { ColorCellRendererComponent } from './color-cell-renderer.component';
import { ComboBoxInputRendererComponent } from '../combobox/renderer/combobox-input-renderer.component';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu-renderer.component';
import { AgGridModule } from 'ag-grid-angular';
import { StylesUtilService } from '../utilities/styles.util.service';
import { ColorUtilService } from '../utilities/color.util.service';
import { LoadingService } from '../loading/loading.service';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SharedModule } from 'primeng/api';

@Component({
	selector: 'systelab-colorpicker-test',
	template: `
                <div>
                    <systelab-colorpicker [(id)]="colorId" [(description)]="colorValue" (change)="doChange()"></systelab-colorpicker>
                    <p>{{colorId}}</p>
                    <p>{{colorValue}}</p>
                </div>

	          `,
	styles:   []
})
export class ColorpickerTestComponent {

	public colorId;
	public colorValue;

	public doChange() {
		// Do change action
	}
}

@NgModule({
	declarations:    [ColorComboBox,
		ColorpickerTestComponent,
		ColorCellRendererComponent,
		ComboBoxInputRendererComponent,
		GridContextMenuCellRendererComponent,
		GridHeaderContextMenuComponent],
	imports:         [
		CommonModule,
		FormsModule,
		SharedModule,
		CalendarModule,
		TreeModule,
		DragDropModule,
		OverlayModule,
		ContextMenuModule,
		AngularSplitModule,
		SystelabTranslateModule,
		AgGridModule],
	providers:       [
		StylesUtilService,
		ColorUtilService,
		LoadingService
	]
})
class TestModule {
}

const closeDropdown = async (fixture: ComponentFixture<ColorpickerTestComponent>) => {
	const overlay = document.querySelector('.cdk-overlay-backdrop');
	if (overlay) {
		(overlay as HTMLElement).click();
		fixture.detectChanges();
		await fixture.whenStable();
		await new Promise(resolve => setTimeout(resolve, 200));
	}
};

const clickOnDropDown = async (fixture: ComponentFixture<ColorpickerTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-color-tag');
	button.click();
	fixture.detectChanges();
	await fixture.whenStable();
	// Wait longer for ag-Grid to render
	await new Promise(resolve => setTimeout(resolve, 500));
};

const clickOnColor = async (fixture: ComponentFixture<ColorpickerTestComponent>, color: string) => {
	// Retry logic to wait for element to be available
	let attempts = 0;
	let button = null;

	while (!button && attempts < 30) {
		await new Promise(resolve => setTimeout(resolve, 150));
		button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + color + '\']');
		attempts++;
	}

	if (!button) {
		throw new Error(`Element with row-id="${color}" not found after ${attempts * 150}ms`);
	}

	button.click();
	fixture.detectChanges();
	await fixture.whenStable();
};

const checkHasStyle = (fixture: ComponentFixture<ColorpickerTestComponent>, style: string) => {
	expect(fixture.debugElement.nativeElement.querySelector('.slab-color-tag')
		.getAttribute('style'))
		.toContain(style);
};

describe('Systelab Color picker', () => {
	let fixture: ComponentFixture<ColorpickerTestComponent>;

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
				TestModule]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ColorpickerTestComponent);
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

	it('should select a color', async () => {
		await clickOnDropDown(fixture);
		await clickOnColor(fixture, '#008000');
		expect(fixture.componentInstance.colorId).toEqual('#008000');
	});

	it('should select another color', async () => {
		await clickOnDropDown(fixture);
		await clickOnColor(fixture, '#000080');
		expect(fixture.componentInstance.colorId).toEqual('#000080');
	});

	it('should call method change when a color is selected', async () => {
		spyOn(fixture.componentInstance, 'doChange');
		await clickOnDropDown(fixture);
		await clickOnColor(fixture, '#008000');
		expect(fixture.componentInstance.doChange).toHaveBeenCalled();
	});

	it('should have the show the color set', async () => {
		fixture.componentInstance.colorId = '#0080FF';
		fixture.detectChanges();
		await fixture.whenStable();
		checkHasStyle(fixture, 'background-color: rgb(0, 128, 255)');
	});

});
