import { Component, NgModule } from '@angular/core';
import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
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
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { TimeUnitSelectComponent } from './time-unit-combobox.component';
import { ComboBoxInputRendererComponent } from '../combobox/renderer/combobox-input-renderer.component';

@Component({
	selector: 'systelab-time-unit-select-test',
	template: `
                <div>
                    <systelab-time-unit-select [(id)]="id" [(description)]="description"
                                               [showHoursOption]="showHoursOption" (change)="doChange()"></systelab-time-unit-select>
                    <p>{{id}}</p>
                    <p>{{description}}</p>
                </div>

	          `,
	styles:   []
})
export class TimeUnitSelectTestComponent {

	public id;
	public description;
	public showHoursOption = false;

	public doChange() {
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
		AgGridModule],
	entryComponents: [],
	providers:       []
})
class TestModule {
}

describe('Systelab Time unit selector', () => {
	let fixture: ComponentFixture<TimeUnitSelectTestComponent>;

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
		fixture = TestBed.createComponent(TimeUnitSelectTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should select days', fakeAsync(() => {
		clickOnDropDown(fixture);
		clickOnRow(fixture, 'COMMON_DAYS');
		expect(fixture.componentInstance.id)
			.toEqual('COMMON_DAYS');
	}));

	it('should select months', fakeAsync(() => {
		clickOnDropDown(fixture);
		clickOnRow(fixture, 'COMMON_MONTHS');
		expect(fixture.componentInstance.id)
			.toEqual('COMMON_MONTHS');
	}));

	it('should select years', fakeAsync(() => {
		clickOnDropDown(fixture);
		clickOnRow(fixture, 'COMMON_YEARS');
		expect(fixture.componentInstance.id)
			.toEqual('COMMON_YEARS');
	}));
});

function clickOnDropDown(fixture: ComponentFixture<TimeUnitSelectTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-combo-label');
	button.click();
	flush();
	fixture.detectChanges();
}

function clickOnRow(fixture: ComponentFixture<TimeUnitSelectTestComponent>, id: string) {
	const button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + id + '\']');
	button.click();
	flush(); 	// To simulate the passage of time until the macrotask queue is empty. Check the fakeAsync in the test.
	fixture.detectChanges();
}

function setShowHours(fixture: ComponentFixture<TimeUnitSelectTestComponent>) {
	fixture.componentInstance.showHoursOption = true;
	fixture.detectChanges();
}
