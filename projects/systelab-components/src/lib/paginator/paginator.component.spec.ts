import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './paginator.component';
import { PaginatorPageComponent } from './paginator-page.component';

@Component({
	selector: 'systelab-paginator-test',
	template: `
                  <systelab-paginator [(page)]="page" [pagesToShow]="15" [showFirstLastButtons]="true" [showNextPreviousButtons]="true"
                                      [totalPages]="45"></systelab-paginator>
                  <label class="label-value">{{page}}</label>
			  `,
	styles:   []
})
export class PaginatorTestComponent {
	public page = 8;
}

describe('Systelab Paginator', () => {
	let fixture: ComponentFixture<PaginatorTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [PaginatorComponent, PaginatorPageComponent, PaginatorTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginatorTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial value 8', () => {
		checkHasValue(fixture, 8);
	});

	it('should have value 7 if previous button is clicked', () => {
		clickPrevious(fixture);
		checkHasValue(fixture, 7);
	});

	it('should have value 9 if next button is clicked', () => {
		clickNext(fixture);
		checkHasValue(fixture, 9);
	});

	it('should have value 1 if first button is clicked', () => {
		clickFirst(fixture);
		checkHasValue(fixture, 1);
	});

	it('should have value 45 if last button is clicked', () => {
		clickLast(fixture);
		checkHasValue(fixture, 45);
	});

	it('should have value 10 if page 10 button is clicked', () => {
		clickPage(fixture, 10);
		checkHasValue(fixture, 10);
	});

	it('should have page 1,15 visible and 16 not visible ', () => {
		checkHasPage(fixture, 1);
		checkHasPage(fixture, 15);
		checkNoHasPage(fixture, 16);
	});

	it('should have page 31,45 visible and 30 not visible if last button is clicked ', () => {
		clickLast(fixture);
		checkHasPage(fixture, 31);
		checkHasPage(fixture, 45);
		checkNoHasPage(fixture, 30);
	});

	it('should have page 2,16 visible and 1,17 not visible if next button is clicked ', () => {
		clickNext(fixture);
		checkHasPage(fixture, 2);
		checkHasPage(fixture, 16);
		checkNoHasPage(fixture, 1);
		checkNoHasPage(fixture, 17);
	});

	it('should have page 24,38 visible and 23,39 not visible if last and page 31 buttons are clicked ', () => {
		clickLast(fixture);
		clickPage(fixture, 31);
		checkHasPage(fixture, 24);
		checkHasPage(fixture, 38);
		checkNoHasPage(fixture, 23);
		checkNoHasPage(fixture, 39);
	});

});

function checkHasValue(fixture: ComponentFixture<PaginatorTestComponent>, value: number) {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML)
		.toContain(value);
}

function clickButton(fixture: ComponentFixture<PaginatorTestComponent>, selector: string) {
	const button = fixture.debugElement.nativeElement.querySelector(selector);
	button.click();
	fixture.detectChanges();
}

function clickPrevious(fixture: ComponentFixture<PaginatorTestComponent>) {
	clickButton(fixture, '.icon-angle-left');
}

function clickNext(fixture: ComponentFixture<PaginatorTestComponent>) {
	clickButton(fixture, '.icon-angle-right');
}

function clickFirst(fixture: ComponentFixture<PaginatorTestComponent>) {
	clickButton(fixture, '.icon-angle-double-left');
}

function clickLast(fixture: ComponentFixture<PaginatorTestComponent>) {
	clickButton(fixture, '.icon-angle-double-right');
}

function clickPage(fixture: ComponentFixture<PaginatorTestComponent>, page: number) {
	const button = fixture.debugElement.nativeElement.querySelector('#page' + page);
	button.click();
	fixture.detectChanges();
}

function checkHasPage(fixture: ComponentFixture<PaginatorTestComponent>, page: number) {
	const button = fixture.debugElement.nativeElement.querySelector('#page' + page);
	expect(button)
		.not
		.toBeNull();
}

function checkNoHasPage(fixture: ComponentFixture<PaginatorTestComponent>, page: number) {
	const button = fixture.debugElement.nativeElement.querySelector('#page' + page);
	expect(button)
		.toBeNull();
}




