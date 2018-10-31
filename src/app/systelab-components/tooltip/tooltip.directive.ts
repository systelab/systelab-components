import {AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges} from '@angular/core';

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

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	ngAfterViewInit() {
		jQuery(this.el.nativeElement).tooltip();
	}

	ngOnDestroy() {
		jQuery(this.el.nativeElement).tooltip('dispose');
	}

	ngOnChanges(changes: SimpleChanges) {
		this.ngOnDestroy();
		this.initializeTooltip();
		this.ngAfterViewInit();
	}

	private initializeTooltip(): void {
		this.renderer.setAttribute(this.el.nativeElement, 'data-toogle', 'tooltip');
		this.renderer.setAttribute(this.el.nativeElement, 'data-boundary', 'viewport');
		if (this.systelabTooltipHtml) {
			this.renderer.setAttribute(this.el.nativeElement, 'data-html', 'true');
		}
		this.renderer.setAttribute(this.el.nativeElement, 'data-placement',
			(this.systelabTooltipPlacement) ? this.systelabTooltipPlacement : TooltipDirective.DEFAULT_PLACEMENT);
		this.renderer.setAttribute(this.el.nativeElement, 'data-delay',
			(this.systelabTooltipDelay) ? this.systelabTooltipDelay.toString() : TooltipDirective.DEFAULT_DELAY.toString());
		this.renderer.setAttribute(this.el.nativeElement, 'title', (this.systelabTooltipHtml) ? this.systelabTooltipHtml : (this.systelabTooltip ? this.systelabTooltip : ''));
	}
}
