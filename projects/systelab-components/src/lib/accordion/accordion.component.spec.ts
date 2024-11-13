import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Accordion } from './accordion.component';

describe('Systelab Accordion', () => {
	let fixture: ComponentFixture<Accordion>;
	let component: Accordion;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [],
			imports: [BrowserModule],
			providers: [
				provideHttpClient(withInterceptorsFromDi())
			]
		}).compileComponents();

	});

	beforeEach(() => {
		fixture = TestBed.createComponent(Accordion);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should be height 0 when isCollapse is true', async () => {
		component.isCollapsed = true;
		fixture.detectChanges();
		await fixture.whenStable();
		const collapsibleContent = fixture.debugElement.query(By.css('.collapsible-content'));
		const maxHeight = parseInt(getComputedStyle(collapsibleContent.nativeElement).maxHeight, 10);
		expect(maxHeight).toEqual(0);
	});

	it('should be height contentMaxHeight when isCollapse is false', async () => {
		component.isCollapsed = false;
		fixture.detectChanges();
		await fixture.whenStable();
		const collapsibleContent = fixture.debugElement.query(By.css('.collapsible-content'));
		const maxHeight = parseInt(getComputedStyle(collapsibleContent.nativeElement).maxHeight, 10);
		expect(maxHeight).toEqual(component.contentMaxHeight);
	});

	it('should be collapsed if is expanded and clicks icon button', async () => {
		component.isCollapsed = false;
		const collapseExpandIcon = fixture.debugElement.query(By.css('.mlab-accordion-header'));
		collapseExpandIcon.triggerEventHandler('click', null);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(component.isCollapsed).toBeTrue();
	});

	it('should be expanded if is collapsed and clicks icon button', async () => {
		component.isCollapsed = true;
		const collapseExpandIcon = fixture.debugElement.query(By.css('.mlab-accordion-header'));
		collapseExpandIcon.triggerEventHandler('click', null);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(component.isCollapsed).toBeFalse();
	});
});