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
		this.renderer.setAttribute(this.el.nativeElement, 'data-toogle', 'tooltip');
		if (!this.systelabTooltipOnFocus) {
			this.renderer.setAttribute(this.el.nativeElement, 'data-trigger', 'hover');
		}
		this.renderer.setAttribute(this.el.nativeElement, 'data-boundary', 'viewport');

		const hasHtmlTooltip = this.systelabTooltipHtml !== undefined && this.systelabTooltipHtml !== null;
		this.renderer.setAttribute(this.el.nativeElement, 'data-html', hasHtmlTooltip ? 'true' : 'false');

		this.renderer.setAttribute(this.el.nativeElement, 'data-placement',
			(this.systelabTooltipPlacement) ? this.systelabTooltipPlacement : TooltipDirective.DEFAULT_PLACEMENT);

		const tooltipShowDelay = `"show":${((this.systelabTooltipDelay) ? this.systelabTooltipDelay : TooltipDirective.DEFAULT_DELAY)}`;
		const tooltipHideDelay = `"hide":${((this.systelabTooltipHideDelay) ? this.systelabTooltipHideDelay : TooltipDirective.DEFAULT_DELAY)}`;
		const tooltipDelay = `{${tooltipShowDelay}, ${tooltipHideDelay}}`;
		this.renderer.setAttribute(this.el.nativeElement, 'data-delay', tooltipDelay);

		this.renderer.setAttribute(this.el.nativeElement, 'title', (this.systelabTooltipHtml) ? this.systelabTooltipHtml : (this.systelabTooltip ? this.systelabTooltip : ''));
	}
}
