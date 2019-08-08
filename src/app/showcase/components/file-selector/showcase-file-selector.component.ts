import { Component } from '@angular/core';

@Component({
	selector: 'showcase-file-selector',
	templateUrl: 'showcase-file-selector.component.html'
})
export class ShowcaseFileSelectorComponent {

	public fileName: string;
	public file: File;
	public fileList: FileList;
	public fileNameMultiple: string;
	public fileListMultiple: FileList;
	public fileNameNoInner: string;
	public fileNoInner: File;

	constructor() {
	}
}
