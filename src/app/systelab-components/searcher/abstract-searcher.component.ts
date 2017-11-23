import { Input, EventEmitter, Output, OnInit } from '@angular/core';
import { SearcherDialogParameters, SearcherDialog } from './searcher.dialog.component';
import { AbstractSearcher } from './abstract-searcher';
import { DialogService } from '../modal/dialog/dialog.service';

export abstract class AbstractSearcherComponent<T> implements OnInit {

	public searcherDialogParameters: SearcherDialogParameters<T>;

	@Input() public multipleSelection = false;
	@Input() public isDisabled: boolean;

	@Input() public fontFamily: string;
	@Input() public fontSize: string;
	@Input() public fontWeight: string;
	@Input() public fontStyle: string;

	public _id: number | string;
	protected _multipleSelectedItemList: Array<T>;

	@Input()
	get multipleSelectedItemList() {
		return this._multipleSelectedItemList;
	}

	set multipleSelectedItemList(value: Array<T>) {

		this._multipleSelectedItemList = value;
		this.abstractSearcher.multipleSelectedItemList = this._multipleSelectedItemList;
		this._code = '';
		let description = '';

		for (const selectedItem of value) {
			if (this._code !== '') {
				this._code += ', ';
			}
			this._code += selectedItem[this.abstractSearcher.getCodeField()] ? selectedItem[this.abstractSearcher.getCodeField()] : '';

			if (description !== '') {
				description += ', ';
			}
			description += selectedItem[this.abstractSearcher.getDescriptionField()] ? selectedItem[this.abstractSearcher.getDescriptionField()] : '';

		}
		this.codeChange.emit(this._code);
		this.description = description;
		this.multipleSelectedItemListChange.emit(this._multipleSelectedItemList);
	}

	@Output() public multipleSelectedItemListChange = new EventEmitter();

	@Input()
	set id(value: number | string) {
		this._id = value;
		this.abstractSearcher.id = value;
		this.idChange.emit(this._id);
	}

	get id() {
		return this._id;
	}

	public _description: string;
	@Input()
	set description(value: string) {
		this._description = value;
		this.searchingValue = value;
		this.descriptionChange.emit(this._description);
	}

	get description() {
		return this._description;
	}

	public _code: string;
	@Input()
	set code(value: string) {
		this._code = value;
		this.codeChange.emit(this._code);
	}

	get code() {
		return this._code;
	}

	@Output() public idChange = new EventEmitter();
	@Output() public descriptionChange = new EventEmitter();
	@Output() public codeChange = new EventEmitter();

	@Output() public selectedHasChanged = new EventEmitter();

	public searchingValue: string;
	@Input() public withButton = true;
	@Input() public isManagement = false;

	@Input() public height;

	constructor(public dialogService: DialogService, public abstractSearcher: AbstractSearcher<T>) {
		this.searcherDialogParameters = this.abstractSearcher.getDialogParameters();
		this.abstractSearcher = abstractSearcher;

	}

	public ngOnInit() {
		this.abstractSearcher.multipleSelection = this.multipleSelection;
	}

	public getWidth() {
		if (this.height) {
			return {
				'width':     this.height.toString() + 'px',
				'min-width': this.height.toString() + 'px',
			};
		}
		return {};
	}

	public getLineHeight() {
		if (this.height) {
			return { 'line-height': this.height.toString() + 'px' };
		}
		return {};
	}

	public openSearchDialog(): void {

		if (this.multipleSelection && this.code) {
			const listOfCodes = this.code.split(',');
			this.abstractSearcher.multipleSelectedItemList = [];
			for (const iterCode of listOfCodes) {
				const newElement: T = {} as T;
				newElement[this.abstractSearcher.getCodeField()] = iterCode.trim();
				this.abstractSearcher.multipleSelectedItemList.push(newElement);
			}
		}
		this.searcherDialogParameters.dialogClass = 'uk-width-2-3 uk-height-2-3';
		this.searcherDialogParameters.searcher = this.abstractSearcher;
		this.dialogService.showDialog(SearcherDialog, this.searcherDialogParameters)
			.subscribe(
				(v: Array<T>) => {
					if (!this.multipleSelection) {
						this.id = (v && v[0]) ? v[0][this.abstractSearcher.getIdField()] : undefined;
						this.description = (v && v[0]) ? v[0][this.abstractSearcher.getDescriptionField()] : undefined;
						this.code = (v && v[0]) ? v[0][this.abstractSearcher.getCodeField()] : undefined;
						this.upDateField(v ? v[0] : undefined);
					}
					this.multipleSelectedItemList = v ? v : new Array<T>();
				}
			);
	}

	public doSearch(): void {
		if (this.code) {
			this.abstractSearcher.getData(this.code, 1, this.multipleSelection ? 0 : 1, true)
				.subscribe(
					response => {
						if (response !== undefined) {
							if (this.multipleSelection) {
								this.multipleSelectedItemList = response;
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
					error => {
						console.error('Communication error');

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

	public upDateField(value: T): void {
		this.selectedHasChanged.emit(this.id);
		if (this.description) {
			this.searchingValue = this.description;
		}
	}
}
