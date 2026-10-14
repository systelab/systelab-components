import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipContentComponent, TooltipDirective } from './tooltip.directive';

@Component({
	selector: 'systelab-tooltip-test',
	template: `<button id="host" type="button"
		[systelabTooltip]="text"
		[systelabTooltipHtml]="html"
		[systelabTooltipPlacement]="placement"
		[systelabTooltipDelay]="delay"
		[systelabTooltipHideDelay]="hideDelay"
		[systelabTooltipOnFocus]="onFocus">host</button>`,
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
	document.querySelector('.cdk-overlay-container [role="tooltip"]');

const getHost = (fixture: ComponentFixture<TooltipTestComponent>): HTMLElement =>
	fixture.debugElement.nativeElement.querySelector('#host');

const mockFocusVisible = (host: HTMLElement, isKeyboard: boolean): void => {
	spyOn(host, 'matches').and.callFake((selector: string) =>
		selector === ':focus-visible' ? isKeyboard : Element.prototype.matches.call(host, selector));
};

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
		flush();
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

	it('should show tooltip on keyboard focus when systelabTooltipOnFocus is true', fakeAsync(() => {
		mockFocusVisible(getHost(fixture), true);
		getHost(fixture).dispatchEvent(new FocusEvent('focus'));
		tick(0);
		fixture.detectChanges();
		expect(getTooltipElement()).not.toBeNull();
		flush();
	}));

	it('should not show tooltip on keyboard focus when systelabTooltipOnFocus is false', fakeAsync(() => {
		fixture.componentInstance.onFocus = false;
		fixture.detectChanges();
		mockFocusVisible(getHost(fixture), true);
		getHost(fixture).dispatchEvent(new FocusEvent('focus'));
		tick(0);
		expect(getTooltipElement()).toBeNull();
		flush();
	}));

	it('should hide tooltip on blur when systelabTooltipOnFocus is true', fakeAsync(() => {
		mockFocusVisible(getHost(fixture), true);
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

	describe('with show and hide delays', () => {
		const delay = 100;
		const hideDelay = 500;

		beforeEach(() => {
			fixture.componentInstance.delay = delay;
			fixture.componentInstance.hideDelay = hideDelay;
			fixture.detectChanges();
		});

		const dispatch = (type: string): void => {
			getHost(fixture).dispatchEvent(new Event(type));
			fixture.detectChanges();
		};

		it('should show after the delay on mouseenter and hide after the hide delay on mouseleave', fakeAsync(() => {
			dispatch('mouseenter');
			tick(delay - 1);
			expect(getTooltipElement()).toBeNull();
			tick(1);
			fixture.detectChanges();
			expect(getTooltipElement()).not.toBeNull();
			dispatch('mouseleave');
			tick(hideDelay - 1);
			expect(getTooltipElement()).not.toBeNull();
			tick(1);
			expect(getTooltipElement()).toBeNull();
		}));

		it('should hide the visible tooltip on click', fakeAsync(() => {
			dispatch('mouseenter');
			tick(delay);
			fixture.detectChanges();
			expect(getTooltipElement()).not.toBeNull();
			dispatch('click');
			expect(getTooltipElement()).toBeNull();
		}));

		it('should cancel a pending show on click', fakeAsync(() => {
			dispatch('mouseenter');
			tick(delay / 2);
			dispatch('click');
			tick(delay);
			expect(getTooltipElement()).toBeNull();
		}));

		it('should show again on the next hover after a click', fakeAsync(() => {
			dispatch('mouseenter');
			tick(delay);
			dispatch('click');
			dispatch('mouseleave');
			dispatch('mouseenter');
			tick(delay);
			fixture.detectChanges();
			expect(getTooltipElement()).not.toBeNull();
		}));

		it('should not leave an orphan show timeout when mouseenter and focus both schedule a show', fakeAsync(() => {
			mockFocusVisible(getHost(fixture), true);
			dispatch('mouseenter');
			dispatch('focus');
			dispatch('mouseleave');
			tick(delay * 2);
			expect(getTooltipElement()).toBeNull();
		}));

		it('should not show the tooltip when the host is destroyed with a pending show', fakeAsync(() => {
			mockFocusVisible(getHost(fixture), true);
			dispatch('mouseenter');
			dispatch('focus');
			fixture.destroy();
			tick(delay * 2);
			expect(getTooltipElement()).toBeNull();
		}));

		it('should not show the tooltip on mouse focus', fakeAsync(() => {
			mockFocusVisible(getHost(fixture), false);
			dispatch('focus');
			tick(delay);
			expect(getTooltipElement()).toBeNull();
		}));

		it('should show the tooltip on keyboard focus and hide it on blur', fakeAsync(() => {
			mockFocusVisible(getHost(fixture), true);
			dispatch('focus');
			tick(delay);
			fixture.detectChanges();
			expect(getTooltipElement()).not.toBeNull();
			dispatch('blur');
			tick(hideDelay);
			expect(getTooltipElement()).toBeNull();
		}));

		it('should not show the tooltip on keyboard focus when systelabTooltipOnFocus is false', fakeAsync(() => {
			fixture.componentInstance.onFocus = false;
			fixture.detectChanges();
			mockFocusVisible(getHost(fixture), true);
			dispatch('focus');
			tick(delay);
			expect(getTooltipElement()).toBeNull();
		}));

		it('should not show the tooltip when the host is not rendered', fakeAsync(() => {
			getHost(fixture).style.display = 'none';
			dispatch('mouseenter');
			tick(delay);
			expect(getTooltipElement()).toBeNull();
		}));
	});
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
