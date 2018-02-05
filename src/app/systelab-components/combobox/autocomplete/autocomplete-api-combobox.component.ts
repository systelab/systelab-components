import {OnDestroy, OnInit, Renderer2} from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid';
import { AbstractApiComboBox } from '../abstract-api-combobox.component';
import { AbstractComboBox } from '../abstract-combobox.component';

declare var jQuery: any;

export abstract class AutocompleteApiComboBox<T> extends AbstractApiComboBox<T> implements AgRendererComponent, OnInit, OnDestroy {

	public startsWith = '';

	public destroyOffClickListener: Function;
	public destroyTabListener: Function;

	constructor(public myRenderer: Renderer2) {
		super(myRenderer);
	}

	public doSearch(event: any) {
		if (event.shiftKey || event.ctrlKey) {
			return;
		}
		if (event.keyCode === 27) {
			if (this.isDropDownOpen()) {
				this.closeAndDestroyListeners();
			}
		} else {
			this.startsWith = event.target.value;
			if (!this.isDropDownOpen()) {
				if (this.startsWith) {
					this.onComboClicked();
					jQuery('.dropdown-toggle').dropdown('toggle');
					this.myRenderer.addClass(this.comboboxElement.nativeElement, 'show');
					this.myRenderer.addClass(this.dropdownMenuElement.nativeElement, 'show');
					this.destroyOffClickListener = this.myRenderer.listen('document', 'click', (evt: MouseEvent) => {
						this.offClickHandler(evt);
					});
					this.destroyTabListener = this.myRenderer.listen('document', 'click', (evt: KeyboardEvent) => {
						this.tabPressedHandler(evt);
					});
				} else {
					this.id = undefined;
					this.code = undefined;
					this.description = undefined;
				}
			} else {
				if (!this.startsWith) {
					jQuery('.dropdown-toggle').dropdown('toggle');
				}
			}
			this.refresh(null);
		}
	}

	public closeAndDestroyListeners() {
		this.startsWith = '';
		if (this.isDropDownOpen()) {
			const selectedRow: T = this.getSelectedRow();
			if (selectedRow) {
				this.id = selectedRow[this.getIdField()];
				this.description = selectedRow[this.getDescriptionField()];
			}
			jQuery('.dropdown-toggle').dropdown('toggle');
		}
		this.destroyListeners();
	}

	public offClickHandler(event: MouseEvent) {
		if (!this.dropdownToogleElement.nativeElement.contains(event.target)) { // check click origin
			this.closeAndDestroyListeners();
		}
	}

	// Override
	public setDropdownHeight() {
		let calculatedHeight = 0;

		calculatedHeight += AbstractComboBox.ROW_HEIGHT * 10;
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');

		if (this.filter) {
			const agGridElement = this.dropdownElement.nativeElement.getElementsByTagName('ag-grid-angular');
			const agGridHeight  = calculatedHeight - 36;
			this.myRenderer.setStyle(agGridElement[0], 'height', agGridHeight + 'px');
		}
	}

	public tabPressedHandler(event: KeyboardEvent) {
		if (event.key === 'Tab') {
			this.closeAndDestroyListeners();
		}
	}

	public destroyListeners() {
		if (this.destroyOffClickListener) {
			this.destroyOffClickListener();
		}
		if (this.destroyTabListener) {
			this.destroyTabListener();
		}
	}

	// Overrides
	public getRows(params: IGetRowsParams): void {
		this.gridOptions.api.showLoadingOverlay();
		const page: number = params.endRow / this.gridOptions.paginationPageSize;
		this.totalItemsLoaded = false;
		this.getData(page, this.gridOptions.paginationPageSize, this.startsWith)
			.subscribe(
				(v: Array<T>) => {
					this.gridOptions.api.hideOverlay();
					this.totalItemsLoaded = true;
					params.successCallback(v, this.getTotalItems());
				},
				() => {
					this.gridOptions.api.hideOverlay();
					params.failCallback();
				}
			);
	}

}
