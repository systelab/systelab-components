import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { of } from 'rxjs';

@Component({
	selector:    'systelab-chips',
	templateUrl: 'chips.component.html'
})
export class ChipsComponent {

	@Output() public suggestionsResult = new EventEmitter<Array<string>>();

	@Input()
	public texts: Array<string> = [];

	@Input()
	public disabled = false;

	@Input()
	public readonly = false;

	public results: Array<string> = [];

	private newData: string;

	@ViewChild('autoComplete', {static: false}) autoComplete: AutoComplete;

	constructor() {
	}

	public search(event) {
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
					this.suggestionsResult.emit(data);
				}
			);
	}

	public onBlur(event: KeyboardEvent): void {
		if (this.newData && this.autoComplete && this.autoComplete.value) {
			this.autoComplete.value = [...this.autoComplete.value, this.newData];
			this.newData = null;
			this.autoComplete.multiInputEL.nativeElement.value = '';
		} else if (this.newData) {
			this.autoComplete.value = [this.newData];
			this.newData = null;
			this.autoComplete.multiInputEL.nativeElement.value = '';
		}
	}
}

