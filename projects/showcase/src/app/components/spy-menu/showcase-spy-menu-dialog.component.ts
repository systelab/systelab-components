import { Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext,  SpyMenuItem } from 'systelab-components';

export class ShowcaseSpyMenuDialogParameters extends SystelabModalContext {
	public fullScreen = true;
}

@Component({
	templateUrl: 'showcase-spy-menu-dialog.component.html',
	styleUrls: ['showcase-spy-menu-dialog.component.scss']
})
export class ShowcaseSpyMenuDialog implements ModalComponent<ShowcaseSpyMenuDialogParameters> {

	public menuItems: Array<SpyMenuItem> = [];
	public sectionSelected: string;
	public disabledOption = false;
	public hiddenOption = false;

	protected parameters: ShowcaseSpyMenuDialogParameters;

	public static getParameters(): ShowcaseSpyMenuDialogParameters {
		return new ShowcaseSpyMenuDialogParameters();
	}

	public close(): void {
		this.dialog.close();
	}

	constructor(public dialog: DialogRef<ShowcaseSpyMenuDialogParameters>) {
		this.parameters = dialog.context;

		const spyMenuItem1 = new SpyMenuItem('section1', 'Section 1');
		const spyMenuItem2 = new SpyMenuItem('section2', 'Section 2');
		const spyMenuItemDisabled = new SpyMenuItem('sectionOpt', 'Section Optional');
		spyMenuItemDisabled.disabled = () => this.getOptionDisabled();
		const spyMenuItemHidden = new SpyMenuItem('sectionHidden', 'Section Hidden');
		spyMenuItemHidden.hidden = () => this.getOptionHidden();
		const spyMenuItem3 = new SpyMenuItem('section3', 'Section 3');

		this.menuItems.push(spyMenuItem1);
		this.menuItems.push(spyMenuItem2);
		this.menuItems.push(spyMenuItemDisabled);
		this.menuItems.push(spyMenuItemHidden);
		this.menuItems.push(spyMenuItem3);

		this.sectionSelected = 'section1';
	}

	public onSectionChange(section: string) {
		this.sectionSelected = section;
	}

	public getOptionDisabled(): boolean {
		return this.disabledOption;
	}

	public getOptionHidden(): boolean {
		return this.hiddenOption;
	}

	public disableOption(): void {
		this.disabledOption = !this.disabledOption;
	}

	public hideOption(): void {
		this.hiddenOption = !this.hiddenOption;
	}
}

