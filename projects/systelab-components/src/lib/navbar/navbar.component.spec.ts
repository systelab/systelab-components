import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavbarComponent, NavbarItem } from './navbar.component';

@Component({
    selector: 'systelab-navbar-test',
    template: `
                <div>
                    <systelab-navbar [items]="items"></systelab-navbar>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class NavbarTestComponent {

	public items: Array<NavbarItem> = [];

	constructor() {
		this.items.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-calendar', true, false, true, () => this.doSomething()));
		this.items.push(new NavbarItem(1, 'Option 2', 'slab-icon-medium icon-calendar', true, false, true, () => this.doSomethingElse()));
		this.items.push(new NavbarItem(1, 'Option 3', 'slab-icon-medium icon-calendar', true, false, false,
			() => this.doSomethingElse(), undefined,undefined,'red','green'));
	}

	public doSomething() {
		// Do something action
	}

	public doSomethingElse() {
		// Do something else action
	}
}

const clickTabButton = (fixture: ComponentFixture<NavbarTestComponent>, children: number) => {
	const button = fixture.debugElement.nativeElement.querySelector('li:nth-of-type(' + children + ')');
	button.click();
	fixture.detectChanges();
};

const getText = (fixture: ComponentFixture<NavbarTestComponent>, children: number) => {
	const label = fixture.debugElement.nativeElement.querySelector('li:nth-of-type(' + children + ')');
	return label.innerHTML;
};
const getBackgroundColor = (fixture: ComponentFixture<NavbarTestComponent>, children: number) => {
	const label = fixture.debugElement.nativeElement.querySelector('li:nth-of-type(' + children + ')').querySelector('a');
	return label.getAttribute('style');
};

describe('Systelab Navbar', () => {
	let fixture: ComponentFixture<NavbarTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [NavbarComponent, NavbarTestComponent],
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
		fixture = TestBed.createComponent(NavbarTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('First element should have the right text', () => {
		expect(getText(fixture, 1))
			.toContain('Option 1');
	});

	it('Second element should have the right text', () => {
		expect(getText(fixture, 2))
			.toContain('Option 2');
	});

	it('Second element should have the right forced font color', () => {
		expect(getBackgroundColor(fixture, 3))
			.toBe('color: green;');
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

	it('should not call the action if the element is not enabled', () => {
		spyOn(fixture.componentInstance, 'doSomethingElse');
		clickTabButton(fixture, 3);
		expect(fixture.componentInstance.doSomethingElse)
			.not
			.toHaveBeenCalled();
	});
});
