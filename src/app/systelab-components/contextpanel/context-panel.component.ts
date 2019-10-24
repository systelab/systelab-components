import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractContextPanelComponent } from './abstract-context-panel.component';
import { ContextMenuOption } from '../contextmenu/context-menu-option';

declare var jQuery: any;

@Component({
	selector:    'systelab-context-panel',
	templateUrl: 'context-panel.component.html',
})
export class ContextPanelComponent extends AbstractContextPanelComponent<ContextMenuOption> implements OnInit, OnDestroy {

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	protected executeAction(event: any, elementId: string, actionId: string, parentAction?: string): void {
		console.log('Execute action:');
	}
}

