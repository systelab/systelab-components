import { Component, ViewChild, ElementRef, Input, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ContextMenuActionData } from './context-menu-action-data';
import { ContextMenuOption } from './context-menu-option';

declare var jQuery: any;

@Component({
	selector:    'mp-context-menu',
	templateUrl: 'context-menu.component.html'
})
export class ContextMenuComponent {

	@ViewChild('dropdownparent') public dropdownParent: ElementRef;
	@ViewChild('dropdown') public dropdown: ElementRef;

	@Output() public action = new EventEmitter();

	@Input() public contextMenuOptions: Array<ContextMenuOption>;

	@Input() public elementID: string;

	public top: number = 0;
	public left: number = 0;

	public destroyWheelListener: Function;
	public destroyKeyListener: Function;

	public isOpened: boolean = false;

	// events: any;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2) {
	}

	public isDropDownOpened(): boolean {
		if (this.dropdownParent.nativeElement.className.includes('uk-open')) {
			return true;
		}
		return false;
	}

	public dotsClicked(event: MouseEvent) {

		if (!this.isDropDownOpened()) {

			this.isOpened = true;

			this.myRenderer.setStyle(this.dropdown.nativeElement, 'width', '0px');
			this.myRenderer.setStyle(this.dropdown.nativeElement, 'height', '0px');

			this.top = event.clientY;
			this.left = event.clientX;

			this.showDropDown();

			jQuery('#' + this.elementID)
				.on('hide.uk.dropdown', this.closeDropDown.bind(this));

		} else {
			this.closeDropDown();
		}

	}

	protected loop(): void {
		let result: boolean = true;

		if (this.isDropDownOpened()) {


			/*
			 this.events = JSON.parse(JSON.stringify(jQuery._data( $( '#' + this.elementID )[0], 'events' )));

			 $( '#' + this.elementID )
			 .off(jQuery._data( $( '#' + this.elementID )[0], 'events' )[0] );

			 console.log( jQuery._data( $( '#' + this.elementID )[0], 'events' ) );

			 console.log( this.events );
			 */

			this.myRenderer.setStyle(this.dropdown.nativeElement, 'width', null);
			this.myRenderer.setStyle(this.dropdown.nativeElement, 'height', null);

			if (this.top + this.dropdown.nativeElement.offsetHeight > window.innerHeight) {
				this.top = this.top - this.dropdown.nativeElement.offsetHeight;
			}

			if (this.left + this.dropdown.nativeElement.offsetWidth > window.innerWidth) {
				this.left = this.left - this.dropdown.nativeElement.offsetWidth;
			}

			this.myRenderer.setStyle(this.dropdown.nativeElement, 'top', this.top + 'px');
			this.myRenderer.setStyle(this.dropdown.nativeElement, 'left', this.left + 'px');
			this.myRenderer.setStyle(this.dropdown.nativeElement, 'position', 'fixed');

			this.addListeners();

			result = false;
		}
		if (result) {
			setTimeout(() => this.loop(), 10);
		} else {
			return;
		}
	}

	public showDropDown() {
		setTimeout(() => this.loop(), 10);
	}

	public closeDropDown() {

		//this.myRenderer.setStyle(this.dropdown.nativeElement, 'position', null);
		//this.myRenderer.setStyle(this.dropdown.nativeElement, 'top', null);
		//this.myRenderer.setStyle(this.dropdown.nativeElement, 'left', 'null');

		this.destroyWheelListener();
		this.destroyKeyListener();

		jQuery('#' + this.elementID)
			.off('hide.uk.dropdown');

		this.myRenderer.addClass(this.dropdownParent.nativeElement, 'uk-dropdown-close');

		this.isOpened = false;

		/*
		 console.log('En closeDropDown');
		 console.log(this.events);

		 $( '#' + this.elementID )
		 .on( this.events[0] );

		 console.log( jQuery._data( $( '#' + this.elementID )[0], 'events' ) );

		 */

	}

	protected addListeners() {
		this.destroyWheelListener = this.myRenderer.listen('window', 'wheel', (evt: WheelEvent) => {
			this.handleWheelEvents(evt);
		});

		this.destroyKeyListener = this.myRenderer.listen('document', 'keydown', (evt: KeyboardEvent) => {
			this.handleKeyboardEvents(evt);
		});

	}

	protected handleKeyboardEvents(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			if (this.isDropDownOpened()) {
				this.closeDropDown();
				this.myRenderer.removeClass(this.dropdownParent.nativeElement, 'uk-open');
			}
		}
	}

	protected handleWheelEvents(event: WheelEvent) {
		if (this.isDropDownOpened()) {
			this.closeDropDown();
			this.myRenderer.removeClass(this.dropdownParent.nativeElement, 'uk-open');
		}
	}

	protected isEnabled(elementId: string, actionId: string): boolean {

		let option: ContextMenuOption = this.contextMenuOptions.find(option => option.actionId === actionId);

		if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined) {
			return option.isActionEnabled(elementId, actionId);
		}
		return true;

	}

	protected executeAction(elementId: string, actionId: string): void {
		let option: ContextMenuOption = this.contextMenuOptions.find(option => option.actionId === actionId);

		if (option && option.action !== null && option.action !== undefined) {

			let actionData: ContextMenuActionData = new ContextMenuActionData(elementId, actionId);
			return option.action(actionData);

		} else {
			let actionData: ContextMenuActionData = new ContextMenuActionData(elementId, actionId);
			this.action.emit(actionData);
		}
	}
}

