import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { ContextMenuActionData } from './context-menu-action-data';
import { ContextMenuOption } from './context-menu-option';

declare var jQuery: any;

@Component({
	selector:    'systelab-context-menu',
	templateUrl: 'context-menu.component.html',
})
export class ContextMenuComponent implements OnInit, OnDestroy {

	@ViewChild('dropdownparent') public dropdownParent: ElementRef;
	@ViewChild('dropdownmenu') public dropdownMenuElement: ElementRef;
	@ViewChild('dropdown') public dropdownElement: ElementRef;

	@Output() public action = new EventEmitter();

	@Input() public contextMenuOptions: Array<ContextMenuOption>;

	@Input() public elementID: string;
	@Input() public fontSize: string;
	@Input() public fontColor: string;
	@Input() public hasIcons = false;

	public top = 0;
	public left = 0;

	public destroyWheelListener: Function;
	public destroyKeyListener: Function;
	public scrollHandler: any;

	public isOpened = false;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2) {
	}

	public ngOnInit() {
		jQuery(this.dropdownParent.nativeElement).on('hide.bs.dropdown', this.actionsAfterCloseDropDown.bind(this));
	}

	public isDropDownOpened(): boolean {
		return this.dropdownParent.nativeElement.className.includes('show');
	}

	public dotsClicked(event: MouseEvent) {
		if (this.existsAtLeastOneActionEnabled()) {
			if (!this.isDropDownOpened()) {
				this.isOpened = true;
				this.top = event.clientY;
				this.left = event.clientX;
				this.showDropDown();
			}
		} else {
			event.stopPropagation();
		}
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			const optionEnabled: ContextMenuOption = this.contextMenuOptions.find((menuOption: ContextMenuOption) => {
				return this.isEnabled(this.elementID, menuOption.actionId);
			});
			return (optionEnabled != null);
		}
	}

	protected loop(): void {
		let result = true;
		if (this.isDropDownOpened()) {
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'position', 'fixed');
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'position', 'absolute');
			this.top = this.top - this.dropdownParent.nativeElement.offsetHeight;
			if (this.top + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight) {
				this.top = this.top - this.dropdownElement.nativeElement.offsetHeight;
			}
			if (this.left + this.dropdownElement.nativeElement.offsetWidth > window.innerWidth) {
				this.left = this.left - this.dropdownElement.nativeElement.offsetWidth;
			}
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', this.top + 'px');
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', this.left + 'px');
			this.addListeners();
			result = false;
		}
		if (result) {
			setTimeout(() => this.loop(), 10);
		}
	}

	public showDropDown() {
		setTimeout(() => this.loop(), 10);
	}

	public resetDropDownPositionAndHeight() {
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', null);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', null);
	}

	public actionsAfterCloseDropDown() {
		this.isOpened = false;
		this.removeScrollHandler();
		if (this.destroyWheelListener) {
			this.destroyWheelListener();
		}
		if (this.destroyKeyListener) {
			this.destroyKeyListener();
		}
		this.resetDropDownPositionAndHeight();

	}

	public closeDropDown() {
		if (this.isDropDownOpened()) {
			jQuery('#' + this.elementID).dropdown('toggle');
		}
		this.actionsAfterCloseDropDown();
	}

	protected addListeners() {

		this.addScrollHandler();

		this.destroyWheelListener = this.myRenderer.listen('window', 'scroll', (evt: WheelEvent) => {
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
			}
		}
	}

	protected handleWheelEvents(event: WheelEvent) {
		if (this.isDropDownOpened()) {
			this.closeDropDown();
		}
	}

	protected scroll() {
		if (this.isDropDownOpened()) {
			this.closeDropDown();
		}
	}

	protected addScrollHandler() {
		this.scrollHandler = this.scroll.bind(this);
		window.addEventListener('scroll', this.scrollHandler , true);
	}

	protected removeScrollHandler() {
		window.removeEventListener('scroll', this.scrollHandler , true);
	}

	protected isEnabled(elementId: string, actionId: string): boolean {

		const option: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actionId);

		if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined) {
			return option.isActionEnabled(elementId, actionId);
		}
		return true;

	}

	protected isIconEnabled( elementId: string, actionId: string): boolean {
		const option: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actionId);
		if ( option && option.isIconEnabled !== null && option.isIconEnabled !== undefined ) {
			return option.isIconEnabled(elementId, actionId);
		}
		return true;
	}

	protected executeAction(elementId: string, actionId: string): void {
		const option: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actionId);

		if (option && option.action !== null && option.action !== undefined) {

			const actionData: ContextMenuActionData = new ContextMenuActionData(elementId, actionId);
			return option.action(actionData);

		} else {
			const actionData: ContextMenuActionData = new ContextMenuActionData(elementId, actionId);
			this.action.emit(actionData);
		}
	}

	public ngOnDestroy() {
		this.removeScrollHandler();
	}
}

