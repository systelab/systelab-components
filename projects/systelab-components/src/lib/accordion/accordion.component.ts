import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from 'systelab-preferences';

@Component({
	selector:    'systelab-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Accordion implements OnInit {
	@Input() headerTitle: string = '';
	@Input() preferenceName: string;
	@Input() contentMaxHeight: number = 300;
	@Input() withOverflow: boolean = false;
	@Input() headerColor: string;
	@Input() iconColor: string;
	public isCollapsed: boolean = false;
	private preferencePrefix: string = 'accordionStatus';

	constructor(private readonly preferenceService: PreferencesService) {
	}

	public ngOnInit() {
		if(this.preferenceName) {
			this.preferenceName = `${this.preferencePrefix}.${this.preferenceName}`;
			this.isCollapsed = this.preferenceService.get(this.preferenceName, false);
			this.preferenceService.put(this.preferenceName, this.isCollapsed);
		}
	}
}