import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'systelab-file-selector',
	templateUrl: 'file-selector.component.html'
})

export class FileSelectorComponent {

	private _fileName = '';
	private _file: File;
	private _fileList: FileList;

	@Output() public fileNameChange = new EventEmitter<string>();
	@Output() public fileChange = new EventEmitter<File>();
	@Output() public fileListChange = new EventEmitter<FileList>();

	@Input() showButtonOnDisable = false;
	@Input() multipleSelection = false;
	@Input() disabled = false;

	@Input()
	public get fileName() {
		return this._fileName;
	}

	public set fileName(name: string) {
		this._fileName = name;
		this.fileNameChange.emit(this._fileName);
	}

	@Input()
	public get file() {
		return this._file;
	}

	public set file(file: File) {
		this._file = file;
		this.fileChange.emit(this._file);
	}

	@Input()
	public get fileList() {
		return this._fileList;
	}

	public set fileList(fileList: FileList) {
		this._fileList = fileList;
		this.fileListChange.emit(this._fileList);
	}

	public selectFile(files: FileList) {
		if (files.length) {
			if (this.multipleSelection) {
				this.fileList = files;
				this.fileName = '';
				for (let index = 0; index < files.length; index++) {
					this.fileName += (this.fileName.length > 0 ? ', ' : '') + files[index].name;
				}
			} else {
				this.fileName = files[0].name;
				this.file = files[0];
			}
		}
	}
}
