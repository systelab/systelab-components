import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { ChipButtonComponent, ChipButtonItem } from './chip-button.component';
import { SystelabTranslateModule } from 'systelab-translate';

@Component({
	selector: 'systelab-chip-button-test',
	template: `
                  <div>
                      <systelab-chip-button [buttonList]="buttonList"
                                            [isRemoveEnabled]="isRemoveEnabled"
                                            [showAddButton]="showAddButton"></systelab-chip-button>
                  </div>
			  `,
	styles:   []
})
export class ChipButtonTestComponent {
	public buttonList: ChipButtonItem[] = [
		{name: 'New York', id: 1, isChecked: false},
		{name: 'Rome', id: 2, isChecked: false}
	];
	public isRemoveEnabled: boolean;
	public showAddButton: boolean;
}

const checkHasList = (fixture: ComponentFixture<ChipButtonTestComponent>, num: number) => {
	const numElements = fixture.debugElement.nativeElement.querySelectorAll('.chip-button').length;
	expect(numElements)
		.toEqual(num);
};

const isButtonVisible = (fixture: ComponentFixture<ChipButtonTestComponent>, className: string) =>
	(fixture.debugElement.nativeElement.querySelector(className) !== null);

const setArrayValue = (fixture: ComponentFixture<ChipButtonTestComponent>, array: Array<ChipButtonItem>) => {
	fixture.componentInstance.buttonList = array;
	fixture.detectChanges();
};

const setAddValue = (fixture: ComponentFixture<ChipButtonTestComponent>, value: boolean) => {
	fixture.componentInstance.showAddButton = value;
	fixture.detectChanges();
};

const setRemoveValue = (fixture: ComponentFixture<ChipButtonTestComponent>, value: boolean) => {
	fixture.componentInstance.isRemoveEnabled = value;
	fixture.detectChanges();
};

const clickAddButton = (fixture: ComponentFixture<ChipButtonTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-chip-button-add');
	button.click();
	fixture.detectChanges();
};

const clickRemoveLastButton = (fixture: ComponentFixture<ChipButtonTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelectorAll('.chip-button')[document.querySelectorAll('.chip-button').length - 1]
		.querySelector('.li-chip-button');
	button.click();
	fixture.detectChanges();
};

const checkElementAdded = (fixture: ComponentFixture<ChipButtonTestComponent>, name: string) => {
	const element =
		fixture.debugElement.nativeElement.querySelectorAll('.chip-button')[document.querySelectorAll('.chip-button').length - 1]
		.querySelector('.btn')
		.textContent
		.split(' ')[0];
	expect(element)
		.toContain(name);
};

const checkAtListOneChecked = (fixture: ComponentFixture<ChipButtonTestComponent>) => {
	const buttons = fixture.debugElement.nativeElement.getElementsByTagName('systelab-chip-button')[0]
		.querySelectorAll('.btn-primary');
	expect(buttons.length)
		.toEqual(1);
};

describe('Systelab Chip Button', () => {
	let fixture: ComponentFixture<ChipButtonTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				SystelabTranslateModule,
				HttpClientModule],
			declarations: [ChipButtonComponent, ChipButtonTestComponent]

		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ChipButtonTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial list of items', () => {
		setArrayValue(fixture, fixture.componentInstance.buttonList);
		checkHasList(fixture, fixture.componentInstance.buttonList.length);
	});

	it('should have a add button', () => {
		setAddValue(fixture, true);
		expect(isButtonVisible(fixture, '.slab-chip-button-add')).toBeTruthy();
	});

	it('should have a remove button', () => {
		setRemoveValue(fixture, true);
		expect(isButtonVisible(fixture, '.slab-chip-button-remove')).toBeTruthy();
	});

	it('should add a button if is clicked', () => {
		setAddValue(fixture, true);
		clickAddButton(fixture);
		checkElementAdded(fixture, 'COMMON_NEW');
	});

	it('should remove a button if is clicked', () => {
		setAddValue(fixture, true);
		setRemoveValue(fixture, true);
		clickAddButton(fixture);
		clickRemoveLastButton(fixture);
		checkHasList(fixture, fixture.componentInstance.buttonList.length);
	});

	it('should have at least 1 button isChecked', () => {
		setAddValue(fixture, true);
		clickAddButton(fixture);
		checkAtListOneChecked(fixture);
	});
});
