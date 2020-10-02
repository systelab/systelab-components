import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { AbstractComboBox } from '../abstract-combobox.component';
import { Observable } from 'rxjs';
import { PreferencesService } from 'systelab-preferences';

declare var jQuery: any;

export class ComboTreeNode<T> {
	public nodeData: T;
	public level: number;

	constructor(pNodeData?: T, pLevel?: number) {
		this.nodeData = pNodeData;
		this.level = pLevel;
	}
}

@Directive()
export abstract class AbstractApiTreeComboBox<T> extends AbstractComboBox<ComboTreeNode<T>> implements AgRendererComponent, OnInit, OnDestroy {

	public static readonly FAVOURITEID = 'favourite';

	@Input() public isParentSelectable = false;
	@Input() public isAllSelectable = true;

	public totalItemsLoaded = false;
	public isFirstTime = true;
	public isTree = true;

	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef, public preferencesService?: PreferencesService) {
		super(myRenderer, chref, preferencesService);
	}

	public ngOnInit() {
		this.setRowHeight();
		this.configGrid();
		this.initializeFavouriteList();
	}

	protected configGrid() {
		this.columnDefs = [
			{
				colId:        'itemDescription',
				cellRenderer: (params: any) => {
						return this.getLabelForLevel(params.data);
				}
			}
		];

		this.gridOptions = {};

		this.gridOptions.columnDefs = this.columnDefs;

		this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
		this.gridOptions.headerHeight = 0;
		this.gridOptions.suppressCellSelection = true;
		this.gridOptions.rowSelection = 'single';
	}

	getInstance(): ComboTreeNode<T> {
		return new ComboTreeNode<T>();
	}

	getDescriptionField(): string {
		return '';
	}

	getCodeField(): string {
		return '';
	}

	getIdField(): string {
		return '';
	}

	public abstract getData(): Observable<Array<T>>;

	public abstract getTotalItems(): number;

	public abstract getLevelDescriptionField(level: number): string;

	public abstract getLevelIdField(level: number): string;

	public abstract getAllNodeId(): string | number;

	public abstract getAllNodeDescription(): string;

	public abstract getSelectionPrefix(level: number): string;

	protected getFavouriteText(): string {
		return 'Favourites';
	}

	public getLabelForLevel(comboTreeNode: ComboTreeNode<T>): string {
		if (comboTreeNode.level === 0) {
			return comboTreeNode.nodeData[this.getLevelDescriptionField(0)];
		} else if (comboTreeNode.level > 0) {
			return '<span style="padding-left: ' + (20 * comboTreeNode.level) + 'px">'
				+ comboTreeNode.nodeData[this.getLevelDescriptionField(comboTreeNode.level)]
				+ '</span>';
		}
	}

	// override
	public closeDropDown() {
		this.isFirstTime = true;
		super.closeDropDown();
	}

	// override
	public loop(): void {
		let result = true;

		if (this.isDropDownOpen()) {
			// First time opened we load the table
			if (this.isFirstTime) {
				this.getRows();
			}

			if (this.totalItemsLoaded) {
				this.setDropdownHeight();
				this.setDropdownPosition();
				result = false;
			}
		}
		if (result) {
			setTimeout(() => this.loop(), 10);
		} else {
			return;
		}
	}

	// Override
	public setDropdownHeight() {
		let totalItems = Number(this.gridOptions.api.getDisplayedRowCount());
		let calculatedHeight = 0;

		if (this.emptyElement) {
			totalItems += 1;
		}

		if (totalItems === 0) {
			calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		} else if (totalItems < 10) {
			calculatedHeight = 6 + AbstractComboBox.ROW_HEIGHT * totalItems;
		} else {
			calculatedHeight = AbstractComboBox.ROW_HEIGHT * 10;
		}
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');

	}

	public getRows(): void {
		this.totalItemsLoaded = false;
		this.isFirstTime = false;
		this.getData()
			.subscribe(
				(dataVector: Array<T>) => {
					const nodeVector: Array<ComboTreeNode<T>> = [];
					let previousParent: number | string;

					if (this.emptyElement) {
						const emptyElement: T = {} as T;
						emptyElement[this.getLevelIdField(0)] = '';
						emptyElement[this.getLevelDescriptionField(0)] = '';
						const emptyElementNode: ComboTreeNode<T> = new ComboTreeNode<T>(emptyElement, 0);
						nodeVector.push(emptyElementNode);
					}

					if (this.withFavourites) {
						this.initializeFavouriteList();
						if  (this.favouriteList.length > 0){
						const favouriteElement: T = {} as T;
						favouriteElement[this.getLevelIdField(0)] = AbstractApiTreeComboBox.FAVOURITEID;
						favouriteElement[this.getLevelDescriptionField(0)] = this.getFavouriteText();
						const favouriteComboNode: ComboTreeNode<T> = new ComboTreeNode<T>(favouriteElement, 0);
						nodeVector.push(favouriteComboNode);
						const favouriteElements = this.getFavouriteElements(dataVector);
						favouriteElements.forEach(currentFavouriteElement => {
							const currentFavouriteNode: ComboTreeNode<T> = new ComboTreeNode<T>(currentFavouriteElement, 1);
							nodeVector.push(currentFavouriteNode);
						});
					}}

					if (this.isAllSelectable) {
						const allElement: T = {} as T;
						allElement[this.getLevelIdField(0)] = this.getAllNodeId();
						allElement[this.getLevelDescriptionField(0)] = this.getAllNodeDescription();
						const allComboNode: ComboTreeNode<T> = new ComboTreeNode<T>(allElement, 0);
						nodeVector.push(allComboNode);
					}

					dataVector.forEach((element: T) => {
						if (!previousParent || element[this.getLevelIdField(0)] !== previousParent) {
							previousParent = element[this.getLevelIdField(0)];
							const parentComboNode: ComboTreeNode<T> = new ComboTreeNode<T>(element, 0);
							nodeVector.push(parentComboNode);
						}
						const comboNode: ComboTreeNode<T> = new ComboTreeNode<T>(element, 1);
						nodeVector.push(comboNode);
					});
					this.totalItemsLoaded = true;
					this.gridOptions.api.hideOverlay();
					this.gridOptions.api.setRowData(nodeVector);
					this.gridOptions.api.redrawRows();
				},
				() => {
					this.gridOptions.api.hideOverlay();
				}
			);
	}

	// Overrides
	protected checkIfIsFavourite(id: string | number): void {
		const idString = id ? id.toString() : undefined;
		if (idString && idString.includes(this.getSelectionPrefix(1))) {
			super.checkIfIsFavourite(idString.substr(1));
		} else {
			super.checkIfIsFavourite(id);
		}
	}

	// Overrides
	protected toggleFavourite(): void {
		if (this.id.toString()
			.includes(this.getSelectionPrefix(1))) {
			this.isFavourite = !this.isFavourite;
			if (this.isFavourite) {
				this.favouriteList.push(this.id.toString()
					.substr(1));
			} else {
				this.favouriteList.splice(this.favouriteList.map(String)
					.indexOf(this.id.toString()
						.substr(1)), 1);
			}
			this.preferencesService.put(this.getComboPreferencesPrefix() + '.favourites', this.favouriteList.map(String));
		} else {
			super.toggleFavourite();
		}
	}

	// Overrides
	public onRowSelected(event: any) {
		if (event.node.selected) {
			if (this.isParentSelectable && event.node.data.nodeData[this.getLevelIdField(0)] !== AbstractApiTreeComboBox.FAVOURITEID) {
				jQuery('#' + this.comboId)
					.dropdown('toggle');
			} else if (this.isAllSelectable && event.node && event.node.data && event.node.data.level === 0) {
				if (event.node.data.nodeData[this.getLevelIdField(0)] === this.getAllNodeId()) {
					jQuery('#' + this.comboId)
						.dropdown('toggle');
				} else {
					event.node.setSelected(false);
				}
			} else if (event.node && event.node.data && event.node.data.level > 0) {
				jQuery('#' + this.comboId)
					.dropdown('toggle');
			} else {
				if (event.node) {
					event.node.setSelected(false);
				}
			}
		}
	}

	// Overrides
	public onSelectionChanged(event: any) {
		const selectedRow = this.getSelectedRow();
		if (selectedRow !== null && selectedRow !== undefined) {
			this.id = selectedRow.nodeData[this.getLevelIdField(selectedRow.level)];
			this.description = selectedRow.nodeData[this.getLevelDescriptionField(selectedRow.level)];
			this.currentSelected = selectedRow.nodeData;
			this.level = selectedRow.level;
			if (selectedRow.level > 0
				|| (this.isAllSelectable && selectedRow.nodeData[this.getLevelIdField(0)] === this.getAllNodeId())
				|| this.isParentSelectable) {
				this.change.emit(selectedRow.nodeData);
				this.idChange.emit(this.id);
				this.closeDropDown();
			}
		}
	}

	public refresh(params: any): boolean {
		if (this.gridOptions && this.gridOptions.api) {
			this.getRows();
			return true;
		}
	}

	private getFavouriteElements(dataVector: Array<T>): Array<T> {
		return dataVector.filter((data: T) => this.favouriteList.map(String)
			.indexOf(data[this.getLevelIdField(1)].toString()) > -1);
	}
}
