import { ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractContextComponent } from './abstract-context.component';
import { ContextMenuOption } from './context-menu-option';

export abstract class AbstractContextMenuComponent<T> extends AbstractContextComponent<T> {

	@ViewChildren('childdropdownmenu') public childDropdownMenuElement: QueryList<ElementRef>;
	@ViewChild('scrollableList', {static: false}) public scrollableList: ElementRef;

	@Output() public action = new EventEmitter();

	public _contextMenuOptions: Array<T>;

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
			this.executeAction(event, elementID, action.actionId, parent ? parent.actionId : undefined);
		}
	}

	protected checkTargetAndClose(target: any) {
		if (!this.checkIfNgContent(target)) {
			if (target !== this.scrollableList.nativeElement && this.isDropDownOpened()) {
				if (this.childDropdownMenuElement) {
					if (!this.childDropdownMenuElement.toArray().some((elem) => target === elem.nativeElement)) {
						this.closeDropDown();
					}
				} else {
					this.closeDropDown();
				}
			}
		}
	}
}
