import { Component, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

class point {
  constructor(public x: number, public y: number) {
  }
}
@Component({
  selector: 'systelab-signature-canvas',
  templateUrl: './signature-canvas.component.html'
})
export class SignatureCanvasComponent implements AfterViewInit {

  constructor() { }
  private _code: string;
  private _signature: string;

  @ViewChild('signature') sign: ElementRef;
  @ViewChild('img') img: ElementRef;
  public downPath = '';
  public href = '';
  public emptyImage;
  public verificationActive = false;
  public isCanvasEmpty = true;
  public cx: CanvasRenderingContext2D;
  @Input() public width = 400;
  @Input() public height: number;
  @Input() public withCodeVerification: boolean;
  @Input() public isDownloadable: boolean;
  @Input() public isIncorrectCode: boolean;

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

  @Input()
  get code(): string {
    return this._code;
  }
  @Output() codeChange = new EventEmitter();

  set code(value: string) {
    this._code = value;
    this.codeChange.emit(this._code);
  }

  public ngAfterViewInit() {
    this.configureCanvas();
  }
  public configureCanvas() {
    const canvas: HTMLCanvasElement = this.sign.nativeElement;
    if (canvas) {
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
          .pairwise();
      })
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvas.getBoundingClientRect();
        const prevPos: point = new point(res[0].clientX - rect.left, res[0].clientY - rect.top);
        const currentPos: point = new point(res[1].clientX - rect.left, res[1].clientY - rect.top);
        this.draw(prevPos, currentPos);
        if (this.isCanvasEmpty) {
          this.isCanvasEmpty = false;
        }
      });
  }

  public draw(prevPos: point, currentPos: point) {
    if (!this.cx) { return; }
    this.cx.beginPath();
    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  public downloadImage() {
    const canvas: HTMLCanvasElement = this.sign.nativeElement;
    const dataURL = canvas.toDataURL('image/png');
    this.href = dataURL;
    const date = new Date();
    this.downPath = date + 'signature.png';
  }

  public cleanCanvas() {
    this.isCanvasEmpty = true;
    this.cx.clearRect(0, 0, this.width, this.height);
  }

  public finishDrawing() {
    const canvas: HTMLCanvasElement = this.sign.nativeElement;
    const dataURL = canvas.toDataURL('image/png');
    this.signature = dataURL;
    if (this.withCodeVerification) {
      canvas.setAttribute('style', 'display:none;');
      this.verificationActive = true;
    }
    else { this.finish.emit(); }
  }

  public returnCanvas() {
    const canvas: HTMLCanvasElement = this.sign.nativeElement;
    canvas.setAttribute('style', 'display:block;');
    this.verificationActive = false;
  }
}
