import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { SystelabModalContext } from '../../../../systelab-components/modal/modal-context';

export class SplitShowcaseDialogParameters extends SystelabModalContext {
	public fullScreen = true;
}

@Component({
	templateUrl: 'showcase-split-dialog.component.html',
})
export class ShowcaseSplitDialog implements ModalComponent<SplitShowcaseDialogParameters> {

	public parameters: SplitShowcaseDialogParameters;

	public isShowDetails = true;
	public isShowSelector = true;

	public testSelectorSize = 30;
	public tableSize = 20;

	constructor(public dialog: DialogRef<SplitShowcaseDialogParameters>, protected preferencesService: PreferencesService) {
		this.parameters = dialog.context;
		if (preferencesService.get('split1Size')) {
			this.testSelectorSize = preferencesService.get('split1Size');
		}
		if (preferencesService.get('split2Size')) {
			this.tableSize = preferencesService.get('split2Size');
		}
	}

	public close(): void {
		this.dialog.close();
	}

	public static getParameters(): SplitShowcaseDialogParameters {
		return new SplitShowcaseDialogParameters();
	}

	public dragProgressVertical(event: any) {
		this.preferencesService.put('split2Size', event[1]);
	}

	public dragProgressHorizontal(event: any) {
		this.preferencesService.put('split1Size', event[0]);
	}

	public setShowDetails() {
		this.isShowDetails = !this.isShowDetails;
	}

	public setShowSelector() {
		this.isShowSelector = !this.isShowSelector;

	}
}
