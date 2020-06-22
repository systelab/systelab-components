import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ContextMenuActionData } from './context-menu-action-data';
import { ContextMenuOption } from './context-menu-option';
import { AbstractContextMenuComponent } from './abstract-context-menu.component';

@Component({
	selector:    'systelab-context-menu',
	templateUrl: 'context-menu.component.html',
})
export class ContextMenuComponent extends AbstractContextMenuComponent<ContextMenuOption> implements OnInit, OnDestroy {

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<ContextMenuOption>): void {
		this.contextMenuOptions = newContextMenuOptions;
		this.open(event);
	}

	public getSelfReference (): AbstractContextMenuComponent<ContextMenuOption> {
		return this;
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			return this.contextMenuOptions.some(opt => this.isEnabled(this.elementID, opt.actionId));
		} else {
			return false;
		}
	}

	public isEnabled(elementId: string, actionId: string): boolean {
		const option: ContextMenuOption = this.getOption(actionId);
		return (option && option.isActionEnabled) ? option.isActionEnabled(elementId, actionId) : true;
	}

	public isIconEnabled(elementId: string, actionId: string): boolean {
		const option: ContextMenuOption = this.getOption(actionId);
		return (option && option.isIconEnabled) ? option.isIconEnabled(elementId, actionId) : true;
	}

	public executeAction(event: any, elementId: string, actionId: string, parentAction?: string): void {

		const option: ContextMenuOption = this.getOption(actionId, parentAction);

		if (option.hasChildren()) {
			event.stopPropagation();
			event.preventDefault();

			if (this.previousActionId !== actionId) {
				if (this.previousActionId) {
					this.toggle(this.previousActionId + this.elementID);
				}
				this.previousActionId = actionId;

				this.toggle(actionId + this.elementID);
				const selectedChild = this.childDropdownMenuElement.toArray()
					.find((elem) => elem.nativeElement.id === (actionId + this.elementID));
				this.myRenderer.setStyle(selectedChild.nativeElement, 'top', this.getFirstChildTop(event, selectedChild) + 'px');
				this.myRenderer.setStyle(selectedChild.nativeElement, 'left', this.getFirstChildLeft(selectedChild) + 'px');
			}

		} else {
			if (this.isEmbedded || parentAction) {
				this.closeDropDown();
				event.stopPropagation();
				event.preventDefault();
			}
			if (option && option.action) {
				return option.action(new ContextMenuActionData(elementId, actionId));
			} else {
				this.action.emit(new ContextMenuActionData(elementId, actionId));
			}
		}
	}

	protected checkIfHasIcons(): void {
		this.hasIcons = this.contextMenuOptions.some(opt => opt.iconClass !== undefined && opt.iconClass !== null);
	}

	protected getOption(actionId: string, parentAction?: string): ContextMenuOption {
		const actions: string[] = actionId.split(this.levelSeparator);
		let level = 1;

		let menuLevel: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actions[level - 1]);
		level ++;
		while (level <= actions.length) {
			menuLevel = menuLevel.childrenContextMenuOptions.find(opt => opt.actionId === actions[level - 1]);
			level ++;
		}

		return menuLevel;
	}

}
