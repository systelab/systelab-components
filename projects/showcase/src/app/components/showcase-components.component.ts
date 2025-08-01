import { Component, Input } from '@angular/core';

@Component({
    selector: 'showcase-components',
    templateUrl: 'showcase-components.component.html',
    styleUrls: ['showcase-components.component.scss'],
    standalone: false
})
export class ShowcaseComponentsComponent {
	@Input() public currentNav: number;
}
