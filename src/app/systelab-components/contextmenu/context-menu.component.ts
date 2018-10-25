import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter, HostListener,
	Input,
	OnDestroy,
	OnInit,
	Output,
	QueryList,
	Renderer2,
	ViewChild,
	ViewChildren
} from '@angular/core';
import {ContextMenuActionData} from './context-menu-action-data';
import {ContextMenuOption} from './context-menu-option';

declare var jQuery: any;

@Component({
	selector: 'systelab-context-menu',
	templateUrl: 'context-menu.component.html',
})
export class ContextMenuComponent implements OnInit, OnDestroy {

	@ViewChild('dropdownparent') public dropdownParent: ElementRef;
	@ViewChild('dropdownmenu') public dropdownMenuElement: ElementRef;
	@ViewChildren('childdropdownmenu') public childDropdownMenuElement: QueryList<ElementRef>;
	@ViewChild('dropdown') public dropdownElement: ElementRef;
	@ViewChild('scrollableList') public scrollableList: ElementRef;
	@ViewChild('ngcontent') public ngcontent: ElementRef;

	@Output() public action = new EventEmitter();

	public _contextMenuOptions: Array<ContextMenuOption>;
	@Input()
	set contextMenuOptions(value: Array<ContextMenuOption>) {
		this._contextMenuOptions = value;
		this.checkIfHasIcons();
	}

	get contextMenuOptions() {
		return this._contextMenuOptions;
	}

	@Input() public elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString();
	@Input() public fontSize: string;
	@Input() public fontColor: string;
	@Input() public isEmbedded = false;

	public hasIcons = false;

	public destroyWheelListener: Function;
	public destroyMouseListener: Function;
	public destroyKeyListener: Function;
	public scrollHandler: any;

