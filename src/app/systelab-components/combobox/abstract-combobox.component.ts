import { ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';
import { StylesUtilService } from '../utilities/styles.util.service';

declare var jQuery: any;

export abstract class AbstractComboBox implements AgRendererComponent, OnInit {

	public static ROW_HEIGHT: number;

	@Input() public filter: boolean = false;

	@Input() public fontFamily: string;
	@Input() public fontSize: string;
	@Input() public fontWeight: string;
	@Input() public fontStyle: string;

	@Input() public values: Array<any>;
	@Input() public isDisabled: boolean;
	@Input() public inputHeight: number = null;
	@Output() public change = new EventEmitter();
	@Output() public idChange = new EventEmitter();
	@Output() public descriptionChange = new EventEmitter();

	public _id: number | string;
	@Input()
	set id(value: number | string) {
		this._id = value;
		this.afterSettingId(value);
	}

	get id() {
		return this._id;
	}

	public _description: string;

	@Input()
	set description(value: string) {
		this._description = value;
		this.descriptionChange.emit(this._description);
		this.fieldToShow = this._description;
	}

	get description() {
		return this._description;
	}

	public _fieldToShow: string;
	@Input()
	set fieldToShow(value: string) {
		this._fieldToShow = value;
		this.fieldToShowChange.emit(this._fieldToShow);
	}

	get fieldToShow() {
		return this._fieldToShow;
	}

	@Output() public fieldToShowChange = new EventEmitter();

	public _code: string;
	@Input()
	set code(value: string) {
		this._code = value;
		this.codeChange.emit(this._code);
	}

	get code() {
		return this._code;
	}

	@Output() public codeChange = new EventEmitter();

	@ViewChild('combobox') public comboboxElement: ElementRef;
	@ViewChild('dropdown') public dropdownElement: ElementRef;
	@ViewChild('input') public inputElement: ElementRef;
	@ViewChild('combobutton') public comboButtonElement: ElementRef;

	public filterValue = '';
	public currentSelected: any = {};

	public gridOptions: GridOptions;
	public columnDefs: Array<any>;

	public params: any;

	public top = 0;
	public left = 0;
	public windowResized = false;

	public destroyKeyListener: Function;
	public isDropdownOpened: boolean;

	public comboId: string = (Math.floor(Math.random() * (999999999999 - 1)) ).toString();

	constructor(public myRenderer: Renderer2, public isColorPicker?: boolean) {
	}

	public ngOnInit() {

		const minHeight = StylesUtilService.getStyleValue(this.comboButtonElement, 'min-height');
		AbstractComboBox.ROW_HEIGHT = Number(minHeight);

		this.columnDefs = [
			{
				colID: 'id',
				field: 'description'
			}
		];

		this.gridOptions = {};

		this.gridOptions.columnDefs = this.columnDefs;

		this.gridOptions.headerHeight = 0;
		this.gridOptions.suppressCellSelection = true;
		this.gridOptions.rowSelection = 'single';

		this.gridOptions.rowData = this.values;

		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-family', this.fontFamily);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-size', this.fontSize);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-weight', this.fontWeight);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-tyle', this.fontStyle);

	}

	public refresh(params: any): boolean {
		return true;
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event: any) {
		if (this.isDropDownOpen()) {
			this.closeDropDown();
		}
		const parentWidth = this.comboboxElement.nativeElement.offsetWidth;
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'width', parentWidth + 'px');
		this.windowResized = true;
	}

	public agInit(params: any): void {
		this.params = params;
	}

	public onComboClicked() {
		const isOpen: boolean = this.isDropDownOpen();

		if (!isOpen) {
			this.isDropdownOpened = true;
			this.showDropDown();
		}
	}

	public setDropdownSize() {
		const dropdownParentRect = this.inputElement.nativeElement.getBoundingClientRect();
		this.top = dropdownParentRect.top + this.inputElement.nativeElement.offsetHeight + 1;
		this.left = dropdownParentRect.left;

		const parentWidth = this.comboboxElement.nativeElement.offsetWidth;
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'width', parentWidth + 'px');

		this.setGridSize();

	}

	public isDropDownOpen(): boolean {
		return this.comboboxElement.nativeElement.className.includes('uk-open');
	}

	public closeDropDown() {
		jQuery('#' + this.comboId)
			.off('hide.uk.dropdown');
		if (this.isDropDownOpen()) {
			this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-open');
		}
	}

	public onRowClicked(event: any) {
		this.myRenderer.addClass(this.comboboxElement.nativeElement, 'uk-dropdown-close');
		this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-open');
	}

	public addListeners() {
		this.destroyKeyListener = this.myRenderer.listen('document', 'keydown', (evt: KeyboardEvent) => {
			this.handleKeyboardEvents(evt);
		});
	}

	public loop(): void {
		let result = true;

		if (this.isDropDownOpen()) {
			this.calculateDropdownHeight();
			this.setDropdownPosition();
			this.addListeners();
			result = false;
		}
		if (result) {
			setTimeout(() => this.loop(), 10);
		} else {
			return;
		}
	}

	public showDropDown() {
		jQuery('#' + this.comboId)
			.on('hide.uk.dropdown', this.closeDropDown.bind(this));
		this.setDropdownSize();

		if (!this.isDropDownOpen()) {
			setTimeout(() => this.loop(), 10);
		}
	}

	public calculateDropdownHeight() {
		let calculatedHeight = 0;
		const totalItems: number = Number(this.values ? this.values.length : 0);

		if (totalItems === 0) {
			calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT * 1;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		} else if (totalItems < 10) {
			calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT * totalItems;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		} else {
			calculatedHeight += AbstractComboBox.ROW_HEIGHT * 10;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		}

		if (this.filter) {
			const agGridElement = this.dropdownElement.nativeElement.getElementsByTagName('ag-grid-angular');
			const agGridHeight = calculatedHeight - 36;
			this.myRenderer.setStyle(agGridElement[0], 'height', agGridHeight + 'px');
		}
	}

	public setDropdownPosition() {
		if (this.top + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight) {
			this.top = this.top - this.dropdownElement.nativeElement.offsetHeight - this.inputElement.nativeElement.offsetHeight - 2;
		}

		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', this.top + 'px');
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', this.left + 'px');
	}

	public handleKeyboardEvents(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			if (this.isDropDownOpen()) {
				this.closeDropDown();
			}
		}
	}

	public getSelectedRow(): any {
		const selectedRow: any = this.gridOptions.api.getSelectedRows();
		if (selectedRow !== null) {
			return selectedRow[0];
		}
		return null;
	}

	public doSearch(event: any) {
		// TODO: check when translations are integrated
		let auxListArray = this.values;
		auxListArray = this.values.filter(element => element.description.indexOf(event.target.value) > -1);
		this.gridOptions.api.setRowData(auxListArray);
	}

	public onSelectionChanged(event: any) {
		const selectedRow = this.getSelectedRow();
		this.id = selectedRow.id;
		this.description = selectedRow.description;
		this.currentSelected = selectedRow;
		this.change.emit(selectedRow);
		this.idChange.emit(selectedRow.id);
	}

	public onModelUpdated(event: any) {
		this.gridOptions.api.sizeColumnsToFit();
	}

	public setGridSize() {
		this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
		if (this.gridOptions.api && this.columnDefs) {
			if (this.windowResized) {
				setTimeout(() => {
					this.gridOptions.api.doLayout();
					this.gridOptions.api.sizeColumnsToFit();
					this.windowResized = false;
				}, 5);
			} else {
				this.gridOptions.api.doLayout();
				this.gridOptions.api.sizeColumnsToFit();
			}
		}
	}

	public onRowSelected(event: any) {
	}

	public afterSettingId(value: number | string) {
	}
}
