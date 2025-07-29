import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'showcase-standard',
    templateUrl: 'showcase-standard.component.html',
    standalone: false
})
export class ShowcaseStandardComponent implements OnInit {

	@ViewChild('firstInput', {static: false}) public firstInput: ElementRef;

	public ngOnInit(): void {
		timer(200)
			.subscribe(() => this.firstInput.nativeElement.focus());
	}
}

