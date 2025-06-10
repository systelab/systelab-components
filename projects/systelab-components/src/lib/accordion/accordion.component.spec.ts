import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Accordion } from './accordion.component';
import { PreferencesService } from 'systelab-preferences';

describe('Systelab Accordion', () => {
	let fixture: ComponentFixture<Accordion>;
	let component: Accordion;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [],
			imports: [BrowserModule],
			providers: [
				PreferencesService,
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

	it('should be get isCollapsed value from preferences id flag preferenceName exists', async () => {
		const valueReturned: boolean = true;
		const initialPreferenceName = 'testName';
		component.isCollapsed = false;
		component.preferenceName = initialPreferenceName;
		const preferenceServiceGetSpy = spyOn<any>(component['preferenceService'], 'get').and.returnValue(valueReturned);
		const preferenceServicePutSpy = spyOn<any>(component['preferenceService'], 'put').and.callThrough();
		component.ngOnInit();
		await fixture.whenStable();
		expect(component.preferenceName).toEqual(`${initialPreferenceName}.${component['preferenceSuffix']}`);
		expect(preferenceServiceGetSpy).toHaveBeenCalledWith(component.preferenceName, false);
		expect(component.isCollapsed).toEqual(valueReturned);
		expect(preferenceServicePutSpy).toHaveBeenCalledWith(component.preferenceName, valueReturned);
	});

	it('should to be collapsed if preferenceName is not defined', async () => {
		component.isCollapsed = false;
		component.preferenceName = undefined;
		const preferenceServiceGetSpy = spyOn<any>(component['preferenceService'], 'get').and.callThrough();
		const preferenceServicePutSpy = spyOn<any>(component['preferenceService'], 'put').and.callThrough();
		component.ngOnInit();
		await fixture.whenStable();
		expect(component.isCollapsed).toBeFalse();
		expect(preferenceServiceGetSpy).not.toHaveBeenCalled();
		expect(preferenceServicePutSpy).not.toHaveBeenCalled();
	});
	it('should to call put method of preferences service when toggleAccordion is called', async () => {
		const initialPreferenceName = 'testName';
		component.preferenceName = initialPreferenceName;
		component.ngOnInit();
		await fixture.whenStable();
		const preferenceServicePutSpy = spyOn<any>(component['preferenceService'], 'put').and.callThrough();
		component.toggleAccordion();
		await fixture.whenStable();
		expect(preferenceServicePutSpy).toHaveBeenCalledWith(`${initialPreferenceName}.${component['preferenceSuffix']}`, component.isCollapsed);
	});
	it('should to collapse or uncollapse the accordion when click collapse button', async () => {
		const initialPreferenceName = 'testName';
		const isCollapsed = false;
		component.isCollapsed = isCollapsed;
		component.preferenceName = initialPreferenceName;
		component.ngOnInit();
		await fixture.whenStable();
		const preferenceServicePutSpy = spyOn<any>(component['preferenceService'], 'put').and.callThrough();
		component.toggleAccordion();
		await fixture.whenStable();
		expect(component.isCollapsed).toBe(!isCollapsed);
	});
	it('should to call toggleAccordion method when clicks icon button', async () => {
		const collapseExpandButton = fixture.debugElement.query(By.css('.accordion-header button'));
		const toggleAccordionSpy = spyOn(component, 'toggleAccordion').and.callThrough();
		collapseExpandButton.triggerEventHandler('click', null);
		fixture.detectChanges();
		await fixture.whenStable();
		expect(toggleAccordionSpy).toHaveBeenCalled();
	});
});