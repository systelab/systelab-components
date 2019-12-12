import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[autoFocus]'
})
export class AutofocusDirective implements AfterContentInit {

	@Input() public autoFocus = true;

	public constructor(private el: ElementRef) {
	}

	public ngAfterContentInit() {
		if (this.autoFocus) {
			setTimeout(() => this.el.nativeElement.focus());
		}
	}

}
