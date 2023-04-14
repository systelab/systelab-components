import { Directive, ElementRef, Inject, Input, OnInit, Optional, Renderer2 } from '@angular/core';
import { APP_CONFIG } from '../config';

@Directive({
  selector: '[systelabTestId]'
})
export class TestIdDirective implements OnInit {
  @Input('systelabTestId') label: string;
  private readonly productionMode: boolean;

  constructor(@Optional() @Inject(APP_CONFIG) private config, private renderer: Renderer2, private el: ElementRef) {
    this.productionMode = (config) ? config.productionMode : false;
  }

  ngOnInit() {
    if (!this.productionMode) {
      this.addE2EAttribute();
    }
  }

  private addE2EAttribute() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-test-id', this.label);
  }

}
