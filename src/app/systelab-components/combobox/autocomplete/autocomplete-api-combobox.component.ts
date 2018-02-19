import {ChangeDetectorRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid';
import { AbstractApiComboBox } from '../abstract-api-combobox.component';
import { AbstractComboBox } from '../abstract-combobox.component';

declare var jQuery: any;

export abstract class AutocompleteApiComboBox<T> extends AbstractApiComboBox<T> implements AgRendererComponent {

	public startsWith = '';

	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef) {
		super(myRenderer, chref);
	}

	public doSearch(event: any) {
		if (event.shiftKey || event.ctrlKey) {
			return;
		}
		if (event.keyCode === 27) {
			if (this.isDropDownOpen()) {
				this.closeDropDown();
			}
		} else {
			this.doSearchText( event.target.value);
		}
	}

	protected doSearchText(text: string) {
		this.startsWith = text;
		if (!this.startsWith || this.startsWith.length < 1) {
			this.resetComboSelection();
		}
		this.refresh(null);
	}

	// Overrides
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

	public onInputClicked(event: MouseEvent) {
		event.stopPropagation();
		if (this.isDisabled) {
			jQuery('.dropdown-toggle').dropdown('toggle');
			if (!this.isDropDownOpen()) {
				this.isDropdownOpened = true;
				this.showDropDown();
				this.myRenderer.addClass(this.comboboxElement.nativeElement, 'show');
				this.myRenderer.addClass(this.dropdownMenuElement.nativeElement, 'show');
				this.doSearchText(this.description);
			}
			this.inputElement.nativeElement.focus();
		}
	}

	// Overrides
	public onComboClicked(event: MouseEvent) {
		super.onComboClicked(event);
		this.doSearchText(this.description);
	}

	// Overrides
	public closeDropDown() {
		this.startsWith = '';
		const selectedRow: T = this.getSelectedRow();
		if (selectedRow) {
			this.id = selectedRow[this.getIdField()];
			this.description = selectedRow[this.getDescriptionField()];
		} else if (!this.id) {
			this.resetComboSelection();
		}
		super.closeDropDown();
	}

	protected resetComboSelection() {
		this.id = undefined;
		this.code = undefined;
		this.description = undefined;
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.deselectAll();
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
