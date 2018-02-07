export class NavsItems {

	constructor( public navId: number,
                 public navText: string,
                 public icon: string,
                 public floatImage: boolean,
                 public isActive:boolean,
                 public isEnabled:boolean,
                 public target:string,
                 public url: string) {
	}

}