	public isOpened = false;
	protected previousActionChild: string;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
	}

	public ngOnInit() {
		jQuery(this.dropdownParent.nativeElement)
			.on('hide.bs.dropdown', this.actionsAfterCloseDropDown.bind(this));
		this.checkIfHasIcons();
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event: any) {
		if (this.isDropDownOpened()) {
			this.closeDropDown();
		}
	}

	public isDropDownOpened(): boolean {
		return this.dropdownParent.nativeElement.className.includes('show');
	}

	public dotsClicked(event: MouseEvent) {
		if (this.existsAtLeastOneActionEnabled()) {
			if (!this.isDropDownOpened()) {
				// hide the div until is positioned in event x y position to avoid flick
				this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'hidden');
				this.isOpened = true;
				this.showDropDown(event.clientX, event.clientY);
			}
		} else {
			event.stopPropagation();
		}
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<ContextMenuOption>): void {
		this.contextMenuOptions = newContextMenuOptions;
		this.open(event);
	}

	public open(event: MouseEvent) {

		if (this.existsAtLeastOneActionEnabled()) {

			jQuery('#' + this.elementID)
				.dropdown('toggle');

			if (!this.isDropDownOpened()) {
				// Add class manually because is not set when jquery.dropdwon toogle is executed
				this.myRenderer.addClass(this.dropdownParent.nativeElement, 'show');
				// hide the div until is positioned in event x y position to avoid flick
				this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'hidden');
				this.isOpened = true;
				this.showDropDown(event.clientX, event.clientY);
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

	protected loop(x: number, y: number): void {
		if (this.isDropDownOpened()) {
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'position', 'fixed');
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'position', 'absolute');
			y = y - this.dropdownParent.nativeElement.offsetHeight;
			if (y + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight) {
				y = y - this.dropdownElement.nativeElement.offsetHeight;
			}
			if (x + this.dropdownElement.nativeElement.offsetWidth > window.innerWidth) {
				x = x - this.dropdownElement.nativeElement.offsetWidth;
			}
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', y + 'px');
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', x + 'px');
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'visible');
			this.addListeners();

		} else {
			setTimeout(() => this.loop(x, y), 10);
		}
	}

	public showDropDown(x: number, y: number) {
		setTimeout(() => this.loop(x, y), 10);
	}

	public resetDropDownPositionAndHeight() {
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', null);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', null);
	}

	public actionsAfterCloseDropDown() {
		this.previousActionChild = undefined;
		this.isOpened = false;
		this.cdr.detectChanges();
		this.removeScrollHandler();
		if (this.destroyWheelListener) {
			this.destroyWheelListener();
		}
		if (this.destroyKeyListener) {
			this.destroyKeyListener();
		}
		if (this.destroyMouseListener) {
			this.destroyMouseListener();
		}
		this.resetDropDownPositionAndHeight();

	}

	public closeDropDown() {
		if (this.isDropDownOpened()) {
			this.myRenderer.removeAttribute(this.dropdownParent.nativeElement, 'aria-expanded');
			this.myRenderer.removeClass(this.dropdownParent.nativeElement, 'show');
			this.myRenderer.removeClass(this.dropdownMenuElement.nativeElement, 'show');
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'hidden');
		}
		this.actionsAfterCloseDropDown();
	}

	protected addListeners() {

		this.addScrollHandler();

		this.destroyMouseListener = this.myRenderer.listen('window', 'click', (evt: MouseEvent) => {
			this.handleMouseEvents(evt);
		});

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
		this.checkTargetAndClose(event.target);
	}

	protected handleMouseEvents(event: MouseEvent) {
		this.checkTargetAndClose(event.target);
	}

	protected scroll(event: any) {
		this.checkTargetAndClose(event.target);
	}

	public ngContentStopPropagation(event: any): void {
		event.stopPropagation();
	}

	private checkIfNgContent(target: any): boolean {
		let currentElement = target;
		while (currentElement !== this.dropdownElement && currentElement) {
			if (currentElement === this.ngcontent.nativeElement) {
				return true;
			} else {
				currentElement = currentElement.parentElement;
			}
		}
		return false;
	}

	protected checkTargetAndClose(target: any) {
		const isNgContent = this.checkIfNgContent(target);
		if (isNgContent) {
			return;
		}
		if (target !== this.scrollableList.nativeElement && this.isDropDownOpened()) {
			if (this.childDropdownMenuElement) {
				const selectedChild: ElementRef = this.childDropdownMenuElement.toArray()
					.find((elem) => {
						return target === elem.nativeElement;
					});
				if (!selectedChild) {
					this.closeDropDown();
				}
			} else {
				this.closeDropDown();
			}
		}
	}

	protected addScrollHandler() {
		this.scrollHandler = this.scroll.bind(this);
		window.addEventListener('scroll', this.scrollHandler, true);
	}

	protected removeScrollHandler() {
		window.removeEventListener('scroll', this.scrollHandler, true);
	}

	protected isEnabled(elementId: string, actionId: string): boolean {

		const option: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actionId);

		if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined) {
			return option.isActionEnabled(elementId, actionId);
		}
		return true;

	}

	protected isIconEnabled(elementId: string, actionId: string): boolean {
		const option: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actionId);
		if (option && option.isIconEnabled !== null && option.isIconEnabled !== undefined) {
			return option.isIconEnabled(elementId, actionId);
		}
		return true;
	}

	protected executeAction(event: any, elementId: string, actionId: string, parentAction?: string): void {

		let option: ContextMenuOption;

		if (parentAction) {
			const parentMenuOption = this.contextMenuOptions.find(opt => opt.actionId === parentAction);
			option = parentMenuOption.childrenContextMenuOptions.find(opt => opt.actionId === actionId);
		} else {
			option = this.contextMenuOptions.find(opt => opt.actionId === actionId);
		}

		if (option.childrenContextMenuOptions && option.childrenContextMenuOptions.length > 0) {
			event.stopPropagation();
			event.preventDefault();

			if (this.previousActionChild !== actionId) {
				if (this.previousActionChild) {
					const previousActionChildID = this.previousActionChild + this.elementID;
					jQuery('#' + previousActionChildID)
						.toggle();
				}

				const childID = actionId + this.elementID;
				jQuery('#' + childID)
					.toggle();

				this.previousActionChild = actionId;

				const selectedChild: ElementRef = this.childDropdownMenuElement.toArray()
					.find((elem) => {
						return elem.nativeElement.id === childID;
					});

				const firstChildAbsoluteTop = event.clientY;
				let firstChildRelativeTop = event.target.offsetTop;

				if (firstChildAbsoluteTop + selectedChild.nativeElement.offsetHeight > window.innerHeight) {
					firstChildRelativeTop = firstChildRelativeTop - selectedChild.nativeElement.offsetHeight;
				}

				this.myRenderer.setStyle(selectedChild.nativeElement, 'top', firstChildRelativeTop + 'px');

				let firstChildLeft = this.dropdownElement.nativeElement.offsetWidth + 15;
				const firstChildAbsoluteLeft = this.dropdownElement.nativeElement.offsetLeft;

				if (firstChildAbsoluteLeft + this.dropdownElement.nativeElement.offsetWidth + selectedChild.nativeElement.offsetWidth > window.innerWidth) {
					firstChildLeft = -selectedChild.nativeElement.offsetWidth + 10;
				}

				this.myRenderer.setStyle(selectedChild.nativeElement, 'left', firstChildLeft + 'px');
			}

		} else {
			if (this.isEmbedded || parentAction) {
				this.closeDropDown();
				event.stopPropagation();
				event.preventDefault();
			}
			if (option && option.action !== null && option.action !== undefined) {
				const actionData: ContextMenuActionData = new ContextMenuActionData(elementId, actionId);
				return option.action(actionData);

			} else {
				const actionData: ContextMenuActionData = new ContextMenuActionData(elementId, actionId);
				this.action.emit(actionData);
			}
		}
	}

	public ngOnDestroy() {
		this.removeScrollHandler();
	}

	private checkIfHasIcons(): void {
		this.hasIcons = this.contextMenuOptions.find(contextMenuOption => contextMenuOption.iconClass !== undefined && contextMenuOption.iconClass !== null) !== undefined;
	}
}

