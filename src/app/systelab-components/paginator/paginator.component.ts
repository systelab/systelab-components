import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector:    'systelab-paginator',
	templateUrl: 'paginator.component.html'
})
export class PaginatorComponent implements OnInit {

	@Input() totalPages = 1;
	@Input() page = 1;

	@Input() pagesToShow = 11;
	@Input() showNextPreviousButtons = true;
	@Input() showFirstLastButtons = true;

	@Output() pageChange = new EventEmitter<number>();

	public pages: number[];

	private static calculateVisiblePages(totalPages: number, pagesToShow: number): number {
		return Math.min(totalPages, pagesToShow);
	}

	private static calculateStartPage(currentPage: number, totalPages: number, visiblePages: number): number {
		if (totalPages - currentPage < (visiblePages / 2)) {
			return totalPages - visiblePages + 1;
		}
		return Math.max(1, Math.ceil(currentPage - ((visiblePages) / 2)));
	}

	private static calculateEndPage(totalPages: number, startPage: number, visiblePages: number): number {
		return Math.min(totalPages, startPage + visiblePages - 1);
	}

	private static calculateLinkPages(currentPage: number, totalPages: number, pagesToShow: number): number[] {
		const visiblePages = PaginatorComponent.calculateVisiblePages(totalPages, pagesToShow);
		const startPage = PaginatorComponent.calculateStartPage(currentPage, totalPages, visiblePages);
		const endPage = PaginatorComponent.calculateEndPage(totalPages, startPage, visiblePages);

		const linkPages = [];

		for (let i = startPage; i <= endPage; i++) {
			linkPages.push(i);
		}
		return linkPages;

	}

	public ngOnInit(): void {
		this.pages = PaginatorComponent.calculateLinkPages(this.page, this.totalPages, this.pagesToShow);
	}

	public goFirst() {
		this.goToPage(1);
	}

	public goPrevious() {
		this.goToPage(this.page - 1);
	}

	public goNext() {
		this.goToPage(this.page + 1);
	}

	public goLast() {
		this.goToPage(this.totalPages);
	}

	private goToPage(page: number) {
		this.page = page;
		this.pages = PaginatorComponent.calculateLinkPages(this.page, this.totalPages, this.pagesToShow);
		this.pageChange.emit(this.page);
	}

}
