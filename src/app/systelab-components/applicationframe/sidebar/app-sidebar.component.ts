export class ApplicationSidebarTab {

	constructor(public id: string, public name: string, public isSelected: boolean, public subMenu?: ApplicationSidebarTab[], public action?: (id: string) => void, public icon?: string) {
		subMenu = [];
	}
}

export class ApplicationSidebarAction {
	constructor(public name: string, public action: any, public icon?: string) {
	}
}

export class ApplicationSidebarComponent {
}
