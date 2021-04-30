import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
	selector:    'showcase-vertical',
	templateUrl: 'showcase-vertical.component.html',
})
export class ShowcaseVerticalComponent implements OnInit {

	@ViewChild('firstInput', {static: false}) public firstInput: ElementRef;

	public ngOnInit(): void {
		timer(200)
			.subscribe(() => this.firstInput.nativeElement.focus());
	}
}

