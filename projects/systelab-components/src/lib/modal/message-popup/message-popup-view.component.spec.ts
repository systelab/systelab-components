import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { MessagePopupViewComponent, MessagePopupViewContext } from './message-popup-view.component';
import { DialogRef } from '../dialog/dialog-ref';
import { MessagePopupButton } from './message-popup.service';
import { ButtonComponent } from '../../button/button.component';
import { MessageWithIconComponent } from './message-with-icon.component';


describe('Systelab MessagePopupViewComponent', () => {
	let component: MessagePopupViewComponent;
	let fixture: ComponentFixture<MessagePopupViewComponent>;
	let spyDialogRef;
	const parameters: MessagePopupViewContext = new MessagePopupViewContext();


	beforeEach(async () => {
		spyDialogRef = jasmine.createSpyObj('DialogRef', ['context', 'close']);
		await TestBed.configureTestingModule({
    declarations: [ButtonComponent, MessageWithIconComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        SystelabTranslateModule],
    providers: [{ provide: DialogRef, useValue: spyDialogRef }, provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(async () => {
		spyDialogRef.context.and.returnValue(parameters);
	});


	it('should be instantiated with default parameters', () => {
		spyDialogRef.context = parameters;
		fixture = TestBed.createComponent(MessagePopupViewComponent);
		component = fixture.componentInstance;
		component.parameters = parameters;
		fixture.detectChanges();

		expect(component)
			.toBeTruthy();
	});

	it('should be instantiated with more than one button', () => {
		parameters.buttons.push(new MessagePopupButton('YES', true));
		parameters.buttons.push(new MessagePopupButton('NO', false));

		spyDialogRef.context = parameters;
		fixture = TestBed.createComponent(MessagePopupViewComponent);
		component = fixture.componentInstance;
		component.parameters = parameters;
		fixture.detectChanges();

		expect(component)
			.toBeTruthy();
	});

	it('Closing the AskAgainPopup', () => {
		parameters.askAgain = true;

		spyDialogRef.context = parameters;
		fixture = TestBed.createComponent(MessagePopupViewComponent);
		component = fixture.componentInstance;
		component.parameters = parameters;
		fixture.detectChanges();

		expect(component)
			.toBeTruthy();

		component.close();
		expect(spyDialogRef.close).toHaveBeenCalledWith([undefined, false]);
	});

	it('Closing different popup from AskAgainPopup', () => {
		parameters.askAgain = false;

		spyDialogRef.context = parameters;
		fixture = TestBed.createComponent(MessagePopupViewComponent);
		component = fixture.componentInstance;
		component.parameters = parameters;
		fixture.detectChanges();

		expect(component)
			.toBeTruthy();

		component.close();
		expect(spyDialogRef.close).toHaveBeenCalledWith(undefined);
	});

	it('Closing the AskAgainPopup returns an array', () => {
		parameters.askAgain = true;

		spyDialogRef.context = parameters;
		fixture = TestBed.createComponent(MessagePopupViewComponent);
		component = fixture.componentInstance;
		component.parameters = parameters;
		fixture.detectChanges();

		expect(component)
			.toBeTruthy();

		component.checkAskAgain = true;
		component.close('value');
		expect(spyDialogRef.close).toHaveBeenCalledWith(['value', true]);
	});

});
