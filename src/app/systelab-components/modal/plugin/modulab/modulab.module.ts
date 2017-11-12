import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, Modal as BaseModal } from 'angular2-modal';
import { Modal } from './modal';
import { ModulabModalContainer } from './modal-container.component';
import { ModulabMessageModal } from './message-modal.component';

export const providers: any[] = [
	{provide: BaseModal, useClass: Modal},
	{provide: Modal, useClass: Modal}
];

@NgModule({
	imports:         [
		ModalModule,
		CommonModule
	],
	declarations:    [
		ModulabMessageModal,
		ModulabModalContainer
	],
	providers,
	entryComponents: [
		ModulabModalContainer,
		ModulabMessageModal
	]
})
export class ModulabModalModule {
	public static getProviders(): any[] {
		return providers;
	}
}