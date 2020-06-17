import { Directive, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractContextComponent } from './abstract-context.component';
import { ContextMenuOption } from './context-menu-option';

@Directive()
export abstract class AbstractContextMenuComponent<T> extends AbstractContextComponent<T> {

	@ViewChildren('childdropdownmenu0') public childDropdownMenuElement0: QueryList<ElementRef>;
	@ViewChild('scrollableList', {static: false}) public scrollableList: ElementRef;

	@Output() public action = new EventEmitter();

	public _contextMenuOptions: Array<T>;
	protected previousShownMenu: Array<string> = new Array<string>();
	protected previousMenuWidth: Array<number> = new Array<number>();
	protected lastMenuLevel: number;
	public readonly levelSeparator = '_|_';

	@Input()
	set contextMenuOptions(value: Array<T>) {
		this._contextMenuOptions = value;
		this.checkIfHasIcons();
	}

	get contextMenuOptions() {
		return this._contextMenuOptions;
	}

	public hasIcons = false;

	public abstract openWithOptions(event: MouseEvent, newContextMenuOptions: Array<T>);

	protected abstract existsAtLeastOneActionEnabled(): boolean;

	public abstract isEnabled(elementId: string, actionId: string): boolean;

	public abstract isIconEnabled(elementId: string, actionId: string): boolean;

	protected abstract executeAction(event: any, elementId: string, actionId: string, parentAction?: string);

	protected abstract getOption(actionId: string);

	public ngOnInit() {
		super.ngOnInit();
		this.checkIfHasIcons();
	}

	protected checkIfHasIcons(): void {
		this.hasIcons = false;
	}

	public dotsClicked(event: MouseEvent) {
		if (this.existsAtLeastOneActionEnabled()) {
			super.dotsClicked(event);
		} else {
			event.stopPropagation();
		}
	}

	public open(event: MouseEvent) {
		if (this.existsAtLeastOneActionEnabled()) {
			super.open(event);
		} else {
			event.stopPropagation();
		}
	}

	public doClick(event: any, elementID: string, action: ContextMenuOption, parent?: ContextMenuOption) {
		if (this.isEnabled(elementID, action.actionId)) {
			this.executeAction(event, elementID, action.actionId);
		}
	}

	public doClickWithString(event: any, elementID: string, actionId: string) {
		if (this.isEnabled(elementID, actionId)) {
			this.executeAction(event, elementID, actionId);
		}
	}

	public doMouseOver(event: any, elementID: string, actionId: string) {
		if (this.isEnabled(elementID, actionId)) {
			const {optionAcitionId} = this.getOptionDetails(actionId);

			const selectedChild = this.childDropdownMenuElement0.toArray()
				.find((elem) => elem.nativeElement.id === (optionAcitionId + this.elementID));

			this.showSubmenu(event, actionId, selectedChild, this.elementID);
		}
	}

	public getMyReference() {
		return this;
	}

	protected checkTargetAndClose(target: any) {
		if (!this.checkIfNgContent(target)) {
			if (target !== this.scrollableList.nativeElement && this.isDropDownOpened()) {
				if (this.childDropdownMenuElement0) {
					if (!this.childDropdownMenuElement0.toArray().some((elem) => target === elem.nativeElement)) {
						this.closeDropDown();
					}
				} else {
					this.closeDropDown();
				}
			}
		}
	}

	protected hideSubmenus (untilLevel: number) {
		if (untilLevel < this.lastMenuLevel) {
			for (let i = this.lastMenuLevel; i > untilLevel; i--) {
				this.toggle(this.previousShownMenu[i - 1]);
				this.previousShownMenu.pop();
				this.lastMenuLevel = i - 1;
			}
		}
	}

	public getMyLevel(actionId: string): number {
		const actions: string[] = actionId.split(this.levelSeparator);
		return actions.length - 1;
	}

	public getOptionDetails(actionId: string) {
		const optionAcitionId: string = this.getOption(actionId).actionId;
		const optionHasChilder: boolean = this.getOption(actionId).hasChildren();

		return {optionAcitionId, optionHasChildren: optionHasChilder};
	}

	public showSubmenu(event: any, actionId: string, selectedChild: ElementRef, elementId: string) {
		const {optionAcitionId, optionHasChildren} = this.getOptionDetails(actionId);
		const optionLevel = this.getMyLevel(actionId);

		if (optionHasChildren) {
			event.stopPropagation();
			event.preventDefault();

			if (this.previousActionChild !== optionAcitionId ) {
				this.previousActionChild = optionAcitionId;
				this.hideSubmenus(optionLevel);
				this.lastMenuLevel = optionLevel + 1;

				this.previousShownMenu.push(optionAcitionId + elementId);

				this.toggle(optionAcitionId + elementId);

				this.previousMenuWidth[this.lastMenuLevel - 1] = selectedChild.nativeElement.offsetWidth;

				let leftPosition: number;
				leftPosition = this.getFirstChildLeftWithLevels(selectedChild, optionLevel, this.previousMenuWidth);

				this.myRenderer.setStyle(selectedChild.nativeElement, 'top', this.getFirstChildTop(event, selectedChild) + 'px');
				this.myRenderer.setStyle(selectedChild.nativeElement, 'left', leftPosition + 'px');
			}
		} else {
			this.hideSubmenus(optionLevel);
			this.lastMenuLevel = optionLevel;

			event.stopPropagation();
			event.preventDefault();
			this.previousActionChild = optionAcitionId;

		}
	}


}
