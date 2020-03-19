import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

	protected loadingList: boolean[] = [];

	public setLoading() {
		this.loadingList.push(true);
	}

	public removeLoading() {
		if (this.loadingList.length > 0) {
			this.loadingList.pop();
		}
	}

	public isLoading(): boolean {
		return this.loadingList.length > 0;
	}

}
