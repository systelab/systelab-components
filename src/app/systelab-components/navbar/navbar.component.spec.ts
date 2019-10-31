import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent, NavbarItem } from './navbar.component';

@Component({
	selector: 'systelab-navbar-test',
	template: `
                <div>
                    <systelab-navbar [items]="items"></systelab-navbar>
                </div>
	          `,
	styles:   []
})
export class NavbarTestComponent {

	public items: Array<NavbarItem> = [];

	constructor() {
		this.items.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-calendar', true, false, true, () => this.doSomething()));
		this.items.push(new NavbarItem(1, 'Option 2', 'slab-icon-medium icon-calendar', true, false, true, () => this.doSomethingElse()));
		this.items.push(new NavbarItem(1, 'Option 3', 'slab-icon-medium icon-calendar', true, false, false, () => this.doSomethingElse()));

	}

	public doSomething() {
	}

	public doSomethingElse() {
	}

}

describe('Systelab Navbar', () => {
	let fixture: ComponentFixture<NavbarTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [NavbarComponent, NavbarTestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('First element should have the right text', () => {
		checkHasText(fixture, 1, 'Option 1');
	});

	it('Second element should have the right text', () => {
		checkHasText(fixture, 2, 'Option 2');
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

function clickTabButton(fixture: ComponentFixture<NavbarTestComponent>, children: number) {
	const button = fixture.debugElement.nativeElement.querySelector('li:nth-of-type(' + children + ')');
	button.click();
	fixture.detectChanges();
}

function checkHasText(fixture: ComponentFixture<NavbarTestComponent>, children: number, text: string) {
	const label = fixture.debugElement.nativeElement.querySelector('li:nth-of-type(' + children + ')');
	expect(label.innerHTML)
		.toContain(text);
}



