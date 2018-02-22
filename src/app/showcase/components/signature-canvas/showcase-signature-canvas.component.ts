import {Component} from '@angular/core';

@Component({
  selector: 'showcase-signature-canvas',
  templateUrl: './showcase-signature-canvas.component.html'
})
export class ShowcaseSignatureCanvasComponent {
  public withCodeVerification: boolean = true;
  public height: number = 200;
  public width: number = 500;
  public isDownloadable: boolean = true;
  public txVerification: string = "Enter your password to finish the signature";
  public code: string = '';
  public signature;
  public isIncorrectCode: boolean = false;
  constructor() { }
  public doFinish() {
  }

}
