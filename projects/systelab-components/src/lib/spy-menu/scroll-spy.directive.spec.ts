import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, provideZoneChangeDetection } from '@angular/core';
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
    	</div>`,
    standalone: false
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

const sleep = (ms: number): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Systelab ScrollSpyDirective', () => {

	let component: TestScrollSpyComponent;
	let fixture: ComponentFixture<TestScrollSpyComponent>;
	let directiveElList: DebugElement[];

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestScrollSpyComponent, ScrollSpyDirective],
			providers: [provideZoneChangeDetection()],
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

	it('should change section on scroll', async () => {
		const mockEvent = {};
		mockEvent['type'] = 'scroll';
		mockEvent['target'] = {};
		mockEvent['target']['scrollTop'] = 1800;
		mockEvent['target']['offsetTop'] = 0;
		directiveElList[0].triggerEventHandler('scroll', mockEvent);
		fixture.detectChanges();
		await sleep(2000);
		expect(component.sectionSelected).toBe('section3');
	});

});
