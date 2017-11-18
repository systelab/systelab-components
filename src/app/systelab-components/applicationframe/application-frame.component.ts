import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { ApplicationHeaderMenuEntry } from './header/app-header.component';
import { ApplicationSidebarAction, ApplicationSidebarTab } from './sidebar/app-sidebar.component';

@Component({
	selector:    'app-frame',
	templateUrl: 'application-frame.component.html',
	styleUrls:   ['application-frame.component.scss']
})
export class ApplicationFrameComponent implements OnInit {

	@Input() public title: string;

	@Input() public userName: string;
	@Input() public userFullName: string;
	@Input() public hospitalName: string;

	@Input() public menu: ApplicationHeaderMenuEntry[] = [];
	@Input() public actions: ApplicationSidebarAction[] = [];
	@Input() public tabs: ApplicationSidebarTab[] = [];

	@Output() public selected = new EventEmitter();

	constructor(protected i18nService: I18nService) {
	}

	public ngOnInit() {
		this.doSelect(0);
	}

	public doSelect(tab: number) {
		this.selected.emit(tab);
	}

}
