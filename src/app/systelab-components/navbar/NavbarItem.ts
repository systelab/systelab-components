export class NavbarItem {

	constructor( public id: number,
                 public text: string,
                 public image: string,
                 public floatImage: boolean,
                 public isActive:boolean,
                 public isEnabled:boolean,
                 public target:string,
                 public url: string,
                 public action?: any) {
	}

}