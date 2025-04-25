import { Component } from '@angular/core';
import { ShowcaseSpyMenuDialog } from './showcase-spy-menu-dialog.component';
import { DialogService } from 'systelab-components';

@Component({
    selector: 'showcase-spy-menu',
    templateUrl: 'showcase-spy-menu.component.html',
    standalone: false
})
export class ShowcaseSpyMenuComponent {


	constructor(private readonly dialogService: DialogService) {
	}

	public showSpyMenu(): void {
		this.dialogService.showDialog(ShowcaseSpyMenuDialog, ShowcaseSpyMenuDialog.getParameters());
	}
}
