import { Component, NgModule } from '@angular/core';
import { async, ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
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
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { StylesUtilService } from '../utilities/styles.util.service';
import { ColorUtilService } from '../utilities/color.util.service';
import { LoadingService } from '../loading/loading.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/shared';
import { SliderModule } from 'primeng/slider';
import { AngularSplitModule } from 'angular-split';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';

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
		SliderModule,
		CalendarModule,
		TreeModule,
		DragDropModule,
		OverlayModule,
		ContextMenuModule,
		AngularSplitModule,
		SystelabTranslateModule,
		AgGridModule],
	entryComponents: [
		ColorCellRendererComponent,
	],
	providers:       [
		StylesUtilService,
		ColorUtilService,
		LoadingService
	]
})
class TestModule {
}

describe('Systelab Color picker', () => {
	let fixture: ComponentFixture<ColorpickerTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule,
				SystelabTranslateModule.forRoot(),
				SystelabPreferencesModule.forRoot(),
				AgGridModule.withComponents([
					GridContextMenuCellRendererComponent,
					GridHeaderContextMenuComponent
				]),
				TestModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ColorpickerTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should select a color', fakeAsync(() => {
		clickOnDropDown(fixture);
		clickOnColor(fixture, '#008000');
		expect(fixture.componentInstance.colorId)
			.toEqual('#008000');
	}));

	it('should select another color', fakeAsync(() => {
		clickOnDropDown(fixture);
		clickOnColor(fixture, '#000080');
		expect(fixture.componentInstance.colorId)
			.toEqual('#000080');
	}));

	it('should call method change when a color is selected', fakeAsync(() => {
		spyOn(fixture.componentInstance, 'doChange');
		clickOnDropDown(fixture);
		clickOnColor(fixture, '#008000');
		expect(fixture.componentInstance.doChange)
			.toHaveBeenCalled();
	}));

	it('should have the show the color set', fakeAsync(() => {
		fixture.componentInstance.colorId = '#0080FF';
		flush(); 	// To simulate the passage of time until the macrotask queue is empty. Check the fakeAsync in the test.
		fixture.detectChanges();
		checkHasStyle(fixture, 'background-color: rgb(0, 128, 255)');
	}));

});

function clickOnDropDown(fixture: ComponentFixture<ColorpickerTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-color-tag');
	button.click();
	fixture.detectChanges();
}

function clickOnColor(fixture: ComponentFixture<ColorpickerTestComponent>, color: string) {
	const button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + color + '\']');
	button.click();
	flush(); 	// To simulate the passage of time until the macrotask queue is empty. Check the fakeAsync in the test.
	fixture.detectChanges();
}

function checkHasStyle(fixture: ComponentFixture<ColorpickerTestComponent>, style: string) {
	expect(fixture.debugElement.nativeElement.querySelector('.slab-color-tag').getAttribute('style')).toContain(style);
}


