import {AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer, Renderer2} from '@angular/core';

declare var jQuery: any;

@Directive({
	selector: '[systelabTooltip],[systelabTooltipHtml]'
})
export class TooltipDirective implements OnInit, AfterViewInit, OnDestroy {

	public static DEFAULT_PLACEMENT = 'top';

	@Input() systelabTooltip: string;
	@Input() systelabTooltipHtml: string;
	@Input() systelabTooltipPlacement: undefined | 'top' | 'right' | 'bottom' | 'left';

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	ngOnInit() {
		this.renderer.setAttribute(this.el.nativeElement, 'data-toogle', 'tooltip');
		this.renderer.setAttribute(this.el.nativeElement, 'data-boundary', 'viewport');
		if (this.systelabTooltipHtml) {
			this.renderer.setAttribute(this.el.nativeElement, 'data-html', 'true');
		}
		this.renderer.setAttribute(this.el.nativeElement, 'data-placement',
			(this.systelabTooltipPlacement) ? this.systelabTooltipPlacement : TooltipDirective.DEFAULT_PLACEMENT);
		this.renderer.setAttribute(this.el.nativeElement, 'title', (this.systelabTooltipHtml) ? this.systelabTooltipHtml : this.systelabTooltip);
	}

	ngAfterViewInit() {
		jQuery(this.el.nativeElement).tooltip();
	}

	ngOnDestroy() {
		jQuery(this.el.nativeElement).tooltip('dispose');
	}
}
