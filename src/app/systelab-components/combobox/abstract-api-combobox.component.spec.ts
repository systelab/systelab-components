import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { DialogService, MessagePopupService } from '../modal';
import { Observable, of } from 'rxjs';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { AbstractApiComboBox } from './abstract-api-combobox.component';
import { ShowcaseCities } from '../../showcase/components/combobox/showcase-autocomplete-combobox.component';
import { GridHeaderContextMenuComponent } from '../grid/contextmenu/grid-header-context-menu.component';
import { GridContextMenuCellRendererComponent } from '../grid/contextmenu/grid-context-menu-cell-renderer.component';
import { ComboBoxInputRendererComponent } from './renderer/combobox-input-renderer.component';

export class TestData {
	constructor(public id: string, public description: string) {
	}
}

@Component({
	selector:    'systelab-combobox-example',
	templateUrl: 'abstract-combobox.component.html'
})
export class SystelabComboboxComponent extends AbstractApiComboBox<TestData> {

	private totalItems = 0;

	constructor(myRenderer: Renderer2, public chref: ChangeDetectorRef) {
		super(myRenderer, chref);
	}

	public getInstance() {
		return new TestData('', '');
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getCodeField(): string {
		return null;
	}

	public getIdField(): string {
		return 'id';
	}

	public getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<TestData>> {
		const values: TestData[] = [];
		values.push(new TestData('1', 'Description 1'));
		values.push(new TestData('2', 'Description 2'));
		values.push(new TestData('3', 'Description 3'));
		this.totalItems = values.length;
		return of(values);
	}

	public getTotalItems(): number {
		return this.totalItems;
	}
}

@Component({
	selector: 'systelab-combobox-test',
	template: `
                <systelab-combobox-example [(id)]="id"
                                   [emptyElement]="true"
                                   [description]="description">

                </systelab-combobox-example>
	          `
})
export class ComboboxTestComponent {
	public id = '1';
	public description = 'Description 1';
}

describe('Systelab Combobox', () => {
	let fixture: ComponentFixture<ComboboxTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule.forRoot(),
				AgGridModule.withComponents([
					GridContextMenuCellRendererComponent,
					GridHeaderContextMenuComponent
				])],
			declarations: [
				GridContextMenuCellRendererComponent,
				GridHeaderContextMenuComponent,
				ComboBoxInputRendererComponent,
				SystelabComboboxComponent,
				ComboboxTestComponent],
			providers:    [
				DialogService,
				MessagePopupService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ComboboxTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});
});
