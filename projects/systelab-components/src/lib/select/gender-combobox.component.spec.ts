import { Component, NgModule, provideZoneChangeDetection } from '@angular/core';
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
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
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
    styles: [],
    standalone: false
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
	declarations: [
		GenderSelect,
		GenderSelectTestComponent,
		GridContextMenuCellRendererComponent,
		ComboBoxInputRendererComponent,
		GridHeaderContextMenuComponent,
	],
	imports:      [
		CommonModule,
		FormsModule,
		SystelabTranslateModule,
		AgGridModule,
	],
})
class GenderSelectTestModule {
}


const clickOnDropDown = (fixture: ComponentFixture<GenderSelectTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-combo-label');
	button.click();
	fixture.detectChanges();
};

/**
 * The rows are rendered by ag-grid, which does it out of the change detection of the fixture, so
 * waiting for the fixture to be stable is not enough: the row has to be waited for.
 */
const waitForRow = async (fixture: ComponentFixture<GenderSelectTestComponent>, id: string): Promise<HTMLElement> => {
	for (let attempt = 0; attempt < 40; attempt++) {
		const row = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + id + '\']');
		if (row) {
			return row;
		}
		await new Promise(resolve => setTimeout(resolve, 25));
		fixture.detectChanges();
		await fixture.whenStable();
	}
	throw new Error(`The row ${id} has not been rendered`);
};

const clickOnRow = async (fixture: ComponentFixture<GenderSelectTestComponent>, id: string) => {
	const button = await waitForRow(fixture, id);
	button.click();
	fixture.detectChanges();
};

describe('Systelab Gender selector', () => {
	let fixture: ComponentFixture<GenderSelectTestComponent>;
	ModuleRegistry.registerModules([AllCommunityModule]);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				AgGridModule,
				GenderSelectTestModule,
			],
			providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GenderSelectTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();

	});

	it('should select all', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		await clickOnRow(fixture, 'A');
		await fixture.whenStable();
		expect(fixture.componentInstance.id).toEqual('A');

	});

	it('should select unknown', async () => {
		clickOnDropDown(fixture);
		fixture.detectChanges()
		await fixture.whenStable();
		await clickOnRow(fixture, 'U');
		fixture.detectChanges()
		await fixture.whenStable()
		expect(fixture.componentInstance.id)
			.toEqual('U');
	});

	it('should select male', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		await clickOnRow(fixture, 'M');
		await fixture.whenStable();
		expect(fixture.componentInstance.id).toEqual('M');

	});

	it('should select female', async () => {
		clickOnDropDown(fixture);
		await fixture.whenStable();
		await clickOnRow(fixture, 'F');
		await fixture.whenStable();
		expect(fixture.componentInstance.id).toEqual('F');
	});
});
