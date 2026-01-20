import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpyMenuComponent } from './spy-menu.component';
import { Component, provideZoneChangeDetection } from '@angular/core';
import { SpyMenuItem } from 'systelab-components';
import { By } from '@angular/platform-browser';

@Component({
    template: `<systelab-spy-menu [items]="menuItems" [sectionSelected]="sectionSelected"></systelab-spy-menu>
		<div class="slab-flex-1 d-flex slab-overflow-container">
			<div class="slab-flex-1">
				<div id="section1" style="height: 500px">
				</div>
				<div id="section2" style="height: 500px">
				</div>
				<div id="section3" style="height: 500px">
				</div>
			</div>
	    </div>`,
    standalone: false
})
export class SpyMenuTestComponent {

	public menuItems: Array<SpyMenuItem> = [];
	public sectionSelected: string;

	constructor() {
		const spyMenuItem1 = new SpyMenuItem('section1', 'Section 1');
		const spyMenuItem2 = new SpyMenuItem('section2', 'Section 2');
		const spyMenuItem3 = new SpyMenuItem('section3', 'Section 3');

		this.menuItems.push(spyMenuItem1);
		this.menuItems.push(spyMenuItem2);
		this.menuItems.push(spyMenuItem3);

		this.sectionSelected = 'section1';
	}
}

describe('Systelab SpyMenuComponent', () => {
	let component: SpyMenuComponent;
	let fixture: ComponentFixture<SpyMenuTestComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ SpyMenuComponent, SpyMenuTestComponent ],
			providers: [ provideZoneChangeDetection() ],
		})
			.compileComponents();
		fixture = TestBed.createComponent(SpyMenuTestComponent);
		fixture.detectChanges();
		component = fixture.debugElement.query(By.directive(SpyMenuComponent)).componentInstance;
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should create spy menu', () => {
		expect(component).toBeDefined();
	});

	it('should have a list of menu items', () => {
		expect(component.items.length).toBe(3);
	});

	it('should display the menu list', () => {
		expect(fixture.debugElement.nativeElement.querySelectorAll('.spy-menu-item').length).toEqual(3);
	});

	it('should scroll to selected section', () => {
		const spyMenuItem3 = fixture.debugElement.nativeElement.querySelectorAll('.spy-menu-item')[2];
		const section3Div = document.querySelector('#section3');
		spyOn(section3Div, 'scrollIntoView').and.callThrough();
		spyMenuItem3.click();
		expect(section3Div.scrollIntoView).toHaveBeenCalled();
	});

	it('should highlight selected section menu item', () => {
		const spyMenuItem3 = fixture.debugElement.nativeElement.querySelectorAll('.spy-menu-item')[2];
		spyMenuItem3.click();
		fixture.componentInstance.sectionSelected = 'section3';
		fixture.detectChanges();
		const selectedElement = fixture.debugElement.nativeElement.querySelector('.spy-menu-item--selected').children[0].innerText;
		expect(selectedElement).toBe('Section 3');
	});

});
