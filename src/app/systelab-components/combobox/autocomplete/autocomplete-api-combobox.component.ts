import { ViewChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid';
import { AbstractApiComboBox } from '../abstract-api-combobox.component';
import { AbstractComboBox } from '../abstract-combobox.component';

export abstract class AutocompleteApiComboBox<T> extends AbstractApiComboBox<T> implements AgRendererComponent, OnInit {

	@ViewChild('dropdownParent') public dropdownParent: ElementRef;

	public startsWith = '';

	public destroyOffClickListener: Function;
	public destroyTabListener: Function;

	constructor(public myRenderer: Renderer2) {
		super(myRenderer);
	}

	// Override
	public isDropDownOpen(): boolean {
		return this.dropdownParent.nativeElement.className.includes('uk-open');
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
					this.isDropdownOpened = true;
					this.onComboClicked();
					this.myRenderer.addClass(this.dropdownParent.nativeElement, 'uk-open');

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
					this.myRenderer.addClass(this.dropdownParent.nativeElement, 'uk-dropdown-close');
					this.myRenderer.removeClass(this.dropdownParent.nativeElement, 'uk-open');
				}
			}

			this.refresh(null);
		}
	}

	// overrides
	public onRowClicked(event: any) {
		this.myRenderer.addClass(this.dropdownParent.nativeElement, 'uk-dropdown-close');
		this.myRenderer.removeClass(this.dropdownParent.nativeElement, 'uk-open');
	}

	public closeAndDestroyListeners() {
		this.startsWith = '';
		if (this.isDropDownOpen()) {
			const selectedRow: T = this.getSelectedRow();
			if (selectedRow) {
				this.id = selectedRow[this.getIdField()];
				this.description = selectedRow[this.getDescriptionField()];
			}
			this.myRenderer.addClass(this.dropdownParent.nativeElement, 'uk-dropdown-close');
			this.myRenderer.removeClass(this.dropdownParent.nativeElement, 'uk-open');
		}
		this.destroyListeners();
	}

	public offClickHandler(event: MouseEvent) {
		if (!this.dropdownParent.nativeElement.contains(event.target)) { // check click origin
			this.closeAndDestroyListeners();
		}
	}

	// Override
	public calculateDropdownHeight() {
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
				error => {
					this.gridOptions.api.hideOverlay();
					params.failCallback();
				}
			);
	}

}
