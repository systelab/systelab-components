import { Directive, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractContextComponent } from './abstract-context.component';
import { ContextMenuOption } from './context-menu-option';

@Directive()
export abstract class AbstractContextMenuComponent<T> extends AbstractContextComponent<T> {

	@ViewChildren('childdropdownmenu') public childDropdownMenuElement: QueryList<ElementRef>;
	@ViewChild('scrollableList', {static: false}) public scrollableList: ElementRef;

	@Output() public action = new EventEmitter();

	private contextMenuOptionsList: Array<T>;
	public readonly levelSeparator = '_|_';

	@Input()
	set contextMenuOptions(value: Array<T>) {
		this.contextMenuOptionsList = value;
		this.checkIfHasIcons();
	}

	get contextMenuOptions() {
		return this.contextMenuOptionsList;
	}

	public hasIcons = false;

	public abstract openWithOptions(event: MouseEvent, newContextMenuOptions: Array<T>);

	protected abstract existsAtLeastOneActionEnabled(): boolean;

	public abstract isEnabled(elementId: string, actionId: string): boolean;

	public abstract isIconEnabled(elementId: string, actionId: string): boolean;

	protected abstract executeAction(event: any, elementId: string, actionId: string, parentAction?: string);

	protected abstract getOption(actionId: string);

	public ngOnInit(): void {
		super.ngOnInit();
		this.checkIfHasIcons();
	}

	protected checkIfHasIcons(): void {
		this.hasIcons = false;
	}

	public dotsClicked(event: MouseEvent): void {
		if (this.existsAtLeastOneActionEnabled()) {
			super.dotsClicked(event);
		} else {
			event.stopPropagation();
		}
	}

	public open(event: MouseEvent): void {
		if (this.existsAtLeastOneActionEnabled()) {
			super.open(event);
		} else {
			event.stopPropagation();
		}
	}

	public doClick(event: any, elementID: string, action: ContextMenuOption, parent?: ContextMenuOption): void {
		if (this.isEnabled(elementID, action.actionId)) {
			this.executeAction(event, elementID, action.actionId);
		}
	}

	public doClickWithAction(event: any, elementID: string, actionId: string): void {
		if (this.isEnabled(elementID, actionId)) {
			this.executeAction(event, elementID, actionId);
		}
	}

	public doMouseOver(event: any, elementID: string, actionId: string): void {
		if (this.isEnabled(elementID, actionId)) {
			const optionAcitionId = this.getOptionDetailsActionId(actionId);

			const selectedChild = this.childDropdownMenuElement.toArray()
				.find((elem) => elem.nativeElement.id === (optionAcitionId + this.elementID));

			this.showSubmenu(event, actionId, selectedChild, this.elementID);
		}
	}

	public getSelfReference(): AbstractContextMenuComponent<T> {
		return this;
	}

	protected checkTargetAndClose(target: any): void {
		if (!this.checkIfNgContent(target)) {
			if (target !== this.scrollableList.nativeElement && this.isDropDownOpened()) {
				if (this.childDropdownMenuElement) {
					if (!this.childDropdownMenuElement.toArray()
						.some((elem) => target === elem.nativeElement)) {
						this.closeDropDown();
					}
				} else {
					this.closeDropDown();
				}
			}
		}
	}

	protected hideSubmenus(untilLevel: number): void {
		if (untilLevel < this.lastMenuLevel) {
			for (let i = this.lastMenuLevel; i > untilLevel; i--) {
				if (this.previousShownMenu[i - 1]) {
					this.toggle(this.previousShownMenu[i - 1]);
				}
				this.previousShownMenu.pop();
				this.lastMenuLevel = i - 1;
			}
		}
	}

	public getMenuLevel(actionId: string): number {
		const actions: string[] = actionId ? actionId.split(this.levelSeparator) : [];
		return actions.length - 1;
	}

	public getOptionDetailsActionId(actionId: string): string {
		const option = this.getOption(actionId);
		return option ? option.actionId : undefined;
	}

	public getOptionDetailsHasChildren(actionId: string): boolean {
		const option = this.getOption(actionId);
		return option ? option.hasChildren() : false;
	}

	public showSubmenu(event: any, actionId: string, selectedChild: ElementRef, elementId: string): void {
		const optionActionId = this.getOptionDetailsActionId(actionId);
		const optionHasChildren = this.getOptionDetailsHasChildren(actionId);
		const optionLevel = this.getMenuLevel(actionId);

		if (optionHasChildren) {
			event.stopPropagation();
			event.preventDefault();

			if (this.previousActionId !== optionActionId) {
				this.previousActionId = optionActionId;
				this.hideSubmenus(optionLevel);
				this.lastMenuLevel = optionLevel + 1;

				this.previousShownMenu.push(optionActionId + elementId);

				this.toggle(optionActionId + elementId);

				this.previousMenuWidth[this.lastMenuLevel - 1] = selectedChild.nativeElement.offsetWidth;

				const leftPosition = this.getFirstChildLeftWithLevels(selectedChild, optionLevel, this.previousMenuWidth);

				this.myRenderer.setStyle(selectedChild.nativeElement, 'top', this.getFirstChildTop(event, selectedChild) + 'px');
				this.myRenderer.setStyle(selectedChild.nativeElement, 'left', leftPosition + 'px');
			}
		} else {
			this.hideSubmenus(optionLevel);
			this.lastMenuLevel = optionLevel;

			event.stopPropagation();
			event.preventDefault();
			this.previousActionId = optionActionId;

		}
	}

}
