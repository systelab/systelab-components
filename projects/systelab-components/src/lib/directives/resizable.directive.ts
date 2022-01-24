import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import * as interact_ from 'interactjs/dist/interact';
const interact = interact_;

@Directive({
	selector: '[resizable]'
})
export class ResizableDirective implements OnInit {

	@Input() public model: any;
	@Input() public resizableOptions: any;
	@Input() public zoom = 1;

	@Output() public resizeClick = new EventEmitter();
	@Output() public finalSize = new EventEmitter();
	@Output() public currentSize = new EventEmitter();

	private currentlyDragged = false;
	private currentlyResizing = false;

	constructor(private element: ElementRef) {
	}

	@HostListener('click', ['$event'])
	public onClick(event: any): void {
		if (!this.currentlyDragged && !this.currentlyResizing) {
			this.resizeClick.emit(this.model);
		}
	}

	public ngOnInit(): void {
		interact(this.element.nativeElement)
			.resizable(Object.assign({}, this.resizableOptions || {}))
			.on('resizemove', (event) => this.doResizeMove(event))
			.on('dragmove', (event) => this.doCurrentlyDraggedUpdate(true))
			.on('dragend', (event) => this.doCurrentlyDraggedUpdate(false))
			.on('resizeend', (event) => this.doResizeEnd(event));
	}

	private doResizeEnd(event): void {
		const target = event.target;
		target.setAttribute('original-w', 0);
		target.setAttribute('original-h', 0);
		this.finalSize.emit({x: target.getAttribute('data-x') || 0, y: target.getAttribute('data-y') || 0});
		setTimeout(() => {
			this.currentlyResizing = false;
		});
	}

	private doCurrentlyDraggedUpdate(value:boolean): void {
		setTimeout(() => {
			this.currentlyDragged = value;
		});
	}

	private doResizeMove(event): void {
		const target = event.target;
		let incrementH;
		let incrementW;
		this.currentlyResizing = true;
		let x = (parseFloat(target.getAttribute('data-x')) || 0);
		let y = (parseFloat(target.getAttribute('data-y')) || 0);
		let w = (parseFloat(target.getAttribute('original-w')) || 0);
		let h = (parseFloat(target.getAttribute('original-h')) || 0);
		if (w === 0) {
			w = event.target.offsetWidth;
			target.setAttribute('original-w', w);

		}
		if (h === 0) {
			h = event.target.offsetHeight;
			target.setAttribute('original-h', h);

		}
		// update the element's style
		target.style.width = event.rect.width / this.zoom + 'px';
		target.style.height = event.rect.height / this.zoom + 'px';

		// translate when resizing from top or left edges
		x += event.deltaRect.left / this.zoom;
		y += event.deltaRect.top / this.zoom;

		target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
		this.currentSize.emit({
			w: -w + event.target.offsetWidth || 0,
			h: -h + event.target.offsetHeight || 0,
			x: target.getAttribute('data-x'),
			y: target.getAttribute('data-y')
		});
	}
}
