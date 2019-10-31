import {OverlayRef} from '@angular/cdk/overlay';
import {Observable, Subject} from 'rxjs';
import {SystelabModalContext} from './modal-context';

export class DialogRef<T extends SystelabModalContext> {

	private static readonly ESCAPE_KEY = 'Escape';

	private subject: Subject<any> = new Subject<any>();

	constructor(private overlayRef: OverlayRef, public context: T) {
		if (!context.isBlocking) {
			overlayRef.backdropClick()
				.subscribe(
					() => this.close());
		}
		if (context.showClose) {
			overlayRef.keydownEvents()
				.subscribe((k) => {
					if (k.code === DialogRef.ESCAPE_KEY || k.key === DialogRef.ESCAPE_KEY) {
						this.close();
					}
				});
		}
	}

	public closeAllDialogs() {

	}

	public close(value?: any): void {
		this.overlayRef.dispose();
		this.subject.next(value);
	}

	public getResult(): Observable<any> {
		return this.subject.asObservable();
	}

	public disable() {
		this.overlayRef.overlayElement.classList.add('slab-dialog-disabled');
	}

	public enable() {
		this.overlayRef.overlayElement.classList.remove('slab-dialog-disabled');
	}


}

