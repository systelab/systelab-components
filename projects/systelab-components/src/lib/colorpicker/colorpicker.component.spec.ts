import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { DatePickerModule } from 'primeng/datepicker';
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
    styles: [],
    standalone: false
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
		DatePickerModule,
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

const clickOnDropDown = (fixture: ComponentFixture<ColorpickerTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-color-tag');
	button.click();
	fixture.detectChanges();
};

const clickOnColor = (fixture: ComponentFixture<ColorpickerTestComponent>, color: string) => {
	const button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + color + '\']');
	button.click();
	fixture.detectChanges();
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
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule,
        SystelabTranslateModule,
        SystelabPreferencesModule,
        AgGridModule,
        TestModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ColorpickerTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should select a color', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		clickOnColor(fixture, '#008000');
		await fixture.whenStable();
		expect(fixture.componentInstance.colorId).toEqual('#008000');
	});

	it('should select another color', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		clickOnColor(fixture, '#000080');
		await fixture.whenStable();
		expect(fixture.componentInstance.colorId).toEqual('#000080');
	});

	it('should call method change when a color is selected', async () => {
		spyOn(fixture.componentInstance, 'doChange');
		clickOnDropDown(fixture);
		fixture.detectChanges();
		await fixture.whenStable();
		clickOnColor(fixture, '#008000');
		fixture.detectChanges();
		await fixture.whenStable();
		expect(fixture.componentInstance.doChange)
			.toHaveBeenCalled();
	});

	it('should have the show the color set', async () => {
		fixture.componentInstance.colorId = '#0080FF';
		fixture.detectChanges();
		await fixture.whenStable();
		checkHasStyle(fixture, 'background-color: rgb(0, 128, 255)');
	});

});
