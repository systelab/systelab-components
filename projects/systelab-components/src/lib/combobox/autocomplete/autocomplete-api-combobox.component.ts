import { ChangeDetectorRef, Directive, Input, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid-community';
import { AbstractApiComboBox } from '../abstract-api-combobox.component';
import { AbstractComboBox } from '../abstract-combobox.component';
import { PreferencesService } from 'systelab-preferences';

declare const jQuery: any;

@Directive()
export abstract class AutocompleteApiComboBox<T> extends AbstractApiComboBox<T> implements AgRendererComponent {

	public override startsWith = '';
	@Input() public debounceTime: number = 350;

	constructor(
		public override myRenderer: Renderer2,
		public override chref: ChangeDetectorRef,
		public override preferencesService?: PreferencesService
	) {
		super(myRenderer, chref, preferencesService);
	}

	public override doSearch(event: any): void {
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

	// Overrides
	public override setDropdownHeight(): void {
		let calculatedHeight = 0;

		calculatedHeight += AbstractComboBox.ROW_HEIGHT * 10;
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
	}

	public onInputClicked(event: MouseEvent): void {
		event.stopPropagation();
		if (!this.isDisabled) {
			if (!this.isDropDownOpen()) {
				this.showDropDown();
				jQuery('#' + this.comboId)
					.dropdown('toggle');
				this.isDropdownOpened = true;
				this.doSearchText(this.description);
			}
			this.inputElement.nativeElement.focus();
		}
	}

	// Overrides
	public override onComboClicked(event: MouseEvent): void {
		super.onComboClicked(event);
		this.doSearchText(this.description);
	}

	// Overrides
	public override closeDropDown(): void {
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

	// Overrides
	public override getRows(params: IGetRowsParams): void {
		if (this.gridOptions && this.gridOptions.api) {
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

	protected doSearchText(text: string): void {
		this.startsWith = text;
		if (!this.startsWith || this.startsWith.length < 1) {
			this.resetComboSelection();
		}
		this.refresh(null);
	}

	protected resetComboSelection(): void {
		this.id = undefined;
		this.code = undefined;
		this.description = undefined;
		this.currentSelected = undefined;
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.deselectAll();
		}
		this.selectedItemChange.emit(undefined);
	}

}
