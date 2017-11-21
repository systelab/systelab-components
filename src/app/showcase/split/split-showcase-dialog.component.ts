import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'angular2-modal';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { ModulabModalContext } from '../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../systelab-components/modal/message-popup/message-popup-view.component';

export class SplitShowcaseDialogParameters extends ModulabModalContext {
	public fullScreen = true;
}

@Component({
	selector:    'split-showcase-dialog',
	templateUrl: 'split-showcase-dialog.component.html',
})
export class SplitShowcaseDialog extends DefaultModalActions implements ModalComponent<SplitShowcaseDialogParameters> {

	public parameters: SplitShowcaseDialogParameters;

	public isShowDetails = true;
	public isShowSelector = true;

	public testSelectorSize = 30;
	public tableSize = 20;

	constructor(public dialog: DialogRef<SplitShowcaseDialogParameters>, protected preferencesService: PreferencesService) {
		super(dialog);
		this.parameters = dialog.context;
		if (preferencesService.getPreference('split1Size')) {
			this.testSelectorSize = preferencesService.getPreference('split1Size');
		}
		if (preferencesService.getPreference('split2Size')) {
			this.tableSize = preferencesService.getPreference('split2Size');
		}
	}

	public close(): void {
		this.dialog.close();
	}

	public static getParameters(): SplitShowcaseDialogParameters {
		return new SplitShowcaseDialogParameters();
	}

	public dragProgressVertical(event: any) {
		this.preferencesService.putPreference('split2Size', event[1]);
	}

	public dragProgressHorizontal(event: any) {
		this.preferencesService.putPreference('split1Size', event[0]);
	}

	public setShowDetails() {
		this.isShowDetails = !this.isShowDetails;
	}

	public setShowSelector() {
		this.isShowSelector = !this.isShowSelector;

	}
}
