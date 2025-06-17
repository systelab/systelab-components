import { Component, Input } from '@angular/core';
import { ContextMenuOption } from './context-menu-option';

@Component({
    selector: 'systelab-context-menu-item',
    templateUrl: 'context-menu-item.component.html',
    standalone: false
})
export class ContextMenuItemComponent {

	@Input() public action: ContextMenuOption;
	@Input() public hasIcons: boolean;
	@Input() public isEnabled: boolean;
	@Input() public isIconEnabled: boolean;
	@Input() public hasChildren: boolean;

	constructor() {
	}

}
