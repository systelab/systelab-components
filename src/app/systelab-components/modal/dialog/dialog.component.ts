import { Component, Type } from '@angular/core';
import { Modal } from '../plugin/modulab';
import { overlayConfigFactory, DialogRef } from 'angular2-modal';
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
