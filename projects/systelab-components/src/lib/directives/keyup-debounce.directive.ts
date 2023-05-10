import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
	selector: '[keyup-debounce]'
})
export class KeyupDebounceDirective implements OnInit, OnDestroy {

	@Input() public keyupDebounceTime = 350;
	@Output() public keyupDebounced = new EventEmitter();
	private debouncer = new Subject();
	private subscription: Subscription;
	public constructor(private el: ElementRef) {
	}


	public ngOnInit(): void {
		this.subscription = this.debouncer
			.pipe(debounceTime(this.keyupDebounceTime))
			.subscribe(e => this.keyupDebounced.emit(e));
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	@HostListener('keyup', ['$event'])
	public keyupEvent(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.debouncer.next(event);
	}


}
