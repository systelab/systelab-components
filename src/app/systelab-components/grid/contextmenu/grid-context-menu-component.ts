import { AbstractGrid } from '../abstract-grid.component';
import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { AbstractContextMenuComponent } from '../../contextmenu/abstract-context-menu.component';
import { GridContextMenuOption } from './grid-context-menu-option';

declare var jQuery: any;

@Component({
	selector:    'systelab-grid-context-menu',
	templateUrl: '../../contextmenu/context-menu.component.html'
})
export class GridContextMenuComponent<T> extends AbstractContextMenuComponent<GridContextMenuOption<T>> {

	protected container: AbstractGrid<T>;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	public setContainer(container: AbstractGrid<T>): void {
		this.container = container;
	}

	public setRowIndex(rowIndex: number) {
		this.elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString() + 'row' + rowIndex;
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<GridContextMenuOption<T>>): void {
		this.contextMenuOptions = newContextMenuOptions;
		this.open(event);
	}

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.container.isContextMenuOptionEnabled(elementId, actionId);
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			const optionEnabled: GridContextMenuOption<T> = this.contextMenuOptions.find((menuOption: GridContextMenuOption<T>) => {
				return this.isEnabled(this.elementID, menuOption.actionId);
			});
			return (optionEnabled != null);
		}
	}

	protected isIconEnabled(elementId: string, actionId: string): boolean {
		return false;
	}

	protected executeAction(event: any, elementId: string, actionId: string, parentAction?: string): void {

		let option: GridContextMenuOption<T>;

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

			if (option && option.actionId !== null && option.actionId !== undefined) {
				this.container.executeContextMenuAction(elementId, actionId);
			}
		}

	}

	protected checkIfHasIcons(): void {
	}
}
