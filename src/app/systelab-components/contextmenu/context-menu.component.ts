import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnDestroy,
	OnInit, Renderer2,
} from '@angular/core';
import {ContextMenuActionData} from './context-menu-action-data';
import {ContextMenuOption} from './context-menu-option';
import {AbstractContextMenuComponent} from './abstract-context-menu.component';

declare var jQuery: any;

@Component({
	selector: 'systelab-context-menu',
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
			const optionEnabled: ContextMenuOption = this.contextMenuOptions.find((menuOption: ContextMenuOption) => {
				return this.isEnabled(this.elementID, menuOption.actionId);
			});
			return (optionEnabled != null);
		}
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

				if (firstChildAbsoluteLeft + this.dropdownElement.nativeElement.offsetWidth + selectedChild.nativeElement.offsetWidth
					> window.innerWidth) {
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

	protected checkIfHasIcons(): void {
		const option: ContextMenuOption = this.contextMenuOptions.find((contextMenuOption: ContextMenuOption) => {
			return contextMenuOption.iconClass !== undefined && contextMenuOption.iconClass !== null;
		});
		this.hasIcons = option !== undefined;
	}
}

