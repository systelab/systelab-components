import { Injectable, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogRef } from './dialog-ref';
import { SystelabModalContext } from './modal-context';

@Injectable({providedIn: 'root'})
export class DialogService {

	public static readonly breakpointMedium = 768;

	constructor(private readonly overlay: Overlay, private injector: Injector) {
	}

	public showDialog(component: Type<any>, parameters: SystelabModalContext): Observable<any> {
		const overlayRef = this.overlay.create(this.getConfig(parameters));
		const dialogRef = new DialogRef(overlayRef, parameters);
		const userProfilePortal = new ComponentPortal(component, null, this.createInjector(dialogRef));
		overlayRef.attach(userProfilePortal);
		return dialogRef.getResult();
	}

	private getConfig(parameters: SystelabModalContext): OverlayConfig {
		const config = new OverlayConfig();
		config.panelClass = parameters.dialogClass;

		if (window.innerWidth <= DialogService.breakpointMedium || parameters.fullScreen) {
			config.width = '100%';
			config.height = '100%';
			config.panelClass = 'fullscreen';
		} else {
			config.width = parameters.width ? parameters.width : parameters.widthRelative;
			config.height = parameters.height ? parameters.height : parameters.heightRelative;

			config.minWidth = parameters.minWidth ? parameters.minWidth : parameters.minWidthRelative;
			config.minHeight = parameters.minHeight ? parameters.minHeight : parameters.minHeightRelative;

			config.maxWidth = parameters.maxWidth ? parameters.maxWidth : parameters.maxWidthRelative;
			config.maxHeight = parameters.maxHeight ? parameters.maxHeight : parameters.maxHeightRelative;
		}
		config.hasBackdrop = true;

		if (parameters.isContextDialog && parameters.positionX && parameters.positionY) {
			config.panelClass = ['slab-context-modal', 'slab-context-modal-arrow-center'];
			const screenWidth = window.innerWidth;
			let positionX = parameters.positionX - (parameters.width / 2);
			if ((positionX + parameters.width) > screenWidth) {
				positionX = screenWidth - parameters.width;
				config.panelClass = ['slab-context-modal', 'slab-context-modal-arrow-right'];
			} else if (positionX < 0) {
				positionX = parameters.positionX - (parameters.positionX / 2);
				config.panelClass = ['slab-context-modal', 'slab-context-modal-arrow-left'];
			}
			const positionY = parameters.positionY + 50;
			positionX = ((positionX / screenWidth) * 100) + 5;

			config.positionStrategy = this.overlay.position()
				.global()
				.left(positionX
					.toString() + '%')
				.top(positionY.toString() + 'px');
		} else {
			config.positionStrategy = this.overlay.position()
				.global()
				.centerHorizontally()
				.centerVertically();
		}

		config.scrollStrategy = this.overlay.scrollStrategies.block();

		return config;
	}

	private createInjector(overlayRef: DialogRef<SystelabModalContext>): Injector {
		return Injector.create({
			parent: this.injector,
			providers: [
				{ provide: DialogRef, useValue: overlayRef }
			]
		});
	}
}
