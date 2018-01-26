import { Injectable, Type } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { SystelabModalContext } from '../modal-context';
import { Modal } from '../plugin/custom/modal';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DialogService {

	private dialogComponent: DialogComponent;

	constructor( modal: Modal ) {
		this.dialogComponent = new DialogComponent( modal );
	}

	public showDialog( component: Type<any>, dialogParameters?: SystelabModalContext ): Observable<any> {
		return this.dialogComponent.showDialog( component, dialogParameters );
	}

}