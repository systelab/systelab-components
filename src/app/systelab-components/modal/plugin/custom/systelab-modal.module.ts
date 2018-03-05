import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, Modal as BaseModal } from '../../base/base-modal';
import { Modal } from './modal';
import { SystelabModalContainer } from './modal-container.component';
import { SystelabMessageModal } from './message-modal.component';

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
		SystelabMessageModal,
		SystelabModalContainer
	],
	providers,
	entryComponents: [
		SystelabModalContainer,
		SystelabMessageModal
	]
})
export class SystelabModalModule {
	public static getProviders(): any[] {
		return providers;
	}
}