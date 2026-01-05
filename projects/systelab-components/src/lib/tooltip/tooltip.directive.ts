import { ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from './tooltip.component';

@Directive({
	selector: '[systelabTooltip],[systelabTooltipHtml]',
	standalone: false
})
export class TooltipDirective implements OnDestroy, OnInit {

	public static readonly DEFAULT_PLACEMENT = 'top';
	public static readonly DEFAULT_DELAY = 1000;

	@Input() public systelabTooltip: string;
	@Input() public systelabTooltipHtml: string;
	@Input() public systelabTooltipPlacement: undefined | 'top' | 'right' | 'bottom' | 'left';
	@Input() public systelabTooltipDelay: number;
	@Input() public systelabTooltipHideDelay: number;

	private overlayRef: OverlayRef | null = null;
	private showTimeout: any;
	private hideTimeout: any;

	constructor(
		private overlay: Overlay,
		private overlayPositionBuilder: OverlayPositionBuilder,
		private elementRef: ElementRef,
		private viewContainerRef: ViewContainerRef
	) { }

	public ngOnInit(): void {
		const positionStrategy = this.overlayPositionBuilder
			.flexibleConnectedTo(this.elementRef)
			.withPositions([
				this.getPosition()
			]);

		this.overlayRef = this.overlay.create({ positionStrategy });
		this.overlayRef.getConfig().panelClass = 'fullscreen';

	}

	public ngOnDestroy(): void {
		this.hideTooltip();
		if (this.overlayRef) {
			this.overlayRef.dispose();
		}
	}

	@HostListener('mouseenter')
	public onMouseEnter(): void {
			this.scheduleShow();
	}

	@HostListener('mouseleave')
	public onMouseLeave(): void {
			this.scheduleHide();
	}


	private scheduleShow(): void {
		clearTimeout(this.hideTimeout);
		if (!this.overlayRef || !this.overlayRef.hasAttached()) {
			this.showTimeout = setTimeout(() => {
				this.showTooltip();
			}, this.systelabTooltipDelay || TooltipDirective.DEFAULT_DELAY);
		}
	}

	private scheduleHide(): void {
		clearTimeout(this.showTimeout);
		if (this.overlayRef && this.overlayRef.hasAttached()) {
			this.hideTimeout = setTimeout(() => {
				this.hideTooltip();
			}, this.systelabTooltipHideDelay || TooltipDirective.DEFAULT_DELAY);
		}
	}

	private showTooltip(): void {
		if (this.overlayRef && this.overlayRef.hasAttached()) {
			return;
		}

		const tooltipContent = this.systelabTooltipHtml || this.systelabTooltip;
		if (!tooltipContent) {
			return;
		}

		// Create the portal and attach it to the overlay
		const tooltipPortal = new ComponentPortal(TooltipComponent, this.viewContainerRef);
		const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(tooltipPortal);

		// Pass content to the component
		tooltipRef.instance.content = this.systelabTooltip;
		tooltipRef.instance.htmlContent = this.systelabTooltipHtml;
		tooltipRef.instance.placement = this.systelabTooltipPlacement || TooltipDirective.DEFAULT_PLACEMENT;
	}

	private hideTooltip(): void {
		if (this.overlayRef) {
			this.overlayRef.detach();
		}
	}

	private getPosition(): any {
		const placement = this.systelabTooltipPlacement || TooltipDirective.DEFAULT_PLACEMENT;
		switch (placement) {
			case 'top':
				return {
					originX: 'center',
					originY: 'top',
					overlayX: 'center',
					overlayY: 'bottom',
					offsetY: -8,
				};
			case 'bottom':
				return {
					originX: 'center',
					originY: 'bottom',
					overlayX: 'center',
					overlayY: 'top',
					offsetY: 8,
				};
			case 'left':
				return {
					originX: 'start',
					originY: 'center',
					overlayX: 'end',
					overlayY: 'center',
					offsetX: -8,
				};
			case 'right':
				return {
					originX: 'end',
					originY: 'center',
					overlayX: 'start',
					overlayY: 'center',
					offsetX: 8,
				};
			default:
				return {
					originX: 'center',
					originY: 'top',
					overlayX: 'center',
					overlayY: 'bottom',
					offsetY: -8,
				};
		}
	}
}
