import { Component, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'systelab-tab',
	template: `
                <div class="d-flex slab-flex-1">
                    <ng-content></ng-content>
                </div>
	          `,
	styles:   [`
      :host {
          flex: 1;
          display: flex;
          flex-direction: column;
      }
	`]
})
export class TabComponent {
	@Input() title: string;
	@Input() active = false;
	@Input() id = false;

	constructor(protected elementRef: ElementRef) {

	}

	public setVisible(visible: boolean) {
		if (visible) {
			this.elementRef.nativeElement.style.display = 'flex';
		} else {
			this.elementRef.nativeElement.style.display = 'none';
		}
	}
}
