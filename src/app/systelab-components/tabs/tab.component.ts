import { Component, Input } from '@angular/core';

@Component({
	selector: 'systelab-tab',
	styles:   [`
      .pane {
          padding: 1em;
      }
	`],
	template: `
                <div [hidden]="!active" class="pane">
                    <ng-content></ng-content>
                </div>
	          `
})
export class TabComponent {
	@Input() title: string;
	@Input() active = false;
}
