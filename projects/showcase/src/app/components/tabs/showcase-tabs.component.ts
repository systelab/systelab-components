import { Component } from '@angular/core';
import { ShowcaseStandardDialog } from '../dialog/standard-dialog/showcase-standard-dialog.component';
import { DialogService } from 'systelab-components';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector:    'showcase-tabs',
	templateUrl: 'showcase-tabs.component.html'
})
export class ShowcaseTabsComponent {

	public titleHtml: SafeHtml;
	public titleText = '';

	constructor(protected dialogService: DialogService, private sanitized: DomSanitizer) {

		let progressBox = '';
		progressBox += '<div class="slab-flex-1" style="background-color: forestgreen"></div>';
		progressBox += '<div class="slab-flex-1" style="background-color: forestgreen"></div>';
		progressBox += '<div class="slab-flex-1" style="background-color: red"></div>';

		let titleHtmlContent = '<div class="d-flex flex-column border mr-1" style="width: 20px; height: 20px">' + progressBox + '</div>';

		titleHtmlContent += '<span class="d-flex align-items-center">Tab Html</span>';

		this.titleHtml = this.sanitized.bypassSecurityTrustHtml(titleHtmlContent);

		this.titleText = 'Tab 2 Text';
	}

	public tabsDialog() {
		this.dialogService.showDialog(ShowcaseStandardDialog, ShowcaseStandardDialog.getParameters());
	}
}
