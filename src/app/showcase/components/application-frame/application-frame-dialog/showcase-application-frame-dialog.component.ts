import { Component, HostListener, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from '../../../../systelab-components/modal/plugin/modulab/modal-context';
import { DialogService } from '../../../../systelab-components/modal/dialog/dialog.service';
import { MessagePopupService } from '../../../../systelab-components/modal/message-popup/message-popup.service';
import { ApplicationHeaderMenuEntry } from '../../../../systelab-components/applicationframe/header/app-header.component';
import { ApplicationSidebarAction, ApplicationSidebarTab } from '../../../../systelab-components/applicationframe/sidebar/app-sidebar.component';

export class ShowcaseApplicationFrameDialogParameters extends ModulabModalContext {
	public fullScreen = true;
}

@Component({
	templateUrl: 'showcase-application-frame-dialog.component.html'
})
export class ShowcaseApplicationFrameDialog implements ModalComponent<ShowcaseApplicationFrameDialogParameters>, OnInit {

	protected parameters: ShowcaseApplicationFrameDialogParameters;
	public currentTab = 'T1';

	private frameWidth = 0;
	private frameHeight = 0;

	public userName: string;
	public userFullName: string;
	public hospitalName: string;

	public menu: ApplicationHeaderMenuEntry[] = [];
	public sideactions: ApplicationSidebarAction[] = [];
	public sidetabs: ApplicationSidebarTab[] = [];

	constructor(public dialog: DialogRef<ShowcaseApplicationFrameDialogParameters>, protected messagePopupService: MessagePopupService,
	            protected dialogService: DialogService) {
		this.parameters = dialog.context;
		this.frameWidth = (window.innerWidth);
		this.frameHeight = (window.innerHeight);
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public static getParameters(): ShowcaseApplicationFrameDialogParameters {
		return new ShowcaseApplicationFrameDialogParameters();
	}

	public ngOnInit() {

		this.userName = 'admin';
		this.userFullName = 'Administrator';
		this.hospitalName = 'Customer name';

		this.setMenu();

		this.sidetabs.push(new ApplicationSidebarTab('T1', 'Tab One', true));
		this.sidetabs.push(new ApplicationSidebarTab('T2', 'Tab Two', false));

		this.sideactions.push(new ApplicationSidebarAction('Button 1', () => this.action1()));
		this.sideactions.push(new ApplicationSidebarAction('Close', () => this.close()));

	}

	public setMenu() {

		this.menu = [];

		if (this.frameWidth < 1024) {
			this.menu.push(new ApplicationHeaderMenuEntry('Tab One', false, () => this.doSelect('T1')));
			this.menu.push(new ApplicationHeaderMenuEntry('Tab Two', false, () => this.doSelect('T2')));
			this.menu.push(new ApplicationHeaderMenuEntry('', true));
			this.menu.push(new ApplicationHeaderMenuEntry('Close', false, () => this.close()));
			this.menu.push(new ApplicationHeaderMenuEntry('', true));
		}

		this.menu.push(new ApplicationHeaderMenuEntry('Menu 1', false, () => this.action1()));
		this.menu.push(new ApplicationHeaderMenuEntry('Menu 2', false, () => this.action1()));
		this.menu.push(new ApplicationHeaderMenuEntry('Menu 3', false, () => this.action1()));
		this.menu.push(new ApplicationHeaderMenuEntry('', true));
		this.menu.push(new ApplicationHeaderMenuEntry('Menu 4', false, () => this.action1()));
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event) {
		this.frameWidth = (window.innerWidth);
		this.frameHeight = (window.innerHeight);
		this.setMenu();

	}

	public doSelect(id: string) {
		this.currentTab = id;
	}

	public action1() {
	}
}

