import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ScrollSpyDirective } from './scroll-spy.directive';

@Component({
	template: `
		<div scrollSpy [spiedTags]="['div']" (sectionChange)="onSectionChange($event)" class="slab-flex-1 d-flex slab-overflow-container">
        	<div class="slab-flex-1">
				<div id="section1" style="height: 500px">
				</div>
				<div id="section2" style="height: 500px">
				</div>
				<div id="section3" style="height: 500px">
				</div>
			</div>
    	</div>`
})
class TestScrollSpyComponent {

	public sectionSelected: string;

	constructor() {
		this.sectionSelected = 'section1';
	}

	public onSectionChange(section: string) {
		this.sectionSelected = section;
	}
}

describe('Systelab ScrollSpyDirective', () => {

	let component: TestScrollSpyComponent;
	let fixture: ComponentFixture<TestScrollSpyComponent>;
	let directiveElList: DebugElement[];

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestScrollSpyComponent, ScrollSpyDirective]
		});
		fixture = TestBed.createComponent(TestScrollSpyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		directiveElList = fixture.debugElement.queryAll(By.directive(ScrollSpyDirective));
	});

	it('should have one component with directive scrollSpy', () => {
		expect(directiveElList.length).toBe(1);
	});
	it('should be initialized with section', () => {
		expect(component.sectionSelected).toBe('section1');
	});

	it('should change section on scroll', () => {
		const mockEvent = {};
		mockEvent['type'] = 'scroll';
		mockEvent['target'] = {};
		mockEvent['target']['scrollTop'] = 1500;
		mockEvent['target']['offsetTop'] = 0;
		directiveElList[0].triggerEventHandler('scroll', mockEvent);
		fixture.detectChanges();
		expect(component.sectionSelected).toBe('section3');
	});

});
