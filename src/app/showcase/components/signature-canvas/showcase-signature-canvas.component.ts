import { Component } from '@angular/core';

@Component({
	selector:    'showcase-signature-canvas',
	templateUrl: './showcase-signature-canvas.component.html'
})
export class ShowcaseSignatureCanvasComponent {
	public withCodeVerification = true;
	public height = 200;
	public width = 500;
	public isDownloadable = true;
	public code = '';
	public signature;
	public isIncorrectCode = false;

	public doFinish(event: any) {
	}

}
