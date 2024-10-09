import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SearcherDialog } from './searcher.dialog.component';
import { SearcherDialogParameters } from './searcher.dialog.parameters';
import { AbstractSearcher } from './abstract-searcher';
import { DialogService } from '../modal/dialog/dialog.service';
import { AbstractGenericSearcherComponent } from './abstract-generic.searcher.component';

@Directive()
export abstract class AbstractSearcherComponent<T> extends AbstractGenericSearcherComponent<T>{

	@ViewChild('valueToSearch') public valueToSearch: ElementRef;

	@Input() public fontFamily: string;
	@Input() public fontSize: string;
	@Input() public fontWeight: string;
	@Input() public fontStyle: string;
	@Input() public tabindex: number;

	public searchingValue: string;
	@Input() public withButton = true;
	@Input() public isManagement = false;
	@Input() public height;

	protected constructor(public override dialogService: DialogService, public override abstractSearcher: AbstractSearcher<T>) {
		super(dialogService, abstractSearcher)
	}

	override set description(value: string) {
		this.searchingValue = value;
		super.description = value;
	}

	public getWidth() {
		if (this.height) {
			return {
				'width':         this.height.toString() + 'px',
				'min-width':     this.height.toString() + 'px',
				'line-height':   1,
				'padding-left':  0,
				'padding-right': 0,
			};
		}
		return undefined;
	}

	public getInputHeight() {
		if (this.height) {
			return {'height': '100%'};
		}
		return undefined;
	}

	public getLineHeight() {
		if (this.height) {
			return {'line-height': this.height.toString() + 'px'};
		}
		return undefined;
	}

	public override openSearchDialog(): void {
		let previousMultipleSelectionItemList: Array<T> = [];
		if (this.multipleSelection && this._multipleSelectedItemList) {
			previousMultipleSelectionItemList = [...this._multipleSelectedItemList];
		}
		this.searcherDialogParameters.widthRelative = '66%';
		this.searcherDialogParameters.heightRelative = '66%';
		this.searcherDialogParameters.searcher = this.abstractSearcher;
		this.dialogService.showDialog(SearcherDialog, this.searcherDialogParameters)
			.subscribe(
				(v: Array<T>) => {
					if (v) {
						if (!this.multipleSelection) {
							this.id = (v && v[0]) ? v[0][this.abstractSearcher.getIdField()] : undefined;
							this.description = (v && v[0]) ? v[0][this.abstractSearcher.getDescriptionField()] : undefined;
							this.code = (v && v[0]) ? v[0][this.abstractSearcher.getCodeField()] : undefined;
							this.upDateField(v ? v[0] : undefined);
						}
						this.multipleSelectedItemList = v ? v : new Array<T>();
					} else if (this.multipleSelection) {
						this.multipleSelectedItemList = [...previousMultipleSelectionItemList];
					}
					this.valueToSearch.nativeElement.focus();
				}
			);
	}

	public doSearch(): void {
		if (this.code) {
			this.abstractSearcher.getData(this.code, 1, this.multipleSelection ? 0 : 1, true)
				.subscribe({
						next:  (response) => {
							if (response !== undefined) {
								if (this.multipleSelection) {
									this.multipleSelectedItemList = response;
									if (!response?.length) {
										this.openSearchDialog();
									}
								} else {
									if (response.length === 1) {
										this.id = response[0][this.abstractSearcher.getIdField()];
										this.description = response[0][this.abstractSearcher.getDescriptionField()];
										this.code = response[0][this.abstractSearcher.getCodeField()];
										this.upDateField(response[0]);
									} else {
										this.openSearchDialog();
									}
								}
							}
						},
						error: (error) => {
							console.error(`Communication error: ${error}`);

						}
					}
				);
		} else {
			this.id = undefined;
			this.description = undefined;
			this.code = undefined;
			if (this.multipleSelection) {
				this.multipleSelectedItemList = [];
			}
			this.upDateField(undefined);
		}
	}

	public override upDateField(value: T): void {
		super.upDateField(value);
		if (this.description) {
			this.searchingValue = this.description;
		}
	}
}
