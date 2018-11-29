import { Component } from '@angular/core';
import { ShowcaseStandardDialog } from '../dialog/standard-dialog/showcase-standard-dialog.component';
import { DialogService } from '../../../systelab-components/modal/dialog/dialog.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector:    'showcase-tabs',
	templateUrl: 'showcase-tabs.component.html'
})
export class ShowcaseTabsComponent {

	public prefixHTML;
	public prefixText = '';

	constructor(protected dialogService: DialogService, private sanitized: DomSanitizer) {

		let progressBox = '';
		progressBox += '<div class="slab-flex-1" style="background-color: forestgreen"></div>';
		progressBox += '<div class="slab-flex-1" style="background-color: forestgreen"></div>';
		progressBox += '<div class="slab-flex-1" style="background-color: red"></div>';

		const prefixHTMLContent = '<div class="d-flex flex-column border" style="width: 20px; height: 20px">' + progressBox + '</div>';

		this.prefixHTML = this.sanitized.bypassSecurityTrustHtml(prefixHTMLContent);

		this.prefixText = 'Prefix';
	}

	public tabsDialog() {
		this.dialogService.showDialog(ShowcaseStandardDialog, ShowcaseStandardDialog.getParameters());
	}
}
