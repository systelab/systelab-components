import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ContextMenuOption } from '../contextmenu/context-menu-option';
import { AbstractContextComponent } from '../contextmenu/abstract-context.component';

@Component({
	selector:    'systelab-context-panel',
	templateUrl: 'context-panel.component.html',
})
export class ContextPanelComponent extends AbstractContextComponent<ContextMenuOption> implements OnInit, OnDestroy {

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}
}
