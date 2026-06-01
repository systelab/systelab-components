import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipContentComponent, TooltipDirective } from './tooltip.directive';

@Component({
	selector: 'systelab-tooltip-test',
	template: `<span id="host"
		[systelabTooltip]="text"
		[systelabTooltipHtml]="html"
		[systelabTooltipPlacement]="placement"
		[systelabTooltipDelay]="delay"
		[systelabTooltipHideDelay]="hideDelay"
		[systelabTooltipOnFocus]="onFocus">host</span>`,
	standalone: false,
})
export class TooltipTestComponent {
	public text: string | undefined = 'Test tooltip';
	public html: string | undefined;
	public placement: string | undefined;
	public delay = 0;
	public hideDelay = 0;
	public onFocus = true;
}

const getTooltipElement = (): HTMLElement | null =>
	document.body.querySelector('[role="tooltip"]');

const getHost = (fixture: ComponentFixture<TooltipTestComponent>): HTMLElement =>
	fixture.debugElement.nativeElement.querySelector('#host');

describe('Systelab Tooltip Directive', () => {
	let fixture: ComponentFixture<TooltipTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				TooltipDirective,
				TooltipContentComponent,
				TooltipTestComponent,
			],
			imports: [
				BrowserModule,
				OverlayModule,
			],
			providers: [
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TooltipTestComponent);
		fixture.detectChanges();
	});

	afterEach(fakeAsync(() => {
		fixture.destroy();
		flush();
	}));

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should not show tooltip immediately on mouseenter before delay expires', fakeAsync(() => {
		fixture.componentInstance.delay = 300;
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should show tooltip after delay on mouseenter', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		flush();
	}));

	it('should show tooltip with correct text content', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()!.querySelector('.tooltip-inner')?.innerHTML).toBe('Test tooltip');
		flush();
	}));

	it('should not show tooltip when systelabTooltip is not set', fakeAsync(() => {
		fixture.componentInstance.text = undefined;
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should hide tooltip after mouseleave', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseleave'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should cancel show when mouseleave fires before delay expires', fakeAsync(() => {
		fixture.componentInstance.delay = 500;
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(200);
		getHost(fixture).dispatchEvent(new MouseEvent('mouseleave'));
		tick(500);
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should show tooltip on focus when systelabTooltipOnFocus is true', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new FocusEvent('focus'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		flush();
	}));

	it('should not show tooltip on focus when systelabTooltipOnFocus is false', fakeAsync(() => {
		fixture.componentInstance.onFocus = false;
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new FocusEvent('focus'));
		tick(0);
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should hide tooltip on blur when systelabTooltipOnFocus is true', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new FocusEvent('focus'));
		tick(0);
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new FocusEvent('blur'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should not hide tooltip on blur when systelabTooltipOnFocus is false', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		fixture.componentInstance.onFocus = false;
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new FocusEvent('blur'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		flush();
	}));

	it('should prefer systelabTooltipHtml over systelabTooltip', fakeAsync(() => {
		fixture.componentInstance.html = '<b>HTML content</b>';
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()!.querySelector('.tooltip-inner b')).not.toBeNull();
		flush();
	}));

	it('should apply bs-tooltip-top class by default', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()?.classList.contains('bs-tooltip-top')).toBeTrue();
		flush();
	}));

	it('should apply bs-tooltip-bottom class when placement is bottom', fakeAsync(() => {
		fixture.componentInstance.placement = 'bottom';
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()?.classList.contains('bs-tooltip-bottom')).toBeTrue();
		flush();
	}));

	it('should apply bs-tooltip-left class when placement is left', fakeAsync(() => {
		fixture.componentInstance.placement = 'left';
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()?.classList.contains('bs-tooltip-left')).toBeTrue();
		flush();
	}));

	it('should apply bs-tooltip-right class when placement is right', fakeAsync(() => {
		fixture.componentInstance.placement = 'right';
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()?.classList.contains('bs-tooltip-right')).toBeTrue();
		flush();
	}));

	it('should respect custom show delay', fakeAsync(() => {
		fixture.componentInstance.delay = 300;
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(299);
		expect(getTooltipElement()).toBeNull();
		tick(1);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		flush();
	}));

	it('should respect custom hide delay', fakeAsync(() => {
		fixture.componentInstance.hideDelay = 300;
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseleave'));
		tick(299);
		expect(getTooltipElement()).not.toBeNull();
		tick(1);
		fixture.detectChanges();
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should not create a second overlay when already visible', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(document.body.querySelectorAll('[role="tooltip"]').length).toBe(1);
		flush();
	}));

	it('should close tooltip on window scroll', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		window.dispatchEvent(new Event('scroll'));
		fixture.detectChanges();
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should update content when inputs change while tooltip is visible', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		fixture.componentInstance.text = 'Updated content';
		fixture.detectChanges();
		expect(getTooltipElement()!.querySelector('.tooltip-inner')?.innerHTML).toBe('Updated content');
		flush();
	}));

	it('should dispose overlay on destroy', fakeAsync(() => {
		getHost(fixture).dispatchEvent(new MouseEvent('mouseenter'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		fixture.destroy();
		expect(getTooltipElement()).toBeNull();
		flush();
	}));
});

describe('Systelab TooltipContentComponent', () => {
	let fixture: ComponentFixture<TooltipContentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TooltipContentComponent],
			imports: [BrowserModule, OverlayModule],
			providers: [provideZoneChangeDetection()],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TooltipContentComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should render text content in tooltip-inner', () => {
		fixture.componentRef.setInput('content', 'Hello world');
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.querySelector('.tooltip-inner').innerHTML).toBe('Hello world');
	});

	it('should render HTML content in tooltip-inner', () => {
		fixture.componentRef.setInput('content', '<em>italic</em>');
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.querySelector('.tooltip-inner em')).not.toBeNull();
	});

	it('should apply bs-tooltip-top class by default', () => {
		expect(fixture.debugElement.nativeElement.classList.contains('bs-tooltip-top')).toBeTrue();
	});

	it('should apply bs-tooltip-bottom class when placement is bottom', () => {
		fixture.componentRef.setInput('placement', 'bottom');
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.classList.contains('bs-tooltip-bottom')).toBeTrue();
	});

	it('should apply bs-tooltip-left class when placement is left', () => {
		fixture.componentRef.setInput('placement', 'left');
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.classList.contains('bs-tooltip-left')).toBeTrue();
	});

	it('should apply bs-tooltip-right class when placement is right', () => {
		fixture.componentRef.setInput('placement', 'right');
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.classList.contains('bs-tooltip-right')).toBeTrue();
	});

	it('should always have the show class', () => {
		expect(fixture.debugElement.nativeElement.classList.contains('show')).toBeTrue();
	});

	it('should render the arrow element', () => {
		expect(fixture.debugElement.nativeElement.querySelector('.arrow')).not.toBeNull();
	});

	it('should have role="tooltip" on the host', () => {
		expect(fixture.debugElement.nativeElement.getAttribute('role')).toBe('tooltip');
	});
});
