import { Component, Type } from '@angular/core';
import { Modal } from '../plugin/modulab';
import { DialogRef, overlayConfigFactory } from 'ngx-modialog';
import { ModulabModalContext } from '../plugin/modulab/modal-context';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'dialog',
	template: ''
})

export class DialogComponent {

	constructor(protected modal: Modal) {
	}

	public showDialog(component: Type<any>, dialogParameters?: ModulabModalContext): Observable<any> {
		if (window.innerWidth < 700) {
			dialogParameters.fullScreen = true;
			dialogParameters.width = undefined;
			dialogParameters.height = undefined;
			dialogParameters.dialogClass = undefined;
		}
		let p: Promise<any> = new Promise((resolve: any, reject: any) => {
			this.modal.open(component, overlayConfigFactory(dialogParameters, ModulabModalContext))
				.then((dialogRef: DialogRef<any>) => {
					dialogRef.result.then(v => resolve(v))
						.catch(e => reject(e));
				});
		});

		return Observable.fromPromise(p);
	}

}
