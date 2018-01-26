import { Component, Type } from '@angular/core';
import { Modal } from '../plugin/custom';
import { DialogRef, overlayConfigFactory } from 'ngx-modialog';
import { SystelabModalContext } from '../modal-context';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'dialog',
	template: ''
})

export class DialogComponent {

	// 768 comes form $breakpoint-medium in Bootstrap. Check forms.scss
	public static breakpointMedium = 768;

	constructor(protected modal: Modal) {
	}

	public showDialog(component: Type<any>, dialogParameters?: SystelabModalContext): Observable<any> {
		if (window.innerWidth <= DialogComponent.breakpointMedium) {
			dialogParameters.fullScreen = true;
			dialogParameters.width = undefined;
			dialogParameters.height = undefined;
			dialogParameters.dialogClass = undefined;
		}
		let p: Promise<any> = new Promise((resolve: any, reject: any) => {
			this.modal.open(component, overlayConfigFactory(dialogParameters, SystelabModalContext))
				.then((dialogRef: DialogRef<any>) => {
					dialogRef.result.then(v => resolve(v))
						.catch(e => reject(e));
				});
		});

		return Observable.fromPromise(p);
	}

}
