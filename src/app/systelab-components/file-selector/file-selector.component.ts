import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'systelab-file-selector',
	templateUrl: 'file-selector.component.html'
})
export class FileSelectorComponent  {

	private _fileName = '';

	@Output() public fileNameChange = new EventEmitter();

	@Input() public get fileName() {
		return this._fileName;
	}

	public set fileName(name: string) {
		this._fileName = name;
		this.fileNameChange.emit(this._fileName);
	}

	public selectFile(files: FileList) {
		if (files.length) {
			this.fileName = files[0].name;
		}
	}
}
