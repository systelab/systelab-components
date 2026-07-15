import {
    ChangeDetectionStrategy, Component, ComponentRef, Directive, ElementRef,
    HostListener, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation
} from '@angular/core';
import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

const TOOLTIP_POSITIONS: Record<TooltipPlacement, ConnectedPosition[]> = {
    top:    [{ originX: 'center', originY: 'top',    overlayX: 'center', overlayY: 'bottom', offsetY: -6 }],
    bottom: [{ originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top',    offsetY: 6 }],
    left:   [{ originX: 'start',  originY: 'center', overlayX: 'end',    overlayY: 'center', offsetX: -6 }],
    right:  [{ originX: 'end',    originY: 'center', overlayX: 'start',  overlayY: 'center', offsetX: 6 }],
};

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        role: 'tooltip',
        '[class]': '"tooltip bs-tooltip-" + placement + " show"',
    },
    template: `<div class="arrow"></div><div class="tooltip-inner" [innerHTML]="content"></div>`,
})
export class TooltipContentComponent {
    @Input() content = '';
    @Input() placement: TooltipPlacement = 'top';
}

@Directive({
    selector: '[systelabTooltip],[systelabTooltipHtml]',
    standalone: false,
})
export class TooltipDirective implements OnDestroy, OnChanges {

    public static readonly DEFAULT_PLACEMENT: TooltipPlacement = 'top';
    public static readonly DEFAULT_DELAY = 1000;

    @Input() public systelabTooltip: string | undefined;
    @Input() public systelabTooltipHtml: string | undefined;
    @Input() public systelabTooltipPlacement: TooltipPlacement | undefined;
    @Input() public systelabTooltipDelay: number = TooltipDirective.DEFAULT_DELAY;
    @Input() public systelabTooltipHideDelay: number = TooltipDirective.DEFAULT_DELAY;
    @Input() public systelabTooltipOnFocus = true;

    private overlayRef: OverlayRef | null = null;
    private tooltipRef: ComponentRef<TooltipContentComponent> | null = null;
    private showTimeout: ReturnType<typeof setTimeout> | null = null;
    private hideTimeout: ReturnType<typeof setTimeout> | null = null;
    private scrollListener: (() => void) | null = null;

    constructor(private readonly el: ElementRef, private readonly overlay: Overlay) {}

    @HostListener('mouseenter') onMouseEnter(): void { 
		this.scheduleShow(); 
	}
    @HostListener('mouseleave') onMouseLeave(): void { 
		this.scheduleHide(); 
	}
    @HostListener('focus')      onFocus(): void      { 
		if (this.systelabTooltipOnFocus) { 
			this.scheduleShow(); 
		} 
	}
    @HostListener('blur')       onBlur(): void       { 
		if (this.systelabTooltipOnFocus) { 
			this.scheduleHide();
		} 
	}

    ngOnChanges(_changes: SimpleChanges): void {
        this.updateContent();
    }

    ngOnDestroy(): void {
        this.clearTimeouts();
        this.disposeOverlay();
    }

    private scheduleShow(): void {
        this.clearHideTimeout();
        const delay = this.systelabTooltipDelay ?? TooltipDirective.DEFAULT_DELAY;
        this.showTimeout = setTimeout(() => this.show(), delay);
    }

    private scheduleHide(): void {
        this.clearShowTimeout();
        const delay = this.systelabTooltipHideDelay ?? TooltipDirective.DEFAULT_DELAY;
        this.hideTimeout = setTimeout(() => this.disposeOverlay(), delay);
    }

    private show(): void {
        const content = this.systelabTooltipHtml ?? this.systelabTooltip;
        if (!content || this.overlayRef?.hasAttached()) return;

        const placement = this.systelabTooltipPlacement ?? TooltipDirective.DEFAULT_PLACEMENT;

        this.overlayRef = this.overlay.create({
            panelClass: 'slab-tooltip-pane',
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.el)
                .withPositions(TOOLTIP_POSITIONS[placement])
                .withViewportMargin(8),
        });

        this.scrollListener = () => this.disposeOverlay();
        window.addEventListener('scroll', this.scrollListener, { passive: true, capture: true });

        this.tooltipRef = this.overlayRef.attach(new ComponentPortal(TooltipContentComponent));
        this.updateContent();
    }

    private updateContent(): void {
        if (!this.tooltipRef) return;
        const content = this.systelabTooltipHtml ?? this.systelabTooltip ?? '';
        const placement = this.systelabTooltipPlacement ?? TooltipDirective.DEFAULT_PLACEMENT;
        this.tooltipRef.setInput('content', content);
        this.tooltipRef.setInput('placement', placement);
    }

    private disposeOverlay(): void {
        if (this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener, { capture: true });
            this.scrollListener = null;
        }
        this.overlayRef?.dispose();
        this.overlayRef = null;
        this.tooltipRef = null;
    }

    private clearShowTimeout(): void {
        if (this.showTimeout !== null) { 
			clearTimeout(this.showTimeout); this.showTimeout = null; 
		}
    }

    private clearHideTimeout(): void {
        if (this.hideTimeout !== null) { 
			clearTimeout(this.hideTimeout); this.hideTimeout = null; 
		}
    }

    private clearTimeouts(): void {
        this.clearShowTimeout();
        this.clearHideTimeout();
    }
}
