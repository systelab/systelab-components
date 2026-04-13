import { Component, provideZoneChangeDetection } from '@angular/core';
import { AbstractSortableListComponent } from './abstract-sortable-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { CdkDrag, CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { DataFilterPipe } from '../twolist/datafilter.pipe';

const clickWithNoKey = (fixture: ComponentFixture<SortableListTestComponent>, b: string) => {
	const element = fixture.debugElement.nativeElement.querySelector(b);
	element.click();
	fixture.detectChanges();
};

const clickWithControlKey = (fixture: ComponentFixture<SortableListTestComponent>, b: string) => {
	const element = fixture.debugElement.nativeElement.querySelector(b);
	const event = new MouseEvent('click', {
		view:    window,
		bubbles: true,
		ctrlKey: true
	});
	element.dispatchEvent(event);
	fixture.detectChanges();
};

const pressDeleteKey = (fixture: ComponentFixture<SortableListTestComponent>, b: string) => {
	const element = fixture.debugElement.nativeElement.querySelector(b);
	const event = new KeyboardEvent('keydown', {code: 'Delete'});
	element.dispatchEvent(event);
	fixture.detectChanges();
};

const createEvent = (previousIndex: number, currentIndex: number): CdkDragDrop<TestData[], TestData[]> => (
	{
		previousIndex,
		currentIndex,
		item:                   undefined,
		container:              undefined,
		previousContainer:      undefined,
		isPointerOverContainer: true,
		distance:               {x: 0, y: 0},
		dropPoint:              undefined,
		event:                  new MouseEvent(null)
	}
);

const createInContainerEvent = (containerId: string, data: TestData[], fromIndex: number,
								toIndex: number): CdkDragDrop<TestData[], TestData[]> => {
	const event = createEvent(fromIndex, toIndex);
	const container: any = {id: containerId, data};
	event.container = container;
	event.previousContainer = event.container;
	event.item = {data: data[fromIndex]} as CdkDrag<TestData>;
	return event;
};

const dragAndDropElement = (fixture: ComponentFixture<SortableListTestComponent>, fromIndex: number, toIndex: number) => {
	const dragDropEvent = createInContainerEvent('elements', fixture.componentInstance.elementsList, fromIndex, toIndex);
	fixture.componentInstance.dropped(dragDropEvent);
	fixture.detectChanges();
};

export class TestData {
	constructor(public id: string | number, public description: string, public isSelected = false) {
	}
}

@Component({
    selector: 'systelab-sortable-list-test',
    templateUrl: 'abstract-sortable-list.component.html',
    standalone: false
})
export class SortableListTestComponent extends AbstractSortableListComponent<TestData> {

	constructor() {
		super();
		this.deleteWithSupr = true;
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getSelectionField(): string {
		return 'isSelected';
	}

	public getIcon(): string {
		return '';
	}

}

describe('Systelab abstract sortable list', () => {
	let fixture: ComponentFixture<SortableListTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				SortableListTestComponent,
				DataFilterPipe,
			],
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				DragDropModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
			],
			providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SortableListTestComponent);
		fixture.componentInstance.elementsList = [new TestData('1', 'Description 1'), new TestData('2', 'Description 2'),
			new TestData('3', 'Description 3')];
		fixture.componentInstance.deleteWithSupr = true;
		fixture.detectChanges();
	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('initially nothing should be selected', () => {
		const selected = fixture.componentInstance.elementsList.filter(item => item.isSelected).length;
		expect(selected)
			.toEqual(0);
	});

	it('should be able to select an element by clicking', () => {
		clickWithNoKey(fixture, '#element0');
		const selected = fixture.componentInstance.elementsList.filter(item => item.isSelected).length;
		expect(selected)
			.toEqual(1);
	});

	it('should be deselect an element when a new one is clicked', () => {
		clickWithNoKey(fixture, '#element0');
		clickWithNoKey(fixture, '#element1');
		const selected = fixture.componentInstance.elementsList.filter(item => item.isSelected).length;
		expect(selected)
			.toEqual(1);
	});

	it('should be able to select multiple elements by clicking with control button pressed', () => {
		clickWithControlKey(fixture, '#element0');
		clickWithControlKey(fixture, '#element1');
		const selected = fixture.componentInstance.elementsList.filter(item => item.isSelected).length;
		expect(selected)
			.toEqual(2);
	});

	it('should be able to order elements with drag and drop', () => {
		dragAndDropElement(fixture, 2, 0);
		const elements = fixture.componentInstance.elementsList;
		expect(elements[0].id)
			.toEqual('3');
	});

	it('should be able to drag if dragAndDropEnabled is true ', () => {
		fixture.componentInstance.dragAndDropEnabled= true;
		expect(fixture.componentInstance.handleDragEnter(new DragEvent('dragover'))).toBeFalse();
	});

	it('should not be able to drag if dragAndDropEnabled is false ', () => {
		fixture.componentInstance.dragAndDropEnabled= false;
		expect(fixture.componentInstance.handleDragEnter(new DragEvent('dragover'))).toBeTrue();
	});

	it('should be able to remove an element when Delete key is pressed', () => {
		pressDeleteKey(fixture, '#element0');
		const totalElements = fixture.componentInstance.elementsList.length;
		expect(totalElements)
			.toEqual(2);
	});

});

