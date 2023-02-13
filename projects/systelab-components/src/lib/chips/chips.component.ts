import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
	selector:    'systelab-chips',
	templateUrl: 'chips.component.html'
})
export class ChipsComponent {

	@Output() public filtered = new EventEmitter<Array<string>>();
	@ViewChild('autoComplete') autoComplete: AutoComplete;

	@Input() public texts: Array<string> = [];
	@Input() public disabled = false;
	@Input() public readonly = false;

	public results: Array<string> = [];

	private newData: string;
	private _filter: Array<string> = [];

	constructor() {}

	get filter(): Array<string> {
		return this._filter;
	}

	set filter(event) {
		this._filter = event;
		this.filtered.emit(event);
	}

	public search(event): void {
		of(this.texts)
			.toPromise()
			.then(
				data => {
					if (data) {
						data = data.filter(x => x.toLowerCase()
							.includes(event.query.toLowerCase()));
					}
					if (data) {
						this.newData = event.query;
					} else {
						this.newData = null;
					}
					this.results = data;
				}
			);
	}

	public onKeyEnter(event: KeyboardEvent): void {
		const input = event.target as HTMLInputElement;
		if (input.value) {
			this.filter.push(input.value);
			input.value = '';
		}
		this.filtered.emit(this.filter);
	}
}

