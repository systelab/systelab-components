import { ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';

export abstract class AbstractComboBox implements AgRendererComponent, OnInit {

	public static ROW_HEIGHT: number;

	@Input() public customInputRenderer: any;
	@Input() public initialParams: any;
	@Input() public filter = false;

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
	set id( value: number | string ) {
		this._id = value;
		this.afterSettingId( value );
	}

	get id() {
		return this._id;
	}

	public _description: string;

	@Input()
	set description( value: string ) {
		this._description = value;
		this.descriptionChange.emit( this._description );
		this.fieldToShow = this._description;
	}

	get description() {
		return this._description;
	}

	public _fieldToShow: string;
	@Input()
	set fieldToShow( value: string ) {
		this._fieldToShow = value;
		this.fieldToShowChange.emit( this._fieldToShow );
	}

	get fieldToShow() {
		return this._fieldToShow;
	}

	@Output() public fieldToShowChange = new EventEmitter();

	public _code: string;
	@Input()
	set code( value: string ) {
		this._code = value;
		this.codeChange.emit( this._code );
	}

	get code() {
		return this._code;
	}

	@Output() public codeChange = new EventEmitter();

	@ViewChild( 'combobox' ) public comboboxElement: ElementRef;
	@ViewChild( 'dropdowntoogle' ) public dropdownToogleElement: ElementRef;
	@ViewChild( 'dropdownmenu' ) public dropdownMenuElement: ElementRef;
	@ViewChild( 'dropdown' ) public dropdownElement: ElementRef;
	@ViewChild( 'input' ) public inputElement: ElementRef;
	@ViewChild( 'combobutton' ) public comboButtonElement: ElementRef;
	@ViewChild( 'input', { read: ViewContainerRef } ) customInputRendererContainer: ViewContainerRef;

	public filterValue = '';
	public currentSelected: any = {};

	public gridOptions: GridOptions;
	public columnDefs: Array<any>;

	public params: any;

	public top = 0;
	public left = 0;
	public windowResized = false;
	public isDropdownOpened: boolean;

	constructor( public myRenderer: Renderer2 ) {
	}

	public ngOnInit() {
		this.setRowHeight();

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

		if ( this.fontFamily ) {
			this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'font-family', this.fontFamily );
		}
		if ( this.fontSize ) {
			this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'font-size', this.fontSize );
		}
		if ( this.fontWeight ) {
			this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'font-weight', this.fontWeight );
		}
		if ( this.fontStyle ) {
			this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'font-style', this.fontStyle );
		}
	}

	protected setRowHeight() {
		// const minHeight = StylesUtilService.getStyleValue(this.comboButtonElement, 'min-height');
		AbstractComboBox.ROW_HEIGHT = Number( 26 );
	}

	public refresh( params: any ): boolean {
		return true;
	}

	@HostListener( 'window:resize', ['$event'] )
	public onResize( event: any ) {
		if ( this.isDropDownOpen() ) {
			this.closeDropDown();
		}
		const parentWidth = this.comboboxElement.nativeElement.offsetWidth;
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'width', parentWidth + 'px' );
		this.windowResized = true;
	}

	public agInit( params: any ): void {
		this.params = params;
	}

	public onComboClicked() {
		const isOpen: boolean = this.isDropDownOpen();

		if ( !isOpen ) {
			this.isDropdownOpened = true;
			this.showDropDown();
		}
	}

	public setDropdownWidth() {
		const parentWidth = this.comboboxElement.nativeElement.offsetWidth;
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'width', parentWidth + 'px' );
		this.setGridSize();
	}

	public isDropDownOpen(): boolean {
		return this.comboboxElement.nativeElement.className.includes( 'show' );
	}

	public closeDropDown() {
		this.resetDropDownPositionAndHeight();
		if ( this.isDropDownOpen() ) {
			this.myRenderer.removeClass( this.comboboxElement.nativeElement, 'show' );
			this.myRenderer.removeClass( this.dropdownMenuElement.nativeElement, 'show' );
		}
	}

	public resetDropDownPositionAndHeight() {
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'top', null );
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'left', null );
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'height', '0px' );
	}

	public loop(): void {
		let result = true;

		if ( this.isDropDownOpen() ) {
			this.setDropdownHeight();
			this.setDropdownPosition();
			result = false;
		}
		if ( result ) {
			setTimeout( () => this.loop(), 10 );
		} else {
			return;
		}
	}

	public showDropDown() {
		this.setDropdownWidth();
		if ( !this.isDropDownOpen() ) {
			setTimeout( () => this.loop(), 10 );
		}
	}

	public clickDropDownMenu( e: Event ) {
	}

	public setDropdownHeight() {
		let calculatedHeight = 0;
		const totalItems: number = Number( this.values ? this.values.length : 0 );

		if ( totalItems === 0 ) {
			calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT;
			this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px' );
		} else if ( totalItems < 10 ) {
			calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT * totalItems;
			this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px' );
		} else {
			calculatedHeight += AbstractComboBox.ROW_HEIGHT * 10;
			this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px' );
		}

		if ( this.filter ) {
			const agGridElement = this.dropdownElement.nativeElement.getElementsByTagName( 'ag-grid-angular' );
			const agGridHeight = calculatedHeight - 36;
			this.myRenderer.setStyle( agGridElement[0], 'height', agGridHeight + 'px' );
		}
	}

	public setDropdownPosition() {
		this.myRenderer.setStyle( this.dropdownMenuElement.nativeElement, 'position', 'fixed' );
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'position', 'absolute' );
		const dropdownParentRect: ClientRect = this.inputElement.nativeElement.getBoundingClientRect();
		this.top = dropdownParentRect.top;
		this.left = dropdownParentRect.left;
		if ( this.top + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight ) {
			this.top = this.top - this.dropdownElement.nativeElement.offsetHeight - this.inputElement.nativeElement.offsetHeight - 2;
		}
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'top', this.top + 'px' );
		this.myRenderer.setStyle( this.dropdownElement.nativeElement, 'left', this.left + 'px' );
	}

	public getSelectedRow(): any {
		if ( this.gridOptions && this.gridOptions.api ) {
			const selectedRow: any = this.gridOptions.api.getSelectedRows();
			if ( selectedRow !== null ) {
				return selectedRow[0];
			}
		}
		return undefined;
	}

	public doSearch( event: any ) {
		// TODO: check when translations are integrated
		const auxListArray = this.values.filter( element => element.description.indexOf( event.target.value ) > -1 );
		this.gridOptions.api.setRowData( auxListArray );
	}

	public onSelectionChanged( event: any ) {
		const selectedRow = this.getSelectedRow();
		this.id = selectedRow.id;
		this.description = selectedRow.description;
		this.currentSelected = selectedRow;
		this.change.emit( selectedRow );
		this.idChange.emit( selectedRow.id );
	}

	public onModelUpdated( event: any ) {
		this.gridOptions.api.sizeColumnsToFit();
	}

	public setGridSize() {
		this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
		if ( this.gridOptions.api && this.columnDefs ) {
			if ( this.windowResized ) {
				setTimeout( () => {
					this.gridOptions.api.doLayout();
					this.gridOptions.api.sizeColumnsToFit();
					this.windowResized = false;
				}, 5 );
			} else {
				this.gridOptions.api.doLayout();
				this.gridOptions.api.sizeColumnsToFit();
			}
		}
	}

	public onRowSelected( event: any ) {
	}

	public afterSettingId( value: number | string ) {
	}
}
