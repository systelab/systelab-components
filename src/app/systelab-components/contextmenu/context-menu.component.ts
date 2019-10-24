import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ContextMenuActionData } from './context-menu-action-data';
import { ContextMenuOption } from './context-menu-option';
import { AbstractContextMenuComponent } from './abstract-context-menu.component';

declare var jQuery: any;

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

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			return this.contextMenuOptions.some(opt => this.isEnabled(this.elementID, opt.actionId));
		} else {
			return false;
		}
	}

	protected isEnabled(elementId: string, actionId: string): boolean {

		const option: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actionId);

		if (option && option.isActionEnabled) {
			return option.isActionEnabled(elementId, actionId);
		} else {
			return true;
		}
	}

	protected isIconEnabled(elementId: string, actionId: string): boolean {
		const option: ContextMenuOption = this.contextMenuOptions.find(opt => opt.actionId === actionId);
		if (option && option.isIconEnabled) {
			return option.isIconEnabled(elementId, actionId);
		} else {
			return true;
		}
	}

	protected executeAction(event: any, elementId: string, actionId: string, parentAction?: string): void {

		const option: ContextMenuOption = this.getOption(actionId, parentAction);

		if (option.childrenContextMenuOptions && option.childrenContextMenuOptions.length > 0) {
			event.stopPropagation();
			event.preventDefault();

			if (this.previousActionChild !== actionId) {
				if (this.previousActionChild) {
					const previousActionChildID = this.previousActionChild + this.elementID;
					jQuery('#' + previousActionChildID).toggle();
				}

				const childID = actionId + this.elementID;
				jQuery('#' + childID).toggle();

				this.previousActionChild = actionId;

				const selectedChild = this.childDropdownMenuElement.toArray().find((elem) => elem.nativeElement.id === childID);

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

	private getOption(actionId: string, parentAction?: string): ContextMenuOption {
		if (parentAction) {
			const parentMenuOption = this.contextMenuOptions.find(opt => opt.actionId === parentAction);
			return parentMenuOption.childrenContextMenuOptions.find(opt => opt.actionId === actionId);
		} else {
			return this.contextMenuOptions.find(opt => opt.actionId === actionId);
		}
	}

	private getFirstChildLeft(selectedChild: ElementRef) {
		let firstChildLeft = this.dropdownElement.nativeElement.offsetWidth + 15;
		const firstChildAbsoluteLeft = this.dropdownElement.nativeElement.offsetLeft;

		if (firstChildAbsoluteLeft + this.dropdownElement.nativeElement.offsetWidth +
			selectedChild.nativeElement.offsetWidth > window.innerWidth) {
			firstChildLeft = -selectedChild.nativeElement.offsetWidth + 10;
		}
		return firstChildLeft;
	}

	private getFirstChildTop(event: any, selectedChild: ElementRef) {
		const firstChildAbsoluteTop = event.clientY;
		let firstChildRelativeTop = event.target.offsetTop;

		if (firstChildAbsoluteTop + selectedChild.nativeElement.offsetHeight > window.innerHeight) {
			firstChildRelativeTop = firstChildRelativeTop - selectedChild.nativeElement.offsetHeight;
		}
		return firstChildRelativeTop;
	}

	protected checkIfHasIcons(): boolean {
		return this.contextMenuOptions.some(opt => opt.iconClass !== undefined && opt.iconClass !== null);
	}
}

