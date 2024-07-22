import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {BreadcrumbComponent, BreadcrumbItem, BreadcrumbSubItem} from './breadcrumb.component';

@Component({
	selector: 'systelab-breadcrumb-maxwidth-test',
	template: `
                <div>
                    <systelab-breadcrumb [items]="items" [itemMaxWidth]="itemMaxWidth" [subItemMaxWidth]="subItemMaxWidth"></systelab-breadcrumb>
                </div>
	          `,
	styles:   []
})
export class BreadcrumbMaxWidthTestComponent {

	public items: Array<BreadcrumbItem> = [];
	public itemMaxWidth = '40px';
	public subItemMaxWidth = '60px';

	constructor() {

		const subItems: BreadcrumbSubItem[] = [];
		subItems.push(new BreadcrumbSubItem('1', 'SubItemItem 1', null, 'https://google.com?apartments'));
		subItems.push(new BreadcrumbSubItem('2', 'SubItemItem 2', () => this.doSomething()));

		this.items.push(new BreadcrumbItem('1', 'ItemItem 1', true,  () => this.doSomething()));
		this.items.push(new BreadcrumbItem('2', 'ItemItem 2', true, () => this.doSomethingElse(), subItems));
		this.items.push(new BreadcrumbItem('3', 'ItemItem 3', false, () => this.doSomethingElse()));
		this.items.push(new BreadcrumbItem('4', 'ItemItem 4', true, () => this.doSomethingElse()));
		this.items.push(new BreadcrumbItem('5', 'ItemItem 5', true, () => this.doSomethingElse()));
	}

	public doSomething() {
	}

	public doSomethingElse() {
	}
}

const checkActiveItemTextStyleWidth = (fixture: ComponentFixture<BreadcrumbMaxWidthTestComponent>, itemIndex: number, width: string) => {
	const label = fixture.debugElement.query(By.css('li:nth-of-type(' + itemIndex + ')')).query(By.css('a')).nativeElement;
	expect(label.attributes['style'].value).toBe(width);
};


const checkInactiveItemTextStyleWidth = (fixture: ComponentFixture<BreadcrumbMaxWidthTestComponent>, itemIndex: number, width: string) => {
	const label = fixture.debugElement.query(By.css('li:nth-of-type(' + itemIndex + ')')).query(By.css('label')).nativeElement;
	expect(label.attributes['style'].value).toBe(width);
};

const checkSubItemTextStyleWidth = (fixture: ComponentFixture<BreadcrumbMaxWidthTestComponent>, itemIndex: number, subItemIndex: number, width: string) => {
	const label = fixture.debugElement.query(By.css('li:nth-of-type(' + itemIndex + ')')).query(By.css('ul')).query(By.css('li:nth-of-type(' + subItemIndex + ')')).query(By.css('a')).nativeElement;
	expect(label.attributes['style'].value).toBe(width);
};

describe('Systelab Breadcrumb With Max Width', () => {
	let fixture: ComponentFixture<BreadcrumbMaxWidthTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [BreadcrumbComponent, BreadcrumbMaxWidthTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule,
        TreeModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadcrumbMaxWidthTestComponent);
		fixture.detectChanges();
	});

	it('-should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('-First item should have the right text', () => {
		checkActiveItemTextStyleWidth(fixture, 1, 'max-width: 40px;');
	});

	it('-Second item should have the right text', () => {
		checkActiveItemTextStyleWidth(fixture, 2, 'max-width: 40px;');
	});

	it('-Four item should have the right text', () => {
		checkActiveItemTextStyleWidth(fixture, 4, 'max-width: 40px;');
	});

	it('-Four item should have the right text', () => {
		checkActiveItemTextStyleWidth(fixture, 5, 'max-width: 40px;');
	});

	it('-Third item should have the right text', () => {
		checkInactiveItemTextStyleWidth(fixture, 3, 'max-width: 40px;');
	});

	it('-First sub item should have the right text', () => {
		checkSubItemTextStyleWidth(fixture, 2, 1, 'max-width: 60px;');
	});
});
