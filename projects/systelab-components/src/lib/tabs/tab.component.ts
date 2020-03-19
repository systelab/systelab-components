import { Component, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'systelab-tab',
	template: `
                  <div class="d-flex slab-flex-1 slab-overflow-container">
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
	@Input() public title: string;
	@Input() public titleHtml: string;
	@Input() public active = false;
	@Input() public id = '';
	@Input() public warning = false;

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
