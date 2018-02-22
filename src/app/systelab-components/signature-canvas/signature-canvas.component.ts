import {Component, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';

class point {
  constructor(public x: number,public y: number) {
  }
}
@Component({
  selector: 'systelab-signature-canvas',
  templateUrl: './signature-canvas.component.html'
})
export class SignatureCanvasComponent implements AfterViewInit {

  constructor() { }
  @ViewChild('signature') sign:ElementRef;
  @ViewChild('img') img:ElementRef;
  public downPath:string='';
  public href:string='';
  public emptyImage;
  public verificationActive:boolean=false;
  @Input() public width:number =400;
  @Input() public height:number;
  @Input() public withCodeVerification:boolean;
  @Input() public isDownloadable:boolean;
  @Input() public isIncorrectCode:boolean;

  private _signature: string;
  @Input()
  get signature(): string {
    return this._signature;
  }
  @Output() public signatureChange = new EventEmitter();
  set signature(value: string) {
    this._signature = value;
    this.signatureChange.emit(this._signature);
  }

  @Output() finish = new EventEmitter();
  public dofinish() {
		this.finish.emit();
  }

  private _code: string;
  @Input()
	get code(): string {
		return this._code;
	}
	@Output() codeChange = new EventEmitter();

	set code(value: string) {
		this._code = value;
		this.codeChange.emit(this._code);
	}

  public cx: CanvasRenderingContext2D; 
  public ngAfterViewInit() {
    this.configureCanvas();
  }
  public configureCanvas(){
    var canvas: HTMLCanvasElement = this.sign.nativeElement;
      if(canvas){
        this.cx = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;
        this.cx.lineWidth = 4;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000000';
        this.captureEvents(canvas);
      }
  }
  public captureEvents(canvas: HTMLCanvasElement) {
    Observable
      .fromEvent(canvas, 'mousedown')
      .switchMap((e) => {
        return Observable
          .fromEvent(canvas, 'mousemove')
          .takeUntil(Observable.fromEvent(canvas, 'mouseup'))
          .takeUntil(Observable.fromEvent(canvas, 'mouseleave'))  
          .pairwise()
      })
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        var rect = canvas.getBoundingClientRect();
        var prevPos:point = new point(res[0].clientX - rect.left,res[0].clientY - rect.top);
        var currentPos:point = new point(res[1].clientX - rect.left,res[1].clientY - rect.top);
        this.draw(prevPos, currentPos);
      });
  }
  public draw(prevPos:point, currentPos:point) {
    if (!this.cx) { return; }
    this.cx.beginPath();
    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }
  public DownloadImage(){
    var canvas: HTMLCanvasElement = this.sign.nativeElement;
    var dataURL = canvas.toDataURL('image/png');
    this.href = dataURL;
    var date = new Date();
    this.downPath = date + "signature.png";
  }
  public CleanCanvas(){
    this.cx.clearRect(0, 0, this.width,this.height);
  }
  public FinishDrawing(){
    var canvas: HTMLCanvasElement = this.sign.nativeElement;
    var dataURL = canvas.toDataURL('image/png');
    this.signature = dataURL;
    if(this.withCodeVerification){
      canvas.setAttribute('style','display:none;');
      this.verificationActive=true;
    }
    else{
      this.finish.emit();
    }
  }
  public returnCanvas(){
    var canvas: HTMLCanvasElement = this.sign.nativeElement;
    canvas.setAttribute('style','display:block;');
    this.verificationActive=false;
  }
}
