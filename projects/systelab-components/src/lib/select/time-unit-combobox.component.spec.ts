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
		AgGridModule]
})
class TestModule {
}

describe('Systelab Time unit selector', () => {
	let fixture: ComponentFixture<TimeUnitSelectTestComponent>;

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
				AgGridModule.withComponents([
					GridContextMenuCellRendererComponent,
					GridHeaderContextMenuComponent
				]),
				TestModule]
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

	it('should select days', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'COMMON_DAYS');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('COMMON_DAYS');
						done();
					});
			});
	});

	it('should select weeks', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'COMMON_WEEKS');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('COMMON_WEEKS');
						done();
					});
			});
	});

	it('should select months', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'COMMON_MONTHS');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('COMMON_MONTHS');
						done();

					});
			});
	});

	it('should select years', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'COMMON_YEARS');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('COMMON_YEARS');
						done();
					});
			});
	});
});

function clickOnDropDown(fixture: ComponentFixture<TimeUnitSelectTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-combo-label');
	button.click();
	fixture.detectChanges();
}

function clickOnRow(fixture: ComponentFixture<TimeUnitSelectTestComponent>, id: string) {
	const button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + id + '\']');
	button.click();
	fixture.detectChanges();
}

function setShowHours(fixture: ComponentFixture<TimeUnitSelectTestComponent>) {
	fixture.componentInstance.showHoursOption = true;
	fixture.detectChanges();
}
