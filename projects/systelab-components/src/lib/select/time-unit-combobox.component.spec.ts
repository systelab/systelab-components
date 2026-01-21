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
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu-renderer.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { TimeUnitSelectComponent } from './time-unit-combobox.component';
import { ComboBoxInputRendererComponent } from '../combobox/renderer/combobox-input-renderer.component';

@Component({
    selector: 'systelab-time-unit-select-test',
    template: `
                <div>
                    <systelab-time-unit-select [(id)]="id" [(description)]="description"
                                               [showHoursOption]="showHoursOption"
											   [showWeeksOption]="showWeeksOption"
											   (change)="doChange()"></systelab-time-unit-select>
                    <p>{{id}}</p>
                    <p>{{description}}</p>
                </div>

	          `,
    styles: [],
    standalone: false
})
export class TimeUnitSelectTestComponent {

	public id;
	public description;
	public showHoursOption = false;
	public showWeeksOption = true;

	public doChange() {
		// Do change action
	}
}

@NgModule({
	declarations:    [TimeUnitSelectComponent,
		TimeUnitSelectTestComponent,
		GridContextMenuCellRendererComponent,
		ComboBoxInputRendererComponent,
		GridHeaderContextMenuComponent],
	imports:         [
		CommonModule,
		FormsModule,
		SystelabTranslateModule,
		AgGridModule]
})
class TestModule {
}

const clickOnDropDown = (fixture: ComponentFixture<TimeUnitSelectTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-combo-label');
	button.click();
	fixture.detectChanges();
};

const clickOnRow = (fixture: ComponentFixture<TimeUnitSelectTestComponent>, id: string) => {
	const button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + id + '\']');
	button.click();
	fixture.detectChanges();
};


describe('Systelab Time unit selector', () => {
	let fixture: ComponentFixture<TimeUnitSelectTestComponent>;

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
		fixture = TestBed.createComponent(TimeUnitSelectTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should select days', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		clickOnRow(fixture, 'COMMON_DAYS');
		await fixture.whenStable();
		expect(fixture.componentInstance.id).toEqual('COMMON_DAYS');

	});

	it('should select weeks', async () => {
			clickOnDropDown(fixture);
			await fixture.whenStable();
			clickOnRow(fixture, 'COMMON_WEEKS');
			await fixture.whenStable();
			expect(fixture.componentInstance.id).toEqual('COMMON_WEEKS');

		});

	it('should select months', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		clickOnRow(fixture, 'COMMON_MONTHS');
		await fixture.whenStable();
		expect(fixture.componentInstance.id).toEqual('COMMON_MONTHS');

	});

	it('should select years', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		clickOnRow(fixture, 'COMMON_YEARS');
		await fixture.whenStable();
		expect(fixture.componentInstance.id).toEqual('COMMON_YEARS');

	});
});
