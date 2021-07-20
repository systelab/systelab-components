import { ChangeDetectorRef, Directive, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid-community';
import { AbstractApiComboBox } from '../abstract-api-combobox.component';
import { AbstractComboBox } from '../abstract-combobox.component';
import { PreferencesService } from 'systelab-preferences';
import {Dropdown} from 'bootstrap';

@Directive()
export abstract class AutocompleteApiComboBox<T> extends AbstractApiComboBox<T> implements AgRendererComponent {

	public _startsWith = '';

	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef, public preferencesService?: PreferencesService) {
		super(myRenderer, chref, preferencesService);
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
			this.doSearchText(event.target.value);
		}
	}

	protected doSearchText(text: string) {
		this._startsWith = text;
		if (!this._startsWith || this._startsWith.length < 1) {
			this.resetComboSelection();
		}
		this.refresh(null);
	}

	// Overrides
	public setDropdownHeight() {
		let calculatedHeight = 0;

		calculatedHeight += AbstractComboBox.ROW_HEIGHT * 10;
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');

	}

	public onInputClicked(event: MouseEvent) {
		event.stopPropagation();
		if (!this.isDisabled) {
			if (!this.isDropDownOpen()) {
				this.showDropDown();
				const dropDownElement = document.getElementById(this.comboId);
				const dropdown = new Dropdown(dropDownElement.children[0]);
				dropdown.toggle();
				this.isDropdownOpened = true;
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
		this._startsWith = '';
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
		this.currentSelected = undefined;
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.deselectAll();
		}
		this.selectedItemChange.emit(undefined);
	}

	// Overrides
	public getRows(params: IGetRowsParams): void {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.showLoadingOverlay();
			const page: number = params.endRow / this.gridOptions.paginationPageSize;
			this.totalItemsLoaded = false;
			this.getData(page, this.gridOptions.paginationPageSize, this._startsWith)
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

}
