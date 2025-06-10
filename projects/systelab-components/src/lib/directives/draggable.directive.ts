import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import interact from 'interactjs';

@Directive({
    selector: '[draggable]',
    standalone: false
})
export class DraggableDirective implements OnInit {

	@Input() public model: any;
	@Input() public draggableOptions: any;
	@Input() public zoom = 1;

	@Output() public draggableClick = new EventEmitter();
	@Output() public finalPosition = new EventEmitter();
	@Output() public currentPosition = new EventEmitter();

	private currentlyDragged = false;
	private currentlyResizing = false;

	constructor(private readonly element: ElementRef) {
	}

	@HostListener('click', ['$event'])
	public onClick(event: any): void {
		if (!this.currentlyDragged && !this.currentlyResizing) {
			this.draggableClick.emit(event);
		}
	}

	public ngOnInit(): void {
		if (this.draggableOptions.restrictParent) {
			this.draggableOptions.modifiers = [
				interact.modifiers.restrictRect({
					restriction: 'parent',
					endOnly:     false
				})];

		}
		interact(this.element.nativeElement)
			.draggable(Object.assign({}, this.draggableOptions || {}))
			.on('dragmove', event => this.doDragMove(event))
			.on('dragend', event => this.doDragEnd(event))
			.on('resizemove', () => this.doCurrentlyResizingUpdate(true))
			.on('resizeend', () => this.doCurrentlyResizingUpdate(false));
	}

	private doCurrentlyResizingUpdate(value: boolean): void {
		setTimeout(() => {
			this.currentlyResizing = value;
		});
	}

	private doDragEnd(event): void {
		event.target.classList.remove('getting-dragged');
		const target = event.target;
		this.finalPosition.emit({x: target.getAttribute('data-x') || 0, y: target.getAttribute('data-y') || 0});
		setTimeout(() => {
			(window as any).dragData = null;
			this.currentlyDragged = false;
		});
	}

	private doDragMove(event): void {
		const target = event.target;
		const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx / this.zoom;
		const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy / this.zoom;

		target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);

		target.classList.add('getting-dragged');
		this.currentlyDragged = true;
		this.currentPosition.emit({x: target.getAttribute('data-x') || 0, y: target.getAttribute('data-y') || 0});
		(window as any).dragData = this.model;
	}
}
