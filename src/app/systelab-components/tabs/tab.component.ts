import { Component, Input } from '@angular/core';

@Component({
	selector: 'systelab-tab',
	template: `
                <div *ngIf="active" class="tab-pane fade" [class.show]="active" [class.active]="active" role="tabpanel"
                     [attr.aria-labelledby]="id">
                    <ng-content></ng-content>
                </div>
	          `
})
export class TabComponent {
	@Input() title: string;
	@Input() active = false;
	@Input() id = false;

}
