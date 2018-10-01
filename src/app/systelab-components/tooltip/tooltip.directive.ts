import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var jQuery: any;

@Directive({
	selector: '[systelabTooltip],[systelabTooltipHtml]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy, OnChanges {

	public static DEFAULT_PLACEMENT = 'top';
	public static DEFAULT_DELAY = 1000;

	@Input() systelabTooltip: string;
	@Input() systelabTooltipHtml: string;
	@Input() systelabTooltipPlacement: undefined | 'top' | 'right' | 'bottom' | 'left';
	@Input() systelabTooltipDelay: number;

	constructor(private el: ElementRef, private renderer: Renderer2, private domSanitizer: DomSanitizer) {
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

		let sanitizedTooltipText;

		if (this.systelabTooltipHtml) {
			sanitizedTooltipText = this.domSanitizer.sanitize(SecurityContext.HTML, this.systelabTooltipHtml);
		} else if (this.systelabTooltip) {
			sanitizedTooltipText = this.domSanitizer.sanitize(SecurityContext.HTML, this.systelabTooltip);
		} else {
			sanitizedTooltipText = '';
		}

		this.renderer.setAttribute(this.el.nativeElement, 'data-toogle', 'tooltip');
		this.renderer.setAttribute(this.el.nativeElement, 'data-boundary', 'viewport');
		if (this.systelabTooltipHtml) {
			this.renderer.setAttribute(this.el.nativeElement, 'data-html', 'true');
		}
		this.renderer.setAttribute(this.el.nativeElement, 'data-placement',
			(this.systelabTooltipPlacement) ? this.systelabTooltipPlacement : TooltipDirective.DEFAULT_PLACEMENT);
		this.renderer.setAttribute(this.el.nativeElement, 'data-delay',
			(this.systelabTooltipDelay) ? this.systelabTooltipDelay.toString() : TooltipDirective.DEFAULT_DELAY.toString());
		this.renderer.setAttribute(this.el.nativeElement, 'title', sanitizedTooltipText);
	}
}
