import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TwoListComponent } from './two-list.component';
import { TwoListItem } from './two-list-utilities';
import { SystelabTranslateModule } from 'systelab-translate';
import { DataFilterPipe } from './datafilter.pipe';
import { TwoListSortableListComponent } from './two-list-sortable-list.component';
import { SystelabPreferencesModule } from 'systelab-preferences';

@Component({
    selector: 'systelab-toggle-button-test',
    template: `
                <div>
                    <systelab-two-list [(available)]="availableColumns"
                                       [(visible)]="visibleColumns"
                                       [initialAvailableColumns]="initialAvailableColumns"
                                       [defaultVisibleColumns]="defaultVisibleColumns"
                                       [defaultHiddenColumns]="defaultHiddenColumns"></systelab-two-list>
                    <div>
						@for (column of availableColumns; track column.colId) {
                        	<label> {{column?.displayName}}</label>
						}
                    </div>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class TwoListTestComponent implements OnInit {
	public availableColumns: Array<TwoListItem> = [];
	public visibleColumns: Array<TwoListItem> = [];
	public initialAvailableColumns: Array<TwoListItem> = [];
	public defaultVisibleColumns: Array<TwoListItem> = [];
	public defaultHiddenColumns: Array<TwoListItem> = [];

	public ngOnInit() {
		this.initialAvailableColumns.push(new TwoListItem('Element 1', 'id1', false, true));
		this.initialAvailableColumns.push(new TwoListItem('Element 2', 'id2', false, true));
		this.initialAvailableColumns.push(new TwoListItem('Element 3', 'id3', false, true));
		this.initialAvailableColumns.push(new TwoListItem('Element 4', 'id4', false, true));

		this.availableColumns.push(new TwoListItem('Element 1', 'id1', false, true));
		this.availableColumns.push(new TwoListItem('Element 2', 'id2', false, true));
		this.availableColumns.push(new TwoListItem('Element 3', 'id3', false, true));

		this.visibleColumns.push(new TwoListItem('Element 4', 'id4', false, true));
	}

}

const checkIfListContains = (fixture: ComponentFixture<TwoListTestComponent>, list: string, value: string) => {
	const element = fixture.debugElement.nativeElement.querySelector('#' + list);
	expect(element.innerHTML)
		.toContain(value);
};

const checkIfListNotContains = (fixture: ComponentFixture<TwoListTestComponent>, list: string, value: string) => {
	const element = fixture.debugElement.nativeElement.querySelector('#' + list);
	expect(element.innerHTML)
		.not
		.toContain(value);
};

const clickButton = (fixture: ComponentFixture<TwoListTestComponent>, b: string) => {
	const element = fixture.debugElement.nativeElement.querySelector(b);
	element.click();
	fixture.detectChanges();
};

const clickButtonWithControlKey = (fixture: ComponentFixture<TwoListTestComponent>, b: string) => {
	const element = fixture.debugElement.nativeElement.querySelector(b);
	const event = new MouseEvent('click', {
		view:    window,
		bubbles: true,
		ctrlKey: true
	});
	element.dispatchEvent(event);
	fixture.detectChanges();
};

const clickButtonWithShiftKey = (fixture: ComponentFixture<TwoListTestComponent>, b: string) => {
	const element = fixture.debugElement.nativeElement.querySelector(b);
	const event = new MouseEvent('click', {
		view:     window,
		bubbles:  true,
		shiftKey: true
	});
	element.dispatchEvent(event);
	fixture.detectChanges();
};

describe('Systelab Two list', () => {
	let fixture: ComponentFixture<TwoListTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [TwoListComponent, TwoListTestComponent, TwoListSortableListComponent, DataFilterPipe],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule,
        TreeModule,
        SystelabTranslateModule,
        SystelabPreferencesModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TwoListTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial value', () => {
		checkIfListContains(fixture, 'left-list', 'Element 1');
		checkIfListContains(fixture, 'left-list', 'Element 2');
		checkIfListContains(fixture, 'left-list', 'Element 3');
		checkIfListContains(fixture, 'right-list', 'Element 4');
	});

	it('should all elements be visible after clicking button Add All', () => {
		clickButton(fixture, '#slab-add-all');
		checkIfListContains(fixture, 'right-list', 'Element 1');
		checkIfListContains(fixture, 'right-list', 'Element 2');
		checkIfListContains(fixture, 'right-list', 'Element 3');
		checkIfListContains(fixture, 'right-list', 'Element 4');

		checkIfListNotContains(fixture, 'left-list', 'Element 1');
		checkIfListNotContains(fixture, 'left-list', 'Element 2');
		checkIfListNotContains(fixture, 'left-list', 'Element 3');
		checkIfListNotContains(fixture, 'left-list', 'Element 4');
	});

	it('should none elements be visible after clicking button Remove All', () => {
		clickButton(fixture, '#slab-remove-all');
		checkIfListContains(fixture, 'left-list', 'Element 1');
		checkIfListContains(fixture, 'left-list', 'Element 2');
		checkIfListContains(fixture, 'left-list', 'Element 3');
		checkIfListContains(fixture, 'left-list', 'Element 4');
		checkIfListNotContains(fixture, 'right-list', 'Element 1');
		checkIfListNotContains(fixture, 'right-list', 'Element 2');
		checkIfListNotContains(fixture, 'right-list', 'Element 3');
		checkIfListNotContains(fixture, 'right-list', 'Element 4');
	});

	it('initially nothing should be selected', () => {
		const availableSelected = fixture.componentInstance.availableColumns.filter(item => item.isSelected).length;
		const visibleSelected = fixture.componentInstance.visibleColumns.filter(item => item.isSelected).length;
		expect(availableSelected + visibleSelected)
			.toEqual(0);
	});

	it('should be able to select an element by clicking', () => {
		clickButton(fixture, '#available0');
		const availableSelected = fixture.componentInstance.availableColumns.filter(item => item.isSelected).length;
		expect(availableSelected)
			.toEqual(1);
	});

	it('should be deselect an element when a new one is clicked', () => {
		clickButton(fixture, '#available0');
		clickButton(fixture, '#available1');
		const availableSelected = fixture.componentInstance.availableColumns.filter(item => item.isSelected).length;
		expect(availableSelected)
			.toEqual(1);
	});

	it('should be able to select multiple elements by clicking with control button pressed', () => {
		clickButtonWithControlKey(fixture, '#available0');
		clickButtonWithControlKey(fixture, '#available1');
		const availableSelected = fixture.componentInstance.availableColumns.filter(item => item.isSelected).length;
		expect(availableSelected)
			.toEqual(2);
	});

	it('should be able to select a range by clicking with shift button pressed', () => {
		clickButtonWithShiftKey(fixture, '#available0');
		clickButtonWithShiftKey(fixture, '#available2');
		const availableSelected = fixture.componentInstance.availableColumns.filter(item => item.isSelected).length;
		expect(availableSelected)
			.toEqual(3);
	});
	it('should be able to show only the size of filtered elements', () => {
		const component = fixture.componentInstance;

		component.availableColumns = [
			new TwoListItem('Element 1', 'id1', false, true),
			new TwoListItem('Element 2', 'id2', false, true),
			new TwoListItem('Element 3', 'id3', false, true)
		];

		fixture.detectChanges();

		const searchInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.slab-twolistdiv input.form-control');
		const seacrchLabel: HTMLLabelElement = fixture.debugElement.nativeElement.querySelector('.slab-twolistdiv label');
		const addAllText: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#slab-add-all');

		searchInput.value = '1';
		searchInput.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		checkIfListContains(fixture, 'left-list', 'Element 1');
		checkIfListNotContains(fixture, 'left-list', 'Element 2');
		checkIfListNotContains(fixture, 'left-list', 'Element 3');
		expect(seacrchLabel.innerHTML).toContain('1');
		expect(addAllText.innerHTML).toContain('1');
		clickButton(fixture, '#slab-add-all');
		checkIfListContains(fixture, 'right-list', 'Element 1');
		checkIfListNotContains(fixture, 'right-list', 'Element 2');
		checkIfListNotContains(fixture, 'right-list', 'Element 3');
	});

});
