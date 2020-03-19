import { Component, Input } from '@angular/core';

@Component({
	selector:    'systelab-loading',
	templateUrl: 'loading.component.html',
	styleUrls:   ['loading.component.scss', 'loading-alternative.component.scss']
})
export class LoadingComponent {

	@Input() public useClassic = false;
}
