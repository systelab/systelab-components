import { Component, Type } from '@angular/core';
import { Modal } from '../plugin/custom';
import { SystelabModalContext } from '../modal-context';
import { Observable } from 'rxjs';
import { overlayConfigFactory } from '../base/models/overlay-context';
import { DialogRef } from '../base/models/dialog-ref';
import { from } from 'rxjs';


@Component({
	selector: 'dialog',
	template: ''
})

export class DialogComponent {

	// 768 comes form $breakpoint-medium in Bootstrap. Check forms.scss
	public static readonly breakpointMedium = 768;

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

		return from(p);
	}

}
