import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { GetRowIdParams, GridApi, GridOptions, GridReadyEvent, RowSelectedEvent, RowSelectionOptions } from 'ag-grid-community';
import { StylesUtilService } from '../utilities/styles.util.service';
import { ComboboxFavouriteRendererComponent } from './renderer/combobox-favourite-renderer.component';
import { PreferencesService } from 'systelab-preferences';
import { AutosizeGridHelper, CalculatedGridState, initializeCalculatedGridState } from '../helper/autosize-grid-helper';

declare var jQuery: any;

@Directive()
export abstract class AbstractComboBox<T> implements AgRendererComponent, OnInit, OnDestroy {

	public static ROW_HEIGHT = -1;
	public static DROPDOWN_MENU_MARGIN = 16;

	@ViewChild('input', {static: false}) public input: ElementRef;
	@ViewChild('filterInput', {static: false}) public filterInput: ElementRef;

	public comboId: string = (Math.floor(Math.random() * (999999999999 - 1))).toString();

	@Input() public customInputRenderer: any;
	@Input() public initialParams: any;
	@Input() public filter = false;
	@Input() public multipleSelection = false;
	@Input() public listSelectedValues = false;
	@Input() public allElement = false;
	@Input() public rowData
	@Input() public fontFamily: string;
	@Input() public fontSize: string;
	@Input() public fontWeight: string;
	@Input() public fontStyle: string;
	@Input() public withIcon: boolean;
	@Input() public withDeleteOption: boolean;
	@Input() public defaultIdValue: string | number;
	@Input() public defaultDescription: string;
	@Input() public defaultCode: string;
	@Input() public iconClass: string;
	@Input() public inputColor: string;
	@Input() public iconColor: string;
	@Input() public tabindex: number;
	@Input() public deleteIconClass = 'icon-close';
	@Input() public withEmptyValue: boolean;
	@Input() public iconSide = 'right';

	public getAllFieldIDValue(): string | number {
		return '0';
	}

	public getAllFieldDescriptionValue(): string {
		return '';
	}

	public getAllCodeFieldValue(): string {
		return '';
	}

	public getAllInstance(): T {
		const instance = this.getInstance();

		instance[this.getIdField()] = this.getAllFieldIDValue();
		instance[this.getDescriptionField()] = this.getAllFieldDescriptionValue();
		instance[this.getCodeField()] = this.getAllCodeFieldValue();

		return instance;
	}

	public _values: Array<any>;
	@Input()
	set values(newValues: Array<any>) {
		if (newValues) {
			if (this.withEmptyValue) {
				newValues.unshift({description: '', id: undefined});
			}
		}
		this._values = newValues;
		this.rowData = this._values;
		this.setCodeDescriptionById();
	}

	get values() {
		return this._values;
	}

	@Input() public isDisabled: boolean;
	@Input() public expandToParentContainerHeight = false;
	@Output() public change = new EventEmitter();
	@Output() public idChange = new EventEmitter();
	@Output() public descriptionChange = new EventEmitter();
	@Output() public levelChange = new EventEmitter();
	@Input() public allowEditInput = false;
	@Input() public emptyElement = false;
	@Input() public selectDeselectAll = false;
	@Input() public withFavourites = false;
	@Input() public preferenceName: string;

	public isFavourite = false;
	public favouriteList: Array<string | number> = [];
	public isTree = false;

	public _id: number | string;
	@Input()
	set id(value: number | string) {
		this._id = value;
		this.idChange.emit(value);
		this.setCodeDescriptionById();
		this.checkIfIsFavourite(value);
	}

	get id() {
		return this._id;
	}

	public _description: string;

	@Input()
	set description(value: string) {
		this._description = value;
		if (this.id && this.values) {
			const item: T = this.values.find(it => it[this.getIdField()] === this.id);
			if (item) {
				this._description = item[this.getDescriptionField()];
			}
		}
		this.descriptionChange.emit(this._description);
		this.fieldToShow = this._description;
	}

	get description() {
		return this._description;
	}

	public _level: number;
	@Input()
	set level(value: number) {
		this._level = value;
		this.levelChange.emit(this._level);
	}

