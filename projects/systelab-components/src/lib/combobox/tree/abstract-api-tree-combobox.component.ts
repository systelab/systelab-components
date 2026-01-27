import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { AbstractComboBox } from '../abstract-combobox.component';
import { map, Observable } from 'rxjs';
import { PreferencesService } from 'systelab-preferences';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';

declare var jQuery: any;

export class ComboTreeNode<T> {
	public nodeData: T;
	public level: number;
	public description?: string;

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
	public override isTree = true;
	public modelUpdated = false;

	protected constructor(public override myRenderer: Renderer2, public chref: ChangeDetectorRef, public override preferencesService?: PreferencesService) {
		super(myRenderer, chref, preferencesService);
	}

	public override ngOnInit(): void {
		super.ngOnInit();
		this.setRowHeight();
		this.configGrid();
		this.initializeFavouriteList();
	}

	protected override configGrid() {
		this.columnDefs = [
			{
				colId:        'itemDescription',
				cellRenderer: (params: any) => {
					return this.getLabelForLevel(params.data);
				},
				cellStyle:    () => this.multipleSelection ? ({paddingLeft: '0px'}) : null,
				width:        '100%'
			}
		];

		this.gridOptions = {} as GridOptions;

		this.gridOptions.columnDefs = this.columnDefs;

		this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
		this.gridOptions.headerHeight = 0;
		this.gridOptions.rowSelection = {
			checkboxes:           this.multipleSelection,
			mode:                 this.multipleSelection ? 'multiRow' : 'singleRow',
			enableClickSelection: !this.multipleSelection
		};
	}

	getInstance(): ComboTreeNode<T> {
		return new ComboTreeNode<T>();
	}

	getDescriptionField(level?): string {
		return '';
	}

	getCodeField(level?): string {
		return '';
	}

	getIdField(level?): string {
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
		const style: string = comboTreeNode.level > 0 ? `style="padding-left: ${(20 * comboTreeNode.level)}px"` : '';
		const description: string = comboTreeNode.nodeData[this.getLevelDescriptionField(comboTreeNode.level)];
		return `<span title="${description}" ${style}>${description}</span>`;
	}

	// override
	public override closeDropDown() {
		this.isFirstTime = true;
		super.closeDropDown();
	}

	public override doGridReady(event: GridReadyEvent) {
		super.doGridReady(event);
		this.getRows()
			.subscribe({
				next:  (nodeVector) => {
					if (this.multipleSelection) {
						this.isAllSelectable = false;
						this.allElement = false;
					}
					this.gridApi.hideOverlay();
					this.rowData = nodeVector;
					this.gridApi.redrawRows();
					if (this.totalItemsLoaded) {
						this.setDropdownHeight(nodeVector.length);
						this.setDropdownPosition();
						this.transferFocusToGrid();
					}
				},
				error: () => {
					this.gridApi.hideOverlay();
				}
			})
	}

	public override onModelUpdated(): void {
		console.log('onModelUpdated');
		if (this.multipleSelection) {
			if (this.multipleSelectedItemList && this.multipleSelectedItemList.length > 0) {
				this.gridApi?.forEachNode(node => {
					if (this.multipleSelectedItemList.some((item) =>
						(item !== undefined && node.data.nodeData !== undefined && item[this.getIdField(1)] === node.data.nodeData[this.getIdField(1)]))) {
						node.setSelected(true);
						this.modelUpdated = true;
					}
				});
			}
		}
	}

	// Override
	public override setDropdownHeight(items?: number) {
		let totalItems = items ?? Number(this.gridApi.getDisplayedRowCount());
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

	public getRows(): Observable<ComboTreeNode<T>[]> {
		this.totalItemsLoaded = false;
		this.isFirstTime = false;
		return this.getData()
			.pipe(
				map((dataVector: Array<T>) => {
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
						if (this.favouriteList.length > 0) {
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
						}
					}

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
					return nodeVector;
				})
			)
	}

	// Overrides
	protected override checkIfIsFavourite(id: string | number): void {
		const idString = id ? id.toString() : undefined;
		if (idString && idString.includes(this.getSelectionPrefix(1))) {
			super.checkIfIsFavourite(idString.substr(1));
		} else {
			super.checkIfIsFavourite(id);
		}
	}

	// Overrides
	protected override toggleFavourite(): void {
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
	public override onRowSelected(event: any) {
		if (this.multipleSelection) {
			if (this.modelUpdated && event.source === 'api') {
				return;
			} else if (event.source !== 'api') {
				this.modelUpdated = false;
			}

			this.addRemoveToMultipleSelectedItem(event);

			if (event.source === 'api') {
				return;
			}
			if (event.node.data.level === 0) {
				this.selectUnselectChildTree(event);
			} else {
				this.selectUnselectParentTree(event);
			}

		} else if (event.node.selected) {
			const isParent = this.isParentSelectable && event.node.data.nodeData[this.getLevelIdField(0)] !== AbstractApiTreeComboBox.FAVOURITEID;
			const isAll = this.isAllSelectable && event.node.data.level === 0 && event.node.data.nodeData[this.getLevelIdField(0)] === this.getAllNodeId();
			const isChild = event.node.data.level > 0;

			if (isParent || isAll || isChild) {
				jQuery('#' + this.comboId)
					.dropdown('toggle');
			} else {
				event.node.setSelected(false);
			}
		}
	}

	protected addRemoveToMultipleSelectedItem(event: any) {
		const elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
			return item[this.getIdField(1)] === event.node.data.nodeData[this.getIdField(1)];
		});
		if (event.node.isSelected()) {
			if (elementIndexInSelectedList < 0) {
				this.multipleSelectedItemList.push(event.node.data.nodeData);
				this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
			}
		} else if (elementIndexInSelectedList >= 0) {
			this.multipleSelectedItemList.splice(elementIndexInSelectedList, 1);
			this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
		}

	}

	protected selectUnselectChildTree(event: any) {
		this.gridApi?.forEachNode(node => {
			if (node?.data.level === 1 && node.data.nodeData[this.getIdField(0)] === event.node.data.nodeData[this.getIdField(0)]) {
				node.setSelected(event.node.isSelected());
			}
		});
	}

	protected selectUnselectParentTree(event: any) {
		const parentId = event.node?.data?.nodeData[this.getIdField(0)];
		let allChildrenSelected = true;

		this.gridApi?.forEachNode(node => {
			if (
				node?.data.level === 1 &&
				node.data.nodeData[this.getIdField(0)] === parentId
			) {
				if (!node.isSelected()) {
					allChildrenSelected = false;
				}
			}
		});

		this.gridApi?.forEachNode(node => {
			if (
				node?.data.level === 0 &&
				node.data.nodeData[this.getIdField(1)] === parentId
			) {
				if (node.isSelected() !== allChildrenSelected) {
					node.setSelected(allChildrenSelected);
				}
			}
		});
	}

	// Overrides
	public override onSelectionChanged(event: any) {
		if (!this.multipleSelection) {
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
		} else {
			this.selectionChanged = true;
		}
	}

	public override refresh(params: any): boolean {
		if (this.gridApi) {
			this.getRows();
			return true;
		}
	}

	private getFavouriteElements(dataVector: Array<T>): Array<T> {
		return dataVector.filter((data: T) => this.favouriteList.map(String)
			.includes(data[this.getLevelIdField(1)].toString()));
	}
}
