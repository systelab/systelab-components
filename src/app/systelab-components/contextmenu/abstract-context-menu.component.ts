import { EventEmitter, Input, Output } from '@angular/core';
import { AbstractContextComponent } from './abstract-context.component';

declare var jQuery: any;

export abstract class AbstractContextMenuComponent<T> extends AbstractContextComponent<T> {

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

	protected abstract isEnabled(elementId: string, actionId: string): boolean;

	protected abstract isIconEnabled(elementId: string, actionId: string): boolean;

	protected abstract executeAction(event: any, elementId: string, actionId: string, parentAction?: string);

	protected abstract checkIfHasIcons();

	public ngOnInit() {
		super.ngOnInit();
		this.checkIfHasIcons();
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

}
