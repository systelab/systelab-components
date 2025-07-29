import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

export class RouteNode {
	constructor(public id: number, public x: number, public y: number, public w: number, public h: number) {

	}
}
export class Connection {
	constructor(public idFrom: number, public idTo: number) {

	}
}

@Component({
    selector: 'sample-route',
    template: `
<div style="padding-bottom: 10px;">
	<systelab-button (action)="setColor('green')">Green</systelab-button>
	<systelab-button (action)="setColor('red')">Red</systelab-button>
	<systelab-button (action)="setColor('blue')">Blue</systelab-button>

	<systelab-button (action)="save()">Save</systelab-button>
	<systelab-button (action)="restore()">Restore</systelab-button>
	<systelab-button (action)="clear()">Clear</systelab-button>

</div>
<div>
<canvas #canvas style="width: 100%; height: 100%;" 
				(mouseup)="doMouseUp($event)"
				(mousedown)="doMouseDown($event)"
				(mouseout)="doMouseOut($event)"
				(mousemove)="doMouseMove($event)" 
				[class.pointer]="mustShowPointer">
				
</canvas>
</div>
`,
    standalone: false
})
export class SampleRouteComponent implements OnInit, AfterViewInit {

	@ViewChild('canvas', {static: false}) public canvas: ElementRef;

	public mustShowPointer = false;

	@Input() public fixedWidth: number = null;
	@Input() public fixedHeight: number = null;

	public canvasWidth = 0;
	public canvasHeight = 0;

	public startID = 0;
	public startX = 0;
	public startY = 0;

	public isDown = false;
	public movingNode: RouteNode = null;

	public nodes: RouteNode[] = [];
	public lastNumber = 1;

	public connections: Connection[] = [];

	public img = new Image();

	public color = 'black';

	public ngOnInit() {
		this.img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkBJREFUeNpiYBggwEiswv0xTQpAKgCI/YHYAIgF0JQcAOILQLzQcUndBYotBlroAKTqgdiBBA89AOJGoAMWkGwx0EIBqIUFFIQoKBQSgQ54QJTFUEv3Q4OUUvABiB3Rg5+RxpbitJwJm4epbCkDNCHuhyZQMGBB820DuqUc4oIMiiGQdPV4x0mGL3efUWL5eiA2RAlqqGvuo6vWLY1kENZTAbO/PHnFcKZyJqW+ByW2BchBXY9NFbsQH5zNwsVBjWCvh/sYmqDuYykUGHiUpRgUg+zB7PvrDlIS1MggEBbHDtgsBQcv0KLL3cupXWLawyy2x6VCNdGTgUdWHOKIxy8Zbs/fziDpbMQgYa0HV3N76S4G1Wg3Bn5VWTD/4+3HYDE8oeMAsxhn9gFZCjMQntJFBFDEdPJCGTiQ0gJIzqA8huFE0WSGP1++YzPWgIka4cbCyc7w8sQVcKpHFpN0NMSphyoWX5myhuH61PXgrAYKZnjG1ZCnrcUfLt1DsG8+QvE1TS0mB8AsPkhnew/ALL5AZ4svgC0Glp0boFUXvcBC5DieSC/fgupl5GpxAhDnoxedoBKIhRtSOfz5+gNMPz9wnuH99QdYTUWWg6lHA4UYLRBgZQFqX/XT0LcbgL4NxMhOQEGQrzfQyFJQMCTiy8eJNEjloIQbCPTYB5wWQyUdqejzC0S1MrHEeT2uupoIMAHasP9ATk9CAWp5AAkOAIXWRKCFB6jRdxKAtlTskepvB2iigWFQ0XsAW88BHQAEGADdwr1CnGssZwAAAABJRU5ErkJggg==';
		this.img.onload = this.imageLoaded;

	}

	public ngAfterViewInit(): void {
		timer(50).subscribe(t => {
			this.initCanvasSize();
			this.restore();
		});
	}

	protected imageLoaded(event: any) {
		console.log(event);
	}

	public doMouseDown(event: MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		const mouseX = event.offsetX;
		const mouseY = event.offsetY;

		let selectedNode: RouteNode = null;
		this.movingNode = null;

		for (let i = 0; i < this.nodes.length && !selectedNode; i++) {
			if (mouseX > this.nodes[i].x && mouseX < this.nodes[i].x + this.nodes[i].w &&
				mouseY > this.nodes[i].y && mouseY < this.nodes[i].y + this.nodes[i].h) {
				selectedNode = this.nodes[i];
			}
		}

		if (!selectedNode) {
			this.nodes.push(new RouteNode(this.lastNumber++, mouseX - 15, mouseY - 15, 30, 30));
			this.drawModel();
		} else {
			this.startX = selectedNode.x + selectedNode.w / 2;
			this.startY = selectedNode.y + selectedNode.h / 2;
			this.startID = selectedNode.id;
			this.isDown = true;
			if (!event.altKey) {
				this.movingNode = selectedNode;
			}
		}
	}

