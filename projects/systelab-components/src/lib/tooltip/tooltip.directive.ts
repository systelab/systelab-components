import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';

declare var jQuery: any;

@Directive({
	selector: '[systelabTooltip],[systelabTooltipHtml]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy, OnChanges {

	public static readonly DEFAULT_PLACEMENT = 'top';
	public static readonly DEFAULT_DELAY = 1000;

	@Input() public systelabTooltip: string;
	@Input() public systelabTooltipHtml: string;
	@Input() public systelabTooltipPlacement: undefined | 'top' | 'right' | 'bottom' | 'left';
	@Input() public systelabTooltipDelay: number;
	@Input() public systelabTooltipHideDelay: number;
	@Input() public systelabTooltipOnFocus = true;

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	ngAfterViewInit() {
		jQuery(this.el.nativeElement)
			.tooltip();
	}

	ngOnDestroy() {
		jQuery(this.el.nativeElement)
			.tooltip('dispose');
	}

	ngOnChanges(changes: SimpleChanges) {
		this.ngOnDestroy();
		this.initializeTooltip();
		this.ngAfterViewInit();
	}

	private initializeTooltip(): void {
		this.renderer.setAttribute(this.el.nativeElement, 'data-bs-toggle', 'tooltip');
		if (!this.systelabTooltipOnFocus) {
			this.renderer.setAttribute(this.el.nativeElement, 'data-bs-trigger', 'hover');
		}
		this.renderer.setAttribute(this.el.nativeElement, 'data-bs-boundary', 'viewport');
		if (this.systelabTooltipHtml) {
			this.renderer.setAttribute(this.el.nativeElement, 'data-bs-html', 'true');
		}
		this.renderer.setAttribute(this.el.nativeElement, 'data-bs-placement',
			(this.systelabTooltipPlacement) ? this.systelabTooltipPlacement : TooltipDirective.DEFAULT_PLACEMENT);

		const tooltipShowDelay = `"show":${((this.systelabTooltipDelay) ? this.systelabTooltipDelay : TooltipDirective.DEFAULT_DELAY)}`;
		const tooltipHideDelay = `"hide":${((this.systelabTooltipHideDelay) ? this.systelabTooltipHideDelay : TooltipDirective.DEFAULT_DELAY)}`;
		const tooltipDelay = `{${tooltipShowDelay}, ${tooltipHideDelay}}`;
		this.renderer.setAttribute(this.el.nativeElement, 'data-delay', tooltipDelay);

		this.renderer.setAttribute(this.el.nativeElement, 'title', (this.systelabTooltipHtml) ? this.systelabTooltipHtml : (this.systelabTooltip ? this.systelabTooltip : ''));

		if (!this.systelabTooltipHtml && !this.systelabTooltip) {
			this.renderer.setAttribute(this.el.nativeElement, 'title', '');
			this.renderer.setAttribute(this.el.nativeElement, 'data-original-title', '');
			this.renderer.setAttribute(this.el.nativeElement, 'data-bs-html', 'false');
		}
	}
}
