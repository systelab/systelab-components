import { Component } from '@angular/core';

@Component({
    selector: 'showcase-paginator',
    templateUrl: 'showcase-paginator.component.html',
    standalone: false
})
export class ShowcasePaginatorComponent {

	public currentPage = 8;
	public totalPages = 45;
	public pagesToShow = 15;
	public showFirstLastButton = true;
	public showNextPreviousButtons = true;

}
