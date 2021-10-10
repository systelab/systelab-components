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

fdescribe('Systelab Gender selector', () => {
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
				AgGridModule.withComponents([
					GridContextMenuCellRendererComponent,
					GridHeaderContextMenuComponent
				]),
				GenderSelectTestModule]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GenderSelectTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();

	});

	it('should select all', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'A');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('A');
						done();
					});
			});
	});

	it('should select unknown', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'U');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('U');
						done();
					});
			});
	});

	it('should select male', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'M');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('M');
						done();

					});
			});
	});

	it('should select female', (done) => {
		clickOnDropDown(fixture);
		fixture.whenStable()
			.then(() => {
				clickOnRow(fixture, 'F');
				fixture.whenStable()
					.then(() => {
						expect(fixture.componentInstance.id)
							.toEqual('F');
						done();
					});
			});
	});
});

function clickOnDropDown(fixture: ComponentFixture<GenderSelectTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-combo-label');
	button.click();
	fixture.detectChanges();
}

function clickOnRow(fixture: ComponentFixture<GenderSelectTestComponent>, id: string) {
	const button = fixture.debugElement.nativeElement.querySelector('[row-id=\'' + id + '\']');
	button.click();
	fixture.detectChanges();
}