	get level() {
		return this._level;
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
		if (this.id != null && this.values) {
			const item: T = this.values.find(it => it[this.getIdField()] === this.id);
			if (item) {
				this._code = item[this.getCodeField()];
			}
		}
		this.codeChange.emit(this._code);
	}

	get code() {
		return this._code;
	}

	@Output() public codeChange = new EventEmitter();

	public _multipleSelectedItemList: Array<T> = [];

	@Input()
	set multipleSelectedItemList(value: Array<T>) {
		this._multipleSelectedItemList = value;
		this.setDescriptionAndCodeWhenMultiple(value);
		this.multipleSelectedItemListChange.emit(this._multipleSelectedItemList);
		this.multipleSelectedIDListChange.emit(this.selectionItemListToIDList());
	}

	get multipleSelectedItemList() {
		return this._multipleSelectedItemList;
	}

	@Output() public multipleSelectedItemListChange = new EventEmitter();
	@Output() public multipleSelectedIDListChange = new EventEmitter();
	@Output() public selectedItemChange = new EventEmitter();

	@ViewChild('combobox', {static: true}) public comboboxElement: ElementRef;
	@ViewChild('dropdowntoogle', {static: false}) public dropdownToogleElement: ElementRef;
	@ViewChild('dropdownmenu', {static: false}) public dropdownMenuElement: ElementRef;
	@ViewChild('dropdown', {static: true}) public dropdownElement: ElementRef;
	@ViewChild('input', {static: false}) public inputElement: ElementRef;
	@ViewChild('hidden', {static: true}) public hiddenElement: ElementRef;

	public filterValue = '';
	public currentSelected: any = {};
	public selectionChanged = false;

	public gridOptions: GridOptions;
	public gridApi: GridApi;
	public columnDefs: Array<any>;

	public params: any;

	public top = 0;
	public left = 0;
	public windowResized = false;
	public isDropdownOpened = false;
	public windowScrollHandler: any;

