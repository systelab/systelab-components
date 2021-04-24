export class SpyMenuItem {
	 public hidden: (() => boolean) | boolean;
	 public  disabled: (() => boolean) | boolean;

	constructor(public id: string, public text: string) {

	}
}