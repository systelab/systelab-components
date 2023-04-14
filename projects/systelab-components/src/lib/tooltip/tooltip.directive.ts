import { ApplicationRef, ComponentRef, Directive, ElementRef, EmbeddedViewRef } from '@angular/core';
import { HostListener, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Directive({
	selector: '[systelabTooltip],[systelabTooltipHtml]'
})
export class TooltipDirective implements OnDestroy {

	public static readonly defaultDelay = 200;

	@Input() public systelabTooltip: string;
	@Input() public systelabTooltipHtml: string;
	@Input() public systelabTooltipPlacement: undefined | 'top' | 'right' | 'bottom' | 'left';
	@Input() public systelabTooltipDelay = TooltipDirective.defaultDelay;
	@Input() public systelabTooltipHideDelay = TooltipDirective.defaultDelay;

	private componentRef: ComponentRef<any> | null = null;
	private showTimeout?: number;
	private hideTimeout?: number;

	constructor(private elementRef: ElementRef, private appRef: ApplicationRef, private viewContainerRef: ViewContainerRef) {
	}

	@HostListener('mouseenter')
	public onMouseEnter(): void {
		this.initializeTooltip();
	}

	@HostListener('mouseleave')
	public onMouseLeave(): void {
		if (this.systelabTooltipHideDelay) {
			this.hideTimeout = this.setHideTooltipTimeout();
		} else {
			this.destroy();
		}
	}

	public ngOnDestroy(): void {
		this.destroy();
	}

	private destroy(): void {
		if (this.componentRef !== null) {
			window.clearInterval(this.showTimeout);
			window.clearInterval(this.systelabTooltipHideDelay);
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}

	private initializeTooltip(): void {
		if (this.componentRef === null) {
			window.clearInterval(this.systelabTooltipHideDelay);

			this.componentRef = this.viewContainerRef.createComponent(TooltipComponent);

			const [tooltipDOMElement] = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes;

			this.setTooltipComponentProperties();

			document.body.appendChild(tooltipDOMElement);
			this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.systelabTooltipDelay);
		}
	}

	private setTooltipComponentProperties(): void {
		if (this.componentRef !== null) {
			this.componentRef.instance.tooltip = this.systelabTooltip ?? this.systelabTooltipHtml;

			if (!this.systelabTooltipPlacement) {
				this.systelabTooltipPlacement = 'top';
			}
			this.componentRef.instance.position = this.systelabTooltipPlacement;

			const {left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();

			switch (this.systelabTooltipPlacement) {
				case 'bottom': {
					this.componentRef.instance.left = Math.round((right - left) / 2 + left);
					this.componentRef.instance.top = Math.round(bottom);
					break;
				}
				case 'top': {
					this.componentRef.instance.left = Math.round((right - left) / 2 + left);
					this.componentRef.instance.top = Math.round(top - 10);
					break;
				}
				case 'right': {
					this.componentRef.instance.left = Math.round(right);
					this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
					break;
				}
				case 'left': {
					this.componentRef.instance.left = Math.round(left);
					this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
					break;
				}
				default: {
					break;
				}
			}
		}
	}

	private showTooltip(): void {
		if (this.componentRef !== null) {
			this.componentRef.instance.visible = true;
		}
	}

	private setHideTooltipTimeout(): number {
		return window.setTimeout(this.destroy.bind(this), this.systelabTooltipHideDelay);
	}
}