	private calculatedGridState : CalculatedGridState = initializeCalculatedGridState();
	private scrollTimeout;

	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public preferencesService?: PreferencesService) {
	}

	public ngOnInit() {

		this.setRowHeight();

		this.setStyle('font-family', this.fontFamily);
		this.setStyle('font-size', this.fontSize);
		this.setStyle('font-weight', this.fontWeight);
		this.setStyle('font-style', this.fontStyle);

		jQuery(this.comboboxElement.nativeElement)
			.on('hide.bs.dropdown', this.closeDropDown.bind(this));

		this.initializeFavouriteList();
		this.configGrid();
	}

	private setStyle(styleName: string, styleValue: string): void {
		if (styleValue) {
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, styleName, styleValue);
		}
	}

	protected setDescriptionAndCodeWhenMultiple(value: Array<T>) {
		this._description = '';
		this._code = '';
		for (const selectedItem of value) {
			if (this._code !== '') {
				this._code += '; ';
			}
			this._code += selectedItem[this.getCodeField()];

			if (this._description !== '') {
				this._description += '; ';
			}
			this._description += selectedItem[this.getDescriptionField()];
		}
	}

	protected initializeFavouriteList(): void {
		const favouriteListPreference: Array<string | number> = (this.preferencesService) ? this.preferencesService.get(this.preferenceName + '.favourites') : undefined;
		if (this.withFavourites && favouriteListPreference && favouriteListPreference.length > 0) {
			this.favouriteList = favouriteListPreference;
			if (this.id != null) {
				this.checkIfIsFavourite(this.id.toString());
			}
		}
	}

	protected configGrid() {
		this.columnDefs = (this.withFavourites) ? [
			{
				colId:              'itemDescription',
				id:                 this.getIdField(),
				field:              this.getDescriptionField(),
				tooltipField: 		this.getDescriptionField(),
				cellRenderer:       ComboboxFavouriteRendererComponent,
				cellRendererParams: {
					favouriteList: this.favouriteList
				}
			}
		] : [
			{
				colId:             	'itemDescription',
				field:             	this.getDescriptionField(),
				tooltipField: 		this.getDescriptionField(),
			}
		];
		this.gridOptions = {};

		this.gridOptions.columnDefs = this.columnDefs;

		this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
		this.gridOptions.headerHeight = 0;
		this.gridOptions.suppressCellFocus = false;
		this.gridOptions.rowSelection = {
			checkboxes: this.multipleSelection,
			mode: this.multipleSelection ? 'multiRow' : 'singleRow',
			enableClickSelection: !this.multipleSelection
		} as RowSelectionOptions;
		this.gridOptions.getRowId = (item: GetRowIdParams) => this.getRowNodeId(item)
			?.toString();

		this.configGridData();

		this.gridOptions.enableBrowserTooltips = true;
	}

	protected getRowNodeId(item: GetRowIdParams): string | number | undefined {
		const id = this.getIdField();
		if (item) {
			if (item[this.getIdField()] != null) {
				return item[this.getIdField()];
			}
			return this.getIdField() === '' ? '' : item.data ? item.data?.[this.getIdField()] : '';
		}
		return '';
	}

	protected configGridData() {
		this.rowData = this.values;
	}

	protected setRowHeight() {
		const lineHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');
		AbstractComboBox.ROW_HEIGHT = Number(lineHeight ? lineHeight : 26);
	}

	public abstract getInstance(): T;

	public abstract getDescriptionField(): string;

	public abstract getCodeField(): string;

	public abstract getIdField(): string;

	public refresh(params: any): boolean {
		return true;
	}

	public agInit(params: any): void {
		this.params = params;
	}

	public getInputHeight() {
		return this.expandToParentContainerHeight ? {'height': '100%'} : undefined;
	}

	protected getComboPreferencesPrefix(): string {
		return this.preferenceName || this.constructor.name;
	}

	public doToggleFavourite(event: MouseEvent): void {
		event.stopPropagation();
		this.toggleFavourite();
	}

	public deleteValueSelected(event: MouseEvent): void {
		event.stopPropagation();
		if (this.multipleSelection) {
			if (this.multipleSelectedItemList && this.multipleSelectedItemList.length > 0) {
				this.multipleSelectedItemList = [];
			}
		} else {
			this.id = this.defaultIdValue ? this.defaultIdValue : undefined;
			this._description = this.defaultDescription ? this.defaultDescription : undefined;
			this._code = this.defaultCode ? this.defaultCode : undefined;
		}

	}

	public onComboClicked(event: any) {
		if (this.isDisabled || (this.allowEditInput && event.target.className.indexOf('input') > -1)) {
			event.stopPropagation();
		} else {
			if (!this.isDropDownOpen()) {
				this.isDropdownOpened = true;
				this.showDropDown();
			} else {
				// close
				this.checkMultipleSelectionClosed();
			}
		}
	}

	public onComboKeyArrowDown(event: any) {
		if (!this.isDropDownOpen()) {
			this.isDropdownOpened = true;
			this.showDropDown();
		} else {
			// close
			this.checkMultipleSelectionClosed();
		}
	}


	public onComboKeyArrowUp(event: any) {
		event.preventDefault();
		event.stopPropagation();
	}

	protected toggleFavourite(): void {
		this.isFavourite = !this.isFavourite;
		if (this.isFavourite) {
			this.favouriteList.push(this.id.toString());
		} else {
			this.favouriteList.splice(this.favouriteList.map(String)
				.indexOf(this.id.toString()), 1);
		}
		this.preferencesService.put(this.getComboPreferencesPrefix() + '.favourites', this.favouriteList.map(String));
	}

	public setDropdownWidth() {
		const parentWidth = this.comboboxElement.nativeElement.offsetWidth;
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'width', parentWidth + 'px');
		this.setGridSize();
	}

	public isDropDownOpen(): boolean {
		return this.comboboxElement.nativeElement.className.includes('show');
	}

	public closeDropDown() {
		this.isDropdownOpened = false;
		this.removeWindowScrollHandler();
		this.removeGridScrollHandler();
		this.resetDropDownPositionAndHeight();
		if (this.isDropDownOpen()) {
			this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'show');
			this.myRenderer.removeClass(this.dropdownMenuElement.nativeElement, 'show');
		}
		this.chRef.detectChanges();
		this.checkMultipleSelectionClosed();
		this.input.nativeElement.focus();
	}

	public resetDropDownPositionAndHeight() {
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', null);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', null);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', '0px');
	}

	public loop(): void {
		let result = true;

		if (this.isDropDownOpen()) {
			this.setDropdownHeight();
			this.setDropdownPosition();
			this.transferFocusToGrid();
			result = false;
		}
		if (result && this.isDropdownOpened) {
			setTimeout(() => this.loop(), 10);
		} else {
			if (this.filter === true) {
				this.filterInput.nativeElement.focus();
			}
			return;
		}
	}

	protected transferFocusToGrid(): void {
		// remove previous selection
		if(!this.multipleSelection) {
			this.gridApi?.deselectAll();
			if(this.gridApi?.getDisplayedRowCount() > 0) {
				// scrolls to the first row
				this.gridApi?.ensureIndexVisible(0);
			}

			// scrolls to the first column
			const firstCol = this.gridApi?.getColumns()?.filter(col => col.isVisible())[0];
			this.gridApi?.ensureColumnVisible(firstCol);

			// sets focus into the first grid cell
			this.gridApi?.setFocusedCell(0, firstCol);
		}
	}

	public onCellKeyDown(e: any) {
		if (e.event.key === 'Enter') {
			if (this.multipleSelection && e.node.isSelected()) {
				e.node.setSelected(false);
			} else {
				e.node.setSelected(true);
			}
			e.event.preventDefault();
		}
		if (e.event.key === 'Tab') {
			this.closeDropDown();
			e.event.preventDefault();
			e.event.stopPropagation();
		}
	}

	public showDropDown() {
		this.addWindowScrollHandler();
		this.setDropdownWidth();
		if (!this.isDropDownOpen() && !this.isTree) {
			setTimeout(() => this.loop(), 10);
		}
	}

	public clickDropDownMenu(e: Event) {
		e.stopPropagation();
	}

	public setDropdownHeight() {
		let calculatedHeight = 0;
		const totalItems: number = this.getTotalItemsForDropdownHeight();

		if (this.selectDeselectAll === true) {
			calculatedHeight += AbstractComboBox.ROW_HEIGHT + 10;
		}
		if (this.filter === true) {
			calculatedHeight += AbstractComboBox.ROW_HEIGHT + 5;
		}

		if (totalItems === 0) {
			calculatedHeight += 8 + AbstractComboBox.ROW_HEIGHT;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		} else if (totalItems < 10) {
			calculatedHeight += 8 + AbstractComboBox.ROW_HEIGHT * totalItems;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		} else {
			calculatedHeight += AbstractComboBox.ROW_HEIGHT * 10;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		}

	}

	protected getTotalItemsInCombo(): number {
		return Number(this.values ? this.values.length : 0);
	}

	protected getTotalItemsForDropdownHeight(): number {
		let totalItems = this.getTotalItemsInCombo();
		if (this.emptyElement) {
			totalItems += 1;
		}
		if (this.allElement) {
			totalItems += 1;
		}
		return totalItems;
	}

	public setDropdownPosition() {
		this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'position', 'fixed');
		const dropdownParentRect: any = this.inputElement.nativeElement.getBoundingClientRect();
		this.top = dropdownParentRect.top;
		this.left = dropdownParentRect.left;

		// Trick for positioning in IE11
		if (!!(<any>window).MSInputMethodContext && !!(<any>window).document.documentMode) {
			this.top = dropdownParentRect.top + this.inputElement.nativeElement.offsetHeight;
		}

		if (this.top + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight) {
			this.top = this.top - this.dropdownElement.nativeElement.offsetHeight - this.inputElement.nativeElement.offsetHeight - AbstractComboBox.DROPDOWN_MENU_MARGIN;
		}

		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', this.top + 'px');
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', this.left + 'px');
	}

	public getSelectedRow(): T {
		const selectedRow: Array<T> = this.gridApi?.getSelectedRows();
		if (selectedRow != null) {
			return selectedRow[0];
		}
		return undefined;
	}

	public doSearch(event: any) {
		this.filterValue = event.target.value;
		this.doFilter();
	}

	public doFilter() {
		const auxListArray = this.values.filter(element => element.description.toLowerCase()
			.indexOf(this.filterValue.toLowerCase()) > -1);
		this.rowData = auxListArray
	}

	public doSelectAll() {
		this.gridApi.selectAll();
	}

	public doDeselectAll() {
		this.gridApi.deselectAll();
	}

	public onSelectionChanged(event: any) {
		if (!this.multipleSelection) {
			const selectedRow = this.getSelectedRow();
			if (selectedRow !== null && selectedRow !== undefined) {
				this.id = selectedRow[this.getIdField()];
				this.code = selectedRow[this.getCodeField()];
				this.description = selectedRow[this.getDescriptionField()];
				this.currentSelected = selectedRow;
				this.change.emit(selectedRow);
				this.selectedItemChange.emit(selectedRow);
				event.source === 'rowClicked' && this.closeDropDown();
				if (selectedRow[this.getIdField()]) {
					this.checkIfIsFavourite(selectedRow[this.getIdField()].toString());
				}
			}
		} else {
			this.selectionChanged = true;
		}
	}

	protected checkIfIsFavourite(id: string | number): void {
		if (id != null) {
			const idString = id.toString();
			this.isFavourite = this.favouriteList.map(String)
				.includes(idString);
		} else {
			this.isFavourite = false;
		}
	}

	public onModelUpdated() {
		this.addGridScrollHandler();
		if (this.multipleSelection) {
			if (this.multipleSelectedItemList && this.multipleSelectedItemList.length > 0) {
				this.gridApi?.forEachNode(node => {
					if (this.multipleSelectedItemList.some((item) => (item !== undefined && node.data !== undefined && item[this.getIdField()] === this.getRowNodeId(node.data)))) {
						node.setSelected(true);
					}
				});
			}
		} else if (this._id) {
			this.gridApi?.forEachNode(node => {
				if (this.getRowNodeId(node.data) === this._id) {
					this.currentSelected = node.data;
					node.setSelected(true);
				}
			});
		}
	}

	public setGridSize() {
		this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
		if (this.gridApi && this.columnDefs) {
			if (this.windowResized) {
				setTimeout(() => {
					AutosizeGridHelper.sizeColumnsToFit(this.gridApi);
					this.windowResized = false;
				}, 5);
			} else {
				AutosizeGridHelper.sizeColumnsToFit(this.gridApi);
			}
		}
	}

	// overrides
	public onRowSelected(event: RowSelectedEvent) {
		if (!this.multipleSelection) {
		} else if (event.node && event.node.data && event.node.data[this.getIdField()] !== undefined) {
			if (this.multipleSelectedItemList) {
				const elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
					return item[this.getIdField()] === event.node.data[this.getIdField()];
				});
				if (event.node.isSelected()) {
					if (elementIndexInSelectedList < 0) {
						if (this.allElement) {
							// if the selectedNode is "all"
							if (event.node.data[this.getIdField()] === this.getAllFieldIDValue()) {
								this.multipleSelectedItemList = [];
								this.unselectAllNodesInGridOptions();
							} else {
								// the selectedNode is NOT "all: was "all" node already selected?
								const elementAllInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
									return item[this.getIdField()] === this.getAllFieldIDValue();
								});
								// yes, it was => unselect "all" node and empty the multipleSelectedItemList
								if (elementAllInSelectedList !== -1) {
									this.multipleSelectedItemList = [];
									this.unselectNodeAllInGridOptions();
								}
							}
						}
						// Regardless the value of allElement, we have to add the newElement using the selectedNode
						this.multipleSelectedItemList.push(event.node.data);
						this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
					}
				} else {
					if (elementIndexInSelectedList !== -1) {
						this.multipleSelectedItemList.splice(elementIndexInSelectedList, 1);
						this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
					}
				}
			} else {
				this.multipleSelectedItemList = [];
				this.multipleSelectedItemList.push(event.node.data);
				this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
			}
			this.setDescriptionAndCodeWhenMultiple(this.multipleSelectedItemList);
		}
	}

	private unselectAllNodesInGridOptions() {
		this.gridApi?.forEachNode(node => {
			if (node && this.getRowNodeId(node.data) !== this.getAllFieldIDValue()) {
				node.setSelected(false);
			}
		});
	}

	private unselectNodeAllInGridOptions() {
		this.gridApi?.forEachNode(node => {
			if (node && this.getRowNodeId(node.data) === this.getAllFieldIDValue()) {
				node.setSelected(false);
			}
		});
	}

	public setCodeDescriptionById() {
		if (this.id !== undefined && this.values) {
			const item: T = this.values.find(it => it[this.getIdField()] === this.id);
			if (item) {
				this.description = item[this.getDescriptionField()];
				this.code = item[this.getCodeField()];
			}
		} else if (this.id === undefined) {
			this.description = undefined;
			this.code = undefined;
		}
	}

	@HostListener('window:resize', ['$event'])
	public onResize() {
		if (this.isDropDownOpen()) {
			this.closeDropDown();
		}
		const parentWidth = this.comboboxElement.nativeElement.offsetWidth;
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'width', parentWidth + 'px');
		this.windowResized = true;
	}

	protected isComboBoxScrolling(element: HTMLElement): boolean {
		if (element.id === this.dropdownElement.nativeElement.id) {
			return true;
		} else if (element.parentElement) {
			return this.isComboBoxScrolling(element.parentElement);
		}
		return false;
	}

	protected scroll(event) {
		if (!this.isComboBoxScrolling(event.target)) {
			this.closeDropDown();
		}
	}

	protected addWindowScrollHandler() {
		this.windowScrollHandler = this.scroll.bind(this);
		window.addEventListener('scroll', this.windowScrollHandler, true);
	}

	protected removeWindowScrollHandler() {
		window.removeEventListener('scroll', this.windowScrollHandler, true);
	}

	protected addGridScrollHandler() {
		if(this.gridApi && !this.gridApi.isDestroyed()) {
			this.gridApi.removeEventListener('bodyScroll', this.onBodyScroll.bind(this));

			this.calculatedGridState = initializeCalculatedGridState();
			this.onBodyScroll(undefined);

			this.gridApi.addEventListener('bodyScroll', this.onBodyScroll.bind(this));
		}
	}

	protected removeGridScrollHandler() {
		if(this.gridApi) {
			this.gridApi.removeEventListener('bodyScroll', this.onBodyScroll.bind(this));
		}
	}

	public ngOnDestroy() {
		this.removeWindowScrollHandler();
		this.chRef.detach();
	}

	public removeItem(item: T) {
		const index = this.multipleSelectedItemList.findIndex(it => it[this.getIdField()] === item[this.getIdField()]);
		if (index !== -1) {
			this.multipleSelectedItemList.splice(index, 1);
			this.multipleSelectedItemList = this.multipleSelectedItemList;
		}
	}

	private selectionItemListToIDList(): Array<string | number> {
		return this.multipleSelectedItemList.map(item => item[this.getIdField()]);
	}

	public checkMultipleSelectionClosed() {
		if (this.selectionChanged) {
			this.change.emit(this.multipleSelectedItemList);
			this.selectedItemChange.emit(this.multipleSelectedItemList);
			this.multipleSelectedItemListChange.emit(this.multipleSelectedItemList);
			this.multipleSelectedIDListChange.emit(this.selectionItemListToIDList());
		}
	}

	public doGridReady(event: GridReadyEvent) {
		this.gridApi = event.api;
		if (this.filterValue && this.filter === true) {
			this.doFilter();
		}

	}

	private onBodyScroll(event: any): void {
		clearTimeout(this.scrollTimeout);
		this.scrollTimeout = setTimeout(() => {
			this.doAutoSizeManagement(event);
		}, 150);
	}

	protected doAutoSizeManagement(event?: any) {
		AutosizeGridHelper.doAutoSizeManagement(this.calculatedGridState, this.gridApi, event);
	}
}