	public doMouseMove(event: MouseEvent) {
		if (this.isDown) {
			const mouseX = event.offsetX;
			const mouseY = event.offsetY;

			event.stopPropagation();
			event.preventDefault();
			if (this.movingNode) {
				this.movingNode.x = mouseX - this.movingNode.w / 2;
				this.movingNode.y = mouseY - this.movingNode.h / 2;
				this.drawModel();

			} else {
				this.drawModel(mouseX, mouseY);
			}
		}
	}

	public doMouseUp(event: MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		const mouseX = event.offsetX;
		const mouseY = event.offsetY;

		if (this.isDown) {

			if (!this.movingNode) {
				let selectedNode: RouteNode = null;
				for (let i = 0; i < this.nodes.length && !selectedNode; i++) {
					if (mouseX > this.nodes[i].x && mouseX < this.nodes[i].x + this.nodes[i].w &&
						mouseY > this.nodes[i].y && mouseY < this.nodes[i].y + this.nodes[i].h) {
						selectedNode = this.nodes[i];
					}
				}
				if (selectedNode) {
					this.connections.push(new Connection(this.startID, selectedNode.id));

				} else {
					this.drawModel();
				}
			}
			this.isDown = false;
		}
	}

	public doMouseOut(event: MouseEvent) {

	}

	private drawModel(toX: number = null, toY: number = null) {
		// clear the canvas
		const context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');

		context.beginPath();
		context.fillStyle = 'lightGray';
		context.strokeStyle = 'black';

		context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

		context.rect(0, 0, this.canvasWidth, this.canvasHeight);
		context.stroke();
		context.closePath();

		// redraw all previous lines
		for (let i = 0; i < this.connections.length; i++) {
			const nodeFrom = this.getNodeById(this.connections[i].idFrom);
			const nodeTo = this.getNodeById(this.connections[i].idTo);

			this.drawLine(context, {
				x1: nodeFrom.x + nodeFrom.w / 2,
				y1: nodeFrom.y + nodeFrom.h / 2,
				x2: nodeTo.x + nodeTo.w / 2,
				y2: nodeTo.y + nodeTo.h / 2,
			});
		}

		// redraw all previous nodes
		for (let i = 0; i < this.nodes.length; i++) {
			this.drawNode(context, this.nodes[i]);
		}

		if (toX && toY) {

			// draw the current line
			this.drawLine(context, {
				x1: this.startX,
				y1: this.startY,
				x2: toX,
				y2: toY
			});
		}
	}

	private getNodeById(id: number): RouteNode {
		for (let i = 0; i < this.nodes.length; i++) {
			if (this.nodes[i].id === id) {
				return this.nodes[i];
			}
		}
		return null;
	}

	private drawLine(context: CanvasRenderingContext2D, line: any) {
		context.lineWidth = 2;
		context.strokeStyle = this.color;
		context.beginPath();
		context.moveTo(line.x1, line.y1);
		context.lineTo(line.x2, line.y2);
		context.stroke();
		context.closePath();
	}

	private drawNode(context: CanvasRenderingContext2D, node: any) {
		context.drawImage(this.img, node.x, node.y);
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event: any) {
		this.initCanvasSize();
		this.drawModel();
	}

	public initCanvasSize() {
		if (this.fixedWidth) {
			this.canvas.nativeElement.width = this.fixedWidth;
		} else {
			this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth;
		}

		if (this.fixedHeight) {
			this.canvas.nativeElement.height = this.fixedHeight;
		} else {
			this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight;
		}

		this.canvasWidth = this.canvas.nativeElement.width;
		this.canvasHeight = this.canvas.nativeElement.height;

	}

	public setColor(color: string) {
		this.color = color;
		this.drawModel();
	}

	public save() {
	}

	public restore() {
		this.clear();
		this.setColor('black');
		this.nodes.push(new RouteNode(1, 100, 150, 30, 30));
		this.nodes.push(new RouteNode(2, 300, 150, 30, 30));
		this.nodes.push(new RouteNode(3, 200, 250, 30, 30));
		this.nodes.push(new RouteNode(4, 300, 350, 30, 30));
		this.connections.push(new Connection(1, 3));
		this.connections.push(new Connection(3, 4));
		this.connections.push(new Connection(3, 2));
		this.lastNumber = 5;
		this.drawModel();
	}

	public clear() {
		this.connections = [];
		this.nodes = [];
		this.drawModel();
	}
}
