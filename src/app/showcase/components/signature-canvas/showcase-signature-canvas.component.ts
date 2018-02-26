import {Component} from '@angular/core';

@Component({
  selector: 'showcase-signature-canvas',
  templateUrl: './showcase-signature-canvas.component.html'
})
export class ShowcaseSignatureCanvasComponent {
  public withCodeVerification = true;
  public height = 200;
  public width = 500;
  public isDownloadable = true;
  public txVerification = 'Enter your password to finish the signature';
  public code = '';
  public signature;
  public isIncorrectCode = false;
  constructor() { }
  public doFinish() {
  }

}
