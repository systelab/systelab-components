import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BreadcrumbComponent, BreadcrumbItem } from './breadcrumb.component';

@Component({
    selector: 'systelab-breadcrumb-test',
    template: `
                <div>
                    <systelab-breadcrumb [items]="items"></systelab-breadcrumb>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class BreadcrumbTestComponent {

	public items: Array<BreadcrumbItem> = [];

	constructor() {
		this.items.push(new BreadcrumbItem('1', 'Item 1', true, () => this.doSomething()));
		this.items.push(new BreadcrumbItem('2', 'Item 2', true, () => this.doSomethingElse()));
		this.items.push(new BreadcrumbItem('3', 'Item 3', false, () => this.doSomethingElse()));

	}

	public doSomething() {
	}

	public doSomethingElse() {
	}

}

const clickTabButton = (fixture: ComponentFixture<BreadcrumbTestComponent>, children: number) => {
	const button = fixture.debugElement.nativeElement.querySelector('li:nth-of-type(' + children + ')');
	button.click();
	fixture.detectChanges();
};

const checkHasText = (fixture: ComponentFixture<BreadcrumbTestComponent>, children: number, text: string) => {
	const label = fixture.debugElement.nativeElement.querySelector('li:nth-of-type(' + children + ')');
	expect(label.innerHTML)
		.toContain(text);
};

describe('Systelab Breadcrumb', () => {
	let fixture: ComponentFixture<BreadcrumbTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [BreadcrumbComponent, BreadcrumbTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadcrumbTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('First element should have the right text', () => {
		checkHasText(fixture, 1, 'Item 1');
	});

	it('Second element should have the right text', () => {
		checkHasText(fixture, 2, 'Item 2');
	});

	it('should call first action when first element is clicked', () => {
		spyOn(fixture.componentInstance, 'doSomething');
		clickTabButton(fixture, 1);
		expect(fixture.componentInstance.doSomething)
			.toHaveBeenCalled();
	});

	it('should call second action when second element is clicked', () => {
		spyOn(fixture.componentInstance, 'doSomethingElse');
		clickTabButton(fixture, 2);
		expect(fixture.componentInstance.doSomethingElse)
			.toHaveBeenCalled();
	});

	it('should not call the action if the element is not active', () => {
		spyOn(fixture.componentInstance, 'doSomethingElse');
		clickTabButton(fixture, 3);
		expect(fixture.componentInstance.doSomethingElse)
			.not
			.toHaveBeenCalled();
	});

});
