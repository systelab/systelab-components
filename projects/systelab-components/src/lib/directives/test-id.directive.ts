import { Directive, ElementRef, Inject, Input, OnChanges, Optional, Renderer2 } from '@angular/core';
import { APP_CONFIG } from '../systelab-components.module.config';

const DEFAULT_PRODUCTION_MODE = true;
@Directive({
    selector: '[systelabTestId]',
    standalone: false
})
export class TestIdDirective implements OnChanges {
  @Input('systelabTestId') label: string;
  private readonly productionMode: boolean;

  constructor(@Optional() @Inject(APP_CONFIG) private config, private renderer: Renderer2, private el: ElementRef) {
    this.productionMode = (config) ? config.productionMode : DEFAULT_PRODUCTION_MODE;
  }

  ngOnChanges() {
      this.addE2EAttribute();
  }

  private addE2EAttribute() {
    if (this.productionMode) {
      return;
    }
    this.renderer.setAttribute(this.el.nativeElement, 'data-test-id', this.label);
  }

}
