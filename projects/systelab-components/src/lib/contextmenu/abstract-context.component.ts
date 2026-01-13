import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive()
export abstract class AbstractContextComponent<T> implements OnInit, OnDestroy {

	@ViewChild('dropdowntemplate', { static: true }) public dropdownTemplate: TemplateRef<any>;
	@ViewChild('dropdownparent', { static: true }) public dropdownParent: ElementRef;

	@Output() public action = new EventEmitter();

	@Input() public elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString();
	@Input() public fontSize: string;
	@Input() public fontColor: string;
	@Input() public isEmbedded = false;
	@Input() public overflow = false;

	public isOpened = false;
	protected overlayRef: OverlayRef;

	protected constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef, protected overlay: Overlay, protected overlayPositionBuilder: OverlayPositionBuilder, protected viewContainerRef: ViewContainerRef) {
	}

	public ngOnInit(): void {
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event: any): void {
		if (this.isDropDownOpened()) {
			this.closeDropDown();
		}
	}

	public isDropDownOpened(): boolean {
		return this.isOpened;
	}

	public actionsAfterCloseDropDown(): void {
		this.isOpened = false;
		this.cdr.detectChanges();
	}

	public closeDropDown(): void {
		if (this.overlayRef) {
			this.overlayRef.detach();
			this.overlayRef.dispose();
		}
		this.actionsAfterCloseDropDown();
	}

	public ngOnDestroy(): void {
		this.closeDropDown();
	}

	public dotsClicked(event: MouseEvent): void {
		if (!this.isDropDownOpened()) {
			this.elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString();
			this.open(event);
		}
	}

	public open(event: MouseEvent): void {
		if (!this.isDropDownOpened()) {
			let anchor: ElementRef = this.dropdownParent;
			if (this.isEmbedded && event && event.target && event.target instanceof Element) {
				anchor = new ElementRef(event.target);
			}
			const positionStrategy = this.overlayPositionBuilder
				.flexibleConnectedTo(anchor)
				.withPositions([
					{
						originX: 'start',
						originY: 'bottom',
						overlayX: 'start',
						overlayY: 'top'
					}
				]);

			this.overlayRef = this.overlay.create({ positionStrategy });
			this.overlayRef.outsidePointerEvents().subscribe(() => this.closeDropDown());

			const portal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
			this.overlayRef.attach(portal);

			this.isOpened = true;
			this.cdr.detectChanges();
		}
	}

	public toggle(elementID: string): void {
		// Logic used by subclasses for submenus
		const element = document.getElementById(elementID);
		if (element) {
			if (element.style.display === 'none') {
				this.myRenderer.setStyle(element, 'display', 'block');
			} else {
				this.myRenderer.setStyle(element, 'display', 'none');
			}
		}
	}

	public ngContentStopPropagation(event: any): void {
		event.stopPropagation();
	}
}
