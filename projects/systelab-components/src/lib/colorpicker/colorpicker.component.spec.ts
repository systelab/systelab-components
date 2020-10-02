import { Component, NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { SliderModule } from 'primeng/slider';
import { AngularSplitModule } from 'angular-split';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SharedModule } from 'primeng';

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
				SystelabTranslateModule,
				SystelabPreferencesModule,
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

	it('should select a color', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnColor(fixture, '#008000');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.colorId)
							.toEqual('#008000');
						done();
					});
			});
	});

	it('should select another color', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnColor(fixture, '#000080');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.colorId)
							.toEqual('#000080');
						done();
					});
			});
	});

	it('should call method change when a color is selected', (done) => {
		spyOn(fixture.componentInstance, 'doChange');
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnColor(fixture, '#008000');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.doChange)
							.toHaveBeenCalled();
						done();
					});
			});
	});

	it('should have the show the color set', (done) => {
		fixture.componentInstance.colorId = '#0080FF';
		fixture.detectChanges();
		fixture.whenStable()
			.then(() => {
				checkHasStyle(fixture, 'background-color: rgb(0, 128, 255)');
				done();
			});
	});

});

function clickOnDropDown(fixture: ComponentFixture<ColorpickerTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-color-tag');
	button.click();
	fixture.detectChanges();
}

function clickOnColor(fixture: ComponentFixture<ColorpickerTestComponent>, color: string) {
	const button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + color + '\']');
	button.click();
	fixture.detectChanges();
}

function checkHasStyle(fixture: ComponentFixture<ColorpickerTestComponent>, style: string) {
	expect(fixture.debugElement.nativeElement.querySelector('.slab-color-tag')
		.getAttribute('style'))
		.toContain(style);
}


