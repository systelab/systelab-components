import { Component, Input } from '@angular/core';

@Component({
	selector: 'systelab-tab',
	styles:   [`
      .slab-tab-inside-pane {
          padding: 1em;
      }
	`],
	template: `
                <div [hidden]="!active" class="slab-tab-inside-pane">
                    <ng-content></ng-content>
                </div>
	          `
})
export class TabComponent {
	@Input() title: string;
	@Input() active = false;
}
