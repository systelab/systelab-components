import { Component, Input } from '@angular/core';

@Component({
    selector: 'systelab-paginator-page',
    templateUrl: 'paginator-page.component.html',
    standalone: false
})
export class PaginatorPageComponent {
	@Input() icon: string;
	@Input() pageNumber = '';
	@Input() selected = false;
	@Input() disabled = false;
}
