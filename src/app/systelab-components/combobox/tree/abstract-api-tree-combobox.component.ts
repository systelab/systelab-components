import { Input, OnInit, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { AbstractComboBox } from '../abstract-combobox.component';
import { Observable } from 'rxjs/Observable';
import { StylesUtilService } from '../../utilities/styles.util.service';

export class ComboTreeNode {
	public nodeData: any;
	public level: number;

	constructor(pNodeData?: any, pLevel?: number) {
		this.nodeData = pNodeData;
		this.level = pLevel;
	}
}

export abstract class AbstractApiTreeComboBox<T> extends AbstractComboBox implements AgRendererComponent, OnInit {

	@Input() public isParentSelectable: boolean = false;
	@Input() public isAllSelectable: boolean = true;

	public _level: number;
	@Input()
	set level(value: number) {
		this._level = value;
	}

	get level() {
		return this._level;
	}

	public totalItemsLoaded: boolean = false;
	public isFirstTime: boolean = true;

	constructor(public myRenderer: Renderer2) {
		super(myRenderer);
	}

	public ngOnInit() {

		var minHeight = StylesUtilService.getStyleValue(this.comboButtonElement, 'min-height');
		AbstractComboBox.ROW_HEIGHT = Number(minHeight);

		this.columnDefs = [
			{
				colID:        'itemDescription',
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

	public abstract getData(): Observable<Array<T>>;

	public abstract getTotalItems(): number;

	public abstract getLevelDescriptionField(level: number): string;

	public abstract getLevelIdField(level: number): string;

	public abstract getAllNodeId(): string | number;

	public abstract getAllNodeDescription(): string;

	public getLabelForLevel(comboTreeNode: ComboTreeNode): string {
		if (comboTreeNode.level === 0) {
			return comboTreeNode.nodeData[this.getLevelDescriptionField(0)];
		} else if (comboTreeNode.level > 0) {
			return '<span style="padding-left: ' + (20 * comboTreeNode.level) + 'px">'
				+ comboTreeNode.nodeData[this.getLevelDescriptionField(comboTreeNode.level)]
				+ '</span>';
		}
	}

	// override
	public loop(): void {
		let result: boolean = true;

		if (this.isDropDownOpen()) {
			// First time opened we load the table
			if (this.isFirstTime) {
				this.getRows();
			}

			if (this.totalItemsLoaded) {
				this.calculateDropdownHeight();

				this.setDropdownPosition();

				this.addListeners();

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
	public calculateDropdownHeight() {
		let totalItems: number = Number(this.getTotalItems()),
			calculatedHeight: number = 0;

		if (totalItems === 0) {
			calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT * 1;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		} else if (totalItems < 10) {
			calculatedHeight = 6 + AbstractComboBox.ROW_HEIGHT * totalItems;
		} else {
			calculatedHeight = AbstractComboBox.ROW_HEIGHT * 10;
		}
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');

		if (this.filter) {
			let agGridElement = this.dropdownElement.nativeElement.getElementsByTagName('ag-grid-angular'),
				agGridHeight  = calculatedHeight - 33;
			this.myRenderer.setStyle(agGridElement[0], 'height', agGridHeight + 'px');
		}

	}

	public getRows(): void {
		this.totalItemsLoaded = false;
		this.isFirstTime = false;
		this.getData()
			.subscribe(
				(dataVector: Array<T>) => {
					let nodeVector: Array<ComboTreeNode> = [];
					let previousParent: number | string;

					if (this.isAllSelectable) {
						let allElement: T = {} as T;
						allElement[this.getLevelIdField(0)] = this.getAllNodeId();
						allElement[this.getLevelDescriptionField(0)] = this.getAllNodeDescription();
						let allComboNode: ComboTreeNode = new ComboTreeNode(allElement, 0);
						nodeVector.push(allComboNode);
					}

					dataVector.forEach((element: T) => {
						if (!previousParent || element[this.getLevelIdField(0)] !== previousParent) {
							previousParent = element[this.getLevelIdField(0)];
							let parentComboNode: ComboTreeNode = new ComboTreeNode(element, 0);
							nodeVector.push(parentComboNode);
						}
						let comboNode: ComboTreeNode = new ComboTreeNode(element, 1);
						nodeVector.push(comboNode);
					});
					this.totalItemsLoaded = true;
					this.gridOptions.api.hideOverlay();
					this.gridOptions.api.setRowData(nodeVector);
					this.gridOptions.api.redrawRows();
				},
				error => {
					this.gridOptions.api.hideOverlay();
				}
			);
	}

	// Overrides
	public onRowSelected(event: any) {
		if (event.node.selected) {
			if (this.isParentSelectable) {
				this.myRenderer.addClass(this.comboboxElement.nativeElement, 'uk-dropdown-close');
				this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-open');
			} else if (this.isAllSelectable && event.node && event.node.data && event.node.data.level === 0) {
				if (event.node.data.nodeData[this.getLevelIdField(0)] === this.getAllNodeId()) {
					this.myRenderer.addClass(this.comboboxElement.nativeElement, 'uk-dropdown-close');
					this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-open');
				} else {
					this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-dropdown-close');
					this.myRenderer.addClass(this.comboboxElement.nativeElement, 'uk-open');
					event.node.setSelected(false);
				}
			} else if (event.node && event.node.data && event.node.data.level > 0) {
				this.myRenderer.addClass(this.comboboxElement.nativeElement, 'uk-dropdown-close');
				this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-open');
			} else {
				if (event.node) {
					this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-dropdown-close');
					this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-open');
					event.node.setSelected(false);
				}
			}
		}
	}

	// Overrides
	public onSelectionChanged(event: any) {
		let selectedRow = this.getSelectedRow();
		if (selectedRow !== null && selectedRow !== undefined) {
			this.id = selectedRow.nodeData[this.getLevelIdField(selectedRow.level)];
			this.description = selectedRow.nodeData[this.getLevelDescriptionField(selectedRow.level)];
			this.level = selectedRow.level;
			if (selectedRow.level > 0
				|| (this.isAllSelectable && selectedRow.nodeData[this.getLevelIdField(0)] === this.getAllNodeId())
				|| this.isParentSelectable) {
				this.change.emit(this.id);
				this.idChange.emit(this.id);
			}
		}
	}

	public refresh(params: any): boolean {
		if (this.gridOptions && this.gridOptions.api) {
			this.getRows();
			return true;
		}
	}

}