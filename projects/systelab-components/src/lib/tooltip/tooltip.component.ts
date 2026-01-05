import { Component, Input } from '@angular/core';

@Component({
  selector: 'systelab-tooltip',
  template: `
    <div class="slab-tooltip" [ngClass]="['slab-tooltip-' + placement]" role="tooltip" style="position: relative;">
      <div class="tooltip-inner" [innerHTML]="htmlContent || content"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .slab-tooltip {
      position: relative;
      opacity: 1 !important;
      z-index: 1070;
    }
    .tooltip-inner {
      background-color: #000;
      color: #fff;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      position: relative; /* Needed for ::after positioning */
    }
    
    /* Common arrow styles using ::after */
    .tooltip-inner::after {
      content: "";
      position: absolute;
      border-width: 5px;
      border-style: solid;
    }

    /* Top Tooltip (Arrow at bottom) */
    .slab-tooltip-top .tooltip-inner::after {
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: #000 transparent transparent transparent;
    }

    /* Bottom Tooltip (Arrow at top) */
    .slab-tooltip-bottom .tooltip-inner::after {
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: transparent transparent #000 transparent;
    }

    /* Left Tooltip (Arrow at right) */
    .slab-tooltip-left .tooltip-inner::after {
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-color: transparent transparent transparent #000;
    }

    /* Right Tooltip (Arrow at left) */
    .slab-tooltip-right .tooltip-inner::after {
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-color: transparent #000 transparent transparent;
    }
  `],
  standalone: false
})
export class TooltipComponent {
  @Input() content: string;
  @Input() htmlContent: string;
  @Input() placement: string = 'top';
}
