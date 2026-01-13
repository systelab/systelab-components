import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ContextMenuOption } from '../contextmenu/context-menu-option';
import { AbstractContextComponent } from '../contextmenu/abstract-context.component';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';

@Component({
    selector: 'systelab-context-panel',
    templateUrl: 'context-panel.component.html',
    standalone: false
})
export class ContextPanelComponent extends AbstractContextComponent<ContextMenuOption> implements OnInit, OnDestroy {

    constructor(protected override el: ElementRef, protected override myRenderer: Renderer2, protected override cdr: ChangeDetectorRef, protected override overlay: Overlay, protected override overlayPositionBuilder: OverlayPositionBuilder, protected override viewContainerRef: ViewContainerRef) {
        super(el, myRenderer, cdr, overlay, overlayPositionBuilder, viewContainerRef);
    }
}
